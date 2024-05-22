import { useNavigate, useParams } from "react-router-dom"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import "./AdoptDetail.css"
import axios from "axios";
import { useState,useEffect } from "react"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { DialogTitle } from "@mui/material"

const AdoptDetail = () => {
    const navigate = useNavigate()
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
    const [isOpen, setOpen] = useState(false)

return(
    <div className="adopt-detail">
        <div className='adopt-detail-intro-img'>
        </div>
        <Navbar/>
        <div className="adopt-detail-content">
        {pet.gender === "Female" ? <h1>Her Detail</h1> : <h1>His Detail</h1>}
            <div className="adopt-detail-content-pets-detail">
                <img src={pet.image} alt="pet image"/>
                <div className="adopt-detail-content-pets-info">
                    <h1>{pet.name}</h1>
                    <p className="adopt-detail-content-pets-info-name-bar"></p>
                    <p className="adopt-detail-content-pets-info-notbar"><strong>Category: </strong>{pet.category}</p>
                    <p className="adopt-detail-content-pets-info-notbar"><strong>Age: </strong>{pet.age}</p>
                    <p className="adopt-detail-content-pets-info-notbar"><strong>Gender: </strong>{pet.gender}</p>
                    <p className="adopt-detail-content-pets-info-description"><strong>Description: </strong>{pet.description}</p>
                </div>
            </div>

            <div className="adopt-detail-content-pets-content-bar"></div>
            <div className="adopt-detail-content-fee">
                <h2>Adoption fee</h2>
                {pet.category === "Dog" ? <p>Adoption fee 450 €. With the adoption fee, the dog has received at least one triple vaccine (distemper, hepatitis, parvovirus), an identification microchip, has been sterilized and has an official health card issued by a veterinarian showing the procedures. The dog has been superficially inspected by a veterinarian, tested negative for heartworm (unless otherwise stated in the dog description) and dewormed at least once. The dog's microchip is registered in the Siruhaku.fi service.</p> : 
                <p>Adoption fee 250 €. With the adoption fee, the cat has received at least one triple vaccine (calici, herpes and feline plague), an identification microchip, has been sterilized and has an official health card issued by a veterinarian showing the procedures. The cat has been superficially inspected by a veterinarian, tested negative for FIV/FeLV (unless otherwise stated in the cat description) and dewormed at least once. The cat's microchip is registered in the Siruhaku.fi service.</p> }
                <button onClick={() => setOpen(true)}>Adopt This Little Friend!</button>
            </div>

            {isOpen && 
                    <Dialog
                    open={isOpen}
                    onClose={()=> setOpen(false)}
                    >
                        <DialogTitle className="adopt-detail-content-dialog-title">
                            <h2>ADOPTION</h2>
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText className="adopt-detail-content-dialog-text">
                                <h3>Consider before adopting</h3>
                                <ul>
                                    <li>You must be 20 years or older to adopt a pet from Petner.</li>
                                    <li>Never adopt a pet out of pity or without serious consideration. The pet might live for the next 15-20 years. With rescue pets, it is extremely important that they would not have to be rehomed again.</li>
                                    <li>A desire to help is important, but even more important is to be aware of your own resources. Do you have enough resources to take care of a pet? Is your home suitable to meet the long term needs of an active pet?</li>
                                    <li>We do not have a trial period. The goal of our adoption process is that the adoption has been given careful consideration and the pet is placed into a permanent home. If you or your family member has a predisposition to allergies, we recommend that you get tested for allergies before sending an application.</li>
                                    <li>Are you ready to receive the pet when contacting us? Due to a limited number of foster homes we are not able to reserve pets for possible adopters for a long time.</li>
                                    <li>Before sending an application read the pet’s description carefully and consider if it would be a suitable addition to your family and your lifestyle. If you already have other pets it’s important to think how a new pet would fit in.</li>
                                </ul>

                                <h3>Adoption process for pets</h3>
                                <ol>
                                    <li>Application from</li>
                                    <li>Email response</li>
                                    <li>Telephone interview</li>
                                    <li>Visit to the foster home</li>
                                    <li>Consideration period</li>
                                    <li>Adoption formalities and bringing the cat home</li>
                                    <li>Updates from the new home</li>
                                </ol>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={()=> setOpen(false)} style={{color:"#001f3f"}}>Cancel</Button>
                            <Button autoFocus onClick={() => navigate('./application-form')} style={{color:"white",backgroundColor:"#001f3f"}}>
                                Go to application form
                            </Button>
                        </DialogActions>
                    </Dialog>
                }

        </div>
        <Footer/>
    </div>
)
}

export default AdoptDetail