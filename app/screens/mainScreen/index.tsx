import React, { useEffect, useState } from 'react';
import { FlatList, Keyboard, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ListCardView } from '../../components';
import TextInputComponent from '../../components/atoms/textInput';
import Styles from './style';
import { TaskResponse} from './interface';
import { storeCatListData } from '../../store/slices/mainSlice';


const MainScreen = () => {
  const dispatch = useDispatch();
  const { catListing } = useSelector((state: TaskResponse) => state.mainRoot);
  const [tasks, setTasks] = useState([]);
  const [textVal, setTextVal] = useState('');

  useEffect(() => {
    fetchList();
  }, []);
  useEffect(() => {
    dispatch(storeCatListData(tasks));
  }, [tasks]);

  const fetchList = async () => {
    try {
      let data = [
        { name: 'Task 1 ' },
        { name: 'Task 2 ' },
        { name: 'Task 3' },
        { name: 'Task 4 ' }
      ];

      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddTask = (task: string) => {
    if (task === null) return;
    const newTask = { name: textVal.trim() };
    setTasks((prevTasks) => [...prevTasks, newTask]); 
    setTextVal('');
    Keyboard.dismiss();
  };

  const deleteTask = (deleteIdx: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, idx) => idx !== deleteIdx));
  };

  const renderItem = ({ item, index }) => (
    <ListCardView
      itemName={item.name}
      deleteTask={() => deleteTask(index)}
    />
  );

  return (
    <SafeAreaView style={Styles.container}>
      <FlatList
        data={catListing}
        extraData={tasks}
        renderItem={renderItem}
        keyExtractor={(index) => index.toString()}
        style={{ marginBottom: 40 }}
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