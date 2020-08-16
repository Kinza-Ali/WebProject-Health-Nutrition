import React from "react";
import { Link } from "react-router-dom";
import userService from "./services/UserService";

const NavBarBlack = () => {
  return (
    <div>
      <div className="row">
        <ul className="main-nav">
          <li className="main-navli main-navlink ">
            {" "}
            <Link
              style={{ color: "black", float: "right" }}
              className="main-navlink"
              to="/home"
              className="active"
            >
              {" "}
              Home{" "}
            </Link>{" "}
          </li>
          <li className="main-navli main-navlink">
            {" "}
            <Link style={{ color: "black", float: "right" }} to="/blogs">
              {" "}
              Success Stories{" "}
            </Link>{" "}
          </li>
          {/* <li className="main-navli main-navlink">
            <Link style={{ color: "black", float: "right" }} to="/addstories">
              Add Story
            </Link>{" "}
          </li> */}
          <li className="main-navli main-navlink">
            {" "}
            <Link style={{ color: "black", float: "right" }} to="/recipes">
              {" "}
              Recipes{" "}
            </Link>{" "}
          </li>
          {/* <li className="main-navli main-navlink">
            {" "}
            <Link style={{ color: "black", float: "right" }} to="/addrecipes">
              Add Recipes
            </Link>
          </li> */}
          <li className="main-navli main-navlink">
            {" "}
            <Link style={{ color: "black", float: "right" }} to="/workouts">
              {" "}
              Workouts{" "}
            </Link>{" "}
          </li>

          <li className="main-navli main-navlink">
            {" "}
            <Link style={{ color: "black", float: "right" }} to="/contactUs">
              {" "}
              Contact Us{" "}
            </Link>{" "}
          </li>
          <li className="main-navli main-navlink">
            {" "}
            <Link style={{ color: "black", float: "right" }} to="/aboutUs">
              {" "}
              About Us{" "}
            </Link>{" "}
          </li>
          {!userService.isLoggedIn() ? (
            <>
              <li className="main-navli main-navlink">
                {" "}
                <Link style={{ color: "black" }} to="/signUp">
                  {" "}
                  Sign Up{" "}
                </Link>{" "}
              </li>
              <li className="main-navli main-navlink">
                {" "}
                <Link style={{ color: "black" }} to="/login">
                  {" "}
                  Login{" "}
                </Link>{" "}
              </li>
            </>
          ) : (
            <li className="main-navli main-navlink">
              {" "}
              <Link
                onClick={(e) => {
                  userService.logout();
                  window.location.reload();
                }}
                style={{ color: "black" }}
                to="/logout"
              >
                {" "}
                Logout{" "}
              </Link>{" "}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBarBlack;
