import { useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";
export default function Signup() {

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confrimPassword, setConfrimPassword] = useState("");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let page = useNavigate()

    function checkpoint(e) {
        e.preventDefault();
        if (!(name.length >= 3)) {
            toast.warning("Invaild Name")
            return;
        }
        if (!(emailRegex.test(email))) {
            toast.warning("Invaild Email")
            return;
        }
        if (!(passwordRegex.test(password))) {
            toast.warning("Invaild Password")
            return;
        }
        if (!(confrimPassword === password)) {
            toast.warning("Invaild Password")
            return;
        }

        let payload = { Name: name, Email: email, Password: password }

        axios.post("http://localhost:2005/signup", payload).then((res) => {
            console.log(res.data)
            toast.success("Form Submitted Successfully")
            setTimeout(() => {
                page("/")
            }, 3000)
        }).catch((err) => {
            console.log(err)
            toast.warning("Error on Form")
        })
    }
    return (
        <div className="bg-black w-full h-[100vh] justify-center items-center flex flex-col gap-[20px]  sm:bg-red-200 md:bg-red-400 lg:bg-black">
            <h1 className="text-white text-4xl">Signup</h1>
            <form action="" className="w-[500px] h-[400px] flex flex-col justify-center items-center bg-transparent border-2 border-white rounded-4xl ">
                <input value={name} onChange={(e) => {
                    setName(e.target.value)
                }} type="text" placeholder="Enter the Name Here" className="mb-[20px] bg-transparent p-3 text-white backdrop-blur-3xl border-2 w-[300px] h-[55px] rounded-2xl " />
                <br />
                <input value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} type="email" placeholder="Enter the Email Here" className="mb-[20px] bg-transparent p-3 text-white backdrop-blur-2xl border-2 w-[300px] h-[55px] rounded-2xl" />
                <br />
                <input value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} type="password" placeholder="Enter the Password Here" className="mb-[20px] bg-transparent p-3 text-white backdrop-blur-2xl border-2 w-[300px] h-[55px] rounded-2xl " />
                <br />
                <input value={confrimPassword} onChange={(e) => {
                    setConfrimPassword(e.target.value)
                }} type="password" placeholder="Enter the Password Here" className="mb-[20px] bg-transparent p-3 text-white backdrop-blur-2xl border-2 w-[300px] h-[55px] rounded-2xl " />

                <input type="submit" onClick={checkpoint} className="border-white text-white border-2 w-[300px] h-[55px] rounded-2xl" />
            </form>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnHover
                draggable
            />
        </div>
    )
}