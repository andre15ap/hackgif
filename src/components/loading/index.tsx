import React from 'react';
import {ActivityIndicator} from 'react-native';

import COLORS from '../../librarys/colors';

import {Container} from './styles';

interface Props {
  size?: number;
  color?: string;
}

function Loading(props: Props) {
  const {size, color} = props;
  return (
    <Container>
      <ActivityIndicator size={size || 30} color={color || COLORS.WHITE} />
    </Container>
  );
}

export default Loading;
