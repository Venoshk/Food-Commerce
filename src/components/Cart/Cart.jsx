import React, { useContext } from "react";
import "./Cart.css"
import CartItem from "../CartItem/CartItem";
import AppContext from "../context/AppContext";
import formateCurrency from "../../utils/formateCurrency";

import { GrClose } from "react-icons/gr";
function Cart(){

    const { cartItems, isCartVisible, setIsCartVisible} = useContext(AppContext);

    const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

    return(
        <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
            <button 
                type="button"
                className="cart__button_close"
                onClick={() => setIsCartVisible(!isCartVisible)}
                >
            <GrClose/>
        </button>
            <div className="cart-items">
              { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem}/>)}
            </div>

            <div className="cart-resume">
            Total a pagar:<span>{formateCurrency(totalPrice, "BRL")}</span>
            </div>
        </section>
    )
};

export default Cart;