import React, { useState, useEffect } from 'react';
import './ScoreBoard.scss';

export default function ScoreBoard(props) {
    return (
        <>
            <div className="score-board">
                <h1>Player 1 (X)</h1>
                <h1>Tie:</h1>
                <h1>Player 2 (O)</h1>
                <p className="scores">2</p>
                <p className="scores">20</p>
                <p className="scores">12</p>
            </div>
        </>
    );
}
