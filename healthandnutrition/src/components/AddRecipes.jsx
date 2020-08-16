import React, { useState } from "react";
import NavBarBlack from "./NavBarBlack";
//import axios from "axios";
import recipeService from "./services/RecipeService";
import { toast } from "react-toastify";

const AddRecipes = (props) => {
  const [dishName, setRecipeName] = React.useState("");
  const [ingredients, setIngredient] = useState("");
  const [method, setMethod] = useState("");
  return (
    <header className="recipe-header">
      <div>
        <NavBarBlack />
        <div> </div>
        <div className="container">
          <div className="form">
            <h3 style={{ color: "black" }} className="text-center form-h3 h3">
              Add Recipes{" "}
            </h3>
            <div>
              <input
                value={dishName}
                className="form-control form-input"
                type="text"
                name="addRecipe"
                placeholder="add Recipe Name"
                onChange={(e) => {
                  setRecipeName(e.target.value);
                }}
                required
              />{" "}
              <br />
            </div>

            <div>
              <input
                value={ingredients}
                className="form-control form-input"
                type="text"
                name="addIngredients"
                placeholder="add Ingredients"
                onChange={(e) => {
                  setIngredient(e.target.value);
                }}
                required
              />{" "}
              <br />
            </div>

            <div>
              <input
                value={method}
                className="form-control form-input"
                type="text"
                name="addMethod"
                placeholder="add Method"
                onChange={(e) => {
                  setMethod(e.target.value);
                }}
                required
              />{" "}
              <br />
              <button
                className="btn btn-warning submit-btn"
                onClick={(e) => {
                  recipeService
                    .addRecipe({
                      dishName,
                      ingredients,
                      method,
                    })
                    .then((data) => {
                      console.log(data);
                      toast.success("Recipe Added!", {
                        position: toast.POSITION.TOP_CENTER,
                      });
                      //console.log(res.data);
                    })
                    .catch((err) => {
                      toast.error("Recipe Not Added \n Check Login", {
                        position: toast.POSITION.TOP_LEFT,
                      });

                      console.log(err);
                    });
                }}
              >
                Add Recipe
              </button>
              {/* {recipeName}
              {ingredients}
              {method} */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AddRecipes;
