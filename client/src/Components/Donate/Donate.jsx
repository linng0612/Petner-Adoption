
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, Checkbox, Button , Card} from 'antd';
import './Donate.css';

const DonatePage = () => {
  const [amount, setAmount] = useState('');

  const handleSubmit = async (values) => {
    console.log('handleSubmit called');  
    try {
        const response = await axios.post('http://localhost:3000/api/donate', {
            amount: Number(values.amount),
            monthly: values.monthly,
        }, {
            withCredentials: true  
        });
        const data = response.data;
        console.log('Server response:', data);  
        if (data.url) {
            window.location.href = data.url;
        }
    } catch (error) {
        console.error('Error:', error);  
    }
};

  const handleAmountClick = (value) => {
    setAmount(value.toString());
  };


  return (
    <div className="donate-container">
      <Card className="donate-card" title="Donate for us" style={{ width: 300 }}>  
        <Form onFinish={handleSubmit} initialValues={{amount}}>
          <div className="preset-amounts">
            <Button onClick={() => handleAmountClick(10)}>€5</Button>
            <Button onClick={() => handleAmountClick(20)}>€10</Button>
            <Button onClick={() => handleAmountClick(30)}>€25</Button>
            <Button onClick={() => handleAmountClick(10)}>€50</Button>
            <Button onClick={() => handleAmountClick(20)}>€100</Button>
            <Button onClick={() => handleAmountClick(30)}>€200</Button>
          </div>
          <Form.Item
           label={<span className="donate-label">Custom Amount</span>}
           name="amount"
           rules={[{ required: true, message: 'Please input your donation amount!' }]}
          >
           <Input type="number" />
          </Form.Item>
          <Form.Item name="monthly" valuePropName="checked" initialValue={false}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Checkbox className="donate-checkbox">Monthly Donation</Checkbox>
            </div>
          </Form.Item>
          <Form.Item>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button className="donate-btn" type="primary" htmlType="submit">
               Donate
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default DonatePage;