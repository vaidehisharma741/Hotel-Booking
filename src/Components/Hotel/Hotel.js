import "./Hotel.css"
import Navbar from "../Navbar/Navbar"
import Header from "../Header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import EmailList from "../EmailList/EmailList"
import Footer from "../Footer/Footer"
import { useState } from "react"

const Hotel = () => {
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
        <div className="hotelContainer">
          <div className="hotelWrapper">
          <button className="PriceBtn">Reserve or Book Now</button>
            <h1 className="hotelTitle">Madrid Hotel</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot}/>
              <span>Elton St 890, Madrid</span>
            </div>
            <span className="hotelDistance">
              Excellent Location - 400m from center
            </span>
            <span className="hotelPrice">
              Book a stay $278 at this hotel and get a free taxi
            </span>
            <div className="hotelImages">
              <img src="../building1.jpg" width={"100px"} alt="" className="hotelImg" />
              <img src="../building2.jpg" width={"100px"}alt="" className="hotelImg" />
              <img src="../building3.jpg" width={"100px"}alt="" className="hotelImg" />
              <img src="../building4.jpg" width={"100px"}alt="" className="hotelImg" />
              <img src="../building5.jpg" width={"100px"}alt="" className="hotelImg" />
              <img src="../building6.jpg" width={"100px"}alt="" className="hotelImg"/>
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className="hotelTitle">Place where you feel alived</h1>
                <p className="hotelDesc">
                  Located a 10-minute walk from city , Tower Street Apartments has accomodations with air conditioning and free wifi. The units come with hardwood floors and feature a fully equiped kitchenette with a microwave , a flat screen TV , a private bathroom with shower . A fridge is also offered as well as all the necessary utensils. The airport is also near the location and the apartment offered a free airport services.
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1 className="PriceTitle">Perfect for a 10-nights Stay</h1>
                <p>Located near the city of Madrid, this apartment has an excellent location score of 8.9</p>
                <h2 className="Price">$899(10 Nights)</h2>
                

              </div>
            </div>
          </div>
          
        </div>
        <EmailList/>
        <Footer/>
    </div>
  )
}

export default Hotel
