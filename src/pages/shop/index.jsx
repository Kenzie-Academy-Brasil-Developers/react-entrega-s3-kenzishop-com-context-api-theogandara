import Product from "../../components/product";
import { Vitrine } from "./style";
import { useContext } from "react";
import { ProductsContext } from "../../Providers/products";
import { CartContext } from "../../Providers/productsCart";

const Shop = () => {

  const {productsList}= useContext(ProductsContext)
  const {setProductsCart, productsCart}= useContext(CartContext)

  return (
    <Vitrine>
      {productsList.map((product) => {
        return <Product product={product} addFunc={()=> setProductsCart([...productsCart, product ])} />;
      })}
    </Vitrine>
  );
};

export default Shop;
