import React from 'react';
import {TextInput} from 'react-native';
import {TextInputProps} from './interface';
import Styles from './style';

const TextInputComponent: React.FC<TextInputProps> = ({
  onChangeText,
  value,
}) => {
  return (
    <TextInput style={Styles.inputField} value={value} onChangeText={text => onChangeText(text)} placeholder={'Write a task'} placeholderTextColor={'#fff'}/>
  );
};

export default TextInputComponent;
