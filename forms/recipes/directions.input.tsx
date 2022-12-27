import React, { useEffect } from 'react';
import DirectionInput from './direction.input';

export default function DirectionsInput(props: any) {
    const [directionsArray, setDirectionsArray] = React.useState<string[]>([])

    const addDir = (arr: string, key: number) => {
        const dArray = directionsArray
        dArray[key]=arr
        setDirectionsArray(dArray)
    }

    const [inputArray, setInputArray] = React.useState<any[]>([<DirectionInput key={0} addDir={addDir} pos={0}/>])

    const mapDirInput = () => {
        const fields = inputArray.map(inp => {
            return inp
        })
        return (fields)
    }

    const newInput = () => {
        setInputArray([...inputArray, <DirectionInput key={inputArray.length} addDir={addDir} pos={inputArray.length}/>])
    }

    useEffect(() => {
        props.setDirections(directionsArray)
    });

    return (
        <>
            {mapDirInput()}
            <p onClick={newInput}>add</p>
        </>
    );
}