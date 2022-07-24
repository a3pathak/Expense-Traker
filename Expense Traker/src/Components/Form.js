import "./Form.css";
import { useEffect, useState } from "react";
const Form = (prop) => {
    const [Expense, setname] =useState();
    const [amount, setAmount] =useState();
    const nameChangeHandler=(event)=>{
       setname(event.target.value);
    }
    const amountChangeHandler=(event)=>{
        setAmount(event.target.value);
    }
    useEffect(()=>{
        localStorage.setItem('ExpenseItem',JSON.stringify(Expense));
        localStorage.setItem('ExpenseItem',JSON.stringify(amount));
    },[Expense,amount]);
    const submitHandler=()=>{
        const expenseData = {
            Iname:Expense,
            amount:amount,
        }
        prop.expenseItem(expenseData);
        setname('');
        setAmount('');
    }
    return (
        <>
       
            <div className="et-form">
                <div className="expenseItem">
                    <label for="fname">Name:</label><br />
                    <input type="text" id="ename" name="fname" value={Expense} onChange={nameChangeHandler} placeholder="Enter your name here.." />
                </div>
                <div className="amount">
                    <label for="lname">Amount:</label><br />
                    <input type="text" id="aname" name="amount" value={amount} onChange={amountChangeHandler} placeholder="Enter Amount" />
                </div>
                <button type="submit" className="btn" onClick={submitHandler}>Submit</button>
            </div>
            
        </>
    );
}
export default Form;