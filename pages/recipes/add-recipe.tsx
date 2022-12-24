import Link from 'next/link';
import React from 'react';

export default function AddRecipe() {
    const [name, setName] = React.useState(String)
    const [ingredient, setIngredient] = React.useState(String)
    const [directions, setDirections] = React.useState(String)

    const createRecipe = () => {
        console.log(name)
        fetch('/api/recipe', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: name, ingredient: ingredient, directions: directions})
          })
    }

    return (
        <>
          <h1>add recipe</h1>
          <h2>
            <Link href="/">Back to home</Link>
          </h2>
          <form >
            <label>Name</label>
            <input
                type='text'
                name='recipe-name'
                id='name'
                placeholder='enter recipe name'
                onChange={e => setName(e.target.value)}
            />
            <label>Ingredient</label>
            <input
                type='text'
                name='ingredient'
                id='ingredient'
                placeholder='enter ingredient'
                onChange={e => setIngredient(e.target.value)}
            />
            <label>Directions</label>
            <input
                type='text'
                name='directions'
                id='directions'
                placeholder='enter directions'
                onChange={e => setDirections(e.target.value)}
            />
            
          </form>
          <button
                    //type="submit"
                    onClick={createRecipe}
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
        </>
    );
}