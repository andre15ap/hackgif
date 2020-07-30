import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import COLORS from '../../librarys/colors';

const {width} = Dimensions.get('screen');

export const Container = styled.View`
  background-color: ${COLORS.PRIMARY};
  align-items: center;
  elevation: 4;
  padding: 10px;
  border-radius: 4px;
`;

export const Image = styled.Image`
  width: ${width * 0.9}px;
  height: ${width * 0.5}px;
  border-radius: 5px;
`;

export const ContainerPosition = styled.View`
  background-color: ${COLORS.PRIMARY};
  position: absolute;
  align-items: center;
  justify-content: center;
  padding: 15px 8px 10px;
  z-index: 2;
  right: 15px;
  top: -5px;
`;
