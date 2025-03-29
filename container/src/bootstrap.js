import { mount as productMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

console.log("Container!");

productMount(document.querySelector("#container-products"));
cartMount(document.querySelector("#container-cart"));
