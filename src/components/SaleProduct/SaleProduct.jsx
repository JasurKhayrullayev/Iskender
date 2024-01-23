import './SaleProduct.css'
import React, { useState } from 'react';
import SaleImg from "../../assets/sale.png"
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const itemsPerPage = 6; // Number of items to display per page

const SaleProduct = ({ data: initialData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const defaultData = [
        {
            img: SaleImg,
            decs: "Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..",
            price: "1294 с",
            oldPrice: "1294 c",
            has: "В наличии",
            amount: "🔹 Комплект",
        },
        {
            img: SaleImg,
            decs: "Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..",
            price: "999999 с",
            oldPrice: "999999 с",
            has: "В наличии",
            amount: "🔹 Комплект",
        },
        {
            img: SaleImg,
            decs: "Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..",
            price: "1294 с",
            oldPrice: "1294 c",
            has: "В наличии",
            amount: "🔹 Комплект",
        },
        {
            img: SaleImg,
            decs: "Держатель для лейки BOOU PG605 ",
            price: "1294 с",
            oldPrice: "1294 c",
            has: "В наличии",
            amount: "🔹 Комплект",
        },
        {
            img: SaleImg,
            decs: "Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..",
            price: "1294 с",
            oldPrice: "1294 c",
            has: "В наличии",
            amount: "🔹 Комплект",
        },
        {
            img: SaleImg,
            decs: "Держатель д.",
            price: "1294 с",
            oldPrice: "1294 c",
            has: "В наличии",
            amount: "🔹 Комплект",
        },
        {
            img: SaleImg,
            decs: "Держатель для лейки BOOU PG605 Держатель для лей",
            price: "1294 с",
            oldPrice: "1294 c",
            has: "В наличии",
            amount: "🔹 Комплект",
        },
        {
            img: SaleImg,
            decs: "Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..",
            price: "1294 с",
            oldPrice: "1294 c",
            has: "В наличии",
            amount: "🔹 Комплект",
        },
        {
            img: SaleImg,
            decs: "Держатель для лейки BOOU PG05..",
            price: "1294 с",
            oldPrice: "1294 c",
            has: "В наличии",
            amount: "🔹 Комплект",
        },
        {
            img: SaleImg,
            decs: "Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..",
            price: "1294 с",
            oldPrice: "1294 c",
            has: "В наличии",
            amount: "🔹 Комплект",
        },
        {
            img: SaleImg,
            decs: "Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..",
            price: "1294 с",
            oldPrice: "1294 c",
            has: "В наличии",
            amount: "🔹 Комплект",
        },
        {
            img: SaleImg,
            decs: "Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..",
            price: "1294 с",
            oldPrice: "1294 c",
            has: "В наличии",
            amount: "🔹 Комплект",
        },
        {
            img: SaleImg,
            decs: "Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..",
            price: "1294 с",
            oldPrice: "1294 c",
            has: "В наличии",
            amount: "🔹 Комплект",
        },
        {
            img: SaleImg,
            decs: "Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..",
            price: "1294 с",
            oldPrice: "1294 c",
            has: "В наличии",
            amount: "🔹 Комплект",
        },
        {
            img: SaleImg,
            decs: "Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..",
            price: "1294 с",
            oldPrice: "1294 c",
            has: "В наличии",
            amount: "🔹 Комплект",
        },
        {
            img: SaleImg,
            decs: "Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..",
            price: "1294 с",
            oldPrice: "1294 c",
            has: "В наличии",
            amount: "🔹 Комплект",
        },
        {
            img: SaleImg,
            decs: "Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..",
            price: "1294 с",
            oldPrice: "1294 c",
            has: "В наличии",
            amount: "🔹 Комплект",
        },
        {
            img: SaleImg,
            decs: "Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..",
            price: "1294 с",
            oldPrice: "1294 c",
            has: "В наличии",
            amount: "🔹 Комплект",
        },
      ];
    
    const data = initialData || defaultData;
  

  // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

  // Get the items to display for the current page
    const currentItems = data.slice(startIndex, endIndex);

  // Handle page change
    const handlePageChange = (page) => {
    setCurrentPage(page);
    };

    const [liked, setLiked] = useState(false);
  
    const handleLikeToggle = () => {
        setLiked((prevLiked) => !prevLiked);
    };


    const [count, setCount] = useState(0);
    
    const handleIncrement = () => {
        setCount(count + 1);
    };
    
    const handleDecrement = () => {
        if (count > 0) {
          setCount(count - 1);
        }
    };
  

  return (
    <div className='sale-container'>
        <div className="sale-top">
            <h2 className='sale-title'>Хиты продаж</h2>
            <a className='sale-link' href="/katalog">перейти в каталог</a>
        </div>
        <div className='sale'>
            <button
                className='btn-left'
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                >
                <FaChevronLeft/>
            </button>
        {/* Display the current page items */}
        <ul className='sale-wrapper'>
            {currentItems.map((item, index) => (
                <li className='sale-item' key={index}>
                    <button
                        className='sale-btn'
                        onClick={handleLikeToggle}
                    >
                        {liked ? '❤️' : '🤍'}
                    </button>
                    <img src={item.img} alt="img"/>
                    <h3 className='sale-item-title'>{item.decs}</h3>
                    <span className='sale-price-wrap'>
                        <p className='sale-item-pric'>{item.price}</p>
                        <p className='sale-item-oldPrice'>{item.oldPrice}</p>
                    </span>
                    <p className='sale-item-has'>{item.has}</p>
                    <p className='sale-item-amount'>{item.amount}</p>
                    <div className='sale-count'>
                        <button className='sale-count-btn' onClick={handleDecrement}>-</button>
                        <p className='sale-count-num'>{count}</p>
                        <button className='sale-count-btn' onClick={handleIncrement}>+</button>
                    </div>
                </li>
            ))}
        </ul>

        {/* Pagination controls */}
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

export default SaleProduct;
