import { Container } from "react-bootstrap";
import { useState } from "react";
import Slot from './ConnectFourSlot';
import CheckBoard from './ConnectFourCheck';

const Board = () => {

    const [board, setBoard] = useState([
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""]
    ]);

    const [currPlayer, setCurrPlayer] = useState("P1");
    const [oppPlayer, setOppPlayer] = useState("P2");
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState("");


    const updateBoard = (row, column, ch) => {
        setBoard(prev => {
            const boardCopy = [...prev];
            boardCopy[row][column] = ch;
            return boardCopy;
        });
        let result = CheckBoard(board);

        console.log(result);

        if (result == "No Winner") {
            return "continue";
        } if (result == "P1") {
            setGameOver(true);
            return "P1";
        } else {
            setGameOver(true);
            return "P2";
        }
    };


    const handleClick = (e) => {
        const column = e.target.getAttribute('x');
        let row = board.findIndex((rowArr, index) => {
            // Find the first row that is occupied or at the bottom of the board
            return (rowArr[column] !== "" || (index === board.length - 1));
        });
        // Only go up one row if the slot is NOT at the bottom
        if (row !== (board.length - 1)) row -= 1;
        if (board[row][column] !== "") row -= 1;

        setWinner(updateBoard(row, column, currPlayer));

        if (!gameOver) {
            // Swap players
            const currPlayerCopy = currPlayer;
            setCurrPlayer(oppPlayer);
            setOppPlayer(currPlayerCopy);
        }

    };


    return (
        <Container>
            {gameOver && (
                <h1>Game Over! {winner == "P1" ? "Red - Player 1" : "Black - Player 2"} Wins!</h1>
            )}
            <h2 id='playerDisplay'>{currPlayer === "P1" ? "Red - Player 1" : "Black - Player 2"} Move</h2>
            <div id='board'
                onClick={gameOver ? null : handleClick}
            >

                {board.map((row, i) => {
                    return row.map((ch, j) => <Slot ch={ch} y={i} x={j} />);
                })}
            </div>
        </Container>
    );
};

export default Board;