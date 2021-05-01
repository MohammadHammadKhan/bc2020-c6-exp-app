import React from 'react'
import ReactDOM from 'react-dom'

function History({trans}){
 
 
//     li.appendChild(document.createTextNode(`${trans.id} ${trans.description} ${trans.amount}`))
//    translist.appendChild(li)
let translist
   return <div>
        <h3>Transaction History</h3>
        <ul className='transhist'>
 
        </ul>
        {translist=document.querySelector('.transhist')
        }
        {
        
            trans.forEach((trans)=>{
                
                console.log(trans)
                const li=document.createElement('li')
                console.log(li)
                li.appendChild(document.createTextNode(`${trans.id} ${trans.description} ${trans.amount}`))
               
            })
        }
{console.log(translist)}

    </div>
}
export default History;