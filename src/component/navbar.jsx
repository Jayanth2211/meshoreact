import meeshologo from "../image/Meeshologo.svg"

import phonelogo from "../image/pohonelogo.png"

import { useRef, useState ,useEffect} from "react"
import "../style/navbar.css"
import { useNavigate } from "react-router-dom"
import playstore from "../image/playstore.png"
import applestore from "../image/appstore-icon-big.png"
import { Link } from "react-router-dom"
import carts from "../image/ecart.png"
const Navbar = () => {
    let navigat=useNavigate()

   
    let sigup=()=>{
     
     navigat("/sign")
    }

    let [cartt,setCart]=useState([])

      useEffect(()=>{
        let fetchData=async()=>{
          let res=await fetch('http://localhost:7700/cart')
          let data=await res.json()
          setCart(data)
        }
        fetchData()
      })

    return ( 
        <div className="parentNav ">
        <div className="navbar">
            <div className="logo">
                <img src={meeshologo} alt="" />
               

                <div className="serchbar">
                <span class="material-symbols-outlined">
search
</span>
               
                    <input type="text" placeholder="Try Saree, Kurti or Search by Product Code" />
               
                </div>
                </div>

                <div className="conn">
                <div className="suplier">
            <Link to='/'>Home</Link>
        </div>|
                    <div className="download1">
                <div className="download">
      
                <span class="material-symbols-outlined">
phone_iphone
</span>
        
            <a href="">Download All</a>
        </div>
        <div className="downConntent">
                <h6>Download Form</h6>
                <Link style={{display:"block",marginBottom:"5px"}} to='https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow'><img src={playstore} alt="" height={30} width={130} /></Link>
                <Link to='https://apps.apple.com/us/app/meesho/id1457958492'><img src={applestore} alt="" height={30} width={130} /></Link>
                
            </div>
      </div>|
      <div className="faurites">
        <Link to="/fav"><span>&#x2661;Fav</span></Link>
      </div>|
      

        <div className="profileAll">
        <div className="profile">
          
        <span class="material-symbols-outlined py-0">
person
</span>
            
                <a href="" class="py-0">Profile</a>
            
        </div>
        <div className="profileInside">
            <p>Hello User</p>
           <small><small>To access your Meesho account</small></small> 
            <button className="btn-btn-outline-dark" onClick={sigup}>SignUp</button>
        </div>
    
        </div> |
        <div className="cart">
          
        <div>
          <img src={carts} alt="" height={25} width={25} />
          
<sup>{cartt.length}</sup>
</div>
      
          <a href="">Cart</a>
      
  </div>
  
  </div>
  
                
                
              
                </div>
               
               
              <div className="link" >
                <ul>
                    
                    
                        
                    <li><Link to="/women">Women</Link></li>
                    <li><Link to="/men">Men</Link></li>
                    <li><Link to="/kid">Kids</Link></li>
                    
                   
                   
                    <li><a href="" id="bags">Bags & Footwear</a></li>
                    <li><Link to="/electron">Electronic</Link></li>
                </ul>
              </div>
      
            
       </div>
     );
}
 
export default Navbar;
