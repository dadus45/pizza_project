import axios from "axios";
import { useEffect, useState } from "react";
import { createUrl, getConfig } from "../utils/utils";
import "./styles/PizzaRender.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import UpdatePizza from "./UpadtePizza";

function UpdateDelete({ pizza }) {
  const history=useHistory();
  var [qty, setQty] = useState(1);
  var [variant, setvariant] = useState("small");
  
  var [message, setMessage] = useState("");
  
  const jwtToken = sessionStorage.getItem("jwtToken");
  console.log(jwtToken);
  const config = getConfig(jwtToken);
  const postData = {
    name: pizza.name,
    quantity: qty,
    price:pizza[variant],
    userName: sessionStorage.getItem("userName"),
  };


  
  
  const config1 = {
    headers: {
     Authorization:jwtToken,
      
    },
  };


  const imgUrl = createUrl("/pizza/images/" + pizza.id);

  useEffect(() => {
    if (message != "") {
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  }, [message]);

 


  const deletePizza= ()=> {
    axios
    .delete('http://127.0.0.1:7070/pizza/'+pizza.id,config1)
    .then((res)=>{
      setMessage("delete successfully");
          })
          .catch((err) => {
            console.log(err);
            setMessage("Oops! Something went Wrong");
          });

    }

  const editPizza=()=>{

    
 history.push('/edit');

  }

  return (
    <>

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
          
          </div>
          <div>
            <select onChange={(val) => setvariant(val.target.value)}>
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
            </select>
          </div>
        </div>
        <h6>Rs.{qty * pizza[variant]}</h6>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
            { <button  type="button" class="btn btn-warning"  onClick={editPizza}>
            Edit
          </button> }
          { <button onClick={deletePizza} type="button" class="btn btn-danger">
            Delete
          </button> }
        </div>
        <p style={{ color: "green", display: "inline-block" }}>{message}</p>
      </div>
    </div>

    </>
  );
}

export default UpdateDelete;