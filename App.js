import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { uid: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.uid !== goalId);
    })
  }

  const cancelGoalAddHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} addGoalHandler={addGoalHandler} onCancel={cancelGoalAddHandler} />
      {/* <ScrollView> would be good if we knew the list wasn't going to exceed 30 tasks.
      But since we don't know how long it will get, and thus we don't want everything 
      being rendered before displaying, it's better to use FlatView. */}
      <FlatList 
        keyExtractor={(item, index) => item.uid} 
        data={courseGoals} 
        renderItem={itemData => <GoalItem onDelete={() => removeGoalHandler(itemData.item.uid)} title={itemData.item.value} />} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 60
  }
});

