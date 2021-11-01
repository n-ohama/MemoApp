import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppBar from './src/components/AppBar';
import MemoItem from './src/components/MemoItem';

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoItem />
      <MemoItem />
      <MemoItem />


      <View style={styles.floatingBtn}>
        <Text style={styles.label}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  floatingBtn: {
    backgroundColor: '#467fdc',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 24,
    bottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: .25,
    shadowRadius: 8,
    elevation: 8,
  },

  label: {
    color: '#fff',
    fontSize: 40,
    lineHeight: 40,
  }
});
