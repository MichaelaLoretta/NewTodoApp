import { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  Button,
} from "react-native";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);

  const [modalIsVisible, setModalIsVisible] = useState(false)

  function startAddTodoHandler(){
    setModalIsVisible(true);
  }

  function CancelAddTodoHandler(){
    setModalIsVisible(false);
  }

  //Updates the existing list of todos with the new todo
  function addTodoHandler(enteredTodoText) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { text: enteredTodoText, id: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  }

  function deleteTodoHandler(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("./assets/45.png")} />
        <Image source={require("./assets/logo.png")} />
      </View>
      <Button
        title="Add New"
        color={"#52579D"}
        onPress={startAddTodoHandler}
      />

      <TodoInput
        onAddTodo={addTodoHandler}
        visible={modalIsVisible}
        onCancel={CancelAddTodoHandler}
      />

      <View style={styles.listView}>
        <FlatList
          data={todos}
          renderItem={(itemData) => {
            return (
              <TodoItem
                text={itemData.item.text}
                onDeleteItem={deleteTodoHandler}
                id={itemData.item.id}
              />
            );
          }}
          alwaysBounceVertical={false}
        />
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
    alignItems:"center",
    flex: 4,
    marginTop: 10,
  },
  imageContainer: {
    alignItems:"center",
    marginTop: 40,
    marginBottom: 30,

  },
  image: {
    width: 145,
    height: 145,
  }
});
