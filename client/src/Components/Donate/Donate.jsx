
import React from 'react';
import axios from 'axios';
import { Form, Input, Checkbox, Button , Card} from 'antd';
import './Donate.css';

const DonatePage = () => {
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


  return (
    <div className="donate-page">
      <Card className="donate-card" title="Donate for us" style={{ width: 300 }}>  
      <Form onFinish={handleSubmit}>
        <Form.Item
          label="Amount"
          name="amount"
          rules={[{ required: true, message: 'Please input your donation amount!' }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item name="monthly" valuePropName="checked" initialValue={false}>
          <Checkbox>Monthly Donation</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Donate
          </Button>
        </Form.Item>
      </Form>
    </Card>
    </div>
  );
};

export default DonatePage;