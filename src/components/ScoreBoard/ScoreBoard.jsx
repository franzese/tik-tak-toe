import React from 'react';
import './ScoreBoard.scss';

export default function ScoreBoard({ scoreCard }) {
    return (
        <>
            <div className="score-board">
                <div>
                    <mark className="playerOne">{scoreCard.playerOne.mark}&nbsp;</mark>
                    <h1>{scoreCard.playerOne.name}</h1>
                </div>
                <h1 style={{ border: 'none' }}>Tie</h1>
                <div>
                    <mark className="playerTwo">{scoreCard.playerTwo.mark}&nbsp;</mark>
                    <h1>{scoreCard.playerTwo.name}</h1>
                </div>
                <p className="scores">{scoreCard.playerOne.points}</p>
                <p className="scores">{scoreCard.tie}</p>
                <p className="scores">{scoreCard.playerTwo.points}</p>
            </div>
        </>
    );
}
