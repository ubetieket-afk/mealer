import Form from "./counter_components/Form"
import Header from "./counter_components/Header"
import { useState } from "react";   // To manage state on this component


const Counter = () => {
  // Assume a request was sent to an API
  // and it fetches the balance to the 
  // database and returned to us
//   const balance = 5000;  // If you have anything than can change in your 
  // application, DO NOT STORE INSIDE A VARIABLE. Use State.
  // balance should be kept inside state.

  const [balance, setBalance] = useState(0);  // Assume 0 is from the database initially

  return (
    <div className="container">
        {
            /* Conditional rendering using the ternary operator */
            balance > 5000 ? <p className="alert alert-success">Odogwu, you are doing well</p>
            :
            <p className="alert alert-warning">Oga work harder, you are going broke</p>
        }
        <Header balance={balance} />
        <Form balance={balance} setBalance={setBalance} />
    </div>
  )
}

export default Counter