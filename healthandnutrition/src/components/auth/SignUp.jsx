import React, { useState } from "react";
// import { Input  ,button} from "react";
import NavBar from "../NavBar";
import userService from "../services/UserService";
import { data } from "jquery";
import Axios from "axios";
import { toast } from "react-toastify";
// import { alert } from "react-bootstrap";
const SignUp = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [age, setAge] = React.useState("");
  return (
    <header className="signUp-header">
      <div>
        <NavBar />
        <div></div>
        {/* <form> */}
        <div className="form">
          <div className="container">
            <h3 className="text-center form-h3 h3">Sign Up </h3>
            {/* username */}
            <div>
              <input
                name="username"
                type="text"
                value={username}
                placeholder="Username"
                className="form-control form-input "
                title="Valid Charactors include (A-Z) (a-z) (' space -)"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />{" "}
              <br />
            </div>
            {/* age */}
            <div>
              <input
                name="age"
                type="number"
                value={age}
                placeholder="Age"
                className="form-control form-input"
                min="20"
                max="70"
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                required
              />{" "}
              <br />
            </div>
            {/* email */}
            <div>
              <input
                name="email"
                type="email"
                id="email"
                value={email}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                placeholder="Email"
                className="form-control form-input"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />{" "}
              <br />
            </div>
            {/* password */}
            <div>
              <input
                name="password"
                type="password"
                value={password}
                placeholder="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                className="form-control form-input"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
            <button
              className="btn btn-warning submit-btn"
              onClick={(e) => {
                Axios.post("/user/signup", { email, password, username, age })
                  .then((res) => {
                    //resolve(res.data);
                    console.log("*********");
                    console.log(res.data);
                    props.history.push("/login");
                    toast.success("User Created", {
                      position: toast.POSITION.TOP_CENTER,
                    });
                  })
                  .catch((err) => {
                    // reject(err);
                    toast.error("User Not Created", {
                      position: toast.POSITION.TOP_LEFT,
                    });
                    console.log(err);
                    alert("Check the entries");
                  });
                // userService
                //   .signUp(email, password, username, age)
                //   .then((data) => {
                //     console.log("*********");
                //     console.log(data);
                //     props.history.push("/login");
                //   })
                //   .catch((err) => {
                //     console.log("**** err *****");
                //     console.log(err);
                //   });
              }}
            >
              {" "}
              Submit{" "}
            </button>
          </div>
        </div>
        {/* </form> */}
      </div>
    </header>
  );
};
export default SignUp;
