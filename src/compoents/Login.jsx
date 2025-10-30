import Lottie from "lottie-react"
import SuccessAnimation from "../assets/animation/security-research.json"
import { ToastContainer, toast } from "react-toastify"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Modal from "react-modal";
import "../Styles/Login.css"
import Cookies from "cookiesjs"

Modal.setAppElement("#root");

export default function Login() {

    let [login, setLogin] = useState({
        email: "",
        password: "",
    })
    let [loginsuccess, setLoginsuccess] = useState(false)
    let redirect = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    function handledata(e) {
        const { name, value } = e.target;
        setLogin((perv) => ({ ...perv, [name]: value }))
    }

    function handlesubmit(e) {
        e.preventDefault()
        if (!(emailRegex.test(login.email))) {
            toast.warning("Invaild Email")
        }
        if (!(passwordRegex.test(login.password))) {
            toast.warning("Invaild Email")
        }
        let payload = { Email: login.email, Password: login.password }
        axios.post("http://localhost:2005/login", payload).then((res) => {
            if (res.data.msg === "Login SuccessFull") {
                toast.success(res.data.msg)
                console.log(res.data.user)
                setTimeout(() => {
                    setLoginsuccess(true)
                }, 2500)
                setIsOpen(true)
            } else {
                toast.warning(res.data.msg)
            }
        }).catch((err) => {
            toast.error(err)
        })
    }

    function SuccessFullLogin() {
        setTimeout(() => { redirect("/") }, 5000)
    }



    return (
        <>
            {loginsuccess ? <div className="AnimationContent">
                
                    <Modal
                        isOpen={isOpen}
                        onRequestClose={() => setIsOpen(false)}
                        style={{
                            overlay: {
                                backgroundColor: "rgba(0,0,0,0.6)"
                            },
                            content: {
                                color: "#333",
                                width: "500px",
                                height: "500px",
                                margin: "auto",
                                borderRadius: "10px",
                                padding: "20px",
                                textAlign: "center"
                            }
                        }}>
                        <Lottie animationData={SuccessAnimation} loop={true} style={{ width: 400 }} />
                        <h1 className="text-green-600 font-bold text-3xl">Login Successfull</h1>
                    </Modal>
                
                {SuccessFullLogin()}
            </div> :
                <>
                    <div className="FormInputs">
                        <h1>Login</h1>
                        <form action="" onSubmit={handlesubmit}>
                            <input type="email" name="email" value={login.email} onChange={handledata} />
                            <input type="password" name="password" value={login.password} onChange={handledata} />
                            <input type="submit" />
                        </form>
                    </div>
                    <ToastContainer position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop
                        closeOnClick
                        pauseOnHover
                        draggable />
                </>
            }


        </>
    )
}