import React, { useState } from 'react';
import Square from './Square';
const Board = () => {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    const [isXNext, setIsXNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState(null)

    const handleSquareClick = (index) => {
        const newSquares = squares.slice();
        let winningPlayer = winner;

        if (newSquares[index]) {
            return;
        }

        if (isXNext) {
            newSquares[index] = 'X';
        } else {
            newSquares[index] = 'O';
        }

        for (let i = 0; i < winningCombos.length; i++) {
            const [a, b, c] = winningCombos[i];
            console.log(newSquares[a], newSquares[b], newSquares[c])
            if (newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]) {
                winningPlayer = newSquares[a];
            }

        }
        console.log('winningPlayer', winningPlayer);
        setIsXNext(!isXNext);
        setSquares(newSquares);
        setWinner(winningPlayer);

    }

    const onRestartClick = () => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
        setWinner(null);
    }

    return <div className='board'>
        {
            squares.map((value, index) => <Square value={value} onSquareClick={handleSquareClick} key={index} index={index} />)
        }
        {
            winner ? <label>Winner: {winner}</label> :
                <label>Next Player: {isXNext ? 'X' : 'O'}</label>
        }
        <button onClick={onRestartClick}>Restart</button>
    </div>
};

export default Board;