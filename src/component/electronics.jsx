import { useState } from "react"
import { Link } from "react-router-dom"
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
let Electronic=()=>{
    let [electronics,setEle]=useState([
      {
          "id":1,
          "type":"camara",
          "image":"https://rukminim2.flixcart.com/image/612/612/kamtsi80/dslr-camera/v/q/d/x-t4-26-mp-x-t4-fujifilm-original-imafs5jw3dtem9pp.jpeg?q=70",
          "title":"FUJIFILM X",
          "price":19000,
          "rating":4.4
      },
      {
          "id":2,
          "type":"camara",
          "image":"https://rukminim2.flixcart.com/image/612/612/xif0q/dslr-camera/p/b/w/2ca11623-40-x-h2-fujifilm-original-imagjzuzhgtmvmcv.jpeg?q=70",
          "title":"FUJIFILM H2",
          "price":21000,
          "rating":4.3
      },
      {
          "id":5,
          "type":"charger",
          "image":"https://rukminim2.flixcart.com/image/612/612/xif0q/battery-charger/p/p/n/33w-vooc-dart-wrap-rt01-with-type-c-cable-charging-adapter-original-imagkyzfazyzdjau.jpeg?q=70",
          "title":"SB 33 W Dash ",
          "price":509,
          "rating":3.7
      },
      {
          "id":6,
          "type":"charger",
          "image":"https://rukminim2.flixcart.com/image/612/612/xif0q/battery-charger/0/d/a/type-c-charger-for-zte-nubia-z18-qc-2-4-rapid-mi-vooc-afc-original-imagz4rzqyukhxvz.jpeg?q=70",
          "title":"UrCart 18 W ",
          "price":440,
          "rating":3.5
      },
      {
          "id":13,
          "type":"powerbank",
          "image":"https://rukminim2.flixcart.com/image/612/612/l5fnhjk0/power-bank/d/h/v/-original-imagg3utehnksuqz.jpeg?q=70",
          "title":"ORAIMO 20000 mAh",
          "price":999,
          "rating":4.1
      },
      {
          "id":14,
          "type":"powerbank",
          "image":"https://rukminim2.flixcart.com/image/416/416/l5fnhjk0/power-bank/u/v/f/-original-imagg3utd8nzx6hu.jpeg?q=70",
          "title":"ORAIMO 20000 mAh",
          "price":899,
          "rating":4.0
      },
      
      {
          "id":11,
          "type":"trimer",
          "image":"https://rukminim2.flixcart.com/image/416/416/l1nwnm80/trimmer/d/h/a/1-12-mm-mg3710-65-stainless-steel-cordless-philips-original-imagd69ektvggrf8.jpeg?q=70",
          "title":"PHILIPS MG37",
          "price":599,
          "rating":4.7
      },
      {
          "id":12,
          "type":"trimer",
          "image":"https://rukminim2.flixcart.com/image/612/612/kuof5ow0/trimmer/7/z/f/0-5-10-mm-bt3101-15-stainless-steel-cordless-philips-original-imag7r4r7ztgnuyk.jpeg?q=70",
          "title":"NOVA NHT",
          "price":699,
          "rating":4.8
      },

      {
          "id":3,
          "type":"camara",
          "image":"https://rukminim2.flixcart.com/image/612/612/jfbfde80/camera/n/r/n/canon-eos-3000d-original-imaf3t5hjrz6zzzc.jpeg?q=70",
          "title":"Canon EOS 3000D",
          "price":22000,
          "rating":4.5
      },
      {
          "id":4,
          "type":"camara",
          "image":"https://rukminim2.flixcart.com/image/612/612/kk01pjk0/sports-action-camera/6/o/g/action-shot-hd-action-shot-full-hd-12mp-1080p-black-helmet-original-imafzg4utqgwtfsv.jpeg?q=70",
          "title":"ALA Sports ",
          "price":25000,
          "rating":4.0
      },
    
      
      {
          "id":7,
          "type":"charger",
          "image":"https://rukminim2.flixcart.com/image/612/612/xif0q/battery-charger/e/e/r/45w-usb-c-nothing-phone-1-charger-power-adapter-jazx-original-imagquwscah2zkfb.jpeg?q=70",
          "title":"Jazx 45 W ",
          "price":540,
          "rating":4.1
      },
      {
          "id":8,
          "type":"charger",
          "image":"https://rukminim2.flixcart.com/image/312/312/xif0q/battery-charger/6/m/a/30w-4amp-fast-quick-vooc-charger-for-oppo-f19-pro-pro-f17-pro-original-imagghx4hk2uctfw.jpeg?q=70",
          "title":"SEYLFON 30 W",
          "price":599,
          "rating":4.2
      },
      {
          "id":9,
          "type":"trimer",
          "image":"https://rukminim2.flixcart.com/image/612/612/xif0q/trimmer/k/7/v/1-7-mm-bt1233-18-stainless-steel-cordless-philips-original-imagzgwgrdtxhgbu.jpeg?q=70",
          "title":"PHILIPS BT12",
          "price":599,
          "rating":4.1
      },
      {
          "id":10,
          "type":"trimer",
          "image":"https://rukminim2.flixcart.com/image/612/612/xif0q/trimmer/e/y/d/-original-imagpvfbvzyydyff.jpeg?q=70",
          "title":"VEGA SmartOne",
          "price":799,
          "rating":4.1
      },
      {
          "id":15,
          "type":"powerbank",
          "image":"https://rukminim2.flixcart.com/image/416/416/l5fnhjk0/power-bank/m/f/z/-original-imagg3utnefgyxkh.jpeg?q=70",
          "title":"Redmi 20000 mAh",
          "price":999,
          "rating":4.3
      },
      {
          "id":16,
          "type":"powerbank",
          "image":"https://rukminim2.flixcart.com/image/416/416/kqqykcw0/power-bank/9/8/d/pp-20-pro-pp-20-pro-ambrane-original-imag4zzhcfhgnnmw.jpeg?q=70",
          "title":"Ambrane 20000 mAh",
          "price":1119,
          "rating":4.4
      }

  ])
  let [domi,setdom]=useState([
    {
        "id":1,
        "type":"camara",
        "image":"https://rukminim2.flixcart.com/image/612/612/kamtsi80/dslr-camera/v/q/d/x-t4-26-mp-x-t4-fujifilm-original-imafs5jw3dtem9pp.jpeg?q=70",
        "title":"FUJIFILM X",
        "price":19000,
        "rating":4.4
    },
    {
        "id":2,
        "type":"camara",
        "image":"https://rukminim2.flixcart.com/image/612/612/xif0q/dslr-camera/p/b/w/2ca11623-40-x-h2-fujifilm-original-imagjzuzhgtmvmcv.jpeg?q=70",
        "title":"FUJIFILM H2",
        "price":21000,
        "rating":4.3
    },
    {
        "id":5,
        "type":"charger",
        "image":"https://rukminim2.flixcart.com/image/612/612/xif0q/battery-charger/p/p/n/33w-vooc-dart-wrap-rt01-with-type-c-cable-charging-adapter-original-imagkyzfazyzdjau.jpeg?q=70",
        "title":"SB 33 W Dash ",
        "price":509,
        "rating":3.7
    },
    {
        "id":6,
        "type":"charger",
        "image":"https://rukminim2.flixcart.com/image/612/612/xif0q/battery-charger/0/d/a/type-c-charger-for-zte-nubia-z18-qc-2-4-rapid-mi-vooc-afc-original-imagz4rzqyukhxvz.jpeg?q=70",
        "title":"UrCart 18 W ",
        "price":440,
        "rating":3.5
    },
    {
        "id":13,
        "type":"powerbank",
        "image":"https://rukminim2.flixcart.com/image/612/612/l5fnhjk0/power-bank/d/h/v/-original-imagg3utehnksuqz.jpeg?q=70",
        "title":"ORAIMO 20000 mAh",
        "price":999,
        "rating":4.1
    },
    {
        "id":14,
        "type":"powerbank",
        "image":"https://rukminim2.flixcart.com/image/416/416/l5fnhjk0/power-bank/u/v/f/-original-imagg3utd8nzx6hu.jpeg?q=70",
        "title":"ORAIMO 20000 mAh",
        "price":899,
        "rating":4.0
    },
    
    {
        "id":11,
        "type":"trimer",
        "image":"https://rukminim2.flixcart.com/image/416/416/l1nwnm80/trimmer/d/h/a/1-12-mm-mg3710-65-stainless-steel-cordless-philips-original-imagd69ektvggrf8.jpeg?q=70",
        "title":"PHILIPS MG37",
        "price":599,
        "rating":4.7
    },
    {
        "id":12,
        "type":"trimer",
        "image":"https://rukminim2.flixcart.com/image/612/612/kuof5ow0/trimmer/7/z/f/0-5-10-mm-bt3101-15-stainless-steel-cordless-philips-original-imag7r4r7ztgnuyk.jpeg?q=70",
        "title":"NOVA NHT",
        "price":699,
        "rating":4.8
    },

    {
        "id":3,
        "type":"camara",
        "image":"https://rukminim2.flixcart.com/image/612/612/jfbfde80/camera/n/r/n/canon-eos-3000d-original-imaf3t5hjrz6zzzc.jpeg?q=70",
        "title":"Canon EOS 3000D",
        "price":22000,
        "rating":4.5
    },
    {
        "id":4,
        "type":"camara",
        "image":"https://rukminim2.flixcart.com/image/612/612/kk01pjk0/sports-action-camera/6/o/g/action-shot-hd-action-shot-full-hd-12mp-1080p-black-helmet-original-imafzg4utqgwtfsv.jpeg?q=70",
        "title":"ALA Sports ",
        "price":25000,
        "rating":4.0
    },
  
    
    {
        "id":7,
        "type":"charger",
        "image":"https://rukminim2.flixcart.com/image/612/612/xif0q/battery-charger/e/e/r/45w-usb-c-nothing-phone-1-charger-power-adapter-jazx-original-imagquwscah2zkfb.jpeg?q=70",
        "title":"Jazx 45 W ",
        "price":540,
        "rating":4.1
    },
    {
        "id":8,
        "type":"charger",
        "image":"https://rukminim2.flixcart.com/image/312/312/xif0q/battery-charger/6/m/a/30w-4amp-fast-quick-vooc-charger-for-oppo-f19-pro-pro-f17-pro-original-imagghx4hk2uctfw.jpeg?q=70",
        "title":"SEYLFON 30 W",
        "price":599,
        "rating":4.2
    },
    {
        "id":9,
        "type":"trimer",
        "image":"https://rukminim2.flixcart.com/image/612/612/xif0q/trimmer/k/7/v/1-7-mm-bt1233-18-stainless-steel-cordless-philips-original-imagzgwgrdtxhgbu.jpeg?q=70",
        "title":"PHILIPS BT12",
        "price":599,
        "rating":4.1
    },
    {
        "id":10,
        "type":"trimer",
        "image":"https://rukminim2.flixcart.com/image/612/612/xif0q/trimmer/e/y/d/-original-imagpvfbvzyydyff.jpeg?q=70",
        "title":"VEGA SmartOne",
        "price":799,
        "rating":4.1
    },
    {
        "id":15,
        "type":"powerbank",
        "image":"https://rukminim2.flixcart.com/image/416/416/l5fnhjk0/power-bank/m/f/z/-original-imagg3utnefgyxkh.jpeg?q=70",
        "title":"Redmi 20000 mAh",
        "price":999,
        "rating":4.3
    },
    {
        "id":16,
        "type":"powerbank",
        "image":"https://rukminim2.flixcart.com/image/416/416/kqqykcw0/power-bank/9/8/d/pp-20-pro-pp-20-pro-ambrane-original-imag4zzhcfhgnnmw.jpeg?q=70",
        "title":"Ambrane 20000 mAh",
        "price":1119,
        "rating":4.4
    }

])

let addFav=(id)=>{
        
  let res=electronics.filter((x)=>{
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

 let navigate=useNavigate()
  // posting the data to car.json
let cart=(id)=>{
  electronics.filter((x)=>{
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
      setEle(sortedData);
    };

    

    const high=()=>{
      let sortedData=[...domi].sort((a,b)=>b.price - a.price)
      setEle(sortedData)
    }

    const rating=()=>{
      
      let sortData=[...domi].sort((a,b)=>b.rating-a.rating)
      setEle(sortData)
    }
    const under500=()=>{
     
      let res=domi.filter((x)=>x.price<=500)
      setEle(res)
    }
    const great500=()=>{
     
      let res=domi.filter((x)=>{
        if(x.price>=500 && x.price<=1000){
          return x
        }
       })
  setEle(res)
    }


    const great1000=()=>{
     
      let res=domi.filter((x)=>{
        if(x.price>=1000 && x.price<=2000){
          return x
        }
    })
      setEle(res)
    }
    const great2000=()=>{
     
      let res=domi.filter((x)=>x.price>=2000)
      setEle(res)
    }

    //rating
    const above4=()=>{
     
      let res=domi.filter((x)=>x.rating>=4)
      setEle(res)
    }
    const above3=()=>{
     
      let res=domi.filter((x)=>x.rating>=3)
      setEle(res)
    }

    let camara=()=>{
     let res=domi.filter((x)=>x.type=='camara')
     setEle(res)
    }

    let charger=()=>{
      let res=domi.filter((x)=>x.type=='charger')
      setEle(res)
     }
     let powerbank=()=>{
      let res=domi.filter((x)=>x.type=="powerbank")
      setEle(res)
     }
 
     let trimer=()=>{
       let res=domi.filter((x)=>x.type=='trimer')
       setEle(res)
      }

  return(
   
    <div className="men">
       <div className="sidebar">
          <h2>Men's Store</h2>
          <h3>Filter</h3>
           <div className="filter">
           <ul type='square'>
           <li><h6>Category</h6></li>
           <button onClick={camara}>Camara</button>
           <button onClick={charger}>Phone Charger</button>
           <button onClick={powerbank}>Power Bank</button>
           <button onClick={trimer}>Trimmer</button>
           
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
                electronics.map((x)=>{
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
    
  
 
  )  
}
export default Electronic