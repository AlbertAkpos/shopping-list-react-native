import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: generateId(), text: 'Milk'},
    {id: generateId(), text: 'Book'},
    {id: generateId(), text: 'Biro'},
    {id: generateId(), text: 'Wyclef'},
    {id: generateId(), text: 'Sugar'},
  ]);

  function generateId() {
    return (
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  }

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = text => {
    setItems(prevItems => [...prevItems, {id: generateId, text}]);
  };

  return (
    <View style={style.container}>
      <Header title="Shopping list" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => {
          return <ListItem item={item} deleteItem={deleteItem} />;
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
