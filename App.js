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

  return (
    
    <View style = {styles.container}>
      
      <TextInput 
        style = {styles.textInput}
        placeholder = "Enter your text"
        onChangeText = {(val) => setUserInput(val)}
        value = {userInput}
        keyboardType = {'default'}
      />
            
      <TouchableOpacity 
        style = {styles.btn}
        onPress = {() => setDisplayInput(userInput)}
      >
        <Text style = {styles.text}>
          Submit
        </Text>
      </TouchableOpacity>

      {/* <Button title='Submit' onPress={() => alert(userInput)}/> */}

      <Text style={styles.text}> input string is: {displayInput}</Text>


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
  },
  textInput: {
    margin: 30,
    padding: 7,
    fontSize: 22,
    borderWidth: 1,
    borderColor: "grey",
    width: 300,
  },
  btn: {
    backgroundColor: "skyblue",
    borderRadius: 23,
    width: "40%",
    height: 35,
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
