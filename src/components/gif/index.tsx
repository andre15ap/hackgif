import React from 'react';

import CustomText from '../customText';

import COLORS from '../../librarys/colors';

import {Container, Image, ContainerPosition} from './styles';

function GifConcomponent() {
  return (
    <Container>
      <ContainerPosition>
        <CustomText color={COLORS.WHITE} size={18}>
          01
        </CustomText>
      </ContainerPosition>
      <Image
        source={{
          uri:
            'https://media.tenor.com/images/505ddb5e0b0e8c3e96b66e1469ef47c1/tenor.gif',
        }}
      />
    </Container>
  );
}

export default GifConcomponent;
