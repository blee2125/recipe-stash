import Link from 'next/link';
import React from 'react';
import RecipeForm from '../../forms/recipes/recipe.form';

export default function AddRecipe() {

    return (
        <>
          <h1>add recipe</h1>
          <h2>
            <Link href="/">Back to home</Link>
          </h2>
          
          <RecipeForm />
        </>
    );
}