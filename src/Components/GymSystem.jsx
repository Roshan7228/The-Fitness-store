import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector} from 'react-redux';
import { GymSystemProduct } from '../Action/action';
import { Link } from 'react-router'
import './style.css'

function GymSystem() {
  const dispatch = useDispatch();
  const { GymStem } = useSelector((store) => store.Productdata3)
  useEffect(() => {
    dispatch(GymSystemProduct())
  }, [dispatch])

  const [filter, setFilter] = useState("");
  
    // Filter logic with if-else
    let filteredCardios = GymStem;
    if (filter === "Best Selling") {
      filteredCardios = [...GymStem].sort((a, b) => b.sold - a.sold);
    } else if (filter === "Featured") {
      filteredCardios = GymStem.filter((product) => product.featured); 
    } else if (filter === "Alphabetically") {
      filteredCardios = [...GymStem].sort((a, b) =>
        a.title.localeCompare(b.title)
      ); // Alphabetically A-Z
    } else if (filter === "PriceLowHigh") {
      filteredCardios = [...GymStem].sort((a, b) => a.currentPrice - b.currentPrice);
    } else if (filter === "PriceHighLow") {
      filteredCardios = [...GymStem].sort((a, b) => b.currentPrice - a.currentPrice); 
    } else if (filter === "DateNewOld") {
      filteredCardios = [...GymStem].sort((a, b) => new Date(b.date) - new Date(a.date)); 
    } else if (filter === "DateOldNew") {
      filteredCardios = [...GymStem].sort((a, b) => new Date(a.date) - new Date(b.date));
    }
  return (
    <div>
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
    </div>
  )
}


export default GymSystem
