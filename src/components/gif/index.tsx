import React from 'react';

import LikeSvg from '../../assets/svgs/like';
import CustomText from '../customText';

import COLORS from '../../librarys/colors';

import {
  Container,
  Image,
  ContainerButtons,
  Button,
  ContainerPosition,
  ContainerVotes,
} from './styles';

interface Props {
  url: string;
  position: number;
  votes: number;
  loading?: boolean;
  actionUp: () => void;
  actionDown: () => void;
}

function GifComponent(props: Props) {
  const {url, position, votes, loading, actionUp, actionDown} = props;

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
      <ContainerButtons>
        <ContainerVotes>
          <CustomText color={COLORS.WHITE} size={18}>
            {`votos ${votes || 0}`}
          </CustomText>
        </ContainerVotes>
        <Button onPress={actionUp} disabled={loading}>
          <LikeSvg size={30} color={COLORS.PRIMARY} />
        </Button>
        <Button
          onPress={actionDown}
          disabled={loading}
          style={{transform: [{rotate: '180deg'}]}}
          border={COLORS.DANGER}>
          <LikeSvg size={30} color={COLORS.DANGER} />
        </Button>
      </ContainerButtons>
    </Container>
  );
}

export default GifComponent;
