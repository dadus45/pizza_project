import { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./styles/common.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { createUrl } from "../utils/utils";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


function Login(props) {
  
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [message, setmessage] = useState("");
  const history = useHistory();

  const url = createUrl("/authenticate");
  const jwtToken = "Bearer ";
  const postData = {
    userName,
    userPassword,
  };

  useEffect(() => {
    if (message != "") {
      setTimeout(() => {
        setmessage("");
      }, 3000);
    }
  }, [message]);

  const SignIn = () => {
    debugger;
    axios
      .post(url, postData)
      .then((response) => {
        console.log(response);
        sessionStorage.setItem("isLoggedIn", true);
        sessionStorage.setItem("userName", userName);
        sessionStorage.setItem("jwtToken", jwtToken + response.data.jwtToken);
        sessionStorage.setItem("role", response.data.user.roles[0].roleName);
        console.log(sessionStorage.getItem("role"));

        if (sessionStorage.getItem("role")=="admin") {
         console.log(sessionStorage.getItem("role"));
          history.push("/admin")
        }
        else{
        history.push("/pizza")};
      })
      .catch((error) => {
        toast.error("Incorrect Credentials ! Please try again");
        console.log(error);
      });
  };

  return (
    <>
      {/* Section: Design Block */}
      <section className="text-center">
        {/* Background image */}
        <div
          className="p-5 bg-image"
          style={{
            backgroundImage: 'url("./Data/bg1.jpg")',
            height: 300,
          }}
        />
        {/* Background image */}
        <div
          className="card mx-4 mx-md-5 shadow-5-strong"
          style={{
            marginTop: "-27px",
            background: "hsla(9, 100%, 64%, 0.6)",
            backdropFilter: "blur(30px)",
          }}
        >
          <div className="card-body py-5 px-md-5" style={{ marginTop: 96 }}>
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-5">Sign In now</h2>
                <center>
                  <table
                    className="col-12 col-lg-9 col-xl-7"
                    style={{ borderRadius: 15, boxShadow: "4px 4px 4px " }}
                  >
                    <tbody>
                      <tr>
                        <td>User Name</td>
                        <td>
                          <input
                            type="text"
                            placeholder="Enter UserName"
                            value={userName}
                            name="username"
                            onChange={(e) => {
                              setUserName(e.target.value);
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Password</td>
                        <td>
                          <input
                            type="password"
                            placeholder="Enter Password"
                            value={userPassword}
                            name="password"
                            onChange={(e) => {
                              setUserPassword(e.target.value);
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={"2"}>
                          <button onClick={SignIn} className="btn btn-primary">
                            Login
                          </button>
                          <p className="text-center text-muted mt-5 mb-0">
                            Don't have an account?{" "}
                            <a
                              href="/registerUser"
                              className="fw-bold text-body"
                            >
                              <u>Register here</u>
                            </a>
                          </p>
                          {message}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </center>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </section>
    </>
  );
}

export default Login;
