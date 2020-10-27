import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  //because flatlist turns your array of strings to array of objects, we need a key for .map()
  //itemData.item is the object with key & value pairs where the data we want resides
  //use FlatList for very long lists, use ScrollView for shorter, finite lists
  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalTitle }
    ])
    setIsAddMode(!isAddMode);
  }
  
  const removeGoalHandler = goalId => {
    //currentGoals means currentState. 
    //That's just how Hooks is when function is passed onto Hooks call.
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => 
        goal.id !== goalId
      );
    })
  }

  const cancelGoalAddition = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
    <Button title="Add new goal" onPress={() => setIsAddMode(!isAddMode)}/>
      <GoalInput 
        addGoalHandler={addGoalHandler}
        isAddMode={isAddMode}
        cancelGoalAddition={cancelGoalAddition}
      />
      <FlatList 
      keyExtractor={(item) => item.id}
        data={courseGoals} 
        renderItem={itemData => (
          <GoalItem 
            id={itemData.item.id}
            title={itemData.item.value} 
            onDelete={removeGoalHandler}
          />
      )}        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
