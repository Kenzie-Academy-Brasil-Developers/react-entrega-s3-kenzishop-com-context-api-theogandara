import { useState, createContext } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [productsList, setProducts] = useState([
    {
      name: "Echo Dot ctx",
      price: 279.0,
      description: "description or image",
      id: 1,
    },
    {
      name: "Kindle Paperwhite",
      price: 499.0,
      description: "description or image",
      id: 2,
    },
    {
      name: "Echo Dot",
      price: 279.0,
      description: "description or image",
      id: 3,
    },
    {
      name: "Kindle Paperwhite",
      price: 499.0,
      description: "description or image",
      id: 4,
    },
    {
      name: "Echo Dot",
      price: 279.0,
      description: "description or image",
      id: 5,
    },
    {
      name: "Kindle Paperwhite",
      price: 499.0,
      description: "description or image",
      id: 6,
    },
  ]);

  return (
    <ProductsContext.Provider value={{ productsList }}>
      {children}
    </ProductsContext.Provider>
  );
};
