import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

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

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingTop: 30 + getStatusBarHeight(true),
    paddingHorizontal: 20
  },
  title: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  form: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 20
  },
  input: {
    flex: 1,
    marginTop: 30,
    padding: 10,
    borderRadius: 4,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#FFF'
  },
  button: {
    backgroundColor: '#6bd4c1',
    marginLeft: 10,
    justifyContent: 'center',
    borderRadius: 4,
    paddingHorizontal: 20,
    height: 40,
    alignSelf: 'flex-end'
  }
})