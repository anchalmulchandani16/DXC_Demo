import {NativeSyntheticEvent, TargetedEvent} from 'react-native';

export interface TextInputProps {
  onChangeText?: (event: NativeSyntheticEvent<TargetedEvent>) => void;
  value?: any;
}
