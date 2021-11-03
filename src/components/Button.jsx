import { func, string } from "prop-types";
import React from "react";
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Button(props) {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  label: string.isRequired,
  onPress: func,
}

Button.defaultProps = {
  onPress: null,
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#467fd3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: '#fff'
  },
});