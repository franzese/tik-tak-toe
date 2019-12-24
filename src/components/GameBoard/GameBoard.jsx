import React, { useState, useEffect } from 'react';
import './GameBoard.scss';

export function BoardSpace({ index, value, onClick }) {
    const move = event => {
        onClick(event, index);
    };

    return (
        <button type="button" onClick={move} className={value}>
            <mark>{value}</mark>
        </button>
    );
}

export default function GameBoard({ onWin, onChange, player }) {
    const [spaces, setSpaces] = useState([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
    const [moveCount, setMoveCount] = useState(0);
    const [isWinner, setIsWinner] = useState(false);
    const winningRows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const reset = () => {
        setSpaces([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
        setMoveCount(0);
        setIsWinner(false);
    };

    const makeMove = (event, index) => {
        if (!isWinner && !spaces[index].trim()) {
            setSpaces([...spaces.slice(0, index), player, ...spaces.slice(index + 1)]);
            setMoveCount(moveCount + 1);
        } else if (isWinner) {
            reset();
        }
    };

    const checkWins = () => {
        winningRows.forEach(row => {
            // todo- clean up
            if (
                spaces[row[0]][0] !== ' ' &&
                spaces[row[0]][0] === spaces[row[1]][0] &&
                spaces[row[1]][0] === spaces[row[2]][0]
            ) {
                setIsWinner(true);
                onWin(player);
            } else {
                onChange();
            }
        });
    };

    useEffect(() => {
        checkWins();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [spaces]);

    return (
        <>
            <div className="game-board">
                <div className="game-board-inner">
                    {spaces.map((space, i) => (
                        <BoardSpace key={i} index={i} value={space} onClick={makeMove} />
                    ))}
                </div>
            </div>
        </>
    );
}
