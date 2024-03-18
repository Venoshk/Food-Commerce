import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import HotDog from "./HotDogData";
import truncateText from "../../utils/truncateText";
import formateCurrency from "../../utils/formateCurrency";
import { IoIosAddCircleOutline } from "react-icons/io";

function CardHotDog(){

    const {selectedProduct, setSelectedItem, cartItems, setCartItems}  = useContext(AppContext);

    const handleClickItem = (hotdog) =>{
        setSelectedItem(hotdog);
    }

    const handleAddCart = (hotdog) =>{
        setCartItems([...cartItems, hotdog])
    }

    return(
        <section className="container-card">
            {selectedProduct === 'Hotdog' && (
                <div className={`content__card`}>
                    {HotDog.map((hotgod) => (
                        <div 
                            key={hotgod.id}
                            className={`card ${selectedProduct && selectedProduct.id === hotgod.id ? 'selected' : ''}`}
                            onClick={() => handleClickItem(hotgod)}
                            >
                            
                            <div className="title">
                                <h3>{hotgod.name}</h3>
                            </div>

                            <img src={hotgod.image} alt="porduto" />

                            <div className="card__infos">
                                <h2 className="card__description">{truncateText(hotgod.description)}</h2>
                                <h2 className="card__price">{formateCurrency(hotgod.price, 'BRL')}</h2>
                            </div>

                            <button
                                type="button"
                                className="add-to-cart-btn"
                                onClick={() => handleAddCart(hotgod)}
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

export default CardHotDog;