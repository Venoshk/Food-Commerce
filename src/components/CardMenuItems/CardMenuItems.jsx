import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "./CardMenuItems.css"
import { RiShoppingCartLine } from "react-icons/ri";

/*Formatar preço para valor BRL */
import formatCurrency from "../../utils/formateCurrency";

/*Não deixar o texto ser grande */
import truncateText from "../../utils/truncateText";

/*Dados misturados */
import shuffledMenuItems from "../../utils/shuffleArray";

function CardMenuItem() {
    const { selectedProduct, setSelectedItem, cartItems, setCartItems } = useContext(AppContext);

    const handleAddCart = (menuItems) => {
        setCartItems([...cartItems, menuItems]);
    };

    const handleItemClick = (menuItem) => {
        setSelectedItem(menuItem); // Atualize o estado com o item selecionado
    };

    return (
        <section className="container-card">
            <div className="content__card">
                {selectedProduct === '' 
                    || selectedProduct === null 
                    || selectedProduct === undefined ? (
                    shuffledMenuItems.map((menuItem) => ( 
                        <div
                            key={menuItem.id}
                            className={`card 
                            ${selectedProduct 
                            && selectedProduct.id === menuItem.id ? 'selected' : ''}`}
                            onClick={() => handleItemClick(menuItem)} 
                            >
                            <div className="title">
                                <h3>{menuItem.name}</h3>
                            </div>

                            <img src={menuItem.image} alt="Produto" />

                            <div className="card__infos">
                                <h2 className="card__description">{truncateText(menuItem.description)}</h2>
                                <h2 className="card__price">{formatCurrency(menuItem.price, 'BRL')}</h2>
                            </div>

                            <button type="button" 
                            className="add-to-cart-btn"
                            onClick={() => handleAddCart(menuItem)}
                            >
                                <RiShoppingCartLine />
                                
                            </button>
                        </div>
                    ))
                ) : null}

            </div>

        </section>
    );
}

export default CardMenuItem;
