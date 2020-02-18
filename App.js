import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import Realm from 'realm';

import myStyles from './src/styles/styles';
const styles = StyleSheet.create(myStyles);

export default function appnextu() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    Realm.open({
      // "Task"
      schema: [{ name: 'Task', properties: { date: 'string', name: 'string' } }]
    }).then(realm => {
      realm.write(() => {
        var current = new Date();
        realm.create('Task', { date: current.toString(), name: 'daisuke' });
      });
      console.log(realm);
      setTasks({ realm });
    });
  }, [tasks])

  const addTask = () => {
    // Keyboard.dismiss();
  }
  const tasksData = [
    { id: 1, name: 'Tarefa 1' },
    { id: 2, name: 'Tarefa 2' },
  ]
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={['#964EA1', '#37467D']}
      style={styles.linearGradient} >
      <Text style={styles.title}>
        Lista de Tarefas
      </Text>
      <View style={styles.form}>
        <TextInput
          placeholderTextColor="#999"
          autoCapitalize={"none"}
          style={styles.input}>
        </TextInput>
        <TouchableOpacity
          style={styles.button}
          onClick={addTask}>
          <Text style={{ color: '#fff' }}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.list}
        data={tasksData}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </LinearGradient >


  );
}