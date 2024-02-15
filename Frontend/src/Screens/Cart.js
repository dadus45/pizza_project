import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createUrl, getConfig } from "../utils/utils";
import Payment from "./Payment";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
function Cart() {
  const [cartItems, setCartItems] = useState([]);
 const [totalPrice,setTotalPrice] = useState(0);
 const [isVisible, setIsVisible] = useState(false);
 
  const urlGet = createUrl("/cartItem/" + sessionStorage.getItem("userName"));
  const config = getConfig(sessionStorage.getItem("jwtToken"));

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    axios
      .get(urlGet, config)
      .then((res) => {
        setCartItems(res.data);
        console.log(cartItems);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const TotalPriceCalc = (totalQuant) => {
    // totalPrice += totalQuant;
    // setTotalPrice(totalPrice);
  };

  const RemoveItem = (id) => {
    const urlDelete = createUrl("/deleteItem/" + id);
    axios
      .delete(urlDelete, config)
      .then((res) => {
        loadCart();
        console.log(id + " deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const getCartItemTotal = () => {
    return cartItems.reduce((sum, item) => sum+= item.price*item.quantity,0);
  }

  return (

    <>
    {!isVisible ?   <>
    
    {cartItems.length==0?<div style={{marginTop:'200px'}}><hr></hr><h3 style={{textAlign:'center'}}>Your cart is empty....!!!...Please add some pizzas in your cart....</h3><hr></hr><br/><br/></div>:
    
      <div className="container">
        <div className="card" style={{ margin: 100 }}>
          <h3>Cart</h3>
          <div className="table-responsive">
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                  <th>Total price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((cartItem) => {
                  return (
                    <tr>
                      <td>{cartItem.name}</td>
                      <td>{cartItem.price}</td>
                      <td>{cartItem.quantity}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => {
                            RemoveItem(cartItem.id);
                          }}
                        >
                          Remove
                        </button>
                      </td>
                      <td>{cartItem.price * cartItem.quantity}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td style={{ color: "red", fontWeight: "bold" }} colSpan={4}>
                    Total price
                  </td>
                  <td style={{ color: "red", fontWeight: "bold" }}>
                    {getCartItemTotal()}
                  </td>
                </tr>
                <tr>
                  <td colSpan={5}>
                    <center>
                    <input type="button" className="btn btn-warning" value={"Proceed to payment"} onClick={()=> {
                      setIsVisible(true);
                      const total = getCartItemTotal();
                      setTotalPrice(total);
                    }}></input>
                     
                    </center>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      }
     
    </> :
    <Payment totalPrice={totalPrice}/>}

    </>
  
    
  );
}

export default Cart;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // You can use Axios for API requests

// function PizzaComponent() {
//   const [mergedPizzas, setMergedPizzas] = useState([]);

//   useEffect(() => {
//     // Fetch data from the server and update state
//     axios.get('your-api-url')
//       .then(response => {
//         const pizzaArray = response.data;

//         const consolidated = pizzaArray.reduce((accumulator, pizza) => {
//           const existingPizza = accumulator.find(item => item.name === pizza.name);

//           if (existingPizza) {
//             existingPizza.quantity += pizza.quantity;
//             existingPizza.price += pizza.price;
//           } else {
//             accumulator.push({ ...pizza });
//           }

//           return accumulator;
//         }, []);

//         setMergedPizzas(consolidated);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []); // Empty dependency array ensures the effect runs once after initial render

//   return (
//     <div>
//       <h2>Merged Pizzas</h2>
//       <ul>
//         {mergedPizzas.map((pizza, index) => (
//           <li key={index}>
//             {pizza.name} - Quantity: {pizza.quantity}, Price: {pizza.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default PizzaComponent;
