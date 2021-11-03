import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import FloatingBtn from '../components/FloatingBtn';

export default function DetailScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>買い物リスト</Text>
        <Text style={styles.headerDate}>2020年12月24日 10:00</Text>
      </View>
      <ScrollView style={styles.body}>
        <Text style={styles.bodyText}>
          買い物リスト
          あいうえおあいうえおあいうえおあいうえおあいうえお
          あいうえおあいうえおあいうえおあいうえおあいうえお
        </Text>
      </ScrollView>
      <FloatingBtn
        style={{ top: 60, bottom: 'auto' }}
        name="edit-2"
        onPress={() => { navigation.navigate('Edit'); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#467fd3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  headerTitle: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerDate: {
    fontSize: 12,
    color: '#fff',
    lineHeight: 16,
  },
  body: {
    paddingHorizontal: 27,
    paddingVertical: 32,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 24,
  },
});