import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }
  
  return (
    <View style={styles.textContainer}>
        <TextInput 
        placeholder="Course Goal" 
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoal}
        />
        <Button title="ADD" onPress={() => props.addGoalHandler(enteredGoal)}/>
      </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    width: '80%',
    borderColor: "grey", 
    borderWidth: 1,
    padding: 3
  },
  textContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
})

export default GoalInput
