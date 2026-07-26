import { createContext,useState} from "react";
// step1: create the context

 export const ProductContext = createContext();

//step2: create a Provider is a super component that other component will be nested inside it

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([
            {
                id: 1,
                name: "Black Marker",
                qty: 10
            },
            {
                id: 1,
                name: "Display Material",
                qty: 20  
            },
            {
                id: 3,
                name: "Flower Pots",
                qty: 5
            }
        ]);
        // inside the provider i can keep a function that accept a new product detail and insert it into product array
        // i can create a method that accept product id and delete the product with that id from inside the product state
        // i can create a function that accept product id and details and update the product with the id in product state

        return(
            <ProductContext.Provider value={{products,setProducts}} >

                {children}
            </ProductContext.Provider>
        )

}
// export {ProductContext,ProductProvider}