import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import Lista from './src/components/List';

import myStyles from './styles';
const styles = StyleSheet.create(myStyles);

export default function appnextu() {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={['#7159c1', '#9B49c1']}
      style={styles.linearGradient}>
      <Text style={styles.title}>
        Lista de Tarefas
        </Text>
      <View style={styles.form}>
        <TextInput placeholderTextColor="#999" style={styles.input}></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: '#fff' }}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
        style={styles.list}>
        <Lista />
      </FlatList>
    </LinearGradient>


  );
}