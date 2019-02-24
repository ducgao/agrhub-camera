import React, { Component } from 'react'
import { 
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text
} from 'react-native'
import STRING from '../../res/string'
import THEME from '../../res/theme'
import { isIphoneX } from '../../utils'
import UserRepository from '../../repository/user'
import Cell from './cell'

export default class Profile extends Component {
  static navigationOptions = { header: null }

  state = {
    userInfo: null
  }

  userRepository = UserRepository.instance()

  componentDidMount() {
    this.userRepository.addObserver(this.userObserver)
  }

  componentWillUnmount() {
    this.userRepository.removeObserver(this.userObserver)
  }

  userObserver = (userInfo) => {
    this.setState({ userInfo })
  }

  renderHeader() {
    const userInfo = this.state.userInfo
    if (userInfo == null) return

    const name = userInfo.name
    const cameraCount = userInfo.cameraCount + ' ' + (userInfo.cameraCount > 1 ? STRING.cameras : STRING.camera)
    return <View style={styles.headerContainer}>
      <Image style={styles.avatar} />
      <Text style={styles.userName}>{name}</Text>
      <Text style={styles.cameraCount}>{cameraCount}</Text>
    </View>
  }

  renderBlock1() {
    return <View style={styles.blockContainer}>
      <Cell title={"Profile Managerment"} icon={"md-contact"} color={THEME.colorPrimary}/>
      <Cell title={"Notification Center"} icon={"md-mail"} color={"#f48541"}/>
    </View>
  }

  renderBlock2() {
    return <View style={styles.blockContainer}>
      <Cell title={"FAQ & Feedback"} icon={"md-help-circle"} color={"#f44170"}/>
      <Cell title={"About"} icon={"md-information-circle"} color={"#a341f4"}/>
      <Cell title={"Settings"} icon={"md-settings"} color={"#41f4a9"}/>
    </View>
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView>
          {this.renderBlock1()}
          {this.renderBlock2()}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.appBackground
  },
  headerContainer: {
    width: '100%', 
    backgroundColor: THEME.colorPrimary,
    height: 220,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    justifyContent: 'center',
    paddingTop: isIphoneX ? 32 : 12,
  },
  avatar: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 40,
    alignSelf: 'center'
  },
  userName: {
    color: 'white', 
    alignSelf: 'center', 
    fontSize: 16, 
    marginTop: 8
  },
  cameraCount: {
    color: '#FFFFFF80', 
    alignSelf: 'center', 
    fontSize: 12, 
    marginTop: 4
  },
  blockContainer: {
    marginTop: 20,
    width: '90%', 
    alignSelf: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    borderRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    justifyContent: 'center'
  }
})
