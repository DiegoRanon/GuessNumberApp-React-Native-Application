import { View, StyleSheet, Text, Alert } from "react-native";
import Titre from "../components/ui/Titre";
import Card from "../components/ui/Card";
import { useState, useEffect } from "react";
import Colors from "../constants/colors";
import Button from "../components/ui/Button";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minNumber = 1;
let maxNumber = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialNumber = generateRandomBetween(1, 100, userNumber);
    const [numberGuessed, setNumberGuessed] = useState(initialNumber); 

    useEffect(() => {
        if(userNumber == numberGuessed) {
            onGameOver()
        }

    }, [userNumber, numberGuessed, onGameOver])


    function nextNumberHandler(direction) {
        if((direction == "lower" && userNumber > numberGuessed) || (direction == "greater" && userNumber < numberGuessed)) {
            Alert.alert("Wrong", "Don't forget your number", [{text:"continue", style:"destructive"}])
            return;
        }

        if(direction == "lower") {
            maxNumber = numberGuessed
        } else {
            minNumber = numberGuessed + 1
        }
        console.log(minNumber+", "+maxNumber);
        const newRandomNumber = generateRandomBetween(minNumber, maxNumber, numberGuessed)
        setNumberGuessed(newRandomNumber)
    }



    return (<View style={styles.rootContainer}>
        <Titre>Guess Number</Titre>
        <Card>
            <Text style={styles.inputText}>{numberGuessed}</Text>
            <View style={styles.buttonContainer}>
                <Button onPress={nextNumberHandler.bind(this, "greater")}>+</Button>
                <Button onPress={nextNumberHandler.bind(this, "lower")}>-</Button>
            </View>
        </Card>
    </View>)
}

export default GameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 16
    },
    inputText: {
        marginTop: 16,
        padding: 16,
        fontSize: 28,
        borderWidth: 2,
        borderColor: Colors.accent500,
        color: Colors.accent500,
        textAlign: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        padding: 16
    }

}); 