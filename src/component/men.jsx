import { useEffect,useState } from "react";
import "../style/men.css"

import { useNavigate } from "react-router-dom";
const Men = () => {
    let [men,setMen]=useState([])
    let [domi,setDomi]=useState([])
    let [favr,setFavr]=useState("")
    let nav=useNavigate()
   
    useEffect(()=>{
        let fetchData=async()=>{
           let res=await fetch('http://localhost:6600/men')
            let data=await res.json()
            setMen(data)
            setDomi(data)
            
        }
        fetchData()
    },[])

    
    let addFav=(id)=>{
        
      let res=men.filter((x)=>{
          if(x.id==id){
            let title=x.title
            let image=x.image
             let price=x.price
             let rating=x.rating
              fetch("http://localhost:10000/fav",{
          method:'POST',
          headers:{'Content-Type' : 'application/json'},
         
          body:JSON.stringify({title,image,price,rating})
      })
          }
      })
      alert("added to favrates")
    }
// posting the data to car.json
let cart=(id)=>{
  men.filter((x)=>{
    if(x.id==id){
      fetch('http://localhost:7700/cart',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({image:x.image,title:x.title,price:x.price,rating:x.rating})
      })
      alert("added to cart")
    }
    
  })
}
    //filter function

    //price
    const low = () => {
      const sortedData = [...domi].sort((a, b) => a.price - b.price);
      setMen(sortedData);
    };

    

    const high=()=>{
      let sortedData=[...domi].sort((a,b)=>b.price - a.price)
      setMen(sortedData)
    }

    const rating=()=>{
      
      let sortData=[...domi].sort((a,b)=>b.rating-a.rating)
      setMen(sortData)
    }
    const under500=()=>{
     
      let res=domi.filter((x)=>x.price<=500)
      setMen(res)
    }
    const great500=()=>{
     
      let res=domi.filter((x)=>{
        if(x.price>=500 && x.price<=1000){
          return x
        }
       })
  setMen(res)
    }


    const great1000=()=>{
     
      let res=domi.filter((x)=>{
        if(x.price>=1000 && x.price<=2000){
          return x
        }
    })
      setMen(res)
    }
    const great2000=()=>{
     
      let res=domi.filter((x)=>x.price>=2000)
      setMen(res)
    }

    //rating
    const above4=()=>{
     
      let res=domi.filter((x)=>x.rating>=4)
      setMen(res)
    }
    const above3=()=>{
     
      let res=domi.filter((x)=>x.rating>=3)
      setMen(res)
    }

  

   
   
    return ( 
        <div className="men">
          <div className="sidebar">
          <h2>Men's Store</h2>
          <h3>Filter</h3>
           <div className="filter">
           <ul type='square'>
            <li><h6>Price</h6></li>
            <button onClick={low}>price(Low to High)</button>
          <button onClick={high}>price(High to Low)</button>
          <span onClick={under500}>under &#8377;500</span>
          <span onClick={great500}>&#8377;500-&#8377;1000</span>
          <span onClick={great1000}>&#8377;1000-&#8377;2000</span>
          <span onClick={great2000}>&#8377;2000-&#8377;3000</span>
          <hr/>	
          <li><h6>Customer Rating</h6></li>
          <button onClick={rating}>High Rating</button>
          <span onClick={above4}>4&#9733; & above</span>
          <span onClick={above3}>3&#9733; & above</span>
           </ul>
           
           
          
          
           
           </div>
          </div>
          <div>
              {
                men.map((x)=>{
                    return(
                        <div className="menss">
                          <div className="menImage">
                            <img src={x.image} alt="" height={200} width={180} />
                          </div>
                          <div className="details">
                          <p className="h1p">{x.title}</p>
                         <span onClick={()=>addFav(x.id)}>&#x2661;</span>
                          <h6 className="h1p">&#8377;{x.price}</h6>
                         <small> <small>Free Delivary</small></small>
                          <span id="rat">{x.rating}&#9734;</span>
                          <button onClick={()=>cart(x.id)} className="btn btn-outline-secondary " id="addcart" ><ion-icon name="cart-outline"></ion-icon>
Add to Cart</button>
                         
                          </div>
                        </div>
                    )
                })
              }
              </div>
        </div>
     );
}
 
export default Men;