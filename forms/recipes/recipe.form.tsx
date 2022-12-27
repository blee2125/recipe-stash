import React from 'react';
import IngredientsInput from './ingredients.input';
import DirectionsInput from './directions.input';

export default function RecipeForm() {
    const [name, setName] = React.useState(String)
    const [ingredients, setIngredients] = React.useState<string[]>([])
    const [directions, setDirections] = React.useState<string[]>([])

    const createRecipe = () => {
      fetch('/api/recipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: name, ingredients: ingredients, directions: directions})
      })
    }

    return (
        <>
          <h1>Create a new recipe</h1>

          <form>
            <label>Name</label>
            <input
                type='text'
                name='recipe-name'
                id='name'
                placeholder='enter recipe name'
                onChange={e => setName(e.target.value)}
            /><br></br>
            <IngredientsInput ingredients={ingredients} setIngredients={setIngredients}/>
            <DirectionsInput directions={directions} setDirections={setDirections}/>
          </form>

          <button
            onClick={createRecipe}
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
            Save
            </button>
        </>
    );
}