import React from 'react';
import { View, StyleSheet } from 'react-native';
import FloatingBtn from '../components/FloatingBtn';
import MemoList from '../components/MemoList';

export default function ListScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <MemoList />
      <FloatingBtn
        name="plus"
        onPress={() => { navigation.navigate('Add'); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
  },
});