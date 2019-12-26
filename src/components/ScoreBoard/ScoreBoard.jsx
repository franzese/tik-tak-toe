import React from 'react';
import './ScoreBoard.scss';

export default function ScoreBoard({ player, scoreCard }) {
    const isPlayersTurn = key => {
        if (player.key === key) {
            return key;
        }
        return '';
    };

    return (
        <>
            <div className="score-board">
                <h1 className={isPlayersTurn('playerOne')}>
                    {scoreCard.playerOne.mark}&nbsp;{scoreCard.playerOne.name}
                </h1>
                <h1>Tie</h1>
                <h1 className={isPlayersTurn('playerTwo')}>
                    {scoreCard.playerTwo.mark}&nbsp;{scoreCard.playerTwo.name}
                </h1>
                <p className="scores">{scoreCard.playerOne.points}</p>
                <p className="scores">{scoreCard.tie}</p>
                <p className="scores">{scoreCard.playerTwo.points}</p>
            </div>
        </>
    );
}
