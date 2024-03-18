import { useState } from "react";
import AppContext from "./AppContext";

function Provider({children}){
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeButton, setActiveButton]       = useState(false);
    const [cartItems, setCartItems]             = useState([]);
    const [loading, setLoading]                 = useState(true);
    const [selectedItem, setSelectedItem]       = useState([]);
    const [isCartVisible, setIsCartVisible]     = useState(false);
    const [isSidebarVisible, setIsSidebarVisible]     = useState(false);
    const value = {
        selectedProduct, 
        setSelectedProduct,
        activeButton, 
        setActiveButton,
        selectedItem, 
        setSelectedItem,
        loading, 
        setLoading,
        isCartVisible, 
        setIsCartVisible,
        cartItems, 
        setCartItems,
        isSidebarVisible, 
        setIsSidebarVisible
    };

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default Provider;