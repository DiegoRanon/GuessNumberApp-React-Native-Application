import { Pressable, View, StyleSheet, Text } from "react-native"
import Colors from "../../constants/colors";


function Button({ children, onPress }) {
    return (<View style={styles.buttonOuterContainer}><Pressable style={(pressed) => pressed ? [styles.buttonStyle, styles.pressed] : styles.buttonInnerContainer}onPress={onPress}><Text style={styles.text}>{children}</Text></Pressable></View>)
}

export default Button

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonStyle: {
        backgroundColor: Colors.primary500,
        borderRadius: 8,
        margin: 4,
        paddingHorizontal: 28,
        paddingVertical: 10,
        elevation: 5
    },
    textView: {

    },
    text: {
        color: "white",
        fontSize: 16,
        textAlign: "center"
    },
    pressed: { 
        opacity: 0.75
    }
}); 