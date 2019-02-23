import React, { Component } from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableWithoutFeedback
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class Cell extends Component {

  render() {
    const iconColor = this.props.color
    const iconName = this.props.icon
    const title = this.props.title
    return (
      <TouchableWithoutFeedback style={[styles.container, this.props.style]}>
        <View style={[styles.container, this.props.style]}>
          <Ionicons style={styles.icon} name={iconName} size={28} color={iconColor}/>
          <Text style={styles.title}>{title}</Text>
          <Ionicons style={styles.rightIcon} name="md-arrow-dropright" size={24} color={"#00000050"}/>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingStart: 16,
    paddingEnd: 16,
    paddingTop: 12,
    paddingBottom: 12,
    flexDirection: 'row'
  },
  icon: {
    alignSelf: 'center',
    width: 30,
    height: 30
  },
  title: {
    alignSelf: 'center',
    marginLeft: 8
  },
  rightIcon: {
    position: 'absolute',
    right: 16,
    alignSelf: 'center'
  }
})
