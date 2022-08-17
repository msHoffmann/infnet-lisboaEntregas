import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Container} from '../Container';

export function Loading() {
  return (
    <Container center>
      <ActivityIndicator size="large" />
    </Container>
  );
}

// Pode ser usado o Lottiefiles para estilizar o Loading
