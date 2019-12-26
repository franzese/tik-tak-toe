import React from 'react';
import GameBoard from './GameBoard';
import { render } from '@testing-library/react';

describe('The GameBoard component determines a win when', () => {
    it('the top row matches', () => {
        const onWin = jest.fn().mockImplementation(() => {});
        render(<GameBoard onWin={onWin} board={['X', 'X', 'X', 'O', 'O', 'X', 'X', 'X', 'O']} />);
        expect(onWin).toHaveBeenCalled();
    });

    it('the middle row matches', () => {
        const onWin = jest.fn().mockImplementation(() => {});
        render(<GameBoard onWin={onWin} board={['X', 'O', 'X', 'O', 'O', 'O', 'X', 'X', 'O']} />);
        expect(onWin).toHaveBeenCalled();
    });

    it('the bottom row matches', () => {
        const onWin = jest.fn().mockImplementation(() => {});
        render(<GameBoard onWin={onWin} board={[' ', ' ', ' ', 'O', 'O', 'X', 'X', 'X', 'X']} />);
        expect(onWin).toHaveBeenCalled();
    });

    it('the first column matches', () => {
        const onWin = jest.fn().mockImplementation(() => {});
        render(<GameBoard onWin={onWin} board={['X', ' ', ' ', 'X', 'O', 'X', 'X', ' ', 'O']} />);
        expect(onWin).toHaveBeenCalled();
    });

    it('the middle column matches', () => {
        const onWin = jest.fn().mockImplementation(() => {});
        render(<GameBoard onWin={onWin} board={['X', 'O', 'X', 'O', 'O', 'O', ' ', 'O', ' ']} />);
        expect(onWin).toHaveBeenCalled();
    });

    it('the last column matches', () => {
        const onWin = jest.fn().mockImplementation(() => {});
        render(<GameBoard onWin={onWin} board={[' ', ' ', 'X', 'O', 'O', 'X', ' ', ' ', 'X']} />);
        expect(onWin).toHaveBeenCalled();
    });
});

describe('The GameBoard component determines a tie when', () => {
    it('all moves are spent and no matches are found', () => {
        const onTie = jest.fn().mockImplementation(() => {});
        const onWin = jest.fn().mockImplementation(() => {});
        render(<GameBoard onTie={onTie} onWin={onWin} board={['X', 'O', 'X', 'X', 'O', 'X', 'O', 'X', 'O']} />);
        expect(onTie).toHaveBeenCalled();
        expect(onWin).not.toHaveBeenCalled();
    });
});
