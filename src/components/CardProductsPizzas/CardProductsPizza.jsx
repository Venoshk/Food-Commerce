import React, { useContext } from "react";
import "./CardPizza.css";
import pizzas from "./PizzasData";
import AppContext from "../context/AppContext";

import { IoIosAddCircleOutline } from "react-icons/io";
import formatCurrency from "../../utils/formateCurrency";
import truncateText from "../../utils/truncateText";

function CardPizza() {
    const { selectedProduct, setSelectedItem, cartItems, setCartItems } = useContext(AppContext);

    const handleItemClick = (pizza) => {
        setSelectedItem(pizza);
    };

    const handleAddCart = (pizza) => {
        setCartItems([...cartItems, pizza]);
    };

    return (
        <section className="container-card">
            {selectedProduct === 'Pizza' && (
                <div className="content__card">
                    {pizzas.map((pizza) => (
                        <div
                            key={pizza.id}
                            className={`card ${selectedProduct && selectedProduct.id === pizza.id ? 'selected' : ''}`}
                            onClick={() => handleItemClick(pizza)}
                        >
                            <div className="title">
                                <h3>{pizza.name}</h3>
                            </div>

                            <img src={pizza.image} alt="Produto" />

                            <div className="card__infos">
                                <h2 className="card__description">{truncateText(pizza.description)}</h2>
                                <h2 className="card__price">{formatCurrency(pizza.price, 'BRL')}</h2>
                            </div>

                            <button 
                                type="button" 
                                className="add-to-cart-btn"
                                onClick = {() => handleAddCart(pizza)}
                            >
                                <IoIosAddCircleOutline/>

                            </button>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default CardPizza;
