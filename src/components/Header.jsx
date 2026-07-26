// THis child component has received a prop from his parent:App,he can pick it 

function Header(props){
    //console.log(props); // props is an object
// lets say we send a request to a backend server and it sent back a response
const appName = "ChopLife Restaurant"

const rowStyle ={
    backgroundColor:"orange",
    padding: "50px 10px",
    color:"white",
    textAlign: "center"
}

    return(
        <div className="row" style={rowStyle}>
           <div className="col-md-12 py-5">
            <h1>{appName}</h1>
            <p className="slogan">A place to kill your hunger</p>
            {/* child component using props sent by the parent */}
            <p>Visits:<strong>{props.xyz}</strong></p>
           </div>

        </div>

    )

}
export default Header