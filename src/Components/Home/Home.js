import "./Home.css"
import Navbar from "../Navbar/Navbar"
import Header from "../Header/Header"
import Featured from "../Featured/Featured"
import PropertyList from "../PropertyList/PropertyList"
import FeaturedProperties from "../FeaturedProperties/FeaturedProperties"
import EmailList from "../EmailList/EmailList"
import Footer from "../Footer/Footer"
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse By Property Type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Home Guests</h1>
        <FeaturedProperties/>
        <EmailList/>
        
        <Footer/>
      </div>
    </div>
  )
}

export default Home
