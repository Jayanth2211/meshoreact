import { useState,useEffect } from "react";
import "../style/favraties.css"
const Favourites = () => {
    let [faurites,setFav]=useState([])

    useEffect(()=>{
        let fetchData=async()=>{
            let res=await fetch("http://localhost:10000/fav")
            let data=await res.json()
            setFav(data)

        }
        fetchData()
    },[])
    let del=(id)=>{
        let res=faurites.filter((x)=>x.id!=id)
        setFav(res)

    }
    return ( 
        <div className="favourites">
            <h1>Favourite&#x2661;</h1>
           {
            faurites.map((x)=>{
                return(
                    
                        <div className="fav">
                 <div className="favImage">
                    <img src={x.image} alt="" height={200} width={180}/>
                    
                 </div>
                 <p  className="h1p" >{x.title}</p>
               
                 <span onClick={()=>del(x.id)}>&#x2661;</span>
                 
                 
                 
                 <h3 className="h1p">&#8377;{x.price} </h3>
                 <small>Free Delivary</small>
                 <h4 id="rat">{x.rating}*</h4>

                    </div>
                )
            })
           }
        </div>
     );
}
 
export default Favourites;