import { StyleSheet, Text, View } from "react-native";

function TodoItem(props) {
  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{props.text}</Text>
    </View>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: "#FDCDB8",
    alignItems: "center",
    marginBottom: 6,
    padding: 5,
    width: "100%",
    borderRadius: 5,
  },

  todoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
