//Home
import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import userService from "./services/UserService";
import { Button } from "react-bootstrap";

const LandingPage = () => {
  return (
    <header className="header">
      <div className="row">
        <ul className="main-nav">
          <li className="main-navli main-navlink ">
            {" "}
            <Link style={{ color: "white" }} to="/home" className="active">
              {" "}
              Home{" "}
            </Link>{" "}
          </li>
          <li className="main-navli main-navlink">
            {" "}
            <Link style={{ color: "white" }} to="/blogs">
              {" "}
              Success Stories{" "}
            </Link>{" "}
          </li>
          <li className="main-navli main-navlink">
            {" "}
            <Link style={{ color: "white" }} to="/recipes">
              {" "}
              Recipes{" "}
            </Link>{" "}
          </li>
          {/* <li className="main-navli main-navlink">
            {" "}
            <Link style={{ color: "white" }} to="/addrecipes">
              {" "}
              Add Recipes{" "}
            </Link>{" "}
          </li> */}
          <li className="main-navli main-navlink">
            {" "}
            <Link style={{ color: "white" }} to="/workouts">
              {" "}
              Workouts{" "}
            </Link>{" "}
          </li>
          {!userService.isLoggedIn() ? (
            <>
              <li className="main-navli main-navlink">
                {" "}
                <Link style={{ color: "white" }} to="/signUp">
                  {" "}
                  Sign Up{" "}
                </Link>{" "}
              </li>
              <li className="main-navli main-navlink">
                {" "}
                <Link style={{ color: "white" }} to="/login">
                  {" "}
                  Login{" "}
                </Link>{" "}
              </li>
            </>
          ) : (
            <li className="main-navli main-navlink">
              {" "}
              <Link
                style={{ color: "white" }}
                onClick={(e) => {
                  userService.logout();
                  window.location.reload();
                }}
                to="/logout"
              >
                {" "}
                Logout{" "}
              </Link>{" "}
            </li>
          )}

          <li className="main-navli main-navlink">
            {" "}
            <Link style={{ color: "white" }} to="/contactUs">
              {" "}
              Contact Us{" "}
            </Link>{" "}
          </li>
          <li className="main-navli main-navlink">
            {" "}
            <Link style={{ color: "white" }} to="/aboutUs">
              {" "}
              About Us{" "}
            </Link>{" "}
          </li>
        </ul>
      </div>
      <div className="hero">
        <h1> Health and Nutrition </h1>
        <div className="main-btn">
          <Link to="/signUp" className="btn btn-half">
            {" "}
            Ready to Sign Up
          </Link>
          <Link to="/blogs" className="btn btn-full">
            {" "}
            Success Review
          </Link>
        </div>
      </div>
    </header>
  );
};
export default LandingPage;
