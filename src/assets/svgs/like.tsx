import * as React from 'react';
import {Svg, Path} from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

function SvgComponent(props: Props) {
  const {size, color} = props;
  return (
    <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 9h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 2 7.59 8.59C7.22 8.95 7 9.45 7 10v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2zm0 4l-3 7H9V10l4.34-4.34L12.23 11H21v2zM5 10H1v12h4V10z"
        fill={color || '#000'}
        fillOpacity={0.84}
      />
    </Svg>
  );
}

export default SvgComponent;
