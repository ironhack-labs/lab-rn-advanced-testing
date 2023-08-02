import { it, describe, expect } from "@jest/globals";
import { render } from "@testing-library/react-native";
import GameReset from "../src/components/GameReset";

describe('GameReset render correctly', () => {
    it('render correctly', () => {
        const { getByTestId } = render(<GameReset />)
        const gameReset = getByTestId('reset')
        expect(gameReset).toBeDefined()
        expect(gameReset).not.toBeUndefined()
    })
})