import React from 'react';

import {Text} from './styles';

interface Props {
  children: Element;
  size?: number;
  color?: string;
}

function CustomText(props: Props) {
  const {children, size, color} = props;

  return (
    <Text size={size} color={color}>
      {children}
    </Text>
  );
}

export default CustomText;
