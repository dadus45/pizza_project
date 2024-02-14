import { useState } from "react";
import { createUrl, getConfig } from "../utils/utils";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function AddressRender({ address, loadAddress }) {
  const url = createUrl("/placeOrder");
  const userName = sessionStorage.getItem("userName");
  const addressId = address.id;
  const config = getConfig(sessionStorage.getItem("jwtToken"));
  const postData = {
    userName,
    addressId,
  };
  const history = useHistory();

  const placeOrder = (id) => {
    axios
      .post(url, postData, config)
      .then((res) => {
        history.push("/thank-you");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteAddress = (id) => {
    const urlDelete = createUrl("/deleteAddress/" + id);
    debugger;
    axios.delete(urlDelete, config).then((res) => {
      toast.success("Address deleted succesfully");
      loadAddress();
    });
  };

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <p className="card-text">{address.addressLine1}</p>
          <p className="card-text">{address.city}</p>
          <p className="card-text">{address.state}</p>
          <p className="card-text">{address.pinCode}</p>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              placeOrder(address.id);
            }}
          >
            Deliver here
          </button>

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              deleteAddress(address.id);
            }}
          >
            Delete
          </button>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default AddressRender;
