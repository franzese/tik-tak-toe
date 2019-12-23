import React, { useState, useEffect } from 'react';
import './App.scss';

function BoardSpace({ index, value, onClick }) {
    const move = event => {
        onClick(event, index);
    };

    return (
        <button type="button" onClick={move} className={value}>
            {value}
        </button>
    );
}

function GameBoard(props) {
    const [spaces, setSpaces] = useState([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
    const [moveCount, setMoveCount] = useState(0);
    const [isWinner, setIsWinner] = useState(false);
    const onWin = props.onWin;
    const onChange = props.onChange;
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

    const makeMove = (event, index) => {
        setSpaces([...spaces.slice(0, index), [props.player], ...spaces.slice(index + 1)]);
        setMoveCount(moveCount + 1);
        onChange();
    };

    useEffect(() => {
        if (isWinner) {
            onWin();
        } else {
            winningRows.forEach(row => {
                // todo- clean up
                if (
                    spaces[row[0]][0] !== ' ' &&
                    spaces[row[0]][0] === spaces[row[1]][0] &&
                    spaces[row[1]][0] === spaces[row[2]][0]
                ) {
                    setIsWinner(true);
                }
            });
        }
    }, [isWinner, onWin, spaces, winningRows]);

    return (
        <>
            <div className="board">
                {spaces.map((space, i) => (
                    <BoardSpace key={i} index={i} value={space} onClick={makeMove} />
                ))}
            </div>
        </>
    );
}

function ScoreBoard() {
    return (
        <>
            <h1>Player 1</h1>
        </>
    );
}

function App() {
    const [player, setPlayer] = useState('X');
    const addPointToWinner = winner => {
        alert('Winner!');
    };

    const togglePlayer = () => {
        if (player === 'X') setPlayer('O');
        else if (player === 'O') setPlayer('X');
    };

    return (
        <>
            <div className="App">
                <ScoreBoard />
                <GameBoard player={player} onChange={togglePlayer} onWin={addPointToWinner} />
            </div>
        </>
    );
}

export default App;
