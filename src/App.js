import './App.css';
import Balance from './Balance'
import History from './History'
import {Header} from './Header'
import Addtransaction from './Addtransaction'
import React from 'react'
import {Globalprovider} from './Valuecontext'

function App() {
  // let transs=[
  //   {id:1,
  //   description:'Books',
  //   amount:-40},
  //   {id:2,
  //     description:'Salary',
  //     amount:380},
  //   {id:3,
  //   description:'Grocery',
  //   amount:-30},
  //   {id:4,
  //     description:'MILK',
  //     amount:-50},
  //   {id:5,
  //     description:'MILK',
  //     amount:-50}
  // ]
  // let transs=[
  //   {id:1,
  //   description:'Books',
  //   amount:-40}]
  // let [trans,setTrans]=React.useState(transs)
  // let trans=React.useState(transs)
  // let [trans,dispatch]=useReducer(Valuereducer,transs)
  // console.log(transs)
  // console.log(trans)
  return (
      <Globalprovider>
        <div className='App'>
          <Header/>
          <Balance/>
          <History/>
          <Addtransaction/>
        </div>
      </Globalprovider>

  );
}

export default App;
