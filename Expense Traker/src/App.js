import './App.css';
import Form from './Components/Form';
import List from './Components/List';
import { useState } from 'react';
function App(){
    const [list,setList] = useState([]);
    const abcd = (props)=>{

        // props Destructuring
        // const {Iname,amount} = props;
        
        const updateState = [props,...list];
        setList(updateState);
    }
    return(
        <div className='container'>
            <Form expenseItem={abcd} />
            <div className='main-div'>
            <h1>Expense Traker</h1>
            <hr></hr>
            <List item={list} />
            </div>
        </div>
    );
}
export default App;