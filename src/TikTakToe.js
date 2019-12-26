import React, { useState } from 'react';
import GameBoard from './components/GameBoard/GameBoard';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import './TikTakToe.scss';

function TikTakToe() {
    const [scoreCard, setScoreCard] = useState({
        tie: 0,
        players: [
            { points: 0, name: 'Player', mark: 'O', key: 'playerOne' },
            { points: 0, name: 'Player', mark: 'X', key: 'playerTwo' },
        ],
    });
    const [playerIndex, setPlayerIndex] = useState(Math.floor(Math.random() * 2));

    const addPointToWinner = winner => {
        let players = scoreCard.players.map(player => {
            if (player.key === winner.key) return { ...player, points: player.points + 1 };
            return player;
        });
        setScoreCard({ ...scoreCard, players: players });
    };

    const addPointToTie = winner => {
        setScoreCard({ ...scoreCard, tie: scoreCard.tie + 1 });
    };

    const togglePlayer = () => {
        if (playerIndex === 0) setPlayerIndex(1);
        else if (playerIndex === 1) setPlayerIndex(0);
    };

    return (
        <>
            <div className="tik-tak-toe">
                <ScoreBoard player={scoreCard.players[playerIndex]} scoreCard={scoreCard} />
                <GameBoard
                    player={scoreCard.players[playerIndex]}
                    onChange={togglePlayer}
                    onWin={addPointToWinner}
                    onTie={addPointToTie}
                />
            </div>
        </>
    );
}

export default TikTakToe;
