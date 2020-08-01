import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import COLORS from '../../librarys/colors';

const {width} = Dimensions.get('screen');

interface Props {
  border?: string;
}

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

export const ContainerButtons = styled.View`
  flex: 1;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-around;
  align-self: flex-end;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  padding: 5px 15px;
  margin-left: 15px;
  border-radius: 6px;
  border-width: 1px;
  background-color: ${COLORS.WHITE};
  border-color: ${(props: Props) => props.border || COLORS.PRIMARY};
  elevation: 2;
  align-items: center;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${width * 0.9}px;
  height: ${width * 0.5}px;
  border-radius: 6px;
  background-color: ${COLORS.BLACK_LIGHT};
  overflow: hidden;
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
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 5px;
`;
