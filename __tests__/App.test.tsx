import {
  CellValue,
  initializeGameBoard,
} from '../src/gameLogic';
import '@testing-library/jest-native/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react-native';
import Game from '../src/components/Game';
// Test para la funcion initializeGameBoard

beforeEach(() => {
  render(<Game />)
})

describe('Game Screen render', () => {

  it('should render welcome label', () => {
    const gameTitle = screen.getByText('Tic Tac Toe')

    expect(gameTitle).toBeOnTheScreen()
  })


  test('initializeGameBoard should return an empty 3x3 board', () => {
    const emptyBoard = initializeGameBoard();

    // Check if the board is 3x3 and all cells are initialized as Empty
    expect(emptyBoard).toHaveLength(3);
    expect(emptyBoard.every((row) => row.length === 3)).toBe(true);
    expect(emptyBoard.flat().every((cell) => cell === CellValue.Empty)).toBe(true);
  });

})

describe('Game Screen behavior', () => {

  it('should render board after pressing start button', () => {
    const startButton = screen.getByTestId('start-button')

    fireEvent.press(startButton)

    const board = screen.getByText('Player turn X')
    expect(board).toBeOnTheScreen()
  })

  it('should change player turn after pressing a cell', () => {
    const startButton = screen.getByTestId('start-button')

    fireEvent.press(startButton)

    const playerTurnLabel = screen.getByText('Player turn X')
    expect(playerTurnLabel).toHaveTextContent('Player turn X')

    const cellTouchable = screen.queryAllByTestId('cell-touchable')
    fireEvent.press(cellTouchable[0])
    expect(playerTurnLabel).toHaveTextContent('Player turn O')
  })

  it('should render X at first turn', () => {
    const startButton = screen.getByTestId('start-button')

    fireEvent.press(startButton)

    const cellTouchable = screen.queryAllByTestId('cell-touchable')
    fireEvent.press(cellTouchable[7])// X 

    expect(cellTouchable[7]).toHaveTextContent('X')
  })

  it('should render O after first turn', () => {
    const startButton = screen.getByTestId('start-button')

    fireEvent.press(startButton)

    const cellTouchable = screen.queryAllByTestId('cell-touchable')
    fireEvent.press(cellTouchable[7])// X 
    fireEvent.press(cellTouchable[1])// O 

    expect(cellTouchable[1]).toHaveTextContent('O')
  })

  it('should render X after pressing two times the same cell', () => {
    const startButton = screen.getByTestId('start-button')

    fireEvent.press(startButton)

    const cellTouchable = screen.queryAllByTestId('cell-touchable')
    fireEvent.press(cellTouchable[7])// X 
    fireEvent.press(cellTouchable[7])// O 

    expect(cellTouchable[7]).toHaveTextContent('X')
  })

  it('X should wins by row', () => {
    const startButton = screen.getByTestId('start-button')

    fireEvent.press(startButton)

    const playerTurnLabel = screen.getByText('Player turn X')
    expect(playerTurnLabel).toHaveTextContent('Player turn X')

    const cellTouchable = screen.queryAllByTestId('cell-touchable')
    fireEvent.press(cellTouchable[0])// X 
    fireEvent.press(cellTouchable[3])// O
    fireEvent.press(cellTouchable[1])// X
    fireEvent.press(cellTouchable[4])// O
    fireEvent.press(cellTouchable[2])// X

    expect(playerTurnLabel).toHaveTextContent('Player X wins.')
  })

  it('O should wins by row', () => {
    const startButton = screen.getByTestId('start-button')

    fireEvent.press(startButton)

    const playerTurnLabel = screen.getByText('Player turn X')
    expect(playerTurnLabel).toHaveTextContent('Player turn X')

    const cellTouchable = screen.queryAllByTestId('cell-touchable')
    fireEvent.press(cellTouchable[0])// X 
    fireEvent.press(cellTouchable[3])// O
    fireEvent.press(cellTouchable[1])// X
    fireEvent.press(cellTouchable[4])// O
    fireEvent.press(cellTouchable[8])// X
    fireEvent.press(cellTouchable[5])// O

    expect(playerTurnLabel).toHaveTextContent('Player O wins.')
  })

  it('X should wins by column', () => {
    const startButton = screen.getByTestId('start-button')

    fireEvent.press(startButton)

    const playerTurnLabel = screen.getByText('Player turn X')
    expect(playerTurnLabel).toHaveTextContent('Player turn X')

    const cellTouchable = screen.queryAllByTestId('cell-touchable')
    fireEvent.press(cellTouchable[0])// X 
    fireEvent.press(cellTouchable[1])// O
    fireEvent.press(cellTouchable[3])// X
    fireEvent.press(cellTouchable[2])// O
    fireEvent.press(cellTouchable[6])// X

    expect(playerTurnLabel).toHaveTextContent('Player X wins.')

  })

  it('O should wins by column', () => {
    const startButton = screen.getByTestId('start-button')

    fireEvent.press(startButton)

    const playerTurnLabel = screen.getByText('Player turn X')
    expect(playerTurnLabel).toHaveTextContent('Player turn X')

    const cellTouchable = screen.queryAllByTestId('cell-touchable')
    fireEvent.press(cellTouchable[0])// X 
    fireEvent.press(cellTouchable[1])// O
    fireEvent.press(cellTouchable[2])// X
    fireEvent.press(cellTouchable[4])// O
    fireEvent.press(cellTouchable[8])// X
    fireEvent.press(cellTouchable[7])// O

    expect(playerTurnLabel).toHaveTextContent('Player O wins.')
  })

  it('X should wins by diagonal', () => {
    const startButton = screen.getByTestId('start-button')

    fireEvent.press(startButton)

    const playerTurnLabel = screen.getByText('Player turn X')
    expect(playerTurnLabel).toHaveTextContent('Player turn X')

    const cellTouchable = screen.queryAllByTestId('cell-touchable')
    fireEvent.press(cellTouchable[0])// X 
    fireEvent.press(cellTouchable[1])// O
    fireEvent.press(cellTouchable[4])// X
    fireEvent.press(cellTouchable[2])// O
    fireEvent.press(cellTouchable[8])// X

    expect(playerTurnLabel).toHaveTextContent('Player X wins.')
  })

  it('O should wins by diagonal', () => {
    const startButton = screen.getByTestId('start-button')

    fireEvent.press(startButton)

    const playerTurnLabel = screen.getByText('Player turn X')
    expect(playerTurnLabel).toHaveTextContent('Player turn X')

    const cellTouchable = screen.queryAllByTestId('cell-touchable')
    fireEvent.press(cellTouchable[0])// X 
    fireEvent.press(cellTouchable[2])// O
    fireEvent.press(cellTouchable[1])// X
    fireEvent.press(cellTouchable[4])// O
    fireEvent.press(cellTouchable[3])// X
    fireEvent.press(cellTouchable[6])// O

    expect(playerTurnLabel).toHaveTextContent('Player O wins.')
  })

  it('should result as a draw', () => {
    const startButton = screen.getByTestId('start-button')

    fireEvent.press(startButton)

    const playerTurnLabel = screen.getByText('Player turn X')
    expect(playerTurnLabel).toHaveTextContent('Player turn X')

    const cellTouchable = screen.queryAllByTestId('cell-touchable')
    fireEvent.press(cellTouchable[0])// X 
    fireEvent.press(cellTouchable[2])// O
    fireEvent.press(cellTouchable[1])// X
    fireEvent.press(cellTouchable[3])// O
    fireEvent.press(cellTouchable[5])// X
    fireEvent.press(cellTouchable[4])// O
    fireEvent.press(cellTouchable[8])// X
    fireEvent.press(cellTouchable[7])// O
    fireEvent.press(cellTouchable[6])// X

    expect(playerTurnLabel).toHaveTextContent('Finishing game in draw.')
  })

  it('should restart board values after pressint restart button', () => {

    const startButton = screen.getByTestId('start-button')

    fireEvent.press(startButton)

    const playerTurnLabel = screen.getByText('Player turn X')
    expect(playerTurnLabel).toHaveTextContent('Player turn X')

    const cellTouchable = screen.queryAllByTestId('cell-touchable')
    fireEvent.press(cellTouchable[0])// X 
    fireEvent.press(cellTouchable[2])// O
    fireEvent.press(cellTouchable[1])// X
    fireEvent.press(cellTouchable[3])// O
    fireEvent.press(cellTouchable[5])// X
    fireEvent.press(cellTouchable[4])// O
    fireEvent.press(cellTouchable[8])// X
    fireEvent.press(cellTouchable[7])// O
    fireEvent.press(cellTouchable[6])// X

    const restartButton = screen.getByTestId('restart-button')
    fireEvent.press(restartButton)

    expect(playerTurnLabel).toHaveTextContent('Player turn X')
    expect(cellTouchable[0]).toHaveTextContent('_')
  })

})