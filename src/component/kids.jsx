import { useState,useEffect } from "react";
import "../style/kids.css"
import { useNavigate } from "react-router-dom";
const Kids = () => {
    let [kid1,setKid]=useState([])
    let navigat=useNavigate()

    

    useEffect(()=>{
        let fetchData=async()=>{
      let res=await fetch("http://localhost:4400/kids")
      let data=await res.json()
      setKid(data)
        }
        fetchData()
    },[])

    let addFav=(id)=>{
        let res=kid1.filter((x)=>{
            if(x.id==id){
                console.log(x);
                fetch("http://localhost:10000/fav",{
                    method:"POST",

                    headers:{'Content-Type' : 'application/json'},
                    body:JSON.stringify(x)
                })
            }
        })

        

        
        alert("added Favourites")
        navigat('/fav')

    }
    return ( 
        <div className="kids">
            {
                kid1.map((x)=>{
                   
                             return(
                                 <div className="kid">
                              <div className="kidImage">
                                 <img src={x.image} alt="" height={200} width={180}/>
                                 
                              </div>
                              <p  className="pp" >{x.title}</p>
                            
                              
                              
                              <button onClick={()=>addFav(x.id)}>&#x2661;</button>
                              
                              <h3 className="pp">&#8377;{x.price} </h3>
                              <small>Free Delivary</small>
                              <h3 id="rat">{x.rating}*</h3>
             
                                 </div> 
                    )
                })
            }

        </div>
     );
}
 
export default Kids;