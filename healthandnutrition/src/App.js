import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import NavBar from './components/NavBar';
import LandingPage from "./components/LandingPage";
import Blogs from "./components/Blogs";
import Recipes from "./components/Recipes";
import Workouts from "./components/Workouts";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import NotFound from "./components/NotFound";
import axios from "axios";
import AddRecipes from "./components/AddRecipes";
import AddStories from "./components/AddStories";
import UpdateRecipes from "./components/UpdateRecipes";
import UpdateStory from "./components/UpdateStory";

// import logo from './logo.svg';
// import './App.css';
// axios.defaults.baseURL = "http://localhost:2001";
axios.defaults.baseURL = "https://nutrition-backup-api-2.herokuapp.com";
// axios.defaults.baseURL = "http://5917a6172d18.ngrok.io";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/logout" component={AddRecipes} />
          <Route path="/addrecipes" component={AddRecipes} />
          <Route path="/addstories" component={AddStories} />
          <Route path="/updaterecipes/:id" component={UpdateRecipes} />
          <Route path="/updatestory/:id" component={UpdateStory} />
          <Route path="/login" component={Login} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/workouts" component={Workouts} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/contactUs" component={ContactUs} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/notFound" component={NotFound} />
          <Route path="/home" component={LandingPage} />
          <Redirect to="/home" />
        </Switch>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
