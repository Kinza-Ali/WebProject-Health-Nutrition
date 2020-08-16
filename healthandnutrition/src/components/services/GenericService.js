import axios from "axios";

axios.defaults.baseURL = "http://localhost:2001/";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + window.localStorage.getItem("token");
// axios.defaults.headers.common["Accept"] = window.localStorage.getItem(
//   "application/json"
// );
class GenericService {
  constructor() {}
  get = (url) =>
    new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  post = (url, data) =>
    new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  delete = (url) =>
    new Promise((resolve, reject) => {
      axios
        .delete(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  put = (url, data) =>
    new Promise((resolve, reject) => {
      axios
        .put(url, data)
        .then((res) => {
          // window.localStorage.setItem("token", res.token);
          // console.log("*********");
          // console.log(data);
          // console.log("*********");
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
}

export default GenericService;
