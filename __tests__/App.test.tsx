import {
  CellValue,
  GameStatus,
  initializeGameBoard,
  checkWinner,
  checkDraw,
  togglePlayer,
} from '../src/gameLogic';
import { render, fireEvent } from '@testing-library/react-native';
import Board from '../src/components/Board';
import Cell from '../src/components/Cell';
// Test para la funcion initializeGameBoard
test('initializeGameBoard should return an empty 3x3 board', () => {
  const emptyBoard = initializeGameBoard();

  // Check if the board is 3x3 and all cells are initialized as Empty
  expect(emptyBoard).toHaveLength(3);
  expect(emptyBoard.every((row) => row.length === 3)).toBe(true);
  expect(emptyBoard.flat().every((cell) => cell === CellValue.Empty)).toBe(true);
});

// test('Initial game board should not be empty', () => {
//   const initialBoard = initializeGameBoard();

//   // Check that at least one cell is not empty
//   let foundNonEmptyCell = false;
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       if (initialBoard[i][j] !== CellValue.Empty) {
//         foundNonEmptyCell = true;
//         break;
//       }
//     }
//   }

//   expect(foundNonEmptyCell).toBe(true);
// });

//Board test
// test('Board component should render correctly', () => {
//   const board = [
//     ['X', 'O', 'X'],
//     ['O', 'X', 'O'],
//     ['X', 'O', 'X'],
//   ];

//   const { getAllByTestId } = render(<Board board={board} onCellPress={() => {}} />);

//   // Check if all cells are rendered
//   const cells = getAllByTestId('cell');
//   expect(cells.length).toBe(9);

//   // Check if cells display the correct values
//   expect(cells[0].children[0]).toBe('X');
//   expect(cells[1].children[0]).toBe('O');
//   // ... continue for other cells
// });

//Cell test

// test('Cell component should render correctly with "X" value', () => {
//   const { getByTestId } = render(<Cell value="X" onPress={() => {}} />);
//   const cell = getByTestId('cell');

//   // Check if cell displays the correct value
//   expect(cell.children[0].props.children).toBe('X');
// });

// test('Cell component should render correctly with "O" value', () => {
//   const { getByTestId } = render(<Cell value="O" onPress={() => {}} />);
//   const cell = getByTestId('cell');

//   // Check if cell displays the correct value
//   expect(cell.children[0].props.children).toBe('O');
// });

// test('Cell component should call onPress when tapped', () => {
//   const onPressMock = jest.fn();
//   const { getByTestId } = render(<Cell value="O" onPress={onPressMock} />);
//   const cell = getByTestId('cell');

//   // Simulate tap on the cell
//   fireEvent.press(cell);

//   // Check if onPress function is called once
//   expect(onPressMock).toHaveBeenCalledTimes(1);
// });

// test('Cell component should not call onPress when disabled', () => {
//   const onPressMock = jest.fn();
//   const { getByTestId } = render(<Cell value="O" onPress={onPressMock} disabled />);
//   const cell = getByTestId('cell');

//   // Simulate tap on the cell
//   fireEvent.press(cell);

//   // Check if onPress function is not called
//   expect(onPressMock).not.toHaveBeenCalled();
// });






