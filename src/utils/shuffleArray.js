// Importando os dados de hambúrgueres e pizzas
import hamburgueres from "../components/CardHamburgueres/HamburgueresData";
import pizzas from "../components/CardProductsPizzas/PizzasData";
import HotDog from "../components/CardHotDog/HotDogData";

// Função para embaralhar arrays de forma aleatória
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Combina os arrays de hambúrgueres e pizzas
const menuItemsPizzaHamburguer = hamburgueres.concat(pizzas);

// Combina os arrays de Hotdog com hambúrgueres e pizzas
const menuItems  = HotDog.concat(menuItemsPizzaHamburguer)

// Embaralhe a array combinada de forma aleatória
const shuffledMenuItems = shuffleArray(menuItems);

export default shuffledMenuItems;
