
import { jest, it, describe, expect } from "@jest/globals";
import { render } from "@testing-library/react-native";
import GameWelcome from "../src/components/GameWelcome";
import { View } from "react-native";

describe('render game welcome', () => {
    it('render correctly', () => {
        const { getByTestId } = render(<GameWelcome />);
        const gameWelcome = getByTestId('welcome')
        expect(gameWelcome).toBeDefined()
        expect(gameWelcome).not.toBe(undefined)
    })
})