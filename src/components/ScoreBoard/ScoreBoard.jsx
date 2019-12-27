import React from 'react';
import './ScoreBoard.scss';

export default function ScoreBoard({ player, scoreCard }) {
    const isPlayersTurn = key => {
        if (player.key === key) {
            return key + ' current-turn';
        }
        return '';
    };

    return (
        <>
            <div className="score-board">
                <h1 className={isPlayersTurn('playerOne')}>
                    {scoreCard.players[0].mark}&nbsp;{scoreCard.players[0].name}
                </h1>
                <h1>Tie</h1>
                <h1 className={isPlayersTurn('playerTwo')}>
                    {scoreCard.players[1].mark}&nbsp;{scoreCard.players[1].name}
                </h1>
                <p className="scores">{scoreCard.players[0].points}</p>
                <p className="scores">{scoreCard.tie}</p>
                <p className="scores">{scoreCard.players[1].points}</p>
            </div>
        </>
    );
}
