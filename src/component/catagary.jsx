import whomenclothing from "../image/womenclothing.webp"
import menStor from "../image/menStore.webp"
import kids from "../image/kidsStore.webp"
import "../style/catagary.css"
import { Link } from "react-router-dom"

const Catagary = () => {
    return ( 
        <div className="catagary">
            <h1>Top Categories to choose from</h1>
            <div className="wholeBox">
                
                   
                    <div className="whomenStore1">
                        <Link to="/women"><img src={whomenclothing} alt="" height={300} width={300} /></Link>
                       
                    </div>
                    <div className="webstore2">
                      
                      <Link to="/men"><img src={menStor} alt="" height={200} width={200} /></Link> 
                       <Link to="/kid"><img src={kids} alt="" height={200} width={200} /></Link>
                    </div>
                   

               
            </div>
        </div>
     );
}
 
export default Catagary;