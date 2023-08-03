/**
 * @format
 */

import 'react-native';
import React from 'react';
// import App from '../App';


// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Board } from '../src/components/Board/Board';


describe('Iteration 1 on board tic-tac-toe', () => {
  test("Some", () => {
    expect(Board).toEqual([]);
  })
});
