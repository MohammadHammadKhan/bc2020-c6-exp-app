import React from 'react'
import ReactDOM from 'react-dom'

function Balance({trans}){
    let balance=0,income_arr=[],income=0,expense_arr=[],expense=0;
    return <div>
        <h3>
        CURRENT BALANCE
        </h3>
        <div>
            $0.00
        </div>
        <div className='income-exp'>
            <span>
                <h3>
                    INCOME 
                </h3>
                {console.log(income=trans.filter((trans)=>trans.amount>0)
                    .map((trans)=>trans.amount)
                    .reduce((total,item)=>total=total+item,0))}
                    {income}
                    {console.log(trans)}        </span>
            <span>
                <h3>
                    EXPENSE
                </h3>
                {console.log(expense=trans.filter((trans)=>trans.amount<0)
                    .map((trans)=>trans.amount)
                    .reduce((total,item)=>total=total-item,0))}
                    {expense}
            </span>
        </div>
    </div>
}
export default Balance;