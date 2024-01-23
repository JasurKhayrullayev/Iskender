import './News.css'
import React, { useState } from 'react';
import Banner from '../../assets/banner.png'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const itemsPerPage = 3;

const News = ({ data: initialData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const imgData = [
        {
            img: Banner
        },
        {
            img: Banner
        },
        {
            img: Banner
        },
        {
            img: Banner
        },
        {
            img: Banner
        },
        {
            
        },
    ]
    
    const data = initialData || imgData;
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentItems = data.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
    setCurrentPage(page);
    };

  return (
    <div className='news-container'>
        <div className="news-top">
            <h2 className='news-title'>Новости</h2>
            <a className='news-link' href="/allnews">все</a>
        </div>
        <div className='news'>
            <button
                className='btn-left'
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                >
                <FaChevronLeft/>
            </button>
            <ul className='news-wrapper'>
                {currentItems.map((item, index) => (
                    <li className='news-item' key={index}>
                        <img src={item.img} alt="img"/>
                    </li>
                ))}
            </ul>
            <button
                className='btn-right'
                disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
                onClick={() => handlePageChange(currentPage + 1)}
                >
                <FaChevronRight/>
            </button>
        </div>
    </div>
  );
};

export default News;