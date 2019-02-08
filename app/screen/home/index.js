import React, { Component } from 'react'
import { 
  StyleSheet,
  View,
  FlatList
} from 'react-native'
import Header from './header'
import CameraItem from './camera'
import CameraRepository from '../../repository/camera'
import THEME from '../../res/theme'

export default class Home extends Component {
  static navigationOptions = { header: null }

  cameraRepository = CameraRepository.instance()

  state = {
    cameraList: null
  }

  componentDidMount() {
    this.cameraRepository.addObserver(this.camerasObserver)
  }

  componentWillUnmount() {
    this.cameraRepository.removeObserver(this.camerasObserver)
  }

  camerasObserver = (cameras) => {
    this.setState({ cameraList: cameras })
  }

  renderCameraItem = ({item}) => {
    return <CameraItem style={styles.cameraItem} data={item}/>
  }

  renderHeader() {
    return <Header style={styles.header}/>
  }

  renderCameras() {
    if (this.state.cameraList == null) {

    }
    else {
      return <FlatList 
        style={styles.cameraList}
        showsVerticalScrollIndicator={false}
        keyExtractor={(index) => 'camera-item-' + index}
        data={this.state.cameraList} 
        renderItem={this.renderCameraItem}
      />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderCameras()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.app
  },
  header: {
    marginTop: 44
  },
  cameraList: {
    marginTop: 12,
    paddingTop: 8
  },
  cameraItem: {
    marginBottom: 16
  }
})
