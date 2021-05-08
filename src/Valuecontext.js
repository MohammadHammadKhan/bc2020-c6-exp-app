import React from 'react'
import Valuereducer from './Valuereducer'
const initialState = {
trans: [

     ]
   }
// const trans= [
//             {
//                 id:1,
//                 description:'Books',
//                 amount:-40
//             },
//             {
//                 id:2,
//                 description:'Salary',
//                 amount:2000
//             }
//         ]
      

export const Valuecontext=React.createContext(initialState)


export const Globalprovider=({children})=>{
const [state,dispatch]=React.useReducer(Valuereducer,initialState);
console.log({initialState})
console.log(state)
function delTrans(id){
    dispatch({
        type:'DELETE_TRANSACTION',
        payload:id
    })
}
function addTrans(transaction){
    dispatch({
        type:'ADD_TRANSACTION',
        payload:transaction
    })
}
    return (
        <Valuecontext.Provider value={{
            trans:state.trans,
            delTrans,
            addTrans
        }}>
            {children}
        </Valuecontext.Provider>
    );
}
