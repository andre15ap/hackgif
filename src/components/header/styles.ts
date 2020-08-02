import styled from 'styled-components/native';
import {Animated, Dimensions} from 'react-native';

import COLORS from '../../librarys/colors';
import FONTS from '../../librarys/fonts';

const {width} = Dimensions.get('window');

export const Container = styled(Animated.View)`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${COLORS.PRIMARY};
  padding: 10px 25px;
  elevation: 3;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const AnimatedContainer = styled(Animated.View)`
  z-index: 2;
  background-color: ${COLORS.PRIMARY};
  width: ${width * 0.6}px;
  /* background: red; */
  align-items: flex-end;
  margin-left: ${-width * 0.5}px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  margin-left: 20px;
  margin-top: 5px;
`;

export const Text = styled(Animated.Text)`
  color: ${COLORS.WHITE};
  font-family: ${FONTS.PRIMARY};
  font-size: 25px;
`;
