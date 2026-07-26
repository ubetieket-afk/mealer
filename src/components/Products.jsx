
// how to embed an image insdie src
import heropng from "../assets/hero.png"
const Product = () =>{
    return(
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <table className="table table-bordered tabke-striped">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Image</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Apple</td>
                            <td>5000</td>
                            <td>
                                <img src={heropng} alt="chopchop logo" style={{maxWidth:"50px"}} />
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Mango Sauce</td>
                            <td>3000</td>
                            <td>
                                {/* how to embed an image from a public folder */}
                                <img src="/hero.png" alt="a logo" style={{maxWidth:"50px"}} />

                            </td>
                        </tr>
                    </tbody>

                </table>

            </div>

        </div>
    )
}
export default Product