import React, { useState, useEffect } from "react";
import SingleRecipe from "./SingleRecipe";
//import axios from "axios";
import NavBarBlack from "./NavBarBlack";
import recipeService from "./services/RecipeService";
import userService from "./services/UserService";

const Recipes = (props) => {
  const [recipe, setRecipe] = React.useState([]);

  const getData = () => {
    recipeService
      .getRecipe()
      .then((data) => {
        setRecipe(data);
        //console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getData();
  React.useEffect(getData, []);
  // -------------------------Add Recipe Button-----------
  const handleAddRecipe = () => {
    props.history.push("/addRecipes");
  };
  //
  return (
    <header className="recipe-header">
      <div>
        <NavBarBlack />
        <div className="features">
          <h3 className="text-center h3 features-h3">Recipes</h3>
          <div>
            {userService.isLoggedIn() && (
              <button
                className="btn btn-warning submit-btn-btn"
                onClick={handleAddRecipe}
              >
                {" "}
                Add Recipe{" "}
              </button>
            )}
          </div>
          {/* <div className="copy"> */}
          {/* </p>Recipes :{recipe.id}; */}

          {recipe.length === 0 ? (
            <p>there are no recipes </p>
          ) : (
            <div>
              {recipe.map((product, index) => (
                <SingleRecipe key={index} recipe={product} onDelete={getData} />
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Recipes;
