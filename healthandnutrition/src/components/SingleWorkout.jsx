import React from "react";
import { Link } from "react-router-dom";
const SingleWorkout = ({ workout }) => {
  return (
    <div>
      <h2>{workout.WorkoutName}</h2>
      <h4> For </h4>
      <p>{workout.For}</p>
      <h4> Link</h4>
      <Link>{workout.Link}</Link>
    </div>
  );
};

export default SingleWorkout;
