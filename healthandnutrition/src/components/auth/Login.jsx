import React from "react";
// import { Input  ,button} from "react";
import NavBar from "../NavBar";
import userService from "../services/UserService";
import { toast } from "react-toastify";

const Login = (props) => {
  const [email, setEmail] = React.useState("admin@asd.com");
  const [password, setPassword] = React.useState("Asd12345");
  return (
    <header className="login-header">
      <div>
        <NavBar />
        <div></div>
        <div className="form">
          <div className="container">
            <h3 className="text-center form-h3 h3">Login </h3>
            <input
              name="email"
              type="email"
              value={email}
              id="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              placeholder="Email"
              className="form-control form-input"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />{" "}
            <br />
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
            <button
              className="btn btn-warning submit-btn"
              onClick={(e) => {
                userService
                  .login(email, password)
                  .then((data) => {
                    console.log(data);
                    window.location.href = "/home";
                  })
                  .catch((err) => {
                    console.log(err);
                    toast.error("Invalid User", {
                      position: toast.POSITION.TOP_LEFT,
                    });
                  });
              }}
            >
              {" "}
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Login;
