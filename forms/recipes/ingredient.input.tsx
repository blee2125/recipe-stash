import React, { useEffect } from 'react';

export default function IngredientInput(props: any) {
    const [ingredientArray, setIngredientArray] = React.useState<string[]>(['','',''])

    const handleChange = (key: number, value: string) => {
        let array = ingredientArray
        array[key] = value
        setIngredientArray(array)
    }
    
    useEffect(() => {
        props.addIng(ingredientArray, props.pos)
    }, [ingredientArray]);

    return (
        <>
            <label>Ingredient #{props.pos+1}</label>
            <input
                type='text'
                name='amount'
                id='amount'
                placeholder='enter amount'
                onChange={e => handleChange(0, e.target.value)}
            />
            <input
                type='text'
                name='unit'
                id='unit'
                placeholder='enter unit'
                onChange={e => handleChange(1, e.target.value)}
            />
            <input
                type='text'
                name='ingredient'
                id='ingredient'
                placeholder='enter ingredient'
                onChange={e => handleChange(2, e.target.value)}
            />
            <br/>
        </>
    );
}