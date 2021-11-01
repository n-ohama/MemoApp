import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MemoItem() {
  return (
    <View>
      <View style={styles.item}>
        <View>
          <Text style={styles.itemTitle}>買い物リスト</Text>
          <Text style={styles.itemDate}>2021年12月24日 10:00</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>
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
});