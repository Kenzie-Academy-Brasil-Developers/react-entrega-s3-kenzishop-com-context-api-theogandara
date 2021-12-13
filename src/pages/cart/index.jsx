import ProductCart from "../../components/productCart";
import { Vitrine, Div, Title, Button } from "./style";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Providers/productsCart";

const Cart = () => {
  const { productsCart, setProductsCart } = useContext(CartContext);

  return (
    <>
      <Vitrine>
        {productsCart.map((product) => {
          return (
            <ProductCart
              product={product}
              addFunc={() =>
                setProductsCart(
                  productsCart.filter((element) => product.id !== element.id)
                )
              }
            />
          );
        })}
      </Vitrine>
      <Div>
        <Title>Resumo do pedido</Title>
        <div>{} Produtos</div>
        <Link to="/">Continuar comprando</Link>
        <Button>Finalizar compra</Button>
      </Div>
    </>
  );
};

export default Cart;
