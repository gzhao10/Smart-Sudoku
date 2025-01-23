export const solveSudoku = async (filename) => {
    const response = await fetch('http://localhost:5000/solve', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ file :  filename}),
    })

    const data = await response.json()
    return data
}