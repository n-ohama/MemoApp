import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MemoList() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.item}
        onPress={() => { navigation.navigate('Detail'); }}
      >
        <View>
          <Text style={styles.itemTitle}>買い物リスト</Text>
          <Text style={styles.itemDate}>2021年12月24日 10:00</Text>
        </View>
        <TouchableOpacity
          onPress={() => { Alert.alert('Are you sure?'); }}
          style={styles.deleteBtn}
        >
          <Feather name="x" size={24} color="#b0b0b0" />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => { navigation.navigate('Detail'); }}
      >
        <View>
          <Text style={styles.itemTitle}>買い物リスト</Text>
          <Text style={styles.itemDate}>2021年12月24日 10:00</Text>
        </View>
        <TouchableOpacity
          onPress={() => { Alert.alert('Are you sure?'); }}
          style={styles.deleteBtn}
        >
          <Feather name="x" size={24} color="#b0b0b0" />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => { navigation.navigate('Detail'); }}
      >
        <View>
          <Text style={styles.itemTitle}>買い物リスト</Text>
          <Text style={styles.itemDate}>2021年12月24日 10:00</Text>
        </View>
        <TouchableOpacity
          onPress={() => { Alert.alert('Are you sure?'); }}
          style={styles.deleteBtn}
        >
          <Feather name="x" size={24} color="#b0b0b0" />
        </TouchableOpacity>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  itemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  itemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  },
  deleteBtn: {
    padding: 8,
  }
});