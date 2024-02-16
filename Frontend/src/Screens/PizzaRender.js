import axios from "axios";
import { useEffect, useState } from "react";
import { createUrl, getConfig } from "../utils/utils";
import "./styles/PizzaRender.css";

function PizzaRender({ pizza }) {
  
  var [qty, setQty] = useState(1);
  var [variant, setvariant] = useState("small");
  
  var [message, setMessage] = useState("");
  const jwtToken = sessionStorage.getItem("jwtToken");
  const config = getConfig(jwtToken);
  const postData = {
    name: pizza.name,
    quantity: qty,
    price:pizza[variant],
    userName: sessionStorage.getItem("userName"),
  };
  const url = createUrl("/addToCart");
  const imgUrl = createUrl("/pizza/images/" + pizza.id);

  useEffect(() => {
    if (message != "") {
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  }, [message]);

  var addQty = () => {
    setQty(qty + 1);
  };

  var subQty = () => {
    if (qty > 1) setQty(qty - 1);
  };

  var addToCart = () => {
    axios
      .post(url, postData, config)
      .then((res) => {
        setMessage("Added to cart");
      })
      .catch((err) => {
        console.log(err);
        setMessage("Oops! Something went Wrong");
      });
  };

  return (

   
      <div
        className="card enlarge-on-hover"
        style={{
          display: "inline-block",
          margin: 25,
          boxShadow: "2px 2px 4px rgba(255, 0, 0, 0.6)",
          borderRadius: "10px",
        }}
      >
        <img
          src={imgUrl}
          // src="http://127.0.0.1:7070/pizza/images/14"
          className="card-img-top"
          alt="..."
          style={{ height: 200, borderRadius: "10px" }}
        />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "red" }}>
            <strong>{pizza.name}</strong>
          </h5>
          <div>
            Description:{' '}
            <span style={{ fontWeight: 'bold', fontSize: 17, fontStyle:"italic" }}>
              {pizza.description}
            </span>
          </div>

          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "block" }}>
              <button onClick={subQty}>
                <strong>-</strong>
              </button>
              {qty}
              <button onClick={addQty}>
                <strong>+</strong>
              </button>
            </div>
            <div>
              <select onChange={(val) => setvariant(val.target.value)}>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
              </select>
            </div>
          </div>
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h6>Rs.{qty * pizza[variant]}</h6>
            <button onClick={addToCart} type="button" class="btn btn-primary">
              Add to cart
            </button>
          </div>
          <p style={{ color: "green", display: "inline-block" }}>{message}</p>
        </div>
      </div>
   
  );
}

export default PizzaRender;
