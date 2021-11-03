import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import FloatingBtn from '../components/FloatingBtn';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function AddScreen(props) {
  const { navigation } = props;
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <FloatingBtn
        name="check"
        onPress={() => { navigation.goBack(); }}
      />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
  inputContainer: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
});