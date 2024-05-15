import React from 'react';
import {Card,Flex, Form, Typography,Input, Button, Alert, Spin} from "antd";
import { Link } from 'react-router-dom';
import registerImage from "../../assets/signup.png";
import useRegister from "../../Hooks/useRegister";
import '../../Components/Auth/auth.css';
import logo from "../../assets/logo.png"


const Register = () => {

    const {loading, error, registerUser} = useRegister();

    const handleRegister = (values) => {
        registerUser(values);
    }; 

  return(
    <div className="auth-body">
        <div className="logo-container">
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>
      </div>
    <Card className="form-container">
        <Flex gap="large" align="center">
            {/* form */}
            <Flex vertical flex={1}>
                <Typography.Title level={3} strong className="title">
                    Create an account
                </Typography.Title>
                <Typography.Text type="secondary" strong className="slogan">  
                    Join with us now to find your Petner!
                </Typography.Text>
                
                <Form layout="vertical" onFinish={handleRegister} autoComplete='off'>
                    
                    <Form.Item label="Full Name" name="name" rules={[{
                        required: true,
                        message: 'Please input your full name!'
                    }]}> 
                        <Input size='large' placeholder="Enter your full name" />
                    </Form.Item>

                    <Form.Item label="Email" name="email" rules={[{
                        required: true,
                        message: 'Please input your email!'
                    },{
                        type: 'email',
                        message: 'Please enter a valid email!'
                    }]}> 
                        <Input size='large' placeholder="Enter your Email" />
                    </Form.Item>

                    <Form.Item label="Password" name="password" rules={[{
                        required: true,
                        message: 'Please input your password!'
                    }]}> 
                        <Input.Password size='large' placeholder="Enter your password" />
                    </Form.Item>
                    <Form.Item label="Password" name="passwordConfirm" rules={[{
                        required: true,
                        message: 'Please confirm your password!'
                    }]}> 
                        <Input.Password size='large' placeholder="Re-enter your password" />
                    </Form.Item>

                    {
                        error && (<Alert description={error} type="error" showIcon closable className="alert" />)
                    }

                    <Form.Item>
                        <Button 
                        type={`${loading ? '' : 'primary'}`} 
                        htmlType="submit" size="large" className="auth-btn">
                            {loading ? <Spin/> :'Register'}
                           
                            </Button>
                    </Form.Item>

                    <Form.Item>
                        <Link to="/login">
                        <Button size="large" className="auth-btn">Login</Button>
                        </Link>
                        
                    </Form.Item>
                </Form>

            </Flex>


            
            <Flex flex={1}>
                <img src={registerImage} className="auth-image" />
            </Flex>
        </Flex>
    </Card>
    </div>
  );
    
  
};

export default Register