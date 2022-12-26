import { Model, Schema } from "mongoose";
import createModel from "../createModel";

interface IRecipe {
    name: string;
    ingredients: any[][];
    directions: string[];
}

type RecipeModel = Model<IRecipe, {}>;

const recipeSchema = new Schema<IRecipe, RecipeModel>({
    name: String,
    ingredients: <any[][]>([]),
    directions: <string[]>([]),
});

export default createModel<IRecipe, RecipeModel>("recipes", recipeSchema);
