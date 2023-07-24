import {
  NativeSyntheticEvent,
  StyleProp,
  TargetedEvent,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {TypographyVariant} from '../../../utils';

export interface ButtonProps {
  btnStyle?: StyleProp<ViewStyle>;
  btnLabel: string;
  onPress: (event: NativeSyntheticEvent<TargetedEvent>) => void;
  disabled?:boolean
}
