import React from 'react';

import CustomText from '../customText';

import COLORS from '../../librarys/colors';

import {Container, Image, ContainerPosition, ContainerVotes} from './styles';

interface Props {
  url: string;
  position: number;
  votes: number;
}

function GifConcomponent(props: Props) {
  const {url, position, votes} = props;

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
      <ContainerVotes>
        <CustomText color={COLORS.WHITE} size={18}>
          {`Votos ${votes || 0}`}
        </CustomText>
      </ContainerVotes>
    </Container>
  );
}

export default GifConcomponent;
