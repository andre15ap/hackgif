import styled from 'styled-components/native';

import COLORS from '../../librarys/colors';
import FONTS from '../../librarys/fonts';

interface Props {
  color?: string;
  size?: number;
}

export const Text = styled.Text`
  color: ${(props: Props) => props.color || COLORS.BLACK};
  font-size: ${(props: Props) => props.size || 15}px;
  font-family: ${FONTS.PRIMARY};
`;
