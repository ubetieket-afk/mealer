
import { useState } from "react";

const Form = ({balance, setBalance}) => {

    // State to manage amount input
    const [amount, setAmount] = useState("");

    function handle_withdraw(){
        // balance = balance - 1000;       // Don't do this: props are immutable. 
        // // A child component should not update prop.
        if(amount > balance){
            alert("Oga, insufficient balance");
            setAmount("");
            return;
        }
        setBalance(balance - Number(amount));   // Updating balance state
        setAmount("");  // Clear the amount on the form input
    }

  return (
    <div className='row'>
        <div className='col-md-2 offset-md-1 py-2'>
            <button className="btn btn-warning" onClick={handle_withdraw}>Withdraw</button>
        </div>

        <div className='col-md-5 py-2'>
            {/* Input to handle amount to withdraw and deposit */}
            <input type="number" className="form-control py-3" value={amount} onChange={
                function(e){
                    setAmount(e.target.value);
                }
            } />
        </div>

        <div className='col-md-2 py-2'>
            <button className="btn btn-primary" onClick={
                function(){
                    setBalance(balance + Number(amount));   // Updating balance state
                    setAmount("");  // Clear the amount on the form input
                }
            }>Deposit</button>
        </div>
    </div>
  )
}

export default Form