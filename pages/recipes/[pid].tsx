import { useRouter } from 'next/router'
import React, { useEffect } from 'react';
import Link from 'next/link';

const Recipe = () => {
  const router = useRouter()
  const { pid } = router.query
  const [recipe, setRecipe] = React.useState({
    name: '',
    directions: [],
    ingredients: []
  })

  const getRecipe = () => {
  fetch(`/api/recipe?id=${pid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => res.json())
    .then(res => {
      const recipe1 = res.filter((r: any) => r._id === pid)
      setRecipe(recipe1[0])
    })
  }

  const mapDir = () => {
    if (recipe !== undefined) {
      const dirArr = recipe.directions.map(dir => {
        return <tr key={recipe.directions.indexOf(dir)+1}><td>{recipe.directions.indexOf(dir)+1}</td><td>{dir}</td></tr>
      })
      return dirArr
    }
  }

  const mapIng = () => {
    if (recipe !== undefined) {
      const dirArr = recipe.ingredients.map(ing => {
        return <tr key={recipe.ingredients.indexOf(ing)+1}><td>{ing[0]}</td><td>{ing[1]}</td><td>{ing[2]}</td></tr>
      })
      return dirArr
    }
  }

  useEffect(() => {
    if (pid !== undefined) {
      getRecipe(); 
    }
  }, [pid]);

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td><b>Name</b></td>
            <td>{recipe !== undefined ? recipe['name'] : ''}</td>
          </tr>
          <tr>
            <td><b>Ingredients</b></td>
          </tr>
          {mapIng()}
          <tr>
            <td><b>Directions</b></td>
          </tr>
          {mapDir()}
        </tbody>
      </table>
      <Link href="/recipes/recipe-list">Back to recipes</Link>
    </>
  )
}

export default Recipe