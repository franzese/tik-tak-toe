import React, { useState, useEffect } from 'react';
import './GameBoard.scss';

export function BoardSpace({ index, value, onClick, isWinner }) {
    const move = event => {
        onClick(event, index);
    };

    const className = isWinner ? value + ' winner' : value;
    return (
        <button type="button" onClick={move} className={className}>
            <mark>{value}</mark>
        </button>
    );
}

export default function GameBoard({ board, onWin, onChange, onTie, player }) {
    const [spaces, setSpaces] = useState(board || [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
    const [moveCount, setMoveCount] = useState(0);
    const [needsReset, setResetFlag] = useState(false);
    const [winningRow, setWinningRow] = useState([]);

    const winningRows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const reset = () => {
        setSpaces([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
        setMoveCount(0);
        setResetFlag(false);
        setWinningRow([]);
    };

    const setSpaceToMark = (event, index) => {
        if (needsReset) {
            reset();
        } else if (!spaces[index].trim()) {
            setSpaces([...spaces.slice(0, index), player.mark, ...spaces.slice(index + 1)]);
            setMoveCount(moveCount + 1);
        }
    };

    const checkWins = () => {
        let checkTie = true;
        winningRows.forEach(row => {
            // todo- clean up
            if (
                spaces[row[0]][0] !== ' ' &&
                spaces[row[0]][0] === spaces[row[1]][0] &&
                spaces[row[1]][0] === spaces[row[2]][0]
            ) {
                setResetFlag(true);
                checkTie = false;
                setWinningRow(row);
                onWin(player);
            } else {
                onChange();
            }
        });

        if (checkTie && moveCount >= spaces.length) {
            onTie();
            setResetFlag(true);
        }
    };

    const mapBoardSpaces = (space, i) => {
        const isWinner = !!winningRow.includes(i);
        return <BoardSpace key={i} index={i} value={space} isWinner={isWinner} onClick={setSpaceToMark} />;
    };

    useEffect(() => {
        checkWins();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [spaces]);

    return (
        <>
            <div className="game-board">
                <div className="game-board-inner">{spaces.map(mapBoardSpaces)}</div>
            </div>
        </>
    );
}
