import { StyleSheet, Text, View, Pressable } from "react-native";

function TodoItem(props) {
  return (
    <Pressable
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.todoItem}>
        <Text style={styles.todoText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: "#FDCDB8",
    alignItems: "center",
    marginBottom: 6,
    padding: 5,
    width: 230,
    borderRadius: 8,
  },

  todoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },

  pressedItem: {
    opacity: 0.6,
  },
});
