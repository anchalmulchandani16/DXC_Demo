import React from 'react';
import {Text as RNText} from 'react-native';
import {useTypeContext} from '../../../utils';
import {TextProps} from './interface';

const Text: React.FC<TextProps> = ({
  variant = 'body2',
  style,
  color,
  ...rest
}) => {
  var textStyle = [style];
  const {typography} = useTypeContext();
  return (
    <RNText
      style={[typography[variant], ...textStyle, {color: color}]}
      {...rest}
    />
  );
};

export default Text;
