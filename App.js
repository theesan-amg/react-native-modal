import React, { useState } from 'react';
import { Button, StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import ListCard from './components/ListCard';
import ListModal from './components/ListModal';
// import { Icon } from 'react-native-elements'

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [lists, setLists] = useState([]);

  function remove(list) {
    setLists(lists.filter(l => l !== list));
  }

  return (
    <View style={styles.container}>
      <Button title="+ Add list" onPress={() => setIsModalVisible(true)} />
      {lists?.map(list => (
        <ListCard remove={() => remove(list)} list={list} key={list} />
      ))}
      {isModalVisible && (
        <ListModal lists={lists} setLists={setLists} isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} />
      )}
      {lists.length > 0 && (
        <TouchableHighlight
          style={styles.button}
          onLongPress={() => setLists([])}
        >
          <Text style={{color: "white"}}>Clear</Text>
        </TouchableHighlight>
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "crimson",
    borderRadius: 5,
    padding: 10,
    margin: 5,
    color: "white"
  }
});
