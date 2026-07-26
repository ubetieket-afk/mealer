import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Blogger from "./Blogger.jsx";
import Counter from './Counter.jsx';
import Invento from './Invento.jsx';
import { ProductProvider } from './context/ProductContext.jsx';
import Meal from './Meal.jsx';

// import bootstrap css that was installed as a package
// import "bootstrap/dist/css/bootstrap.min.css"
// const username ="gentlesammy",


  //using context api follow this steps
// create the context
export const AppNameContext = createContext();
// create a provider: a provider is a highlevel or supercomponent and it contains data|function that is to be accessed by the children component as value prop
// grap a provider around all the children that want to inherit the data
//go inside children component that needs the data and consume the context: we use hook usecontext

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Blogger /> */}
    {/* <Counter /> */}
    {/* <ProductProvider>
    <AppNameContext.Provider   value= {{appname:"Invento App"}} >
    <Invento />
    </AppNameContext.Provider>
    </ProductProvider> */}
    <Meal />
  </StrictMode>
)
