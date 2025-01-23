import React, { useState } from 'react'
import {solveSudoku} from '../api/api'

const Grid = () => {
    const [solution, setSolution] = useState(null);

    const getSolution = async () => {
        const result = await solveSudoku('Input1.txt')
        setSolution(result.solution)
    }
    return (
        <div>
            <button onClick={getSolution}>Solve</button>
            {solution}
        </div>
    )
}

export default Grid