import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Colors } from '../../../utils';
import Text from '../text';
import { ButtonProps } from './interface';

const Button: React.FC<ButtonProps> = ({
  btnStyle,
  btnLabel,
  onPress,
  disabled
}) => {
  return (
    <TouchableOpacity
      style={btnStyle}
      disabled={disabled}
      onPress={onPress}>
      <Text color={Colors.COLOR_WHITE} >{btnLabel}</Text>
    </TouchableOpacity>
  );
};

export default Button;
