import React, { useState } from 'react';
import './App.scss';

function BoardSpace({ index, value, onClick }) {
    const move = event => {
        debugger;
    };

    return (
        <button type="button" onClick={move} className={value}>
            {value}
        </button>
    );
}

function Board() {
    const boardSize = 3 * 3;
    let spaces = [];

    for (let i = 0; i < boardSize; i++) {
        spaces.push(<BoardSpace key={i} index={i} value="X" />);
    }

    return (
        <>
            <div className="board">{spaces}</div>
        </>
    );
}

function App() {
    return (
        <>
            <div className="App">
                <Board />
            </div>
        </>
    );
}

export default App;
