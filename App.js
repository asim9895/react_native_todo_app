import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import uuid from 'uuid';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setitems] = useState([
    {
      id: uuid(),
      text: 'Milk',
    },
    {
      id: uuid(),
      text: 'Eggs',
    },
    {
      id: uuid(),
      text: 'Cake',
    },
    {
      id: uuid(),
      text: 'Soda',
    },
  ]);

  const deleteItem = (id) => {
    setitems((prevItem) => {
      return prevItem.filter((item) => item.id !== id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please Enter An Item', {
        text: 'Ok',
      });
    } else {
      setitems((prevItems) => {
        return [{ id: uuid(), text }, ...prevItems];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header title='Todo App' />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
