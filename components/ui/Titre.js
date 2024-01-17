import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors"

function Titre({children}) {
    return (<View style={styles.root}><Text style={styles.text}>{children}</Text></View>)
}

export default Titre;

const styles = StyleSheet.create({
    root : {
        alignItems: 'center',
        borderColor: "white",
        borderWidth: 3,
        marginTop: 30,
        maxWidth: '80%',
        width:300

    },
    text: {
        fontSize: 32,
        color: "white"
    }

})