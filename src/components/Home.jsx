import React from 'react';
import { Link } from 'react-router-dom'; 
import icon from '../assets/images/icon1.jpg';    
import '../assets/style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import image1 from '../assets/images/img1ice.jpg';

import image3 from '../assets/images/img3.jpg';
import image4 from '../assets/images/img4.jpg';
import image5 from '../assets/images/img5.jpg';
import image6 from '../assets/images/img6.jpg';






function Home()
 {
  return (
    <>
         <nav
  className="navbar navbar-expand-lg px-4 shadow-sm"
  style={{ backgroundColor: 'green' }}

>
  <div className="container-fluid">
  
    <Link className="navbar-brand text-white fw-bold d-flex align-items-center" to="/">
      <img
        src={icon}
        alt="logo"
        className="img-fluid me-2"
        loading="eager"
        style={{ width: "45px", height: "45px", borderRadius: "10px" }}
      />
      ICECORNER
    </Link>

  
    <button
      className="navbar-toggler bg-white mx-1"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainNavbar"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

  
    <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
      <ul className="navbar-nav align-items-lg-center">
        <li className="nav-item mx-2">
          <Link to="/" className="nav-link text-white d-flex align-items-center">Home</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to="/shop" className="nav-link text-white d-flex align-items-center">Our Product</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to="/about" className="nav-link text-white d-flex align-items-center">About Us</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to="/contact" className="nav-link text-white d-flex align-items-center">Get in Touch</Link>
        </li>
        

      </ul>
    </div>
  </div>
</nav>


      





      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            
            {/* LEFT CONTENT */}
            <div className="col-md-6 text-md-start text-center">
              <h2 className="hero-title">Scoops &<br />Smiles</h2>
              
                <h4>Every scoop bring a smile.....</h4>
              
              <h5>Start Chillin’</h5>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-md-6 text-center">
              <img
            src={image1}
            alt="ice cream"
            className="img-fluid rounded mb-4 w-100"
          
          />
            </div>

          </div>
        </div>
      </section>



<div className="container mt-3">
  <div className="row align-items-center">
    <h2>FLAVOURS</h2>

<div className="container mt-5 mb-5">
  <div className="row">
<div className="col-sm-3 mb-5">
  <img src={image3} className="img-fluid rounded circle" alt="donut"/>
  <h5 class="cart">BLUEBERRY CHILL</h5>
                     <a href="#"class= "btn btn-primary px-3 py-1 mb-2">₹140</a>
</div>

  <div className="col-sm-3 mb-5">
  <img src={image4} className="img-fluid rounded circle" alt="donut"/>
  <h5 class="cart">PINK VELVET</h5>
                     <a href="#"class= "btn btn-primary px-3 py-1 mb-2">₹170</a>
  
  </div>
   <div className="col-sm-3 mb-5">
  <img src={image5} className="img-fluid rounded circle" alt="donut"/>
  <h5 class="cart"> MINTY FRESH</h5>
                     <a href="#"class= "btn btn-primary px-3 py-1 mb-2">₹130</a>
  </div>
 <div className="col-sm-3 mb-5">
  <img src={image6} className="img-fluid rounded circle" alt="donut"/>
  <h5 class="cart">UNICORN DREAM</h5>
                     <a href="#"class= "btn btn-primary px-3 py-1 mb-2">₹160</a>

  </div>
</div>
</div>
</div>
</div>



<div
  style={{
    backgroundColor: "#6ee6a0",
    padding: "40px 20px",
    textAlign: "center"
  }}
>
  <h2>
    ABOUT US
  </h2>

  <p
    style={{
      maxWidth: "700px",
      margin: "0 auto",
      fontSize: "16px",
      lineHeight: "1.7",
      color: "#0d0d0d"
    }}
  >
    We craft delicious ice creams using premium ingredients and lots of love.
    Every scoop is made to bring happiness, freshness, and a smile to your day.
    From classic flavours to exciting new creations, our goal is simple –
    serve joy in every bite.
  </p>
</div>


<section className="py-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8">

        <h2 className="text-center mb-4">Let's chill together</h2>
        <p className="text-center text-muted mb-4">
        </p>

        <form>
        
          

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="tel" class="form-control" placeholder="Enter your phone number"/>
          </div>


          <div className="mb-3">
            <label className="form-label">Ice vibe</label>
            <select className="form-select">
              <option selected>Choose your chill</option>
              <option>vanilla</option>
              <option>butterscotch</option>
              <option>blackcurrant</option>
              <option>Other</option>
            </select>
          </div>

    
          

        
          <div className="text-center">
            <button type="submit" class="btn btn-dark px-5">
              Send Message
            </button>
          </div>
        </form>

      </div>
    </div>
  </div>
  </section>

















        

     <footer class="footer">
    <div class="footer-container">

        <div class="footer-col">
            <h4>About us</h4>
            <p> Life is better with sprinkles...
            </p>
        </div>

        <div class="footer-col">
            <h4>Offers</h4>
            <ul>
                <li><a href="#">Birthday special</a></li>
                <li><a href="#">Student offer</a></li>
                
    
            </ul>
        </div>

        <div class="footer-col">
            <h4>social media</h4>
            <p>Email:ice@gmail.com</p>
            <p>Phone: 8890076431</p>
            <p>chennai</p>
            <p>Twitter </p>
        </div>


    </div>
</footer>  
              
    
  
      

        

    

</>
    );
}

export default Home;







     