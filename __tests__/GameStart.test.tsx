import { it, describe, expect } from "@jest/globals";
import { render, fireEvent } from "@testing-library/react-native";
import GameStart from "../src/components/GameStart";

describe('Game start to be render', () => {

    const mockFunction = jest.fn()

    const setUp = () => render(<GameStart title="Start" onPress={mockFunction} />);

    it('render correctly', () => {
        const { getByTestId } = setUp();
        const gameStart = getByTestId('start')
        expect(gameStart).toBeDefined()
        expect(gameStart).not.toBeUndefined()
    })
    it('render text correctl', () => {
        const { getByTestId } = setUp();
        const gameTitle = getByTestId('text')
        expect(gameTitle).toHaveTextContent('Start')
    })
    it('onPress touchable correctly', () => {
        const { getByTestId } = setUp();
        const gameStart = getByTestId('start')
        fireEvent.press(gameStart)
        expect(mockFunction).toBeCalledTimes(1)
    })
})