import { connection, connect } from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import recipeModel from "../../lib/models/recipe.model";

const uri: string = process.env.MONGODB_URI || "";
export default async function recipe(
    req: NextApiRequest, 
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        try {
        console.log(req.body)
        await connect(uri);
        const recipeObject = new recipeModel(req.body);
        await recipeObject.save();

        res.status(201).json({
            recipeObject,
        });

        } catch (err) {
            res.status(400).json(err);
        }
    }

    if (req.method === 'GET') {
        try {
        await connect(uri);
        
        const recipeObjects = await recipeModel.find({});
//console.log(recipeObjects)
        res.status(201).json(recipeObjects);

        } catch (err) {
            res.status(400).json(err);
        }
    }
    
}
