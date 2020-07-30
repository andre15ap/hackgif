import React from 'react';

import CustomText from '../customText';

import COLORS from '../../librarys/colors';

import {Container, Image, ContainerPosition} from './styles';

interface Props {
  url: string;
  position: number;
}

function GifConcomponent(props: Props) {
  const {url, position} = props;

  const getPosition = (value: number) => {
    return value + 1;
  };

  return (
    <Container>
      <ContainerPosition>
        <CustomText color={COLORS.WHITE} size={18}>
          {getPosition(position)}
        </CustomText>
      </ContainerPosition>
      <Image
        source={{
          uri: url,
        }}
      />
    </Container>
  );
}

export default GifConcomponent;
