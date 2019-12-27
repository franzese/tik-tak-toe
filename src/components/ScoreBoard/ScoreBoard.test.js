import React from 'react';
import ScoreBoard from './ScoreBoard';
import { render } from '@testing-library/react';
import { toHaveClass } from '@testing-library/jest-dom';

const scoreCard = {
    tie: 8,
    players: [
        { points: 4, name: 'Player 1', mark: 'O', key: 'playerOne' },
        { points: 10, name: 'Player TWO', mark: 'X', key: 'playerTwo' },
    ],
};

const player2 = { points: 0, name: 'Player', mark: 'X', key: 'playerTwo' };
const player1 = { points: 0, name: 'Terry', mark: 'O', key: 'playerOne' };

const getScoreBoardHeaders = container => {
    return container.querySelectorAll('h1');
};

describe('The ScoreBoard component', () => {
    it('has headers that match the names provided', () => {
        const { container } = render(<ScoreBoard player={player2} scoreCard={scoreCard} />);
        const [p1, t, p2] = getScoreBoardHeaders(container);
        expect(p1).toHaveTextContent('Player 1');
        expect(t).toHaveTextContent('Tie');
        expect(p2).toHaveTextContent('Player TWO');
    });

    it("adds a class to show its playerOne's turn", () => {
        const { container } = render(<ScoreBoard player={player1} scoreCard={scoreCard} />);
        const [p1] = getScoreBoardHeaders(container);
        expect(p1).toHaveClass('current-turn');
    });

    it("adds a class to show its playerTwo's turn", () => {
        const { container } = render(<ScoreBoard player={player2} scoreCard={scoreCard} />);
        const [p1, t, p2] = getScoreBoardHeaders(container);
        expect(p2).toHaveClass('current-turn');
    });

    it('shows the correct score given', () => {
        const { container } = render(<ScoreBoard player={player2} scoreCard={scoreCard} />);
        const [p1Score, tieScore, p2Score] = container.querySelectorAll('p');

        expect(p1Score).toHaveTextContent('4');
        expect(tieScore).toHaveTextContent('8');
        expect(p2Score).toHaveTextContent('10');
    });
});
