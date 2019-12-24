import React, { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard/GameBoard';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import './TikTakToe.scss';

function TikTakToe() {
    const [player, setPlayer] = useState('X');
    const [nextMessage, setNextMessage] = useState("Player 1's turn");
    const addPointToWinner = winner => {
        setNextMessage(winner + ' wins!');
    };

    const togglePlayer = () => {
        if (player === 'X') setPlayer('O');
        else if (player === 'O') setPlayer('X');
    };

    useEffect(() => {}, [player]);

    return (
        <>
            <div className="tik-tak-toe">
                <ScoreBoard player={player} />
                <GameBoard player={player} onChange={togglePlayer} onWin={addPointToWinner} />
                <h1 className={'message'}>{nextMessage}</h1>
            </div>
        </>
    );
}

export default TikTakToe;
