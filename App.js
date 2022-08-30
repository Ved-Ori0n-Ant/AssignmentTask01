import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  View,
} from 'react-native';

const App = () => {

  const [userInput, setUserInput] = useState('');
  const [displayInput, setDisplayInput] = useState('');
  const [isInputNull, setIsInputNull] = useState(true);

  return (
    
    <View style = {styles.container}>
      
      <TextInput 
        style = {styles.textInput}
        placeholder = "Enter your text"
        onChangeText = {(val) => setUserInput(val)} 
        onSubmitEditing = {() => setIsInputNull(false)}
        value = {userInput}
        keyboardType = {'default'}
      />
            
      <Text style={styles.text}>Input string is: {displayInput}</Text>

      
      {/* <TouchableOpacity 
        style = {styles.btn}
        onPress = {() => setDisplayInput(userInput)}
      >
        <Text style = {styles.text}>
          Submit
        </Text>
      </TouchableOpacity> */}

      <Button 
        title='Submit' 
        onPress={() => setDisplayInput(userInput)}
        disabled = {isInputNull}
      />

    </View>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: "#0000ff70"
  },
  textInput: {
    margin: 30,
    padding: 7,
    fontSize: 22,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "skyblue",
    width: 300,
  },
  btn: {
    borderRadius: 23,
    borderBottomWidth: 4,
    borderRightWidth: 2,
    width: "40%",
    height: 45,
  },
  text: {
    padding: 7,
    textAlign: "center",
    color: "black",
    fontSize: 17,
    fontWeight: "700",
  },
});

export default App;
