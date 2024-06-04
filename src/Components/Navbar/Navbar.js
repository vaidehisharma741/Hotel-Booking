import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
       <div className="navContainer">
         <span className="logo">HotelBooking</span>
           <div className="navItems">
              <button className="navButton">Register</button>
              <button className="navButton">login</button>
           </div>
       </div>
    </div>
  )
}

export default Navbar
