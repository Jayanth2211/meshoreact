import meeshologo from "../image/Meeshologo.svg"

import phonelogo from "../image/pohonelogo.png"

import { useRef, useState ,useEffect} from "react"
import "../style/navbar.css"
import { useNavigate } from "react-router-dom"
import playstore from "../image/playstore.png"
import { Link } from "react-router-dom"
import carts from "../image/ecart.png"
const Navbar = () => {
    let navigat=useNavigate()

    let lin=useRef("")
    let sigup=()=>{
      lin.current.style.display="none"
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
                <h4>Download Form</h4>
                <Link to='https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow'><img src={playstore} alt="" height={30} width={130} /></Link>
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
               
               
              <div className="link" ref={lin}>
                <ul>
                    <li><a href="">Women Ethnic</a>
                    <div className="con1">
                        <div className="whomenEnthic">
                        <h3>All Women Ethnic</h3>
                        <a href="">View All</a>

           
                        </div>
                        <div className="Bottomwear">
                            <h3>saries</h3>
                        <a href="">All Sarees</a>
                        <a href="">Silk Sarees</a>
                        <a href="">Cotton Silk Sarees</a>
                        <a href="">Cotton Sarees</a>
                        <a href="">Georgette Sarees</a>
                        <a href="">Chiffon Sarees</a>
                        <a href="">Satin Sarees</a>
                        <a href="">Embroidered Sarees</a>


                        </div>

                        <div className="kurthies">
                        <h3>Kurtis</h3>
                        <a href="">All Kurtis</a>
                        <a href="">Anarkali Kurtis</a>
                        <a href="">Cotton Silk Sarees</a>
                        <a href="">Rayon Kurtis</a>
                        <a href="">Cotton Kurtis</a>
                        <a href="">Embroidered Kurtis</a>
                        </div>
                        <div className="Kurta">
                      <h3>Kurta Sets</h3>
                      <a href="">All Kurta Sets</a>
                        </div>

                        <div className="Suits">
                            <h3>Suits & Dress Material</h3>
                            <a href=""> All Suits & Dress Material</a>
                            <a href="">Cotton Suits</a>
                            <a href="">Embroidered Suits</a>
                            <a href="">Chanderi Suits</a>
                              </div>


                        </div></li>
                    <li><a href="">Women Western</a></li>
                    <li><Link to="/men">Men</Link></li>
                    <li><a href="">Kids</a></li>
                    <li><a href="">Home & Kitchen</a></li>
                    <li><a href="">Beauty & Health</a></li>
                    <li><a href="">Jewellery & Accessories</a></li>
                    <li><a href="">Bags & Footwear</a></li>
                    <li><a href="">Electronic</a></li>
                </ul>
              </div>
      
            
       </div>
     );
}
 
export default Navbar;