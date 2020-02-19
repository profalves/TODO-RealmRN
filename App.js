import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import initRealm from './src/services/realm';

import myStyles from './src/styles/styles';
const styles = StyleSheet.create(myStyles);

import Lista from './src/components/List'

export default function appnextu() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getTasks();
  }, []);

  async function getTasks() {
    const realm = await initRealm();
    const data = realm.objects('Tasks');
    setTasks(data);
    // console.log(realm.path);
  }

  async function saveTask() {
    const current = new Date();
    const data = {
      id: tasks.length + 1,
      date: current.toString(),
      name: task
    };

    let realm = await initRealm();

    realm.write(() => {
      realm.create('Tasks', data, 'modified');
    });

    getTasks()

    return data;
  }

  function addTask() {
    // console.log('Executou', task);
    if (!task) return;
    try {
      // Keyboard.dismiss();
      setTask('');
      setError(false);

      saveTask();

    } catch (error) {
      setError(true);
    }

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
          value={task}
          onChangeText={text => setTask(text)}
          placeholderTextColor="#999"
          autoCapitalize="none"
          style={styles.input}>
        </TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={addTask}>
          <Text style={{ color: '#fff' }}>+</Text>
        </TouchableOpacity>
      </View>
      {error ? <Text style={styles.error}>Um erro foi encontrado ao adicionar</Text> : null}
      <FlatList
        style={styles.list}
        data={tasks}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Lista item={item} onRefresh={() => getTasks()} />}
      />
    </LinearGradient >
  );
}