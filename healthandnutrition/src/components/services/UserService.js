import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";

class UserService extends GenericService {
  constructor() {
    super();
  }
  login = (email, password) =>
    new Promise((resolve, reject) => {
      this.post("user/login", { email, password })
        .then((token) => {
          window.localStorage.setItem("token", token.token);
          console.log("*********");
          console.log(token);
          console.log("*********");
          resolve(token);
        })
        .catch((err) => {
          console.log("*********");
          console.log(err);
          console.log("*********");
          reject(err);
        });
    });

  signUp = (email, password, username, age) =>
    this.post("user/signup", { email, password, username, age });
  logout = () => {
    window.localStorage.removeItem("token");
  };

  isLoggedIn = () => {
    return window.localStorage.getItem("token") ? true : false;
  };

  getLoggedInUser = () => {
    try {
      const jwt = window.localStorage.getItem("token");
      console.log("*****");
      console.log(jwt);
      console.log("*****");
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };
  isAdmin = () => {
    if (this.isLoggedIn()) {
      console.log("***********");
      console.log(this.getLoggedInUser());
      console.log("***********");
      if (this.getLoggedInUser().email === "admin@asd.com") return true;
      else return false;
    } else return false;
  };
}

let userService = new UserService();
export default userService;
