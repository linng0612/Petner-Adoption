import React, { useState } from 'react';
import "./Pagination.css";
import { useNavigate } from 'react-router-dom';

const Pagination = ({ items, itemsPerPage }) => {
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(1);

    const pageCount = Math.ceil(items.length / itemsPerPage);
    
    const currentItems = items.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='pagination'>
            <div className='pagination-content'>
                {currentItems.map((item, index) => (
                    <div key={index} className='pagination-content-pet-info'>
                        <div className='pagination-content-pet-info-box'>
                            <img src={item.image}/>
                            <div className='pagination-content-pet-info-box'>
                                <h2>{item.name}</h2>
                                <p className='pagination-content-pet-info-title-bar'></p>
                                <p className='pagination-content-pet-info-content'><strong>Age: </strong>{item.age} years</p>
                                <p className='pagination-content-pet-info-content'><strong>Gender: </strong> {item.sex}</p>

                                <div className='pagination-content-pet-info-button'>
                                    <button onClick={() => navigate(`./detail/${item._id}`)}>Detail</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='pagination-radio-button'>
                {Array.from({ length: pageCount }, (_, i) => (
                    <button
                        key={i}
                        style={{backgroundColor: currentPage === i + 1 ? "white" : "grey"}}
                        onClick={() => goToPage(i + 1)}
                        disabled={currentPage === i + 1}
                    >
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Pagination;