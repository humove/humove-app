import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>

      {/*Humove*/}
      <View style={styles.humoveWrapper}>
        <Text style={styles.sectionTitle}>Humove</Text>

        {/*Tasks Page*/}  
        <View style={[styles.items, shadow]}>
          <Task text={'Task 1'} />
          <Task text={'Task 2'} />
        </View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  humoveWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  items: {
    marginTop: 50,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
});

const shadow = {
  shadowColor: '#FFF',
  shadowRadius: 10,
  shadowOpacity: 0.3,
  elevation: 8,
  shadowOffset: {
      width: 0,
      height: 4,
  }
}