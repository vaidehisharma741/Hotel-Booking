import "./SearchItem.css"

const SearchItem = () => {
  return (
    <div className="search">
    <div className="searchItem">
      <img 
         src="./hotel4.jpg" 
         alt=""
         className="siImg" 
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">400m from center</span>
        <span className="siTaxi">Free Airport Taxi</span>
        <span className="siSubTitle">Apartment with Air Conditioner</span>
        <span className="siFeatures">Entire Studio,1 bathroom,4 rooms and 1 hall</span>
        <span className="siCancel">Free Cancellation</span>
        <span className="siCancelSubtitle">You can cancel later , so lock in this price
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>7.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice2">Price: $164</span>
          <span className="siTaxi2">Include Taxes and Fees</span>
          <button className="checkBtn">See Availability</button>
        </div>
      </div>
      
    </div>
    </div>
    
 
    
  )
}

export default SearchItem
