import { View, Button, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import MyButton from "./MyButton";

function TodoInput(props) {
  const [enteredTodoText, setEnteredTodoText] = useState("");

  function todoInputHandler(enteredText) {
    setEnteredTodoText(enteredText);
  }

  function addTodoHandler() {
    props.onAddTodo(enteredTodoText);
    setEnteredTodoText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.TextInput}
        placeholder="To Do..."
        onChangeText={todoInputHandler}
        value={enteredTodoText}
      />
      <View style={styles.btnContainer}>
        <MyButton title="Cancel" />
        <Button title="Add" onPress={addTodoHandler} />
      </View>
    </View>
  );
}

export default TodoInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
  TextInput: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#000",
    width: "70%",
    marginRight: 10,
    padding: 5,
  },
  btnContainer: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
