import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/women.css"

const Women = () => {
    let [women,setW]=useState([])
    let [domi,setDomi]=useState([])
  
    
    let navigat=useNavigate()

   

   

    

    useEffect(()=>{
        let fetchData=async()=>{
            
          let res=await fetch("http://localhost:5000/women")
          let data=await res.json()
          
            setW(data)
            setDomi(data)
        }
        fetchData()
    },[])

    let addFav=(id)=>{
        
        let res=women.filter((x)=>{
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


        
        
        
alert("added successfull")
  
 navigat('/fav')
    
    }

    let addcart=(id)=>{
     

        women.filter((x)=>{
            if(x.id==id){
                let title=x.title
                let image=x.image
                 let price=x.price
                 let rating=x.rating
                fetch('http://localhost:7700/cart' ,{
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    
                     body:JSON.stringify({title,image,price,rating})
                     
                    
                })
              
               
              
            }
        })
    

        
    }
    //filter function

    //price
    const low = () => {
        const sortedData = [...domi].sort((a, b) => a.price - b.price);
        setW(sortedData);
      };
  
      
  
      const high=()=>{
        let sortedData=[...domi].sort((a,b)=>b.price - a.price)
        setW(sortedData)
      }
  
      const rating=()=>{
        
        let sortData=[...domi].sort((a,b)=>b.rating-a.rating)
        setW(sortData)
      }
      const under500=()=>{
       
        let res=domi.filter((x)=>x.price<=500)
        setW(res)
      }
      const great500=()=>{
       
        let res=domi.filter((x)=>{
          if(x.price>=500 && x.price<=1000){
            return x
          }
         })
    setW(res)
      }
  
  
      const great1000=()=>{
       
        let res=domi.filter((x)=>{
          if(x.price>=1000 && x.price<=2000){
            return x
          }
      })
        setW(res)
      }
      const great2000=()=>{
       
        let res=domi.filter((x)=>x.price>=2000)
        setW(res)
      }
  
      //rating
      const above4=()=>{
       
        let res=domi.filter((x)=>x.rating>=4)
        setW(res)
      }
      const above3=()=>{
       
        let res=domi.filter((x)=>x.rating>=3)
        setW(res)
      }


    return ( 
        <div className="women">
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
            women.map((x)=>{
                return(
                    <div className="wom">
                 <div className="womenImage">
                    <img src={x.image} alt="" height={200} width={180}/>
                    
                 </div>
                 <p  className="pp" >{x.title}</p>
               
                 <span onClick={()=>addFav(x.id)}>&#x2661;</span>
                 
                
                 
                 <h6 className="h1p">&#8377;{x.price} </h6>
                 <small>Free Delivary</small>
                 <h4 id="rat">{x.rating}*</h4>

                 <button onClick={()=>addcart(x.id)} className="btn btn-outline-secondary " id="addcart" ><ion-icon name="cart-outline"></ion-icon>
Add to Cart</button>

                    </div>
                )
            })
           }
           </div>
        </div>
     );
}
 
export default Women;