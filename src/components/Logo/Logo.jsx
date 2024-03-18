import React from "react";
import "./Logo.css"
import { CiPizza } from "react-icons/ci";
function Logo(){
    return(
        <div className="content_logo">
                <CiPizza/>
            <div className="title">
                <h2>Food</h2>
                <p>Commerce</p>
            </div>
        </div>
    )
}

export default Logo;