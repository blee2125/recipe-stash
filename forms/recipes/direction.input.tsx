import React, { useEffect } from 'react';

export default function DirectionInput(props: any) {
    const [direction, setDirection] = React.useState(String)
    
    useEffect(() => {
        //console.log(ingredientArray)
        props.addDir(direction, props.pos)
    }, [direction]);

    return (
        <>
            <label>Direction #{props.pos+1}</label>
            <input
                type='text'
                name='direction'
                id='direction'
                placeholder='enter direction'
                onChange={e => setDirection(e.target.value)}
            />
            <br/>
        </>
    );
}