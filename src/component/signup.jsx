import "../style/sign.css"
import { useRef } from "react"


const SignUp = () => {
    let codes=useRef("")
    let inputOTP=useRef("")
  let otp=Math.trunc(Math.random()*10000)
 let getOpt=(n)=>{
    n.preventDefault()
   codes.current.style.display='list-item'
  

 }
 

 let signUp=(n)=>{
    n.preventDefault()

     if(inputOTP.current.value==otp){
       
      
        alert('sigUP Successful')
    }
    else{
        alert('invalid Otp')
    }

   }

    return ( 
        <div className="singup">
          <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="" className="w-100"/>
          <h6 className="text-center my-3">Sign Up to view your profile</h6>
            <div className="otpBox">
                <p ref={codes}>your otp {otp}</p>
            </div>
            
            <form action="" onSubmit={getOpt}>
            <input type="tel" className="border border-top-dark" pattern="[0-9]{10}" required placeholder="Phone number" />
            <button id="otp" >get otp</button>
            <input ref={inputOTP} type="tel" pattern="[0-9]{4}" placeholder="enter the otp"/>
            <button id="sign" onClick={signUp}>SignUp</button>
            </form>
        </div>
     );
}
 
export default SignUp;