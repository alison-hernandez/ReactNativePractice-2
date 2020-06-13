import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');  
  
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    props.addGoalHandler(enteredGoal);
    setEnteredGoal("");
  }

  return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer} >
          <TextInput 
            placeholder="Course Goal" 
            style={styles.input} 
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <View style={styles.buttonsBox}>
            <View style={styles.button} >
              <Button title="ADD" onPress={addGoalHandler} />
            </View>
            <View style={styles.button} >
              <Button title="CANCEL" color="red" onPress={props.onCancel} />
            </View>
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 10
  },
  input: {
    width: "80%", borderBottomColor: 'black', borderBottomWidth: 1, padding: 10
  },
  buttonsBox: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%"
  },
  button: {
    marginEnd: 0,
    width: "50%"
  }
})

export default GoalInput
