import { useParams } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import axios from "axios"
import "./AdoptApplication.css"
import { Button, Form, Input,Checkbox,InputNumber } from 'antd';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useState, useEffect } from "react"

const AdoptApplication = () => {
    const [form] = Form.useForm();
    const [isDisabled, setIsDisabled] = useState(true);
    const id = useParams()
    const [pet, setPet] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/adopt/${id.id}`);
            console.log(response.data);
            setPet(response.data.animal);
        } catch (error) {
            console.error('Error fetching data:', error);
        }   
    };

    useEffect(() => {
        fetchData();     
        }, []);

    const updateButtonDisabledState = () => {
        const errors = form.getFieldsError();
        const values = form.getFieldsValue();
        const allFieldsEmpty = Object.values(values).every(value => 
           value === ''
        );
        
        setIsDisabled(errors.some(field => field.errors.length) || allFieldsEmpty);
    };

    useEffect(() => {
        updateButtonDisabledState(); 
        console.log(isDisabled)
        return form.getFieldDecorator; 
    }, [form]); 

    const [result, setResult] = useState("");
    const [open,setOpen] = useState(false);

    const onFinish = async (values) => {
        setOpen(true);
        form.resetFields();
        setResult("Sending...");
    
        const formData = new FormData();
        formData.append("pet_name", pet.name);
        for (const [key, value] of Object.entries(values)) {
            formData.append(key, value);
        }
        
        formData.append("access_key", "44662647-be0a-4ea6-976a-a9bababc4fe1");
    
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
    
            if (data.success) {
                setResult("Form Submitted Successfully");
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setResult("Failed to submit");
        }
    };
    
    return (
        <div className="adopt-application">
            <div className='adopt-application-intro-img'></div>
            <Navbar/>
            <section className='adopt-application-content'>
                <h2>{pet.name}'s adoption application form</h2>
                <div className="adopt-application-content-form-outside">
                    <Form
                    form={form}
                    onFinish={onFinish}
                    onValuesChange={updateButtonDisabledState}
                    onFieldsChange={updateButtonDisabledState}
                    name="wrap"
                    labelCol={{ flex: '800px' }}
                    labelAlign="left"
                    labelWrap
                    wrapperCol={{ flex: 1 }}
                    colon={false}
                    className="adopt-application-content-form"
                    >
                        <div className="adopt-application-content-form-input">
                            <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please enter this field!" }]}>
                            <Input style={{width: "800px"}}/>
                            </Form.Item>
                        </div>

                        <div className="adopt-application-content-form-input">
                            <Form.Item label="Phone Number" name="phone_number" rules={[{ required: true, message: "Please enter this field!" }]}>
                            <Input style={{width: "800px"}}/>
                            </Form.Item>
                        </div>

                        <div className="adopt-application-content-form-input">
                            <Form.Item label="Email" name="Email" rules={[{
                                                required: true,
                                                message: "Please enter this field!"
                                            },{
                                                type: 'email',
                                                message: 'Please enter a valid email!'
                                            }]}>
                            <Input style={{width: "800px"}}/>
                            </Form.Item>
                        </div>
                        
                        <div className="adopt-application-content-form-input">
                            <Form.Item
                                label="Age"
                                name="Age"
                                rules={[
                                {
                                    required: true,
                                    message: "Please enter this field!"
                                },
                                {
                                    type: 'number',
                                    message: 'Please enter a valid number!'
                                },
                                {
                                    validator: (_, value) =>
                                    value < 20 ? Promise.reject(new Error('Age must be at least 20.')) : Promise.resolve(),
                                }
                                ]}
                            >
                                <InputNumber style={{ width: "800px" }} min={0} />
                            </Form.Item>
                        </div>

                        <div className="adopt-application-content-form-input">
                            <Form.Item label="I am" name="employ_status" rules={[{ required: true, message: "Please choose at least one!" }]}>
                                <Checkbox.Group>
                                    <Checkbox value="employed" style={{color:'white', marginRight:"30px"}}>Employed</Checkbox>
                                    <Checkbox value="unemployed" style={{color:'white', marginRight:"30px"}}>Unemployed</Checkbox>
                                    <Checkbox value="student" style={{color:'white', marginRight:"30px"}}>Student</Checkbox>
                                    <Checkbox value="retired" style={{color:'white', marginRight:"30px"}}>Retired</Checkbox>
                                </Checkbox.Group>
                            </Form.Item>
                        </div>
                        
                        <div className="adopt-application-content-form-input">
                            <Form.Item label="Other family members" name="family_members" rules={[{ required: true, message: "Please choose at least one!" }]}>
                               <Checkbox.Group>
                                    <Checkbox value="none" style={{color:'white', margin:"0 auto"}}>None</Checkbox>
                                    <Checkbox value="spouse" style={{color:'white', margin:"0 auto"}}>Spouse</Checkbox>
                                    <Checkbox value="small_child" style={{color:'white', margin:"0 auto"}}>Children 0-4 years</Checkbox>
                                    <Checkbox value="middle_child" style={{color:'white', margin:"0 auto"}}>Children 5-9 years</Checkbox>
                                    <Checkbox value="teen_child" style={{color:'white', margin:"0 auto"}}>Children 10-15 years</Checkbox>
                                    <Checkbox value="old_child" style={{color:'white', margin:"0 auto"}}>Teenagers over 15 years of age</Checkbox>
                               </Checkbox.Group>
                            </Form.Item>
                        </div>
                        
                        <div className="adopt-application-content-form-input">
                            <Form.Item label="Place of residence" name="place" rules={[{ required: true, message: "Please enter this field!" }]}>
                            <Input style={{width: "800px"}}/>
                            </Form.Item>
                        </div>
                        
                        <div className="adopt-application-content-form-input">
                            <Form.Item label="Form of residence" name="residence_form" rules={[{ required: true, message: "Please choose at least one!" }]}>
                                <Checkbox.Group>
                                    <Checkbox value="detached" style={{color:'white', marginRight:"30px"}}>Detached house</Checkbox>
                                    <Checkbox value="terraced" style={{color:'white', marginRight:"30px"}}>Terraced house</Checkbox>
                                    <Checkbox value="apartment" style={{color:'white', marginRight:"30px"}}>Apartment</Checkbox>
                                    <Checkbox value="studio" style={{color:'white', marginRight:"30px"}}>Studio apartment</Checkbox>
                                </Checkbox.Group>                                
                            </Form.Item>
                        </div>

                        <div className="adopt-application-content-form-input">
                            <Form.Item label="Square footage of the apartment" name="square_footage" rules={[{ required: true, message: "Please enter this field!" }]}>
                            <Input style={{width: "800px"}}/>
                            </Form.Item>
                        </div>
                        
                        <div className="adopt-application-content-form-input">
                            <Form.Item
                            label="Pets in the family (species, age, sex, vaccinated, sterilized)"
                            name="other_pet"
                            rules={[{ required: true, message: "Please enter this field!" }]}
                            >
                            <Input.TextArea style={{width: "800px"}}/>
                            </Form.Item>
                        </div>
                        
                        <div className="adopt-application-content-form-input">
                            <Form.Item
                            label="What kind of pet experience do you or your family members have?"
                            name="experiences"
                            rules={[{ required: true, message: "Please enter this field!" }]}
                            >
                            <Input.TextArea style={{width: "800px"}}/>
                            </Form.Item>
                        </div>
                        
                        <div className="adopt-application-content-form-input">
                            <Form.Item
                            label="What do you think is good pet care?"
                            name="pet_care"
                            rules={[{ required: true, message: "Please enter this field!" }]}
                            >
                            <Input.TextArea style={{width: "800px"}}/>
                            </Form.Item>
                        </div>
                        
                        <div className="adopt-application-content-form-input">
                            <Form.Item
                            label={`What do you expect from a future pet and why are you interested in ${pet.name}?`}
                            name="expect"
                            rules={[{ required: true, message: "Please enter this field!" }]}
                            >
                            <Input.TextArea style={{width: "800px"}}/>
                            </Form.Item>
                        </div>
                        
                        <div className="adopt-application-content-form-input">
                            <Form.Item
                            label={`Why do you believe you can provide home for ${pet.name}?`}
                            name="reason_adopt"
                            rules={[{ required: true, message: "Please enter this field!" }]}
                            >
                            <Input.TextArea style={{width: "800px"}}/>
                            </Form.Item>
                        </div>
                        
                        <div className="adopt-application-content-form-input">
                            <Form.Item
                            label={`Who in the household is primarily responsible for the care of ${pet.name} and how is the care organized if that person is unable to take care of ${pet.name} (holiday, illness)?`}
                            name="responsible"
                            rules={[{ required: true, message: "Please enter this field!" }]}
                            >
                            <Input.TextArea style={{width: "800px", marginTop:"18px"}}/>
                            </Form.Item>
                        </div>
                        
                        <div className="adopt-application-content-form-input">
                            <Form.Item
                            label="When could he/she move in with you?"
                            name="moving_time"
                            rules={[{ required: true, message: "Please enter this field!" }]}
                            >
                            <Input.TextArea style={{width: "800px"}}/>
                            </Form.Item>
                        </div>
                        
                        <div className="adopt-application-content-form-input">
                            <Form.Item
                            label="Anything else you want to tell us?"
                            name="others"
                            rules={[{ required: true, message: "Please enter this field!" }]}
                            >
                            <Input.TextArea style={{width: "800px"}}/>
                            </Form.Item>
                        </div>

                        <Form.Item label=" ">
                            <Button className="adopt-application-content-form-button" type="primary" htmlType="submit" disabled={isDisabled} >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                    <span>{result}</span>
                </div>
            </section>
            {open &&
            <div>
                <Dialog
                    open={open}
                    onClose={()=> setOpen(false)}
                    >
                        <DialogContent>
                            <DialogContentText className="adopt-detail-content-dialog-text">
                                <p>You successfully sent an application form to adopt {pet.name}. We will get back to you as soon as possible!! 📧</p>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={()=> setOpen(false)} style={{color:"white",backgroundColor:"#001f3f"}}>Close</Button>
                        </DialogActions>
                    </Dialog>
            </div> 
            }
            <Footer/>
        </div>
    )
}

export default AdoptApplication