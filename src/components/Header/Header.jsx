import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Logo from "../Logo/Logo";
import "./Header.css";
import Cart from "../Cart/Cart";
import CartButton from "../CartButton/CardButton";


function Header(){
    const {selectedProduct} = useContext(AppContext);

    // Função para alternar o estado da sibebar
    return(
        <header className=" header">
            <div className="title">
                <Logo/>
                <Cart/>
                <div className="btn_open_menu">
                    <CartButton/>
                </div> 
                <h2>__ <span>{selectedProduct ? selectedProduct : "Disponiveis"}</span></h2>
            </div>    
        </header>
       
    )
}

export default Header