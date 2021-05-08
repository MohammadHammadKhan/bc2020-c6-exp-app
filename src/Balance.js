import React from 'react'
import './App.css'
import {Valuecontext} from './Valuecontext'

function Balance(){
  
    const {trans} = React.useContext(Valuecontext)
    console.log(trans)
    console.log(`balance ${trans}`)
    let income=0,expense=0;
    return <div>
        <div className='balance'>
        <h4>
        Current Balance
        </h4>
        {console.log(income=trans.filter((trans)=>trans.amount>0)
                        .map((trans)=>trans.amount)
                        .reduce((total,item)=>total=total+item,0))}
                {console.log(expense=trans.filter((trans)=>trans.amount<0)
                    .map((trans)=>trans.amount)
                    .reduce((total,item)=>total=total-item,0))}
                
        <h1 className='balance-amnt'>
           {`${income-expense>0? '+':'-'}$${Math.abs(income-expense)}`}
        </h1>
        </div>

        <div className='income-exp'>
            <span className='income'>
                <h4>
                    INCOME 
                </h4>
                <p className='money plus'>{income}</p>    
            </span>
            <span className='expense'>
                <h4>
                    EXPENSE
                </h4>
                    <p className='money minus'>{expense}</p>
            </span>
        </div>
    </div>
}
export default Balance;