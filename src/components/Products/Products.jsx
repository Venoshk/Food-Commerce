
import "./Products.css"
import CardPizza from "../CardProductsPizzas/CardProductsPizza";
import CardHamburgueres from "../CardHamburgueres/CardHamburgue";

import Header from "../Header/Header";
import CardMenuItem from "../CardMenuItems/CardMenuItems";
import CardBebidas from "../CardBebibas/CardBebibas";
import CardHotDog from "../CardHotDog/CardHotDog";



function Products() {

    return (
        <section className="container">
          <Header/>
            <div className="content-card">
                    <CardMenuItem/>
                    <CardPizza />
                    <CardHamburgueres />
                    <CardHotDog/>
                    <CardBebidas />
            </div>
        </section>
    );
}

export default Products;
