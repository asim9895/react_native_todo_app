import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Todo App',
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
    paddingTop: 20,
  },
});

export default Header;
