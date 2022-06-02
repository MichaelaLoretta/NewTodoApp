import { View, Button, TextInput, StyleSheet, Modal, Image } from "react-native";
import { useState } from "react";

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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("../assets/45.png")} />
          <Image source={require("../assets/logo.png")} />
        </View>

        <View style={styles.input}>
          <TextInput
            style={styles.TextInput}
            placeholder="To Do..."
            onChangeText={todoInputHandler}
            value={enteredTodoText}
          />
        </View>

        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title="Cancel" color={"#52579D"} onPress={props.onCancel} />
          </View>

          <View style={styles.btn}>
            <Button
              style={styles.button}
              title="Add"
              onPress={addTodoHandler}
              color={"#52579D"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default TodoInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    marginTop: "50%",
 
  },
  TextInput: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#FDCDB8",
    width: "70%",
    height: 40,
    padding: 5,
    marginTop: 30,
    fontSize: 20,
  },
  input: {
    alignItems:"center",

  },
  btnContainer: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  btn: {
    

  },

  imageContainer: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 15,
  },
  image: {
    width: 145,
    height: 145,
  },
});
