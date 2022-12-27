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
        return (<div key={recipe._id} ><Link href={`${recipe._id}`}>{recipe.name}</Link></div>)
    })
    return recipesArray
  }

  useEffect(() => {
      getRecipes();
  }, []);

  return (
    <>
      <h1>Recipe list</h1>
      {recipes.length > 0 ? mapRecipes() : 'no recipes'}
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}