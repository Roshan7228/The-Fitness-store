import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardioProduct } from '../Action/action';
import { Link } from 'react-router';
import './style.css';

function Cardio() {
  const dispatch = useDispatch();
  const { cardioss } = useSelector((store) => store.Productdata2);

  useEffect(() => {
    dispatch(CardioProduct());
  }, [dispatch]);

  const [filter, setFilter] = useState("");

  // Filter logic with if-else
  let filteredCardios = cardioss;
  if (filter === "Best Selling") {
    filteredCardios = [...cardioss].sort((a, b) => b.sold - a.sold); // Example: Sort by 'sold' count
  } else if (filter === "Featured") {
    filteredCardios = cardioss.filter((product) => product.featured); // Example: Filter featured products
  } else if (filter === "Alphabetically") {
    filteredCardios = [...cardioss].sort((a, b) =>
      a.title.localeCompare(b.title)
    ); // Alphabetically A-Z
  } else if (filter === "PriceLowHigh") {
    filteredCardios = [...cardioss].sort((a, b) => a.currentPrice - b.currentPrice); // Price low to high
  } else if (filter === "PriceHighLow") {
    filteredCardios = [...cardioss].sort((a, b) => b.currentPrice - a.currentPrice); // Price high to low
  } else if (filter === "DateNewOld") {
    filteredCardios = [...cardioss].sort((a, b) => new Date(b.date) - new Date(a.date)); // Date new to old
  } else if (filter === "DateOldNew") {
    filteredCardios = [...cardioss].sort((a, b) => new Date(a.date) - new Date(b.date)); // Date old to new
  }

  return (
    <div>
      <div className="Shop-header">
        <div className="shop-Content">
          <div className="shopify-breadcrumb">
            <a href="">
              <i className="ri-home-9-fill"></i>Home / <span>Cardio</span>
            </a>
          </div>
          <div className="result-contain">
            <p>Showing {filteredCardios.length} results</p>
            <select
              id="category"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="Best Selling">Best Selling</option>
              <option value="Featured">Featured</option>
              <option value="Alphabetically">Alphabetically, A-Z</option>
              <option value="Alphabetically">Alphabetically, Z-A</option>
              <option value="PriceLowHigh">Price, low to high</option>
              <option value="PriceHighLow">Price, high to low</option>
              <option value="DateNewOld">Date, new to old</option>
              <option value="DateOldNew">Date, old to new</option>
            </select>
          </div>
        </div>
      </div>
      {/* Filtered Data */}
      <div className="product-grid-item">
        <div className="product-grid-Container">
          {filteredCardios.map((Product, index) => (
            <div className="Product-item-box" key={index}>
              <Link to={`/Discription/${Product.id}`}>
                <div className="Product-item-image">
                  <img src={Product.images} alt="" />
                </div>
              </Link>
              <div className="Product-item-details">
                <p>{Product.title}</p>
                <h3>
                  <span>{`$${Product.orignalPrice}.00`}</span>
                  {`$${Product.currentPrice}.00`}
                </h3>
              </div>
              <div className="discount">
                <h5>{`${Product.discount}%`}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="products-footer">
        <a href="#">LOAD MORE PRODUCTS</a>
      </div>
    </div>
  );
}

export default Cardio;
