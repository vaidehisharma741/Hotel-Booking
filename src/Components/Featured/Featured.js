import "./Featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="./image1.jpg" alt="" className="featuredImg"/>
            <div className="featuredTitles">
                <h1>Tokyo</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="./image2.jpg" alt="" className="featuredImg"/>
            <div className="featuredTitles">
                <h1>Russia</h1>
                <h2>198 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="./image3.jpg" alt="" className="featuredImg"/>
            <div className="featuredTitles">
                <h1>Bharat</h1>
                <h2>890 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured
