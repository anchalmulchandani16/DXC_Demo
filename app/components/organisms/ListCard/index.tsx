import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Text } from '../../atoms';
import { ListCardViewProps } from './interface';
import { listIcon, deleteIcon } from '../../../images'
import Styles from './style';

const ListCardView: React.FC<ListCardViewProps> = ({
  itemName,
  testID,
  deleteTask
}) => {
  return (
    <View testID={testID} style={Styles.container}>
      <View style={Styles.content}>
        <View style={Styles.imageView}>
          <Image testID='item-image'
            resizeMode="contain"
            source={listIcon}
            style={Styles.image}
          />
        </View>
          <Text style={Styles.titleTxt} variant="body3" numberOfLines={2}>
            {itemName}
          </Text>
          <TouchableOpacity onPress={() => deleteTask()}>
            <Image testID='item-image'
              resizeMode="contain"
              source={deleteIcon}
              style={Styles.deleteIcon}
            />
          </TouchableOpacity>
      </View>
    </View>

  );
};

export default ListCardView;
