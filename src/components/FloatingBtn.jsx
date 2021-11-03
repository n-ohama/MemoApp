import React from "react";
import { StyleSheet, TouchableOpacity } from 'react-native';
import { func, shape, string } from 'prop-types';
import { Feather } from '@expo/vector-icons';

export default function FloatingBtn(props) {
  const { name, style, onPress } = props;
  return (
    <TouchableOpacity style={[styles.floatingBtn, style]} onPress={onPress}>
      <Feather name={name} size={32} color="white" />
    </TouchableOpacity>
  );
}

FloatingBtn.propTypes = {
  name: string.isRequired,
  style: shape(),
  onPress: func
}

FloatingBtn.defaultProps = {
  style: null,
  onPress: null,
}

const styles = StyleSheet.create({
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