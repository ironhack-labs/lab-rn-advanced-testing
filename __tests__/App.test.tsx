/**
 * @format
 */
import { render, screen, fireEvent } from '@testing-library/react-native';

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';
import { FindByQuery, GetAllByQuery, GetByQuery, QueryByQuery } from '@testing-library/react-native/build/queries/makeQueries';
import { TextMatch, TextMatchOptions } from '@testing-library/react-native/build/matches';
import { CommonQueryOptions } from '@testing-library/react-native/build/queries/options';

// Note: test renderer must be required after react-native.

describe('Test Tic-tac-toe in typescript', () => {
  let appComponent : ReturnType<typeof render>;
  let getByTestId: GetByQuery<TextMatch, CommonQueryOptions & TextMatchOptions>
  let getByText: GetByQuery<TextMatch, CommonQueryOptions & TextMatchOptions>
  let getAllByTestId: GetAllByQuery<TextMatch, CommonQueryOptions & TextMatchOptions>
  let queryByText : QueryByQuery<TextMatch, CommonQueryOptions & TextMatchOptions>
  let findByText: FindByQuery<TextMatch, CommonQueryOptions & TextMatchOptions>
  let findByTestId: FindByQuery<TextMatch, CommonQueryOptions & TextMatchOptions>

  const checkGameStartCorrectly = () => {
    it('Test game components', () => {
    
      expect(getByTestId("board")).toBeTruthy()
      expect(getByText("Current player: X")).toBeTruthy()
  
  
      Array(9).forEach((element, index) => {
        const cell = getByTestId(`cell-${index}`)
        expect(cell).toBeTruthy()
        expect(cell.props.style.width).toBe(100)
        expect(cell.props.style.height).toBe(100)
        const cellText = getByTestId(`cell-text-${index}`)
        expect(cellText).toBeTruthy()
        expect(cellText.props.children).toBe("")
      });
  
  
    });
  }

  beforeEach(() => {
    appComponent =  render(<App/>);
    getByTestId = appComponent.getByTestId
    getByText = appComponent.getByText
    getAllByTestId = appComponent.getAllByTestId
    queryByText = appComponent.queryByText
    findByText = appComponent.findByText
    findByTestId = appComponent.findByTestId
  })
  
  it('App initializes correctly', () => {

    expect(findByTestId("button-start")).toBeTruthy()
    expect(queryByText("Current player:")).toBeNull()
    expect(queryByText("Touch here to play again")).toBeNull()

  });

  beforeEach(() => {
    fireEvent.press(appComponent.getByTestId("button-start"));
  })

  checkGameStartCorrectly()
  

  it("Test user interactions", () => {
    
    fireEvent.press(getByTestId("cell-0"))
    fireEvent.press(getByTestId("cell-4"))
    fireEvent.press(getByTestId("cell-1"))

    expect(getByTestId("cell-text-0").props.children).toBe("X")
    expect(getByTestId("cell-text-4").props.children).toBe("O")
    expect(getByTestId("cell-text-1").props.children).toBe("X")

    expect(getByText("Current player: O"))

    fireEvent.press(getByTestId("cell-1"))

    expect(getByText("Current player: O"))
    expect(getByTestId("cell-text-1").props.children).toBe("X")

    fireEvent.press(getByTestId("cell-2"))
    fireEvent.press(getByTestId("cell-5"))
    fireEvent.press(getByTestId("cell-6"))

    expect(queryByText("O won the game!")).toBeTruthy()
    expect(findByText("Touch here to play again")).toBeTruthy()
    fireEvent.press(getByTestId("restart-button"))
  })


  checkGameStartCorrectly()

  it("Test draw", () => {
    
    fireEvent.press(getByTestId("cell-0"))
    fireEvent.press(getByTestId("cell-4"))
    fireEvent.press(getByTestId("cell-1"))
    fireEvent.press(getByTestId("cell-2"))
    fireEvent.press(getByTestId("cell-6"))
    fireEvent.press(getByTestId("cell-3"))
    fireEvent.press(getByTestId("cell-5"))
    fireEvent.press(getByTestId("cell-7"))
    fireEvent.press(getByTestId("cell-8"))

    expect(findByText("Draw")).toBeTruthy()
    expect(findByText("Touch here to play again")).toBeTruthy()

    fireEvent.press(getByTestId("restart-button"))
  })



});