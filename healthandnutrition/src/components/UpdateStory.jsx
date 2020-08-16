import React, { useState } from "react";
import NavBarBlack from "./NavBarBlack";
//import axios from "axios";
import blogService from "./services/BlogService";
import { toast } from "react-toastify";

const UpdateStory = (props) => {
  const [ClientName, setClientName] = React.useState("");
  const [WeightBefore, setWeightBefore] = useState("");
  const [WeightLost, setWeightLost] = useState("");
  const [Time, setTime] = useState("");
  const [Story, setStory] = useState("");

  const id = props.match.params.id;

  console.log(id);

  React.useEffect(() => {
    blogService.getSingleStory(id).then((data) => {
      setClientName(data.ClientName);
      setWeightBefore(data.WeightBefore);
      setWeightLost(data.WeightLost);
      setTime(data.Time);
      setStory(data.Story);
    });
  }, []);
  return (
    <header className="recipe-header">
      <div>
        <NavBarBlack />
        <div> </div>
        <div className="container">
          <div className="form">
            <h3 style={{ color: "black" }} className="text-center form-h3 h3">
              Update Story{" "}
            </h3>
            <div>
              <input
                value={ClientName}
                className="form-control form-input"
                type="text"
                name="ClientName"
                placeholder="add Client Name"
                onChange={(e) => {
                  setClientName(e.target.value);
                }}
                required
              />{" "}
              <br />
            </div>

            <div>
              <input
                value={WeightBefore}
                className="form-control form-input"
                type="text"
                name="WeightBefore"
                placeholder="add WeightBefore"
                onChange={(e) => {
                  setWeightBefore(e.target.value);
                }}
                required
              />{" "}
              <br />
            </div>

            <div>
              <input
                value={WeightLost}
                className="form-control form-input"
                type="text"
                name="WeightLost"
                placeholder="add WeightLost"
                onChange={(e) => {
                  setWeightLost(e.target.value);
                }}
                required
              />{" "}
              <br />
            </div>

            <div>
              <input
                value={Time}
                className="form-control form-input"
                type="text"
                name="Time"
                placeholder="add Time"
                onChange={(e) => {
                  setTime(e.target.value);
                }}
                required
              />{" "}
              <br />
            </div>

            <div>
              <input
                value={Story}
                className="form-control form-input"
                type="text"
                name="Story"
                placeholder="add Story"
                onChange={(e) => {
                  setStory(e.target.value);
                }}
                required
              />{" "}
              <br />
            </div>
            <button
              className="btn btn-warning submit-btn"
              onClick={(e) => {
                blogService
                  .updateStory(id, {
                    ClientName,
                    WeightBefore,
                    WeightLost,
                    Time,
                    Story,
                  })
                  .then((data) => {
                    console.log(data);
                    toast.success("Story Updated!", {
                      position: toast.POSITION.TOP_CENTER,
                    });
                    //console.log(res.data);
                  })
                  .catch((err) => {
                    console.log(err);
                    toast.error("Story Not Updated", {
                      position: toast.POSITION.TOP_LEFT,
                    });
                  });
              }}
            >
              Update Story
            </button>
            {/* {recipeName}
              {ingredients}
              {method} */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default UpdateStory;
