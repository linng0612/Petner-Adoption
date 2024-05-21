import React, { useState} from 'react';
import './Adopt.css';
import Pagination from '../Pagination/Pagination';
import axios from 'axios';
import { useEffect } from 'react';

const Adopt = () => {

  const [pets, setPets] = useState([]);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/adopt/');
        console.log(response.data);
        setData(response.data.animals);
        setPets(response.data.animals)  
    } catch (error) {
        console.error('Error fetching data:', error);
        
    }
};
    
    const catFilter = () => {
      setPets(data.filter(pet => pet.category.toLowerCase() === 'cat'));
    }

    const dogFilter = () => {
      setPets(data.filter(pet => pet.category.toLowerCase() === 'dog'));
    }

    useEffect(() => {
      fetchData();
        
    }, []);
    
    useEffect(() => {
      
        
    }, pets);

  return (
    


    <div className="adopt-container">
      <section className="adopt-main"> 
        <h1>Find your four-legged friend</h1>
        <div className="adopt-filter">
          <div className="adopt-filter-button all">
            <p onClick={() => setPets(data)}>All</p>
          </div>

          <div className="adopt-filter-button cat">
            <p onClick={() => catFilter()}>Cat</p>
          </div>

          <div className="adopt-filter-button dog">
            <p onClick={() => dogFilter()}>Dog</p>
          </div>
        </div>

        <div>
        <Pagination items={pets} itemsPerPage={12} />
        </div>

      </section>
    </div>
  );
}

export default Adopt;