import { useState,useEffect } from "react";
import "../style/kids.css"
import { useNavigate } from "react-router-dom";
const Kids = () => {
    let [kid1,setKid]=useState([])
    let [domi,setDomi]=useState([])
    let navigat=useNavigate()

    

    useEffect(()=>{
        let fetchData=async()=>{
      let res=await fetch("http://localhost:4400/kids")
      let data=await res.json()
      setKid(data)
      setDomi(data)
        }
        fetchData()
    },[])

    let cart=(id)=>{
        kid1.filter((x)=>{
            if(x.id==id){
                let image=x.image
                let title=x.title
                let price=x.price
                let rating=x.rating
                fetch('http://localhost:7700/cart',{
                    method:'POST',
                    headers:{'Content-Type':'application'},
                    body:JSON.stringify({image,title,price,rating})
                })
                alert('added to favourites')
            }
        })
    }

    let addFav=(id)=>{
        
      let res=kid1.filter((x)=>{
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
        

        
        
      
    

    //filter function

    //price
    const low = () => {
        const sortedData = [...domi].sort((a, b) => a.price - b.price);
        setKid(sortedData);
      };
  
      
  
      const high=()=>{
        let sortedData=[...domi].sort((a,b)=>b.price - a.price)
        setKid(sortedData)
      }
  
      const rating=()=>{
        
        let sortData=[...domi].sort((a,b)=>b.rating-a.rating)
        setKid(sortData)
      }
      const under500=()=>{
       
        let res=domi.filter((x)=>x.price<=500)
        setKid(res)
      }
      const great500=()=>{
       
        let res=domi.filter((x)=>{
          if(x.price>=500 && x.price<=1000){
            return x
          }
         })
    setKid(res)
      }
  
  
      const great1000=()=>{
       
        let res=domi.filter((x)=>{
          if(x.price>=1000 && x.price<=2000){
            return x
          }
      })
        setKid(res)
      }
      const great2000=()=>{
       
        let res=domi.filter((x)=>x.price>=2000)
        setKid(res)
      }
  
      //rating
      const above4=()=>{
       
        let res=domi.filter((x)=>x.rating>=4)
        setKid(res)
      }
      const above3=()=>{
       
        let res=domi.filter((x)=>x.rating>=3)
        setKid(res)
      }
  
    return ( 
        <div className="kids">
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
                kid1.map((x)=>{
                   
                             return(
                                 <div className="kid">
                              <div className="kidImage">
                                 <img src={x.image} alt="" height={200} width={180}/>
                                 
                              </div>
                              <div className="details">
                              <p  className="pp" >{x.title}</p>
                            
                              <span onClick={()=>addFav(x.id)}>&#x2661;</span>
                              
                              
                              
                              <h6 className="pp">&#8377;{x.price} </h6>
                              <small><small>Free Delivary</small></small>
                              <span id="rat">{x.rating}*</span>
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
 
export default Kids;