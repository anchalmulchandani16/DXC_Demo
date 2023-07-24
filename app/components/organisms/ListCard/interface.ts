import {NativeSyntheticEvent, TargetedEvent} from 'react-native';

export interface ListCardViewProps {
  itemName: string;
  deleteTask: (event: NativeSyntheticEvent<TargetedEvent>) => void;
  testID?:string
}
