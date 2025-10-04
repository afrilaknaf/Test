import { useState } from "react";
import "../Styles/MobileNavbar.css"
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

export default function MobileNavbar({a}){

    return(
        <>
          <div className="MobileNav">
            <div id="closebutton">
            <button onClick={a}  ><CloseTwoToneIcon /></button>
            </div>
            <ol>
                <li>DashBoard</li>
                <li>Login</li>
                <li>Signup</li>
                <li>Logout</li>
            </ol>
        </div>  
       
        </>
    )
}