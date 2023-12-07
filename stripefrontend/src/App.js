import logo from './logo.svg';
import './App.css';
import StripeCheckout from "react-stripe-checkout"
import { useState } from 'react';
function App() {
  const [product, setProduct] = useState({
    name:"stripe checkout course",
    price:10,
    productBy:"facebook"
  });

  const makePayment = token =>{
    const body ={token,product}
    const headers = {"Content-Type":"application/json"}
    return fetch(`http://localhost:5000/payment`,{
      method:"POST",
      headers,
      body:JSON.stringify(body)
    }).then(response => {
      console.log("RESPONSE",response);
      const {status} = response;
      console.log("STATUS",status);  
    }).catch(err=>console.log(err));
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <StripeCheckout 
        stripeKey={process.env.REACT_APP_KEY}
        token={makePayment}
        name='Buy React'
        amount ={product.price*100}
        >
          <button className='btn-large Blue'>Buy React in just {product.price}$</button>
        </StripeCheckout>
      </header>
    </div>
  );
}

export default App;
