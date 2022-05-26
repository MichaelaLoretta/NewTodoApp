import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, FlatList } from "react-native";
import MyButton from "./components/MyButton";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

export default function App() {
  

  const [todos, setTodos] = useState([]);

 

  //Updates the existing list of todos with the new todo
  function addTodoHandler(enteredTodoText) {
    setTodos((currentTodos) => [...currentTodos, {text: enteredTodoText, key: Math.random().toString()}]);
  }

  return (
    <View style={styles.container}>


     <TodoInput onAddTodo={addTodoHandler} />

      <View style={styles.listView}>
        <FlatList data = {todos} renderItem={itemData => {
          
          return <TodoItem text={itemData.item.text} />;

        }} alwaysBounceVertical={false} />
          
           
      
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
 
  listView: {
    width: "100%",
    flex: 4,
  },

});
