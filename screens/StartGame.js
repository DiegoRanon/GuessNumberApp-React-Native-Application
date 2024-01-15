import { View, StyleSheet, Text, TextInput, Alert } from "react-native";
import Titre from "../components/ui/Titre";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { useState } from "react";
import Colors from "../constants/colors";



function StartGame({pickUserNumber}) {
    const [userNumber, setUserNumber] = useState();

    function onReset() {
        setUserNumber('')
    }

    function onConfirm() {
        const number = parseInt(userNumber)
        if(isNaN(number) || (number < 0 && number > 100)) {
            Alert.alert("Invalid number", "The number as to be between 1 and 99", [{text:"reset", style:"destructive",onPress:onReset}]);
            return;
        }
        pickUserNumber(number);
    }


    

    return (<View style={styles.inputContainer}>
        <Titre>Choose Number</Titre>
        <Card>
            <TextInput style={styles.textInput} maxLength={2} keyboardType="number-pad" value={userNumber} onChangeText={setUserNumber}/>
            <View style={styles.buttonsContainer}>
                <Button onPress={onReset}>Reset</Button>
                <Button onPress={onConfirm}>Confirm</Button>
            </View>
        </Card>

    </View>)
}

export default StartGame;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 16
    },
    textInput: {
        borderBottomWidth: 3,
        borderColor: Colors.accent500,
        color: Colors.accent500,
        fontSize: 28,
        padding: 20,
        textAlign: "center"
    },
    buttonsContainer: {
        flexDirection: "row",
        padding: 32
    }
});