import useRazorpay from "react-razorpay";
import {getConfig } from "../utils/utils";
import axios from "axios";
import {  useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
function Payment({totalPrice}) {
  const Razorpay = useRazorpay();
  const history=useHistory();
  const config = getConfig(sessionStorage.getItem("jwtToken"));
  console.log(config.headers);
  const [order,setOrder] = useState("");
  

  const createOrder = () => {
    axios
      .get("http://localhost:7070/payment/"+totalPrice*100, config)
      .then((res) => {
        //console.log(res.data);
        setOrder(res.data);
        console.log(order);
        
      })
      .catch((err) => {
        console.log(err);
      });
      
  };

function loadScript(src) {
  return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
          resolve(true);
      };
      script.onerror = () => {
          resolve(false);
      };
      document.body.appendChild(script);
  });
}
const handlePayment = async () => {
  const res = await loadScript(
    "https://checkout.razorpay.com/v1/checkout.js"
);

if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
}
  createOrder();
  console.log(order);

  const options = {
    key: "rzp_test_XyFbMOFuDMOXgP",
    amount: totalPrice*100, 
    currency: "INR",
    name: "Pizza",
    description: "Test Transaction",
    image: "https://pngtree.com/freepng/pizza-logo-design_8363624.html",
    order_id: order, 
    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    
    notes: {
      address: "ABC, Delhi",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const rzp1 = new window.Razorpay(options);

  rzp1.on("payment.failed", function (response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
  });

  rzp1.open();
  history.push("/checkout");
};
return (
  <div className="App">
      <header className="App-header">
         
          <p>Buy React now!</p>
          <button className="App-link" onClick={handlePayment}>
              Pay ₹{totalPrice}
          </button>
      </header>
  </div>
);

    
  }
  
  export default Payment;
  