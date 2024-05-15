import React from 'react';
import { Button, Card, Typography } from 'antd';
import './Adopt.css';
import { useAdopt } from '../../Hooks/useAdopt';


const Adopt = () => {
  const adoptValue = useAdopt();

  console.log(adoptValue);

  return (
    <div className="page-container">
      <div className="background-image"></div> 
      

      <section className="adopt-container"> 
        <Card className="category-card">
          <Typography.Title level={3} strong className="title">
            Select Category
          </Typography.Title>
          <Button>All</Button>
          <Button>Dog</Button>
          <Button>Cat</Button>
        </Card>

        <h1>Adopt</h1>
        <p>{adoptValue}</p>
      </section>

    </div>
  );
}

export default Adopt;