import { View, StyleSheet} from "react-native";
import Colors from "../../constants/colors";
function Card({ children }) {
    return (<View style={styles.root}>{children}</View>)
}

export default Card;

const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.primary700,
        elevation: 100,
        alignItems: "center",
        marginHorizontal: 22,
        marginTop: 20,
        borderRadius: 8
        

    }
});