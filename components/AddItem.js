import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({title, addItem}) => {
  const [text, setText] = useState('');

  const onChange = textValue => setText(textValue);

  const validate = text => {
    if (text) {
      addItem(text);
      setText('');
    } else {
      Alert.alert('Input Empty', 'Input field cannot be empty', [{text: 'Ok'}]);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Add item ..."
        style={styles.input}
        onChangeText={onChange}
        value={text}
      />
      <TouchableOpacity style={styles.btn} onPress={() => validate(text)}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },

  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
