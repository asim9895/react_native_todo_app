import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

const AddItem = ({ addItem }) => {
  const [text, settext] = useState('');

  return (
    <View style={styles.add_form}>
      <TextInput
        placeholder='Add Item'
        style={styles.text_input}
        underlineColorAndroid='transparent'
        onChangeText={(value) => settext(value)}
      />
      <TouchableOpacity>
        <Icon
          name='plus'
          style={styles.add_item}
          onPress={() => addItem(text)}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  add_form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  text_input: {
    width: 300,
    height: 40,

    borderColor: 'white',
    borderRadius: 20,
  },
  add_item: {
    backgroundColor: '#3792cb',
    padding: 10,
    color: '#fff',
  },
});

export default AddItem;
