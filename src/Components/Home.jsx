import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'
import { Link } from 'react-router';
import sliderimage1 from '../image/i-1.webp';
import sliderimage2 from '../image/s-2.jpg';
import sliderimage3 from '../image/s-3.jpg';
import sliderimage4 from '../image/s-4.jpg';
import sliderimage5 from '../image/s-5.jpg';
import sliderimage6 from '../image/s-6.jpg';
import sliderimage7 from '../image/s-7.jpg';
import product1 from '../image/c-1.jpg';
import product2 from '../image/c-2.jpg';
import product3 from '../image/c-3.jpg';
import product4 from '../image/c-4.jpg';
import product5 from '../image/c-5.jpg';
import Equipment from '../image/jamis_570x.jpg';
import Equipment2 from '../image/jamis2.jpg';
import BBB from "../image/bbb.png";
import Review1 from "../image/r_user_1.jpg";
import Review2 from "../image/user2.png";
import Review3 from "../image/user3.png";
import Review4 from "../image/user4.png";
import { useDispatch, useSelector } from 'react-redux';
import { HomeProductData, HomeProductData2 } from '../Action/action';



function Home() {


  // slider logic
  const [Sliders, SetSlider] = useState(0);
  //  hover
  const images = [
    {
      src: sliderimage1,
      Details: {
        title: "Welcome to The Fitness Store!",
        description: "Please take a look around at one of the finest selection of fitness products in Wisconsin.",
        shoping: "Shop Now"
      }
    },
    {
      src: sliderimage2,
      Details: {
        title: "Echelon Fitness Equipment now at The Fitness Store!",
        description: "Immerse yourself into an entire fitness experience!",
        shoping: "Shop Now"
      }
    },
    {
      src: sliderimage3,
      Details: {
        title: "Spirit Fitness Equipment",
        description: "Reach your fitness goals and let the SPIRIT move you!",
        shoping: "Shop Now"
      }
    },
    {
      src: sliderimage4,
      Details: {
        title: "Body Solidt",
        description: "Dumbbells, weight plates, benches and more!",
        shoping: "Shop Now"
      }
    },
    {
      src: sliderimage5,
      Details: {
        title: "BodyCraft Fitness Equipment",
        description: "The Art of Science and Movement.",
        shoping: "Shop Now"
      }
    },
    {
      src: sliderimage6,
      Details: {
        title: "Landice Commercial",
        description: "Sculpting the finest fitness equipment since 1967.",
        shoping: "Shop Now"
      }
    },
    {
      src: sliderimage7,
      Details: {
        title: "Delivery, Assembly and Repair Services Also Offered.",
        description: "Buy with confidence!",
        shoping: "Shop"
      }
    },

  ]


  function Handleplus() {
    console.log("roshan")
    SetSlider(Sliders === images.length - 1 ? 0 : Sliders + 1)
    console.log("roshan")
  }

  function HandleMinus() {
    SetSlider(Sliders === 0 ? images.length - 1 : Sliders - 1);

  }
  // slider funcation
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,

  };

  // fetch product data 

  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.Home);
  const { details } = useSelector((store) => store.Productdata);

  useEffect(() => {
    dispatch(HomeProductData());
    dispatch(HomeProductData2());
  }, []);


  return (
    <div>
      <div className='Content'>
        <div className='Slider'>
          <div className='main-wraap-imge-slider'>
            <img style={{ width: "100%", height: "100%" }} src={images[Sliders].src} />
          </div>
          <div className='Next-Arrow'>
            <i onClick={Handleplus} className="ri-arrow-right-s-line"></i>
          </div>
          <div className='Prev-Arrow'>
            <i onClick={HandleMinus} className="ri-arrow-left-s-line"></i>
          </div>
          {/* Hover data show */}
          <div className="hover-data">
            <h3>{images[Sliders].Details.title}</h3>
            <p>{images[Sliders].Details.description}</p>
            <a href="#">{images[Sliders].Details.shoping}</a>
          </div>
        </div>
        {/* Shopin Collection */}
        <div className='Liner-container'>
          <div className='title'>
            <h4>SHOP COLLECTIONS</h4>
          </div>
        </div>
        <div className='category-content'>
          <div className='product-category-thumbnail'>
            <div className='left-images'>
              <img src={product1} alt="imgae-product" />
              <div className='Cardio'>
                <a href="#">Cardio</a>
              </div>
            </div>
            <div className='right-image'>
              <div className='box1'>
                <img src={product2} alt="imgae-product" />
                <div className='Gym-System'>
                  <a href="#">Gym Systems</a>
                </div>
              </div>
              <div className='box2'>
                <img src={product3} alt="imgae-product" />
                <div className='Bicycles'>
                  <a href="#">Bicycles</a>
                </div>
              </div>
              <div className='box3'>
                <img src={product4} alt="imgae-product" />
                <div className='Plate-Loaded'>
                  <a href="#">Plate Loaded</a>
                </div>
              </div>
              <div className='box4'>
                <img src={product5} alt="imgae-product" />
                <div className='Free-Weight'>
                  <a href="#">Free Weights</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='Bicycle-Customer'>
          <div className='inner-content'>
            <div className='Content-data'>
              <h3>Bicycle Customer</h3>
              <h3>Click HERE</h3>
              <p>TO BE LINKED TO OUR NEW BICYCLE,</p>
              <p> ACCESSORIES AND SERVICE SCHEDULING PAGE.</p>
            </div>
          </div>
        </div>
        {/* slider */}
        <div className='Slick-Slider'>
          <div className='slider-details'>
            <div className='slider-title'>
              <h3>JUST ARRIVED</h3>
            </div>
            <div className='line-continer'>
              <h4>NEW PRODUCTS</h4>
            </div>
            <div className="slider-container" >
              <style jsx>{`
        .slick-prev:before, .slick-next:before {
          color: #000; 
      `}</style>

              <Slider  {...settings}>
                {data.map((Details, index) => {
                  return (
                    <div key={index} className="sliderimages">
                      <Link to={`/Discription/${Details.id}`}>
                      <img src={`${Details.images}`} alt="" srcSet="" />
                      </Link>
                      <p>{Details.title}</p>
                      <h3>
                        <span>{`$${Details.orignalPrice}.00`}</span> {`$${Details.currentPrice}.00`}
                      </h3>
                      <div className='discount'>
                        <h5>{`${Details.discount}%`}</h5>
                      </div>
                    </div>
                  )
                })}
              </Slider>
            </div>
            <div className='line-continer-text'>
              <h4>STORE SPECIALS & OVERSTOCK</h4>
            </div>
            <div className="slider-container" >
              <style jsx>{`
        .slick-prev:before, .slick-next:before {
          color: #000; 
      `}</style>

              <Slider  {...settings}>
                {details.map((detail, index) => {
                  return (
                    <div key={index} className="sliderimages">
                      <Link to={`/Discription/${detail.id}`}>
                      <img src={`${detail.images}`} alt="" srcSet="" />
                      </Link>
                      <p>{detail.title}</p>
                      <h3>
                        <span>{`$${detail.orignalPrice}.00`}</span> {`$${detail.currentPrice}.00`}
                      </h3>
                      <div className='discount'>
                        <h5>{`${detail.discount}%`}</h5>
                      </div>
                    </div>
                  )
                })}
              </Slider>
            </div>
          </div>
        </div>
        {/* Equipment */}
        <div className='Equipment-container'>
          <div className='spb_wrapper'>
            <div className='spb_Container'>
              <div className='spb_image'>
                <img src={Equipment} alt="" />
              </div>
              <div className='spb_Details'>
                <h5>Cardio, Gym Systems, & More</h5>
                <h2><strong>Our Fitness Equipment</strong></h2>
                <p>The Fitness Store, based in Manitowoc, WI, is your source for gym equipment for either your home or commercial gym. Whether you need to search your gym equipment by type or brand, you should easily be able to find what you’re looking for in our online store!</p>
                <p>Our products include cycling bikes, recumbent steppers, treadmills, free weights, benches, and various accessories to improve your strength, durability, and overall health. We carry a wide range of quality equipment from leading brands, so you’ll be able to find anything you need to achieve your fitness goals!</p>
                <h3>Cardio Equipment</h3>
                <p>Looking to get your heart rate up and burn calories? At The Fitness Store, we have a wide selection of  to choose from. Our products include elliptical machines, upright bikes, recumbent bikes/steppers, and treadmills. No matter if you prefer low-impact workouts or high-intensity interval training (HIIT), we have a wide range of cardio equipment in stock to help you on your fitness journey!</p>
                <h3>Gym Systems</h3>
                <p>We also stock  like benches, and single, dual, and multi station gyms. Our gym systems are the perfect home solution for anyone looking to build muscles and improve their strength. We have a wide variety of systems that combine strength training and cardio exercises – so you’ll benefit from power racks, squat racks, and cable machines alike, to create a custom full-body workout.</p>
              </div>
            </div>
            <div className='spb_Container'>
              <div className='spb_Details'>
                <h3>Plate Loaded</h3>
                <p>Our  products include hyper extension benches, squat stands, power cages, and other gym equipment from the brands BodySolid and Paradigm Fitness. These products are specifically designed to make your resistance training workouts a better experience – so you can get the results you’re looking for!</p>
                <h3>Free Weights</h3>
                <p>Free weights , as their name implies, are individual weights that include dumbbells, barbells, kettlebells, Olympic weight plates, benches, etc. Since they are not attached to any other equipment, free weights can provide a greater range of motion for a wide variety of exercises. Use our free weights to build strength and muscle!</p>
                <h3>Bicycles</h3>
                <p>One of the best ways to stay in shape is to invest in a quality bicycle for outdoor exercise during the warmer months. At The Fitness Store, we carry outdoor bikes  by Harley Davidson, Fuell, and other premium bike brands. Browse our outdoor bikes online, or contact our team today with questions!
                  <h3>Accessories</h3>
                  <p>Lastly, to make your cardio and strength training sessions complete, you’ll want to invest in quality gym accessories . These include but are not limited to lifting gloves, belts, and straps; foam rollers, mats, balls, cable attachments, and fitness clothing. Our accessories will help you create a safe and functional home gym space, or provide you the apparel you need for breathability.</p>
                </p>
              </div>
              <div className='spb_image'>
                <img src={Equipment2} alt="" />
              </div>
            </div>
            <div className='spb_BBB'>
              <div className='bbb_logo'>
                <img src={BBB} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Reviews */}
        <div className='Reviews-container'>
          <div className='Reviwes'>
            <div className='Reviwes-Title'>
              <h3>Why Shop With The Fitness Store?</h3>
            </div>
            <div className='Reviwes-continer-text'>
              <h4>Reviews</h4>
            </div>
            <div className='Reviews-description'>
              <p>At The Fitness Store, we always strive to make our products and services accessible to everyone. Offering many popular, quality brands, our online store provides a wide selection of home and commercial gym equipment for you to create the custom fitness routine you need. From cardio and gym systems, to free weights and accessories, you should be able to find whatever equipment you're looking for. Let us help you achieve your fitness goals so that you can become a healthier you!</p>
            </div>
            <div className='Reviews-testimonial'>
              <div className='reviwes_1'>
                <div className='reviwes1_image'>
                  <img src={Review1} alt="" />
                </div>
                <div className='reviwes_text'>
                  <p>The Fitness Store has been my go-to  for decades. I have purchased many items over the years and have had them serviced there, as well. I have bought several bicycles, tons of exercise equipment (literally), including a Tuff Stuff half cage with weight-stack system, which, in fact, the owner himself dismantled the system, delivered and set it up at new homes I moved to over the years. I have never experienced anything other than world-class customer service from the fitness store. I highly, highly recommended them.</p>
                </div>
                <div className='reviwes-name'>
                  <h4>David Ross - <span>Google Review</span></h4>
                </div>
              </div>
              <div className='reviwes_1'>
                <div className='reviwes1_image'>
                  <img src={Review2} alt="" />
                </div>
                <div className='reviwes_text'>
                  <p>"Went in looking for an elliptical, he has plenty to choose from. I even talked about exchanging my treadmill for one and they were up for that as well. This is the place that you're looking for some exercise equipment he definitely has great prices and a lot to choose from, give them a try."</p>
                </div>
                <div className='reviwes-name'>
                  <h4>Lynette Coy - <span>Google Review</span></h4>
                </div>
              </div>
              <div className='reviwes_1'>
                <div className='reviwes1_image'>
                  <img src={Review3} alt="" />
                </div>
                <div className='reviwes_text'>
                  <p>"Great store and great experience! I go there a good bit. Always helpful and fast service. One time I had a problem riding in on my way to work. Dropped off my bike and they brought it to me at lunch time at work!! It was raining and they drove it over in their van.
                    Another time a friend of mine was riding and he broke a spoke. He called the store and they picked him and his bike up! Great service."</p>
                </div>
                <div className='reviwes-name'>
                  <h4>Jonathan Bailey - <span>Google Review</span></h4>
                </div>
              </div>
              <div className='reviwes_1'>
                <div className='reviwes1_image'>
                  <img src={Review4} alt="" />
                </div>
                <div className='reviwes_text'>
                  <p>"The Fitness Store is our go-to place for fitness equipment, as they service what they sell. They even made a house call to fix an elliptical we didn’t purchase from them. Great selection of equipment to test in-store, really knowledgeable and friendly staff, and very competitive pricing.  Glad to be able to shop local!"</p>
                </div>
                <div className='reviwes-name'>
                  <h4>Pamela DeBoer - <span>Google Review</span></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* informed */}
        <div className='informed-Container'>
          <div className='informed-details'>
            <div className='informed-title'>
              <h2>Stay Informed</h2>
            </div>
            <div className='informed-Discription'>
              <p>Sign up to received periodic emails and specials delivered to your in-<br></br>box.  But don't worry, we won't become a nuisance.</p>
            </div>
            <div className='informed-input'>
              <i className="ri-mail-line"></i>
              <input type="text" placeholder='You email address' />
              <button>SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
