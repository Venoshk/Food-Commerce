import React, { useContext } from "react";
import { BsCartDashFill } from "react-icons/bs";
import "./CartItem.css"
import formateCurrency from "../../utils/formateCurrency";
import AppContext from "../context/AppContext";
function CartItem({data}){

    const {cartItems, setCartItems} = useContext(AppContext);

    const {id, image, name, price, description} = data;

    const handleRemoveItem = () =>{
        const updatedItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedItems);
    }

    return(
        <section className="cart-item">
            <img 
            src={image}
            alt="imagem do produto" 
            className="cart-item-image"
            />

            <div className="cart-item-content">
                <h3 className="cart-item-title">{name}</h3>
                <h2 className="cart-item-price">{formateCurrency(price, 'BRL')}</h2>
                <p className="cart-item-description">{description}</p>
                <button 
                type="button"
                className="button__remove-item"
                onClick={ handleRemoveItem }
                >
                    <BsCartDashFill />
                </button>
            </div>
            
        </section>
    )
}

export default CartItem;