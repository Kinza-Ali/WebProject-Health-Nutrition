import React, { useState } from "react";
import NavBar from "./NavBar";
import blogService from "./services/BlogService";
import { toast } from "react-toastify";

const AddStories = (props) => {
  const [ClientName, setClientName] = React.useState("");
  const [WeightBefore, setWeightBefore] = useState("");
  const [WeightLost, setWeightLost] = useState("");
  const [Time, setTime] = useState("");
  const [Story, setStory] = useState("");

  return (
    <header className="blogs-header">
      <div>
        <NavBar />
        <div> </div>
        <div className="container">
          <div className="form">
            <h3 className="text-center form-h3 h3"> Add Story </h3>
            {/* <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab> */}
            <div>
              <input
                value={ClientName}
                className="form-control form-input"
                type="text"
                name="ClientName"
                placeholder="add ClientName"
                onChange={(e) => {
                  setClientName(e.target.value);
                }}
              />{" "}
              <br />
            </div>
            <input
              className="form-control form-input"
              type="text"
              value={WeightBefore}
              name="WeightBefore"
              placeholder="add WeightBefore"
              onChange={(e) => {
                setWeightBefore(e.target.value);
              }}
            />{" "}
            <br />
            <input
              className="form-control form-input"
              type="text"
              value={WeightLost}
              name="WeightLost"
              placeholder="add WeightLost"
              onChange={(e) => {
                setWeightLost(e.target.value);
              }}
            />{" "}
            <br />
            <input
              className="form-control form-input"
              type="text"
              value={Time}
              name="Time"
              placeholder="add Time"
              onChange={(e) => {
                setTime(e.target.value);
              }}
            />{" "}
            <br />
            <input
              className="form-control form-input"
              type="text"
              value={Story}
              name="Story"
              placeholder="add Story"
              onChange={(e) => {
                setStory(e.target.value);
              }}
            />{" "}
            <br />
            <button
              className="btn btn-warning submit-btn"
              onClick={(e) => {
                blogService
                  .addStory({
                    ClientName,
                    WeightBefore,
                    WeightLost,
                    Time,
                    Story,
                  })
                  .then((data) => {
                    console.log(data);
                    toast.success("Story Added!", {
                      position: toast.POSITION.TOP_CENTER,
                    });
                    //console.log(res.data);
                  })
                  .catch((err) => {
                    toast.error("Story Not Added \n Check Login", {
                      position: toast.POSITION.TOP_LEFT,
                    });
                    console.log(err);
                  });
              }}
            >
              Add Story
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AddStories;
