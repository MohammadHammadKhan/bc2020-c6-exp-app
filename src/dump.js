import React from 'react'
import ReactDOM from 'react-dom'

function History({trans}){
 console.log(trans)
 console.log('function history')
//     li.appendChild(document.createTextNode(`${trans.id} ${trans.description} ${trans.amount}`))
//    translist.appendChild(li)
function transaction(trans){
    return (
        <li>{trans.id} {trans.description} {trans.amount}</li>
    );
}

let translist
   return (
    <div>
        <h3>Transaction History</h3>
        <ul className='transhist'>
        </ul>
{ console.log('function history return')}
        {
       
            trans.forEach((trans)=>{
                console.log(trans)
                const li=document.createElement('li')
                console.log(li)
                li.appendChild(document.createTextNode(`${trans.id} ${trans.description} ${trans.amount}`))
                translist=document.querySelector('.transhist')
                console.log(translist)
                translist.appendChild(li)
            })
        }


    </div>
   );
}
export default History;