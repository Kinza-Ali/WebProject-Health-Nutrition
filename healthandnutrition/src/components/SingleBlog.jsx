import React from "react";
import blogService from "./services/BlogService";
import { withRouter } from "react-router";
import userService from "./services/UserService";
import { toast } from "react-toastify";

const SingleBlogs = (props) => {
  const { blog, onDelete, history } = props;
  return (
    // <header className = 'test'>
    <div className="testimonials">
      <div>
        <div style={{ display: "flex" }}>
          <div style={{ paddingRight: "20px" }}>
            {" "}
            <h5> Name : </h5>{" "}
          </div>

          <div>
            {" "}
            <p>{blog.ClientName}</p>{" "}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <h5 style={{ paddingRight: "20px" }}> Weight Before:</h5>
          <h5>{blog.WeightBefore}</h5>
        </div>
        <div style={{ display: "flex" }}>
          <h5 style={{ paddingRight: "20px" }}> Weight Lost:</h5>
          <h5>{blog.WeightLost}</h5>
        </div>
        <div style={{ display: "flex" }}>
          <h5 style={{ paddingRight: "20px" }}> Time: </h5>

          <h5>{blog.Time}</h5>
        </div>
        {/* <div style={{display:'flex'}}></div> */}
        <h5> Story:</h5>

        <p>{blog.Story}</p>
        {userService.isAdmin() && (
          <>
            <div>
              <button
                className="btn btn-warning blog-btn-delete"
                onClick={(e) => {
                  blogService
                    .deleteStory(blog._id)
                    .then((data) => {
                      console.log(data);
                      onDelete();
                      toast.success("Story Deleted!", {
                        position: toast.POSITION.TOP_CENTER,
                      });
                    })
                    .catch((err) => {
                      console.log(err);
                      toast.error("Story Not Deleted", {
                        position: toast.POSITION.TOP_LEFT,
                      });
                    });
                }}
              >
                Delete
              </button>
            </div>
            <div>
            <h3> 
              <button
                className="btn btn-warning blog-btn-delete"
                onClick={(e) => {
                  history.push("/updatestory/" + blog._id);
                }}
              >
                Update
              </button>
              </h3>
            </div>
          </>
        )}
      </div>
    </div>
    // </header>
  );
};

export default withRouter(SingleBlogs);
