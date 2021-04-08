import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products =[
     {name: "photoshop", price:'$90'}, 
     {name:'PDF Reader', price:"$70"}
]
const nayoks = ['rajib','roki','ruble', 'rafi']
// const nayokNames = nayoks.map(nayok => nayok);
// console.log(nayokNames);
// const productName = products.map(product => product.name);
// console.log(productName)
  
  return (
    <div className="App">
    <header className="App-header">
     <p>I am a react person</p>
     <ul>

       
       {
         nayoks.map(nayok => <li>{nayok}</li>)
       }
       <li>{nayoks[0]}</li>
       <li>{nayoks[1]}</li>
       <li>{nayoks[2]}</li>
       <li>{nayoks[3]}</li>
     </ul>
     <Counter></Counter>
     <Users></Users>
     <Product product={products[0]}></Product>
     <Product product={products[1]}></Product>
     <Person name="Roja" job="teacher"></Person>
     <Person name="Rifat" job="teacher"></Person>
     <Person></Person>
    </header>
  </div> 
  );
}

function Counter(){
  const [count,setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle={
    border:'1px solid red',
    borderRadius:'5px',
    backgroundColor:"gray",
    height:'200px',
    width:"200px",
    float:'left'
  }
  const {name, price} = props.product;

  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>

  )
}


function Person(props){
  return(
    <div style={{border:'2px solid red', width:"400px", margin:'10px'}}>
      <h1>Name: {props.name}</h1>
      <p>Profession:{props.job}</p>
    </div>
  )
}


export default App;
