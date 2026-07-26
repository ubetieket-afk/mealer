// const Header = ({products}) => {
//   return (
//     <div className="row header">
//       <div className="col text-center">
//         <h1 className="mb-3">Product Inventory</h1>
//         <button type="button" className="btn btn-primary">
//           Count <span className="badge mine">{products.length}</span>
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Header
import { useContext } from "react";
import { VibeProductContext } from "../context/VibeProductContext";

const Header = () => {
  const { products } = useContext(VibeProductContext);

  return (
    <div className="row header">
      <div className="col text-center">
        <h1 className="mb-3">Product Inventory</h1>
        <button type="button" className="btn btn-primary">
          Count <span className="badge mine">{products.length}</span>
        </button>
      </div>
    </div>
  )
}

export default Header