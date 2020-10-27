import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Modal} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoal = () => {
    props.addGoalHandler(enteredGoal);
    setEnteredGoal('');
  }

  const cancelGoal = () => {
    props.cancelGoalAddition();
    setEnteredGoal('');
  }
  
  return (
    <Modal visible={props.isAddMode} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Course Goal" 
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoal}/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={cancelGoal}/>
          </View>         
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '80%',
    borderColor: "grey", 
    borderWidth: 1,
    padding: 4,
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: '60%'
  },
  button: {
    width: '40%',
  }
})

export default GoalInput;
