import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // var person = {
  //   name: "Dr. Mahfuz",
  //   job: "singer"
  // }
  // var person2 = {
  //   name: "Eva Rahman",
  //   job: "Kokila"
  // }
  // var style={
  //   color: 'red'
  // }
  const nayoks = ['Razzak', 'Jashim','Salman','Alamgir','Bappi']
  const products = [{name:'Photoshop', price: '$90.25'},
                    {name:'Illustrator',price:'$60.99'},
                    {name:'PDF Reader',price:'$40.99'}]
  const productNames = products.map(product => product.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          I am a react person.
        </p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {/* dynamic approach */}
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          <br/>
          {
            products.map(product => <li>{product.name}</li>)
          }
          {/* normal approach */}
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li> */}
        </ul>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <h1 style={style}>My heading: {person.name +" " + person.job}</h1>
        <h3>Singer: {person2.name +" "+ person2.job}</h3>
        <p>My first React Paragraph</p> */}

        {/* <Person name= "Rubel"></Person> */}
        {/* 1 way */}
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        {
          products.map(product => <Product product={product}></Product>)
        }
        <Product product = {products[0]}></Product>

      </header>
    </div>
  );
}

//State Components
function Counter(){
  const [count, setCount] = useState(10);
  // const handleIncrease = () => {
  //   // console.log ('clicked')
  //   // const newCount = count + 1;
  //   setCount(count + 1);
  // };
  return(
    <div>
      <h1>Count : {count}</h1>
      {/* <button onClick={handleIncrease}>Increase</button> */}
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
      {/* <button onMouseMove={ () => setCount(count - 1)}>Decrease</button> */}
      <button onClick={ () => setCount(count + 1)}>Increase</button>
    </div>
  )
}

//Call dynamic api users
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    // console.log('Calling Effect')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setUsers(data))

  }, [])
  return(
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      {/* {
      console.log(users)
      } */}
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border : '1px solid gray',
    borderRadius: '5px',
    backgroundColor:'lightgray',
    height:'250px',
    width:'200px',
    float:'left'

  }
  // console.log(props)
  const {name,price} = props.product;
  return(
    <div style={productStyle}>
        {/* <h2>Name: {props.product.name}</h2>
        <h1>{props.product.price}</h1> */}
        <h2>Name: {name}</h2>
        <h1>{price}</h1>
        <button>Buy Now</button>
    </div>
  )
}

// function Person(props) {
//   const personStyle ={
//     // style={{border:'2px solid red'}}
//     border : '2px solid red',
//     margin : '10px'
//   }
  
//   return (
//     <div style={personStyle} >
//       <h1>Name: {props.name}</h1>
//       <h3>Hero of the Year</h3>
//     </div>
//   )
// }

export default App;
