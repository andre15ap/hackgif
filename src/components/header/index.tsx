import React from 'react';

import {Animated, Dimensions} from 'react-native';

import COLORS from '../../librarys/colors';

// import CustomText from '../customText';
import LogoSvg from '../../assets/svgs/logo';

import {Container, AnimatedContainer, Content, Text} from './styles';

const {width} = Dimensions.get('window');

interface Props {
  scrollY: Animated.Value;
}

function Header(props: Props) {
  const {scrollY} = props;
  return (
    <Container
      style={{
        height: scrollY.interpolate({
          inputRange: [10, 100, 180],
          outputRange: [85, 70, 60],
          extrapolate: 'clamp',
        }),
      }}>
      <AnimatedContainer
        style={{
          transform: [
            {
              translateX: scrollY.interpolate({
                inputRange: [10, 100, 180],
                outputRange: [width * 0.4, width * 0.2, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <LogoSvg size={35} color={COLORS.WHITE} />
      </AnimatedContainer>
      <Content>
        <Text
          style={{
            // fontSize: scrollY.interpolate({
            //   inputRange: [10, 100, 180],
            //   outputRange: [35, 30, 25],
            //   extrapolate: 'clamp',
            // }),
            transform: [
              {
                translateX: scrollY.interpolate({
                  inputRange: [10, 100, 180],
                  outputRange: [-width * 0.4, -width * 0.2, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          Hackers Gifs
        </Text>
      </Content>
    </Container>
  );
}

export default Header;
