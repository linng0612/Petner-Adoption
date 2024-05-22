import React, { useState} from 'react';
import './Adopt.css';
import Pagination from '../Pagination/Pagination';
import axios from 'axios';
import { useEffect } from 'react';

const Adopt = () => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/adopt/');
        setPets(response.data.animals) 
        setFilteredPets(response.data.animals) 
    } catch (error) {
        console.error('Error fetching data:', error);
        
    }
  };

  const filterArray = (petCategory) => {
      console.log(petCategory)
      if(petCategory === 'all') {
        setFilteredPets(pets)
      } else {
       setFilteredPets(pets.filter(pet => pet.category.toLowerCase() === petCategory))
      }
  } 
  useEffect(() => {
    fetchData();
  },[]);

  useEffect(() => {
    console.log(filteredPets)
  },[filteredPets]);

  return (
    <div className="adopt-container">
      <section className="adopt-main"> 
        <h1>Find your four-legged friend</h1>
        <div className="adopt-filter">
          <div className="adopt-filter-button all" onClick={() => filterArray('all')}>
            <p>All</p>
          </div>

          <div className="adopt-filter-button cat" onClick={() => filterArray('cat')}>
            <p>Cat</p>
          </div>

          <div className="adopt-filter-button dog" onClick={() => filterArray('dog')}>
            <p>Dog</p>
          </div>
        </div>

        <div>
          <Pagination items={filteredPets} itemsPerPage={12} />
        </div>
      </section>
    </div>
  );
}

export default Adopt;