import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [enteredTodo, setEnteredTodo] = useState('');

  const [todos, setTodos] = useState([]);


  function todoInputHandler(enteredText) {
    setEnteredTodo(enteredText); 

  };

    //Updates the existing list of todos with the new todo
  function addTodoHandler(){
    setTodos(currentTodos => [...currentTodos, enteredTodo])
  };

  


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder='To Do...' onChangeText={todoInputHandler} />
        <Button title='Add' onPress={addTodoHandler} />
      </View>
      <View style={styles.listView}>
        {todos.map((todo) => <Text key={todo}>{todo}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    

  },
  TextInput: {
    borderWidth: 2,
    borderolor: "#000",
    width: "70%",
    marginRight: 10,
    padding: 5,


  },
  listView: {
    flex: 4,
    

  }
});
