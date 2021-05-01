import logo from './logo.svg';
import './App.css';
import Balance from './Balance'
import History from './History'
function App() {
  let trans=[
    {id:1,
    description:'Books',
    amount:-20},
    {id:2,
      description:'Salary',
      amount:200},
    {id:3,
    description:'Grocery',
    amount:-30}
  ]
  return (
  <div className='App'>
    <h1>
      Expense Tracker by MHK
    </h1>
    <Balance trans={trans}/>
    <History trans={trans}/>
  </div>
  );
}

export default App;
