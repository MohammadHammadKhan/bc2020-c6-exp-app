import React from 'react'
import './App.css'
import {Valuecontext} from './Valuecontext'
const Addtransaction = () => {

    const {trans,addTrans} = React.useContext(Valuecontext)
    // const [trans,addTrans]=transs;
const [description,setDescription]=React.useState('')
const [amount,setAmount]=React.useState(0)
    let new_trans;
    function onSubmit(event){
        event.preventDefault();
        console.log(description,amount)
        // setTrans([...trans,{
        //     id:new Date().getTime(),
        //     description,
        //     amount
        // }])
        new_trans={
            id:new Date().getTime(),
            description,
            amount
        }
        addTrans(new_trans)
        console.log(new_trans)
    }
    return (
        <div className='add-trans'>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <label htmlFor='description'>Description</label><br/>
                <input id='description' type='text' value={description} placeholder='Detail of Transaction' onChange={(e)=>setDescription(e.target.value)}>
                </input><br/>
                <label htmlFor='amount'>Amount</label><br/>
                <input id='amount' type='number' value={amount} placeholder='Dollar Value of Transaction' onChange={(e)=>setAmount(e.target.value)}>
                </input><br/>
                <button>Add transaction</button>
            </form>
        </div>
    )
}

export default Addtransaction
