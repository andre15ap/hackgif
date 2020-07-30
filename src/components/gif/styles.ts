import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import COLORS from '../../librarys/colors';

const {width} = Dimensions.get('screen');

export const Container = styled.View`
  background-color: ${COLORS.GRAY_LIGHT};
  align-items: center;
  elevation: 4;
  padding: 10px;
  border-radius: 4px;
  /* border-width: 5px;
  border-color: ${COLORS.PRIMARY}; */
  margin: 10px 0;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
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
  top: -10px;
`;

export const ContainerVotes = styled.View`
  background-color: ${COLORS.PRIMARY};
  position: absolute;
  align-items: center;
  justify-content: center;
  padding: 5px 8px;
  z-index: 2;
  left: 5px;
  bottom: 5px;
  border-radius: 3px;
`;
