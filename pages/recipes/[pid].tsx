import { useRouter } from 'next/router'
import React, { useEffect } from 'react';

const Recipe = () => {
    const router = useRouter()
    const { pid } = router.query
    const [recipe, setRecipe] = React.useState()

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
        console.log(pid)
        setRecipe(recipe1[0])
      })
    }

    useEffect(() => {
        if (pid !== undefined) {
           getRecipe(); 
        }
        
    }, [pid]);

  return (
    <>
        <p>id {pid}</p>
        <p>{recipe !== undefined ? recipe['name'] : ''}</p>
    </>
  )
}

export default Recipe