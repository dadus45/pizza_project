import axios from "axios";
import { createUrl, getConfig } from "../utils/utils";
import { useEffect, useState } from "react";
import AddressRender from "../Screens/AddressRender";
import { ToastContainer, toast } from "react-toastify";

function Address() {
  const urlGet = createUrl("/address/" + sessionStorage.getItem("userName"));
  const config = getConfig(sessionStorage.getItem("jwtToken"));
  const [addresses, setAddresses] = useState([]);

  const [addressLine1, setAddressLine1] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const userName = sessionStorage.getItem("userName");

  const postData = {
    addressLine1,
    city,
    state,
    pinCode,
    userName,
  };

  useEffect(() => {
    loadAddress();
  }, []);

  const loadAddress = () => {
    axios
      .get(urlGet, config)
      .then((res) => {
        const data = res.data;
        setAddresses(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const urlPost = createUrl("/addNewAddress");

  const addAddress = () => {
    console.log(postData);
    axios
      .post(urlPost, postData, config)
      .then((res) => {
        if (res.status == 200) {
          toast.success("Address added successfully 👌! Select address");
          loadAddress();
        }
      })
      .catch((err) => {
        toast.error("please try again 😲 all fields are compulsory !");
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <div>
          <h5>ADD ADDRESS</h5>
        </div>
        <div class="table-responsive table-bordered container">
          <h5>add address</h5>
          <table class="table table-hover">
            <tbody>
              <tr>
                <td>addressLine1 :</td>
                <td>
                  <input
                    type="text"
                    name="addressLine1"
                    className="form-control"
                    required="required"
                    value={addressLine1}
                    onChange={(e) => {
                      setAddressLine1(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>city :</td>
                <td>
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    required="required"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>state :</td>
                <td>
                  <input
                    type="text"
                    name="state"
                    className="form-control"
                    required="required"
                    value={state}
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>pin code :</td>
                <td>
                  <input
                    type="text"
                    name="pinCode"
                    className="form-control"
                    required="required"
                    value={pinCode}
                    onChange={(e) => {
                      setPinCode(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={addAddress}
                  >
                    Add address
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ToastContainer />
        <hr></hr>
      </div>
      <div>
        <h5>SELECT FROM EXISTING ADDRESS</h5>
      </div>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        {addresses.map((address) => {
          return <AddressRender address={address} loadAddress={loadAddress} />;
        })}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default Address;
