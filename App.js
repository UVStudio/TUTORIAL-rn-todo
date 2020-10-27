import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  //because flatlist turns your array of strings to array of objects, we need a key for .map()
  //itemData.item is the object with key & value pairs where the data we want resides
  //use FlatList for very long lists, use ScrollView for shorter, finite lists
  const addGoalHandler = goal => {
    setCourseGoals(currentGoals => [...currentGoals, 
      {key: Math.random().toString(), value: goal}
    ])
  }

  return (
    <View style={styles.screen}>
      <GoalInput 
        addGoalHandler={addGoalHandler} 
      />
      <FlatList 
        data={courseGoals} 
        renderItem={itemData => (
          <GoalItem title={itemData.item.value} />
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
