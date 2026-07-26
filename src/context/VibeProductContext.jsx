import { createContext, useState } from "react";

export const VibeProductContext = createContext();

export const VibeProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Black Marker",
      qty: 10,
    },
    {
      id: 2,
      name: "Display Material",
      qty: 20,
    },
    {
      id: 3,
      name: "Flower Pots",
      qty: 5,
    },
  ]);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      {
        ...newProduct,
        id: newProduct.id ?? Date.now(),
      },
    ]);
  };

  const deleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const fetchAllProducts = () => products;

  return (
    <VibeProductContext.Provider
      value={{ products, addProduct, deleteProduct, fetchAllProducts }}
    >
      {children}
    </VibeProductContext.Provider>
  );
};

export default VibeProductContext;
