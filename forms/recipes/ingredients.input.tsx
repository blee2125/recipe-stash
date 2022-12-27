import React, { useEffect, useState } from 'react';
import IngredientInput from './ingredient.input';

export default function IngredientsInput(props: any) {
    const [ingredientsArray, setIngredientsArray] = React.useState<string[][]>([])
    
    const addIng = (arr: string[], key: number) => {
        const iArray = ingredientsArray
        iArray[key]=arr
        setIngredientsArray(iArray)
    }

    const [inputArray, setInputArray] = useState<any[]>([<IngredientInput key={0} addIng={addIng} pos={0}/>])

    const mapIng = () => {
        const fields = ingredientsArray.map(inp => {
            return <p key={ingredientsArray.indexOf(inp)}>{inp[0]}</p>
        })
        return (fields)
    }

    const mapIngInput = () => {
        const fields = inputArray.map(inp => {
            return inp
        })
        return (fields)
    }

    const newInput = () => {
        setInputArray([...inputArray, <IngredientInput key={inputArray.length} addIng={addIng} pos={inputArray.length}/>])
    }

    useEffect(() => {
        props.setIngredients(ingredientsArray)
    });

    return (
        <>
            {mapIngInput()}
            {mapIng()}
            <p onClick={newInput}>add</p>
        </>
    );
}