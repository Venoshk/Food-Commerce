import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Bebidas from "./BebidasData";
import truncateText from "../../utils/truncateText";
import formateCurrency from "../../utils/formateCurrency";
import { IoIosAddCircleOutline } from "react-icons/io";
function CardBebidas(){

    const {selectedProduct, setSelectedItem, cartItems, setCartItems} = useContext(AppContext);
    const handleItemClick = (bebidas) =>{
        setSelectedItem(bebidas);
    }

    const handleAddCart = (bebidas) => {
        setCartItems([...cartItems, bebidas])
    }
    return(
        <section className="container-card">
            {selectedProduct === "Bebidas" && (
                <div className="content__card">
                    {Bebidas.map((bebidas) => (
                        <div
                            key={bebidas.id}
                            className={`card ${selectedProduct && selectedProduct.id === bebidas.id ? 'selected' : ''}`}
                            onClick={() => handleItemClick(bebidas)}
                        >
                        
                            <div className="title">
                                <h3>{bebidas.name}</h3>
                            </div>

                            <img src={bebidas.image} alt="Protudo-Bebibdas-coca-cola"/>

                            <div className="card__infos">
                                <p>{truncateText(bebidas.description)}</p>
                                <h2>{formateCurrency(bebidas.price, 'BRL')}</h2>
                            </div>

                            <button
                                type="button"
                                className="add-to-cart-btn"
                                onClick={() => handleAddCart(bebidas)}
                            >
                                <IoIosAddCircleOutline/>
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default CardBebidas;