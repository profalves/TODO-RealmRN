import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import initRealm from '../services/realm';

import myStyles from '../styles/styles';
const styles = StyleSheet.create(myStyles);

export default function components({ item, onRefresh }) {
  const deleteTask = async () => {
    const realm = await initRealm();
    realm.write(() => {
      realm.delete(item);
    });

    onRefresh();
  }

  return (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <TouchableOpacity onPress={deleteTask}>
        <Text style={{ color: '#F03' }}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

