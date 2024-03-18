import React from "react";
import "./Sidebar.css"
import ButtonSidebar from "../ButtonsSidebar/ButtonSidebar";

function Sidebar(){
    return(
        <div className="sidebar">
            <div className="card-products">
                <ButtonSidebar/>
            </div>
        </div>  
    )
}

export default Sidebar;
