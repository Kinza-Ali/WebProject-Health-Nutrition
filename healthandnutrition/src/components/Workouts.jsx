import React from "react";
// import { useState, useEffect } from "react";
// import SingleWorkout from "./SingleWorkout";
// import axios from "axios";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Workouts = () => {

  return (
    <header className="workout-header">
      <div>
        <NavBar />
        <div className="workout-plan">
          <div>
            <h3 class="text-center h3">Workouts</h3>
            <div class="container ">
              <div class="row">
                <div class="col-sm-4">
                  <h4 class="text-center">
                    Get Abs in 2 WEEKS | Abs Workout Challenge
                  </h4>
                  <a href="https://www.youtube.com/watch?v=2pLT-olgUJs">
                    {" "}
                    <img
                      class="image-link"
                      src={require("../assets/image/workout1.jpeg")}
                      alt=""
                    />
                  </a>
                </div>
                <div class="col-sm-4">
                  <h4 class="text-center">
                    10 Mins Toned Arms Workout | No Equipment
                  </h4>
                  <a href="https://www.youtube.com/watch?v=j64BBgBGNIU">
                    {" "}
                    <img
                      class="image-link"
                      src={require("../assets/image/crossfit.jpg")}
                      alt=""
                    />
                  </a>
                </div>
                <div class="col-sm-4">
                  <h4 class="text-center">
                    {" "}
                    15 Mins Full Body FAT BURN Workout | No Jumping
                  </h4>
                  <a href="https://www.youtube.com/watch?vhttps://www.youtube.com/watch?v=CD6BCdFHogg=j64BBgBGNIU">
                    {" "}
                    <img
                      class="image-link"
                      src={require("../assets/image/yoga.jpeg")}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Workouts;
