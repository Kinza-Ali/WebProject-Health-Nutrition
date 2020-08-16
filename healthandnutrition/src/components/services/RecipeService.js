import GenericService from "./GenericService";

class RecipeService extends GenericService {
  constructor() {
    super();
  }

  addRecipe = (data) => this.post("recipies/addDish", data);
  deleteRecipe = (_id) => this.delete("recipies/delDish/" + _id);
  updateRecipe = (_id, data) => this.put("recipies/updateDish/" + _id, data);
  getRecipe = () => this.get("recipies/getDish");
  getSingleRecipe = (id) => this.get("recipies/getDish/" + id);
}

let recipeService = new RecipeService();
export default recipeService;
