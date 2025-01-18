import React, { useEffect, useState } from 'react';
import './style.css';
import { Link, useParams } from 'react-router';
import axios from 'axios';
import Navbar from './Navbar';

function Discription() {




  //  add to card slider
  const [Card, SetCard] = useState(false)
 
  

  

  const [store, setStore] = useState(null);
  console.log(store)
//  ADD to CARD array
const [ADDToCARD, setADDToCARD] = useState(
  JSON.parse(localStorage.getItem("PRODUCT")) || []
);

useEffect(() => {
  localStorage.setItem("PRODUCT", JSON.stringify(ADDToCARD));
}, [ADDToCARD]);

const handleAddToCard = () => {
  if (store && Object.keys(store).length > 0) {
    const existingItem = ADDToCARD.find((item) => item.id === store.id);
    if (!existingItem) {
      setADDToCARD([...ADDToCARD, { ...store, quantity: 1 }]);
    } else {
      console.warn("Item already exists in cart.");
    }
  } else {
    console.warn("Invalid store data. Not adding to ADDToCARD.");
  }
};

// Increase quantity for a specific item
const handlePlus = (id) => {
  setADDToCARD((prevState) =>
    prevState.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

// Decrease quantity for a specific item
const handleMinus = (id) => {
  setADDToCARD((prevState) =>
    prevState
      .map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      )
      .filter((item) => !(item.id === id && item.quantity === 1)) 
  );
};

const handleClose = (id) => {
  setADDToCARD((prevState) => prevState.filter((item) => item.id !== id));
};
const calculateSubtotal = () => {
  return ADDToCARD.reduce(
    (acc, item) => acc + item.quantity * item.currentPrice,
    0
  );
};

const calculateTotalQuantity = () => {
  return ADDToCARD.reduce((total, item) => total + item.quantity, 0);
};
const [TotalQuentity,setTotalQuentity]=useState(calculateTotalQuantity());
localStorage.setItem("TotalQuentity",TotalQuentity);

const [subtotal, setSubtotal] = useState(calculateSubtotal());
   localStorage.setItem("SubtotalPrice",subtotal);
 
  const param = useParams();

  // Create separate API calls for each category
  const links = {
    Banches: `http://localhost:3000/Banches/${param.id}`,
    Product2: `http://localhost:3000/Product2/${param.id}`,
    Cardio: `http://localhost:3000/Cardio/${param.id}`,
    GymSystem: `http://localhost:3000/GYMSYSTEM/${param.id}`
  };

  useEffect(() => {
    axios.get(links.Banches)
      .then((response) => {
        if (response.data && response.data.id === param.id) {
          setStore(response.data);
        }
      })
      .catch(() => {

      });

    axios.get(links.Product2)
      .then((response) => {
        if (response.data && response.data.id === param.id) {
          setStore(response.data);
        }
      })
      .catch(() => {

      });

    axios.get(links.Cardio)
      .then((response) => {
        if (response.data && response.data.id === param.id) {
          setStore(response.data);
        }
      })
      .catch(() => {

      });

      axios.get(links.GymSystem)
      .then((response) => {
        if (response.data && response.data.id === param.id) {
          setStore(response.data);
        }
      })
      .catch(() => {

      });

  }, [param.id]);


  if (!store) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        
      <div className="Shop-header">
        <div className="shop-Content">
          <div className="shopify-breadcrumb">
            <a href="/">
              <i className="ri-home-9-fill"></i>Home / <span>{store.title}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Description details */}
      <div className="Discription">
        <div className="Discription-Container">
          <div className="Discription-image">
            {/* Dynamically set the image source */}
            <img src={store.images} alt={store.title} />
          </div>
          <div className="Discription-Details">
            <h1>{store.title}</h1>
            <h3>
              <span>{`$${store.orignalPrice}.00`}</span> {`$${store.currentPrice}.00`}
            </h3>
            <button className='add_to_card' onClick={() => {handleAddToCard() ; SetCard(!Card);}}>ADD TO CART</button>
          </div>
        </div>
        <div className="Discount">
          <h5>{store.discount}%</h5>
        </div>
      </div>
      <div className='Discription-reviews-Container'>
        <div className='Discription-Reviews-Details'>
          <p className='Discription-REviews'>Discription</p>
          <div className='Tabs-panel'>

            <h2>Schwinn IC4 Indoor Cycle</h2>
            <p>Good Morning All,</p>
            <p>Earlier this year, Schwinn/Bowflex announced that they were going into bankruptcy.  This was very disappointing to us as we've been a Schwinn dealer for as long as The Fitness Store has existed.  We were however, slightly relieved when we later found out that Johnson Health was buying the assets as Johnson is headquartered near Madison, WI which is just a couple of hours from us.</p>
            <p>For months, we've been continuing to display and sell Schwinn and BowFlex products in good faith to our customers as Johnson indicated that we would continue to be a dealer of these products.  We've been extremely patient, having sold about a dozen units of these brands. . .  but now, after continuing to get no-answer answers as to when the product will ship, we have decided to make a change.</p>
            <p>As of today, and until further notice, we will not be representing either Schwinn Fitness nor Bowflex products.  We have found several quality manufacturers who make similar products and will be representing them.</p>
            <p>It appears that Johnson has been making their products available direct to the consumer, thru Best Buy and specifically, through their own stores located in larger populated areas, leaving what I'm told is at least 100 dealers like The Fitness Store dangling.  A pretty lousy way to do business.</p>
            <p>Schwinn dealers have been exclusively responsible for making the Schwinn name a well regarded brand in the industry and Johnson's method of handling these dealers is nothing short of a slap in the face to each of us.</p>
            <p>Over the next few weeks, similar products will begin to appear of our page and we encourage you to consider these brands as we will have thoroughly vetted them for quality and support. </p>
            <p>Thank you for your continued support of The Fitness Store and Merry Christmas! </p>
            <p className='footer-dis'>The only bike you'll ever need. Equipped to withstand the punishment of an intense hill workout and comfortable enough for an easy ride, the IC4 is a household must-have.</p>
            <h3>Product Overview</h3>
            <ul>
              <li><i className="ri-arrow-right-s-line"></i>Connects to over a dozen cycling and tracking apps like Peloton<sup>®</sup>, Zwift<sup>®</sup>, Apple Health, and more.</li>
              <li><i className="ri-arrow-right-s-line"></i>Connects with Explore the World™ App (Launches in November).</li>
              <li><i className="ri-arrow-right-s-line"></i>Smooth, magnetic resistance</li>
              <li><i className="ri-arrow-right-s-line"></i>Full color backlit LCD display</li>
              <li><i className="ri-arrow-right-s-line"></i>Media rack</li>
              <li><i className="ri-arrow-right-s-line"></i>Slim, comfortable Bluetooth<sup>®</sup><span>&nbsp;</span>LE (BLE) heart rate armband</li>
              <li><i className="ri-arrow-right-s-line"></i>3 lb. dumbbells with easy-reach cradles</li>
              <li><i className="ri-arrow-right-s-line"></i>USB charging station</li>
            </ul>
            <h3> Product Features</h3>
            <ul>
              <li><i className="ri-arrow-right-s-line"></i><strong>Bluetooth<sup>®</sup><span>&nbsp;</span>Connectivity</strong><span>&nbsp;</span>Connect with popular cycling apps like Peloton<sup>®</sup>, Explore The World™, Zwift<sup>®</sup><span>&nbsp;</span>and more.</li>
              <li><i className="ri-arrow-right-s-line"></i><strong>Smooth, Magnetic Resistance</strong><span>&nbsp;</span>Provides a smooth, quiet ride with 100 micro-adjustable resistance levels.</li>
              <li><i className="ri-arrow-right-s-line"></i><strong>Generous LCD Display</strong><span>&nbsp;</span>Track your time, distance, calories, and RPM's while monitoring your heart rate with the included Bluetooth<sup>®</sup><span>&nbsp;</span>heart rate armband.</li>
              <li><i className="ri-arrow-right-s-line"></i><strong>Dual Link Pedals with Toe Cages</strong><span>&nbsp;</span>Use standard toe cages or SPD clips based on your riding preferences.</li>
              <li><i className="ri-arrow-right-s-line"></i><strong>Versatility</strong><span>&nbsp;</span>Horizontal and vertical adjustment of the seat and handlebars for maximum versatility.</li>
              <li><i className="ri-arrow-right-s-line"></i><strong>Integrated Device Holder</strong><span>&nbsp;</span>Designed to keep you engaged during your workout.</li>
              <li><i className="ri-arrow-right-s-line"></i><strong>Dual Water Bottle Holders</strong><span>&nbsp;</span>So you can stay hydrated during your workout.</li>
            </ul>
            <h2>PROTECTIVE FLOOR MAT IS INCLUDED WITH YOUR PURCHASE FROM THE FITNESS STORE.</h2>
          </div>
        </div>

      </div>
      {/* Slider add to card */}
      <div className={`modalOverLay ${Card ? 'ShowModal' : ""}`}></div>
      <div className={`Login-form-slide ${Card ? 'show-modal' : ""}`}>
        <div className='Form-Heading'>
          <h2>SHOPPING CART</h2>
          <div className='Clossing'>
            <p><span><i className="ri-close-line" onClick={() => { SetCard(false) }} ></i></span></p>
          </div>
        </div>
        <div className='CARD-DETAILS'>
    {ADDToCARD.map((productData) => (
      <div className='Card-Details' key={productData.id}>
        <div className='add_to_card_image'>
          <img src={productData.images} style={{ width: '100%', height: '100%' }} alt='' />
        </div>
        <div className='add_TO_CArd_title'>
          <p>{productData.title}</p>
          <div className='Quantity'>
            <div className='MINUS' onClick={() => handleMinus(productData.id)}>
              -
            </div>
            <div className='NUMBER'>{productData.quantity}</div>
            <div className='PLUS' onClick={() => handlePlus(productData.id)}>
              +
            </div>
          </div>
          <div className='PRICE'>
            <p>{`$${productData.currentPrice}.00`}</p>
          </div>
        </div>
        <div className='Close' style={{cursor:"pointer"}}>
          <i className='ri-close-line' onClick={() => handleClose(productData.id)}></i>
        </div>
      </div>
    ))}
  </div>
        <div className='register-question'>
          <label htmlFor="CartSpecialInstructions">Special instructions for seller</label>
          <textarea name="" id="CartSpecialInstructions"></textarea>
        </div>
        <div className='subTOtal'>
          <p>SUBTOTAL:</p>
          <h3>{`$${calculateSubtotal()}.00`}</h3>
        </div>
        <div className='VIEWCART'>
          <Link to="/Card" >
          <a href="#">VIEW CART</a>
          </Link>
          
        </div>
        <div className='VIEWCART2'>
           <a href="#">CHECKOUT</a>
          </div> 
          </div>
    </div>
  );
}

export default Discription;
