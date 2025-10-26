import Lottie from "lottie-react"
import SuccessAnimation from "../assets/animation/security-research.json"
import { ToastContainer,toast } from "react-toastify"
import { useState } from "react"
import axios from "axios"

export default function Login(){

    let [login,setLogin]=useState({
     email:"",
     password:"",
    })

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    function handledata(e){
        const{name,value}=e.target;
        setLogin((perv)=>({...perv,[name]:value}))
    }

    function handlesubmit(e){
        e.preventDefault()
    if(!(emailRegex.test(login.email))){
        toast.warning("Invaild Email")
    }
    if(!(passwordRegex.test(login.password))){
        toast.warning("Invaild Email")
    }
    console.log(login)
    try{
    let payload = {Email:login.email,Password:login.password}
    console.log(payload)
    axios.post("http://localhost:2005/login",payload)
    toast.success("Form Send Correctly")
    }catch(Error){
        console.log(Error)
    }
    }

    

    return(
        <>
        <Lottie animationData={SuccessAnimation} loop={true} style={{width:400}}/>
        <form action="" onSubmit={handlesubmit}>
        <input type="email" name="email" value={login.email} onChange={handledata}/>
        <input type="password" name="password" value={login.password} onChange={handledata}/>
        <input type="submit"/>
        </form>
        <ToastContainer position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable/>
        </>
    )
}