import React from 'react';
import './Adopt.css';
import { useAdopt } from '../../Hooks/useAdopt';
import Pagination from '../Pagination/Pagination';
import cat1 from "../../assets/Cat1.png";
import cat2 from "../../assets/Cat2.png";
import cat3 from "../../assets/Cat3.png";
import cat4 from "../../assets/Cat4.png";
import cat5 from "../../assets/Cat5.png";
import dog1 from "../../assets/Dog1.png";
import dog2 from "../../assets/Dog2.png";
import dog3 from "../../assets/Dog3.png";
import dog4 from "../../assets/Dog4.png";
import dog5 from "../../assets/Dog5.png";

const Adopt = () => {
  //const adoptValue = useAdopt();

  //console.log(adoptValue);
  const pets = [
    {
      "id": 1,
      "name": "Luna",
      "category": "cat",
      "age": 2,
      "sex": "Female",
      "description": "Luna is a two-year-old female cat with a gentle disposition. She loves to spend her days sunbathing and watching birds from the window. Luna is spayed and up-to-date on all her vaccinations. She's a bit shy at first but warms up quickly to new people.",
      "image": cat3
    },
    {
      "id": 2,
      "name": "Oliver",
      "category": "cat",
      "age": 5,
      "sex": "Male",
      "description": "Oliver is a charming five-year-old male cat. He's very outgoing and enjoys being the center of attention. Oliver gets along well with children and other pets. He is neutered and has a playful personality that makes everyone around him smile.",
      "image": cat1
    },
    {
      "id": 3,
      "name": "Bella",
      "category": "cat",
      "age": 4,
      "sex": "Female",
      "description": "Bella is a four-year-old cat who loves to cuddle and chat with her humans. She has a melodious meow and enjoys interactive play with toys and laser pointers. Bella is spayed and would fit best in a calm household without other pets.",
      "image": cat2
    },
    {
      "id": 4,
      "name": "Max",
      "category": "cat",
      "age": 1,
      "sex": "Male",
      "description": "Max is a young and energetic one-year-old cat. Always curious, he loves exploring every corner of the home. Max is neutered and perfect for a family looking for an active and affectionate feline companion.",
      "image": cat4
    },
    {
      "id": 5,
      "name": "Sophie",
      "category": "cat",
      "age": 3,
      "sex": "Female",
      "description": "Sophie is a sweet three-year-old who thrives in a quiet environment. She prefers a serene setting where she can relax beside her favorite humans. Sophie is spayed, vaccinated, and ready to find her forever home.",
      "image": cat5
    },
    {
      "id": 6,
      "name": "Buddy",
      "category": "dog",
      "age": 3,
      "sex": "Male",
      "description": "Buddy is a three-year-old Labrador mix with an affectionate and loyal temperament. He loves outdoor activities and is great with children. Buddy is neutered and fully vaccinated, eager to join a loving and active family.",
      "image": dog1
    },
    {
      "id": 7,
      "name": "Molly",
      "category": "dog",
      "age": 4,
      "sex": "Female",
      "description": "Molly is a four-year-old Beagle with a playful and curious nature. She's always on the scent of something interesting and loves adventures. Molly is spayed, gets along well with other dogs, and would love a home with a backyard.",
      "image": dog2
    },
    {
      "id": 8,
      "name": "Charlie",
      "category": "dog",
      "age": 2,
      "sex": "Male",
      "description": "Charlie is a two-year-old Poodle who thrives on companionship. He is intelligent, easy to train, and loves being part of all family activities. Charlie is neutered and would be best suited for a family that can provide lots of interaction and mental stimulation.",
      "image": dog3
    },
    {
      "id": 9,
      "name": "Daisy",
      "category": "dog",
      "age": 5,
      "sex": "Female",
      "description": "Daisy is a gentle five-year-old Golden Retriever. Known for her sweet nature, she is the perfect family pet. Daisy is spayed and enjoys peaceful walks and being around her people, thriving in a loving and attentive environment.",
      "image": dog4
    },
    {
      "id": 10,
      "name": "Rocky",
      "category": "dog",
      "age": 1,
      "sex": "Male",
      "description": "Rocky is a one-year-old Boxer mix bursting with energy and affection. He's great with kids and other pets, making him an excellent addition to any family. Rocky is neutered, has a protective nature, and loves to play and protect his home.",
      "image": dog5
    }
  ]

  return (
    <div className="adopt-container">
      <section className="adopt-main"> 
        <h1>Find your four-legged friend</h1>
        <div className="adopt-filter">
          <div className="adopt-filter-button all">
            <p>All</p>
          </div>

          <div className="adopt-filter-button cat">
            <p>Cat</p>
          </div>

          <div className="adopt-filter-button dog">
            <p>Dog</p>
          </div>
        </div>

        <div>
        <Pagination items={pets} itemsPerPage={10} />
        </div>

      </section>
    </div>
  );
}

export default Adopt;