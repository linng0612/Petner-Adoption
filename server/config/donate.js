
const express = require('express');
const paypal = require('paypal-rest-sdk');
const dotenv = require('dotenv');
dotenv.config();
const router = express.Router();

paypal.configure({
    'mode': 'sandbox', 
    'client_id': process.env.CLIENT_ID,
    'client_secret': process.env.CLIENT_SECRET
});

router.post('/donate', (req, res) => {
    console.log('POST request received at /donate');

    const { amount, monthly } = req.body;
    const currency = 'EUR';

    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/api/donate/success",
            "cancel_url": "http://localhost:3000/api/donate/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Donation",
                    "sku": "001",
                    "price": amount,
                    "currency": currency,
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": currency,
                "total": amount
            },
            "description": monthly ? "Monthly Donation to our cause" : "One-time Donation to our cause"
        }]
    };
    console.log('Payment JSON:', create_payment_json);
    console.log('Payment JSON:', JSON.stringify(create_payment_json, null, 2));
    
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            console.error(error);
            return res.status(500).send("An error occurred while processing the donation.");
        } else {
            for (let i = 0; i < payment.links.length; i++) {
                if (payment.links[i].rel === 'approval_url') {
                    return res.redirect(payment.links[i].href);
                }
            }
            return res.status(500).send("Could not retrieve approval URL from PayPal.");
        }
    });
});

router.get('/success', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
    const amount = req.query.amount; 

    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "EUR",
                "total": amount 
            }
        }]
    };

    paypal.payment.execute(paymentId, execute_payment_json, function(error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            console.log(JSON.stringify(payment));
            res.send('Thank you for your donation!');
        }
    });
});


router.get('/cancel', (req, res) => res.send('Donation cancelled'));

module.exports = router;
