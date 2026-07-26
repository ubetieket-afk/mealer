
// immport the component
import "./css/myStyle.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Main from "./components/Main"


function App(){
  // sometims this component get a piece of data from backend application
  const pageVisit = 20 //this comes back from another application
  // lets assume we sent a request to a backend that fetch list of categories from database and we want to display 
  // it in hero section 
  const categories = ["Soup","Stew","Snacks","Swallow"]// we got this from a backend

  const products = [
    {id: 1,
      name: "Tomato ketchup",
      price: 4000,
      image: "hero.png"
   },
   { id: 2,
    name: "Apple ketchup",
    price: 1000,
    image:"hero.png"
   },
   { id:3,
    name: "Lemon Ketchup",
    image: "hero.png"

   }
  ]
 return(
<div className="container">
      <Header xyz= {pageVisit} />
      <Hero cats ={categories} />
      <Footer />
      <Main xyz= {pageVisit} />
   </div>
 )

}
export default App