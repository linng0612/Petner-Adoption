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
            "return_url": `http://localhost:3000/api/donate-success?amount=${amount}&currency=${currency}`,
            "cancel_url": "http://localhost:5173/donate/cancel"
        },
        "transactions": [{
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
            const approvalUrl = payment.links.find(link => link.rel === 'approval_url');
            if (approvalUrl) {
                res.json({ url: approvalUrl.href });
            } else {
                return res.status(500).send("Could not retrieve approval URL from PayPal.");
            }
        }
    });
});

router.get('/donate-success', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
    let amount = req.query.amount; 
    const currency = req.query.currency;

    console.log('query:', req.query);
    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": currency,
                "total": amount
            }
        }]
    };

    paypal.payment.execute(paymentId, execute_payment_json, function(error, payment) {
        if (error) {
            console.error("Payment execution failed:", error.response);
            return res.status(500).send("Payment execution failed. Please try again later.");
        } else {
            console.log("Payment successful:", JSON.stringify(payment));
            res.redirect('http://localhost:5173/donate/success');
        }
    });
});


router.get('/api/donate-cancel', (req, res) => {
    res.send('Donation cancelled.');
});

module.exports = router;
