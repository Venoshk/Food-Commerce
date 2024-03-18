import React, { useContext } from "react";
import hamburguer from "./HamburgueresData.js";
import AppContext from "../context/AppContext";
import { RiShoppingCartLine } from "react-icons/ri";
import formatCurrency from "../../utils/formateCurrency";
import truncateText from "../../utils/truncateText.js";

function CardHamburgue() {
    const { selectedProduct, setSelectedItem, cartItems, setCartItems } = useContext(AppContext);

    const handleItemClick = (hamburguer) => {
        setSelectedItem(hamburguer);
    };

    const handleAddCart = (hamburguer) => {
        setCartItems([...cartItems, hamburguer]);
    };

    return (
        <section className="container-card">
            {selectedProduct === 'Hambúrgeres' && (
                <div className="content__card">
                    {hamburguer.map((hamburguer) => (
                        <div
                            key={hamburguer.id}
                            className={`card ${selectedProduct && selectedProduct.id === hamburguer.id ? 'selected' : ''}`}
                            onClick={() => handleItemClick(hamburguer)}
                        >
                            <div className="title">
                                <h3>{hamburguer.name}</h3>
                            </div>

                            <img src={hamburguer.image} alt="Produto" />

                            <div className="card__infos">
                                <h2 className="card__description">{truncateText(hamburguer.description)}</h2>
                                <h2 className="card__price">{formatCurrency(hamburguer.price, 'BRL')}</h2>
                            </div>

                            <button 
                                type="button" 
                                className="add-to-cart-btn"
                                onClick = {() => handleAddCart(hamburguer)}
                            >
                                <RiShoppingCartLine/>
                                
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default CardHamburgue;
