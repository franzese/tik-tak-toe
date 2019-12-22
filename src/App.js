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

function GameBoard(player, onWin) {
    const [spaces, setSpaces] = useState(['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']);

    const makeMove = (event, index) => {
        setSpaces([].concat(spaces.slice(0, index), ['X'], spaces.slice(index + 1)));
    };

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
    const addPointToWinner = () => {
        debugger;
    };

    return (
        <>
            <div className="App">
                <ScoreBoard />
                <GameBoard player={player} onWin={addPointToWinner} />
            </div>
        </>
    );
}

export default App;
