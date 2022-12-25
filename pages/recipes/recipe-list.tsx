import Link from 'next/link';
import React, { useEffect } from 'react';

export default function RecipeList() {
    const [recipes, setRecipes] = React.useState<any[]>([])

    const getRecipes = () => {
        fetch('/api/recipe', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((res) => res.json())
          .then(res => setRecipes(res))
    }

    const mapRecipes = () => {
        const recipesArray = recipes.map(recipe => {
            return (<Link key={recipe._id} href={`${recipe._id}`}>{recipe.name}</Link>)
        })
        return recipesArray
    }

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <>
          <h1>recipe list</h1>
          {/* <button onClick={getRecipes}>get</button> */}
          {recipes.length > 0 ? mapRecipes() : 'no recipes'}
          <h2>
            <Link href="/">Back to home</Link>
          </h2>
        </>
    );
}