import { it, describe, expect } from "@jest/globals";
import { render } from "@testing-library/react-native";
import GameTitle from "../src/components/GameTitle";

describe('GameTitle render correctle', () => {

    const setUp = () => render(<GameTitle title="Test" />);

    it('render correctly', () => {
        const { getByTestId } = setUp();
        const gameTitle = getByTestId('title');
        expect(gameTitle).toBeDefined()
        expect(gameTitle).not.toBeUndefined()
    })

    it('Title display correctly', () =>{
        const { getByTestId } = setUp();
        const gameTitleText = getByTestId('title');
        expect(gameTitleText).toHaveTextContent('Test');
    })
})