import "./FeaturedProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
        <img src="./hotel1.jpg" alt="" className="fpImg" />
         <span className="fpName">Aparthotel Stare Miasto</span>
         <span className="fpCity">Madrid</span>
         <span className="fpPrice">Starting from $120</span>
         <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
         </div>
        </div>
      <div className="fpItem">
      <img src="./hotel2.jpg" alt="" className="fpImg" />
         <span className="fpName">Blue Light</span>
         <span className="fpCity">Dubai</span>
         <span className="fpPrice">Starting from $680</span>
         <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
         </div>
      </div>
      <div className="fpItem">
      <img src="./hotel3.jpg" alt="" className="fpImg" />
         <span className="fpName">The Columbia Hotel</span>
         <span className="fpCity">Columbia</span>
         <span className="fpPrice">Starting from $109</span>
         <div className="fpRating">
            <button>6.7</button>
            <span>Good</span>
         </div>
        </div>
    </div>
    
  )
}

export default FeaturedProperties
