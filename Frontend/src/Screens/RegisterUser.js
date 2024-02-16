import "./styles/RegisterUser.css";
import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createUrl } from "../utils/utils";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


function RegisterUser() {
  const url = createUrl("/registerUser");
  const history = useHistory();
  
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [firstName, setfirstName] = useState("");
  const [validfirstName, setValidfirstName] = useState(false);
  const [firstNameFocus, setfirstNameFocus] = useState(false);

  const [lastName, setlastName] = useState("");
  const [validlastName, setValidlastName] = useState(false);
  const [lastNameFocus, setlastNameFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const postData = {
    userName: user,
    userFirstName: firstName,
    userLastName: lastName,
    userPassword: pwd
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  useEffect(() => {
    setValidfirstName(PWD_REGEX.test(firstName));
  }, [firstName]);

  useEffect(() => {
    setValidlastName(PWD_REGEX.test(lastName));
  }, [lastName]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, firstName, lastName]);

  const handleSubmit = async (e) => {
    console.log("hi");
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = USER_REGEX.test(firstName);
    const v3 = USER_REGEX.test(lastName);
    const v4 = PWD_REGEX.test(pwd);
    if (!v1 || !v4) {
      setErrMsg("Invalid Entry");
      return;
    }

    try {
      const response = await axios.post(url, postData);
      debugger;
      console.log(response.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      setUser("");
      setPwd("");
      if(response.status ==200)
      {
        toast.success("👌Registration successful. Please log in.", {
          position: "top-center",
          autoClose: 5000, 
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme:"colored"
        });
        // history.push("/login");
      }
    } catch (err) {
      if (!err?.response) {
        toast.error("😲 No Server Response", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      } else if (err.response?.status === 409) {
        toast.error("Username Taken", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      } else {
        toast.error("Registration Failed", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      }
      errRef.current.focus();
    }
  };

  return (
    <>
        <section
          className="vh-100 bg-image"
          style={{
            backgroundImage:
              'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")',
          }}
        >
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card" style={{ borderRadius: "15px" }}>
                    <div className="card-body p-5">
                      <p
                        ref={errRef}
                        className={errMsg ? "errmsg" : "offscreen"}
                        aria-live="assertive"
                      >
                        {errMsg}
                      </p>
                      <h2 className="text-uppercase text-center mb-5">
                        Create an account
                      </h2>
                      <center>
                      <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                          <label htmlFor="username">
                            UserName
                            <span className={validName ? "valid" : "hide"}>
                              <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span
                              className={
                                validName || !user ? "hide" : "invalid"
                              }
                            >
                              <FontAwesomeIcon icon={faTimes} />
                            </span>
                          </label>
                          <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                          />
                         
                          <p
                            id="uidnote"
                            className={
                              userFocus && user && !validName
                                ? "instructions"
                                : "offscreen"
                            }
                          >
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.
                            <br />
                            Must begin with a letter.
                            <br />
                            Letters, numbers, underscores, hyphens allowed.
                          </p>
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example3cg"
                          >
                            FirstName
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setfirstName(e.target.value)}
                            value={firstName}
                            required
                            aria-invalid={validfirstName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setfirstNameFocus(true)}
                            onBlur={() => setfirstNameFocus(false)}
                          />
                         
                          <p
                            id="uidnote"
                            className={
                              firstNameFocus && firstName && !validfirstName
                                ? "instructions"
                                : "offscreen"
                            }
                          >
                            {" "}
                            4 to 24 characters.
                            <br />
                            Must begin with a letter.
                            <br />
                            Letters, numbers, underscores, hyphens allowed.
                          </p>
                        </div>
                        
                        <div className="form-outline mb-4">
                           <label className="form-label" htmlFor="lastName">
                            LastName
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setlastName(e.target.value)}
                            value={lastName}
                            required
                            aria-invalid={validlastName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setlastNameFocus(true)}
                            onBlur={() => setlastNameFocus(false)}
                          />
                          
                          <p
                            id="uidnote"
                            className={
                              lastNameFocus && lastName && !validlastName
                                ? "instructions"
                                : "offscreen"
                            }
                          >
                            {" "}
                            4 to 24 characters.
                            <br />
                            Must begin with a letter.
                            <br />
                            Letters, numbers, underscores, hyphens allowed.
                          </p>
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example4cdg"
                          >
                            Password 
                          </label>
                          <FontAwesomeIcon
                            icon={faCheck}
                            className={validPwd ? "valid" : "hide"}
                          />
                          <FontAwesomeIcon
                            icon={faTimes}
                            className={validPwd || !pwd ? "hide" : "invalid"}
                          />
                          <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                          />
                          
                          <p
                            id="pwdnote"
                            className={
                              pwdFocus && !validPwd
                                ? "instructions"
                                : "offscreen"
                            }
                          >
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.
                            <br />
                            Must include uppercase and lowercase letters, a
                            number and a special character.
                            <br />
                            Allowed special characters:{" "}
                            <span aria-label="exclamation mark">!</span>{" "}
                            <span aria-label="at symbol">@</span>{" "}
                            <span aria-label="hashtag">#</span>{" "}
                            <span aria-label="dollar sign">$</span>{" "}
                            <span aria-label="percent">%</span>
                          </p>
                        </div>
                        <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          disabled={!validName || !validPwd ? true : false}
                        >
                          Register
                        </button>
                        </div>
                       
                      </form>
                      </center>
                      <p className="text-center text-muted mt-5 mb-0">
                       already have an account?{" "}
                        <a href="/login" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </section>
      
    </>
  );
}

export default RegisterUser;
