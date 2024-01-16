import { View, StyleSheet, Text, Image } from "react-native";
import Titre from "../components/ui/Titre";

function GameOver() {
    return (<View style={styles.rootContainer}>
        <Titre>Game Over !!</Titre>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../assets/images/success.png")}/>
        </View>
    </View>)
}

export default GameOver;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 16
    },
    imageContainer : {
        alignItems: "center",
        margin: 100,
        elevation: 80,
        
    },
    image : {
        height: 200,
        width: 200,
        borderRadius: 100
    }
})