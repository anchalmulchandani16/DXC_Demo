import React, { useEffect, useState } from 'react';
import { SectionList, Keyboard, SafeAreaView, KeyboardAvoidingView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ListCardView, Text } from '../../components';
import TextInputComponent from '../../components/atoms/textInput';
import Styles from './style';
import { ListItemsProps, TaskResponse } from './interface';
import { storeCatListData } from '../../store/slices/mainSlice';
import { Colors } from '../../utils';


const MainScreen = () => {
  const dispatch = useDispatch();
  const { catListing } = useSelector((state: TaskResponse) => state.mainRoot);
  const [tasks, setTasks] = useState([] as Array<ListItemsProps>);
  const [textVal, setTextVal] = useState('');

  useEffect(() => {
    fetchList();
  }, []);
  useEffect(() => {
    dispatch(storeCatListData(tasks));

  }, [tasks]);
  console.log('catListing---', catListing);

  const fetchList = async () => {
    try {
      let data = [
        {
          title: 'A',
          data: ['Apple', 'APP'],
        },
        {
          title: 'B',
          data: ['Ball', 'Bag'],
        },
        {
          title: 'C',
          data: ['Cream', 'Coke'],
        },
        {
          title: 'D',
          data: ['Doll', 'Duck'],
        },
      ]

      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddTask = () => {
    if (textVal.trim() === '') {
      return;
    }

    const firstChar = textVal.charAt(0).toUpperCase();
    const existingSectionIndex = catListing.findIndex((item) => item.title === firstChar);

    if (existingSectionIndex !== -1) {
      dispatch(
        storeCatListData(
          catListing.map((section) =>
            section.title === firstChar
              ? { ...section, data: [...section.data, textVal] }
              : section
          )
        )
      );
    } else {
      dispatch(
        storeCatListData([
          ...catListing,
          {
            title: firstChar,
            data: [textVal],
          },
        ])
      );
    }

    setTextVal('');
  };
  const deleteTask = (sectionTitle: string, itemIndex: number) => {
    const updatedSections = catListing.map((section) =>
      section.title === sectionTitle
        ? {
          ...section,
          data: section.data.filter((_, dataIdx) => dataIdx !== itemIndex),
        }
        : section
    );
    const filteredSections = updatedSections.filter((section) => section.data.length > 0);

    setTasks(filteredSections);
  };

  const renderItem = ({ item, section: { title }, index }) => (
    <ListCardView
      itemName={item}
      deleteTask={() => deleteTask(title, index)}
    />
  );
  const emptyData = () => {
    return (
      <View style={[Styles.sectionStyle, Styles.emptyList]}>
        <Text color={Colors.COLOR_BROWN}
          style={Styles.header}>{'No Tasks available'}</Text>
      </View>
    )
  }
  return (
    <SafeAreaView style={Styles.container}>
      <SectionList
        sections={catListing}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <View style={Styles.sectionStyle}>
            <Text color={Colors.COLOR_BROWN}
              style={Styles.header}>{title}</Text>
          </View>
        )}
        ListEmptyComponent={emptyData()}
        style={Styles.flatListStyle}
      />

      <KeyboardAvoidingView
        style={Styles.inputView}
      >
        <TextInputComponent
          onChangeText={(text) => { setTextVal(text) }}
          value={textVal}
        />
        <Button
          onPress={() => handleAddTask(tasks)}
          btnLabel={'+'}
          disabled={textVal?.length <= 0}
          btnStyle={Styles.listView}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MainScreen;