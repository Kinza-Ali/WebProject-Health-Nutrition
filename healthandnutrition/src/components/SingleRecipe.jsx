import React from "react";
import "../index.css";
import recipeService from "./services/RecipeService";
import { withRouter } from "react-router";
import userService from "./services/UserService";
import { toast } from "react-toastify";

const SingleRecipe = (props) => {
  const { recipe, onDelete, history } = props;
  return (
    <header className="recipe-head">
      <div>
        <div>
          <h3 className="text-center ">{recipe.dishName}</h3>
          <h4 style={{ paddingLeft: "216px" }}> Ingrdients:</h4>
          <p className="copy"> {recipe.ingredients}</p>
          <h4 style={{ paddingLeft: "216px" }}> Method:</h4>
          <p style={{ PaddingBottom: "0px" }} className="copy">
            {recipe.method}
          </p>
          {/* <div style={{ paddingTop: "10px" }}></div> */}
          {userService.isAdmin() && (
            <>
              <div>
                <button
                  className="btn btn-warning submit-btn-delete"
                  onClick={(e) => {
                    recipeService
                      .deleteRecipe(recipe._id)
                      .then((data) => {
                        console.log(data);
                        onDelete();
                        toast.success("Recipe Deleted", {
                          position: toast.POSITION.TOP_CENTER,
                        });
                      })
                      .catch((err) => {
                        toast.error("Recipe Not Deleted", {
                          position: toast.POSITION.TOP_LEFT,
                        });
                        console.log(err);
                      });
                  }}
                >
                  Delete
                </button>
              </div>
              <div>
                <button
                  className="btn btn-warning submit-btn-delete "
                  onClick={(e) => {
                    history.push("/updaterecipes/" + recipe._id);
                  }}
                >
                  Update
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default withRouter(SingleRecipe);
