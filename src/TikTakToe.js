import React, { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard/GameBoard';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import './TikTakToe.scss';

function TikTakToe() {
    // const [nextMessage, setNextMessage] = useState("Player 1's turn");
    const [scoreCard, setScoreCard] = useState({
        tie: 0,
        playerOne: { points: 0, name: 'Player 1', mark: 'O' },
        playerTwo: { points: 0, name: 'Player 2', mark: 'X' },
    });
    const [player, setPlayer] = useState({ key: 'playerOne', ...scoreCard.playerOne });

    const addPointToWinner = winner => {
        let playerWithPoints = { [winner.key]: { points: winner.points, name: winner.name, mark: winner.mark } };
        setScoreCard({ ...scoreCard, ...playerWithPoints });
    };

    const addPointToTie = winner => {
        alert('Tie');
        setScoreCard({ ...scoreCard, tie: scoreCard.tie + 1 });
    };

    const togglePlayer = () => {
        if (player.key === 'playerOne') setPlayer({ key: 'playerTwo', ...scoreCard.playerTwo });
        else if (player.key === 'playerTwo') setPlayer({ key: 'playerOne', ...scoreCard.playerOne });
    };

    useEffect(() => {}, [player]);

    return (
        <>
            <div className="tik-tak-toe">
                <ScoreBoard player={player} scoreCard={scoreCard} />
                <GameBoard player={player} onChange={togglePlayer} onWin={addPointToWinner} onTie={addPointToTie} />
                <h1 className={'message'}>{'TIK TAK TOE'}</h1>
            </div>
        </>
    );
}

export default TikTakToe;
