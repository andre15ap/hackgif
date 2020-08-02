import styled from 'styled-components/native';

import COLORS from '../../librarys/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${COLORS.BACKGROUND};
  align-items: center;
  justify-content: flex-start;
`;

export const Button = styled.TouchableOpacity`
  margin: 30px 0;
  padding: 12px;
  background-color: ${COLORS.PRIMARY};
  border-radius: 8px;
  elevation: 2;
  width: 90%;
  align-items: center;
  border-width: 1px;
  border-color: ${COLORS.WHITE};
`;
