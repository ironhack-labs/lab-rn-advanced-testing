/**
 * Logica de Tic Tac Toe
 *
 * Un botón inicará el juego.
 * Inmediatamente la cuadricula de 3x3 aparecerá en pantalla.
 * El usuario debe elegir el cuadro donde aparecerá el Circulo.
 * Otro usuario colocará la Cruz en uno de los cuadros disponibles.
 * El usuario coloca otro circulo en uno de los espacios disponibles.
 *
 * Estructura de datos: Un solo arreglo de 8 posiciones
 * [0][1][2]
 * [3][4][5]
 * [6][7][8]
 *
 * las reglas serán las siguientes:
 *  - por cada turno se debe validar las siguientes configuraciones:
 *    - Posición 0,1,2 existe coincidencias de "O" o "X"
 *    - Posición 0,4,8 existe coincidencias de "O" o "X"
 *    - Posición 0,3,6 existe coincidencias de "O" o "X"
 *    - Posición 1,4,7 existe coincidencias de "O" o "X"
 *    - Posición 2,4,6 existe coincidencias de "O" o "X"
 *    - Posición 2,5,8 existe coincidencias de "O" o "X"
 *    - Posición 3,4,5 existe coincidencias de "O" o "X"
 *    - Posición 6,7,8 existe coincidencias de "O" o "X"
 */

import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

describe('Render components', () => {
    it('The game title appears on the screen', () => {});
    it('The welcome message appears on the screen', () => {});
    it('The button to start the game appears on the screen', () => {});
    it('The grid appears on the screen', () => {});
    
});

describe('Events', () => {
    it('The game was initialized correctly', () => {});
    it('The board is empty', () => {});
    it('The game is over', () => {});
    it('There is a winner', () => {});
    it('The game was successfully restarted', () => {});
});
