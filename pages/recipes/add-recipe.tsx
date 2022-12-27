import Link from 'next/link';
import React from 'react';
import RecipeForm from '../../forms/recipes/recipe.form';

export default function AddRecipe() {

    return (
        <>
          <RecipeForm />
          <Link href="/">Back to home</Link>
        </>
    );
}