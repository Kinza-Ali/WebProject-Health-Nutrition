import React from "react";
import { useState, useEffect } from "react";
import SingleBlog from "./SingleBlog";
import NavBar from "./NavBar";
//import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import blogService from "./services/BlogService";
import userService from "./services/UserService";

const Blogs = (props) => {
  const [blog, setBlog] = React.useState([]);

  const getData = () => {
    blogService
      .getStory()
      .then((data) => {
        setBlog(data);
        //console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getData();
  React.useEffect(getData, []);
  //-------------------------Add Story Button-----------
  const handleAddStory = () => {
    props.history.push("/addstories");
  };

  return (
    <header className="blogs-header">
      <div>
        <NavBar />
        <div className="testimonials">
          <div></div>
          <div>
            <h3 className="text-center h3 "> Blogs</h3>
            <div>
              {userService.isLoggedIn() && (
                <button
                  className="btn btn-warning submit-btn-btn"
                  onClick={handleAddStory}
                >
                  {" "}
                  Add Story{" "}
                </button>
              )}
            </div>
            <div id="blogs"></div>
            <h4 className="text-center testimonialsh4">Success Stories</h4>
            <div className="container ">
              {/* <div className="row "> */}
              {/* <div className="col-md-4  "> */}

              {blog.length === 0 ? (
                <p>there are no success stories </p>
              ) : (
                <div>
                  {blog.map((product, index) => (
                    <SingleBlog key={index} blog={product} onDelete={getData} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Blogs;
