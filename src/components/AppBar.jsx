import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.title}>Memo App</Text>
        <Text style={styles.logoutBtn}>ログアウト</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 80,
    backgroundColor: '#467fdc',
    justifyContent: 'flex-end',
  },

  appbarInner: {
    alignItems: 'center',
  },

  logoutBtn: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.8)'
  },

  title: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
});