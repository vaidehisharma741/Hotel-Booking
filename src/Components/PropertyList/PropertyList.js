import "./PropertyList.css"

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src="./image4.jpg" alt="" className="PListImg"/>
        <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>233 hotels</h2>

        </div>
      </div>
      <div className="pListItem">
        <img src="./image5.jpg" alt="" className="PListImg"/>
        <div className="pListTitles">
            <h1>Resorts</h1>
            <h2>321 hotels</h2>

        </div>
      </div>
      <div className="pListItem">
        <img src="./image6.jpg" alt="" className="PListImg"/>
        <div className="pListTitles">
            <h1>Apartments</h1>
            <h2>462 hotels</h2>

        </div>
      </div>
      <div className="pListItem">
        <img src="./image7.jpg" alt="" className="PListImg"/>
        <div className="pListTitles">
            <h1>Buildings</h1>
            <h2>234 hotels</h2>

        </div>
      </div>
    </div>
  )
}

export default PropertyList
