// src/components/Message.js
import React from 'react';
import { View, Text } from 'react-native';

// Definimos una enumeración para los posibles resultados del juego
const GAME_RESULTS = {
  WINNER: 'WINNER',
  LOSER: 'LOSER',
  TIE: 'TIE',
};

// Definimos el tipo MessageProps
type MessageProps = {
  result?: keyof typeof GAME_RESULTS; 
};

export const Message = ({ result }: MessageProps) => {
  // Función para obtener el mensaje según el resultado del juego
  const getMessageText = () => {
    switch (result) {
      case GAME_RESULTS.WINNER:
        return '¡Ganaste! ¡Felicidades!';
      case GAME_RESULTS.LOSER:
        return 'Perdiste. ¡Inténtalo de nuevo!';
      case GAME_RESULTS.TIE:
        return 'Es un empate. ¡Buena partida!';
      default:
        return 'Es tu turno'; // Mensaje predeterminado si el resultado no está presente o es desconocido
    }
  };

  return (
    <View>
      <Text>{getMessageText()}</Text>
    </View>
  );
};

export default Message;
