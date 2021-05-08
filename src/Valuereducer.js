// const Valuereducer=(state,action)=>{
//     console.log(action.type)
//     switch(action.type){
//         case 'ADD_TRANSACTION':
//             return state+1
//         case 'DELETE_TRANSACTION':
//             return {
//                 ...state,
//         trans: state.trans.filter(trans => trans.id !== action.payload)
//     }
//         default:
//             return state;
//     }
// }
// export default Valuereducer;
const Valuereducer=(state, action) => {
    switch(action.type) {
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          trans: state.trans.filter(transaction => transaction.id !== action.payload)
        }
      case 'ADD_TRANSACTION':
        return {
          ...state,
          trans: [action.payload, ...state.trans]
        }
      default:
        return state;
    }
  }
  export default Valuereducer;