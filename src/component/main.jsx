import freeDelivery from "../image/freeDelivery.svg"
import cod from "../image/cod.svg"
import easy from "../image/easyReturns.svg"
import "../style/main.css"
import mainImage from "../image/mainImage.webp"
import playsmallIcon from "../image/playstoreSmallIcon.png"
import { Link } from "react-router-dom"
const Main = () => {
    return ( 
        <div className="main">
            <div className="mainc">
            <div className="mainContent">
                <h2>Lowest Prices <br/>Best Quality Shopping</h2>
                <div className="DelContent">
                    <div className="freeDEl">
                        <img src={freeDelivery} alt="" />
                     
                     <div className="deliveryLink" >
                     <a href="">free Delivary</a>
                     </div>
                    </div>| 

                    <div className="freeDEl">
                        <img src={cod} alt="" />
                     
                     <div className="deliveryLink" >
                     <a href="">cash on Delivary</a>
                     </div>
                    </div>|

                    <div className="freeDEl">
                        <img src={easy} alt="" />
                     
                     <div className="deliveryLink" >
                     <a href="">Easy Returns</a>
                     </div>
                    </div>
                    
                </div>
                <div className="vistPlaystore">
                        <img src={playsmallIcon} alt="" />
                        <Link to="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow">Download the Meesho App</Link>
                    </div>
            </div>
            </div>
            <div className="show">
                <img src={mainImage} alt="" />
            </div>
        </div>
     );
}
 
export default Main;