import React from 'react'

import {Valuecontext} from './Valuecontext'
function History(){
    const {trans,delTrans} = React.useContext(Valuecontext)
    // const [trans,setTrans]=transs;
 console.log(trans)
 console.log(delTrans)
 console.log('function history')
//     li.appendChild(document.createTextNode(`${trans.id} ${trans.description} ${trans.amount}`))
//    translist.appendChild(li)
// function Transaction({trans}){
//     return (
//         <li>{trans.id} {trans.description} {trans.amount}</li>
//     );
// }
// function deleteTrans(id){
// let index=trans.findIndex((trans)=>trans.id===id)
// console.log(index)
// let spltrans=trans.splice(index,1)
// console.log(spltrans)
// console.log(trans)
// return setTrans(trans.filter((trans)=>trans!==spltrans));
// }
// let translist
   return (
    <div className='trans-hist'>
        <h3>Transaction History</h3>
        <ul className='transhist'>
        {/* {trans.map((trans)=>(<li className={trans.amount>0? 'plussign':'minussign'}><span>{trans.description}</span><span>{`${trans.amount>0? '+':'-'}$${Math.abs(trans.amount)}`}</span></li>))} */}
        {trans.map((trans)=>(<li key={trans.id} className={trans.amount>0? 'plussign':'minussign'}><button className='delbtn' onClick={()=>delTrans(trans.id)}>x</button><span>{trans.description}</span><span>{`${trans.amount>0? '+':'-'}$${Math.abs(trans.amount)}`}</span></li>))}
   
        {/* <button onClick={()=>deleteTrans(trans.id)}>x</button>  */}
        </ul>

    </div>
   );
}
export default History;