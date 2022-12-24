import { Model, Schema } from "mongoose";
import createModel from "../createModel";

interface IRecipe {
    name: string;
    ingredient: string;
    directions: string;
}

type RecipeModel = Model<IRecipe, {}>;

const recipeSchema = new Schema<IRecipe, RecipeModel>({
    name: String,
    ingredient: String,
    directions: String,
});

export default createModel<IRecipe, RecipeModel>("recipes", recipeSchema);
