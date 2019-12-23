import React, { useState, useEffect } from 'react';
import './App.scss';

function BoardSpace({ index, value, onClick }) {
    const move = event => {
        onClick(event, index);
    };

    return (
        <button type="button" onClick={move} className={value}>
            {value}
        </button>
    );
}

function GameBoard(props) {
    const [spaces, setSpaces] = useState([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
    const [moveCount, setMoveCount] = useState(0);
    const [isWinner, setIsWinner] = useState(false);
    const onWin = props.onWin;
    const onChange = props.onChange;
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
        setIsWinner(false);
    };

    const makeMove = (event, index) => {
        if (!isWinner && !spaces[index].trim()) {
            setSpaces([...spaces.slice(0, index), props.player, ...spaces.slice(index + 1)]);
            setMoveCount(moveCount + 1);
        } else if (isWinner) {
            reset();
        }
    };

    const checkWins = () => {
        winningRows.forEach(row => {
            // todo- clean up
            if (
                spaces[row[0]][0] !== ' ' &&
                spaces[row[0]][0] === spaces[row[1]][0] &&
                spaces[row[1]][0] === spaces[row[2]][0]
            ) {
                setIsWinner(true);
                onWin(props.player);
            } else {
                onChange();
            }
        });
    };

    useEffect(() => {
        checkWins();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [spaces]);

    return (
        <>
            <div className="game-board">
                <div className="game-board-inner">
                    {spaces.map((space, i) => (
                        <BoardSpace key={i} index={i} value={space} onClick={makeMove} />
                    ))}
                </div>
            </div>
        </>
    );
}

function ScoreBoard(props) {
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

function App() {
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
            <div className="app">
                <ScoreBoard player={player} />
                <GameBoard player={player} onChange={togglePlayer} onWin={addPointToWinner} />
                <h1 className={'message'}>{nextMessage}</h1>
            </div>
        </>
    );
}

export default App;
