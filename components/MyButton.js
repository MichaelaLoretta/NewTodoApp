import {StyleSheet, Text, TouchableOpacity} from 'react-native';


function MyButton(props) {
    return (
        <TouchableOpacity style={styles.btnBg}>
            <Text style={styles.btnText}>{props.title}</Text>
        </TouchableOpacity>
    )
};

export default MyButton;

const styles = StyleSheet.create({
  btnBg: {
    height: 30,
    width: 100,
    backgroundColor: "#7393DC",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  btnText: {
    color: "#FAFAFA",
    fontWeight: "bold",
    fontSize: 20,
  },
});