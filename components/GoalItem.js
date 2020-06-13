import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
// There's also TouchableHighlight, which sets the background to the underlayColor.
// TouchableNativeFeedback, which only works on Android and gives a ripple effect.
// TouchableWithoutFeedback, tapping doesn't give feedback visually.

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete} > 
          <View style={styles.listItem} onT> 
              <Text>{props.title}</Text>
          </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: 'pink',
      borderColor: 'black',
      borderWidth: 1
    }
  });

export default GoalItem