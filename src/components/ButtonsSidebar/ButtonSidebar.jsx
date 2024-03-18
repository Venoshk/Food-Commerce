import React, { useContext } from "react";
import { GiFullPizza } from "react-icons/gi";
import { CiHotdog } from "react-icons/ci";
import { FaHamburger } from "react-icons/fa";
import { BiDrink } from "react-icons/bi";
import "./ButtonSidebar.css";
import AppContext from "../context/AppContext";

function CardSidebar() {
  const { selectedProduct, setSelectedProduct } = useContext(AppContext);

  const handleProductSelect = (product) => {
   setSelectedProduct(product);
  };

  return (
    <>
      <div className={`image-card ${selectedProduct === "Pizza" ? "active" : ""}`}>
        <button
          type="button"
          className="btn__product"
          onClick={() => handleProductSelect("Pizza")}
        >
          <GiFullPizza />
        </button>
      </div>

      <div className={`image-card ${selectedProduct === "Hotdog" ? "active" : ""}`}>
        <button
          type="button"
          className="btn__product"
          onClick={() => handleProductSelect("Hotdog")}
        >
          <CiHotdog />
        </button>
      </div>

      <div className={`image-card ${selectedProduct === "Hambúrgeres" ? "active" : ""}`}>
        <button
          type="button"
          className="btn__product"
          onClick={() => handleProductSelect("Hambúrgeres")}
        >
          <FaHamburger />
        </button>
      </div>

      <div className={`image-card ${selectedProduct === "Bebidas" ? "active" : ""}`}>
          <button
            type="button"
            className="btn__product"
            onClick={() => handleProductSelect("Bebidas")}
          >
            <BiDrink/>
          </button>
      </div>
    </>
  );
}

export default CardSidebar;
