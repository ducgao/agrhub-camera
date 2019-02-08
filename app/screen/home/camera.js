import React, { Component } from 'react'
import { 
  StyleSheet, 
  Text, 
  Image,
  View 
} from 'react-native'
import { Ionicons } from 'expo/node_modules/@expo/vector-icons'

export default class Header extends Component {

  renderHeader() {
    return <View style={styles.headerContainer}>
      <Text style={styles.title}>Camera Kitchen</Text>
      <View style={styles.iconContainer}>
        <Ionicons style={styles.icon} name="md-play-circle" size={20} color={'gray'} />
        <Ionicons style={styles.icon} name="md-settings" size={20} color={'gray'} />
      </View>
    </View>
  }

  renderThumbnail() {
    return <View style={styles.thumbnail}>
        <Image 
          style={styles.thumbnail}
          source={{uri: 'https://nhadepso.com/wp-content/uploads/2017/12/tong-hop-15-thiet-ke-phong-bep-cua-so-kinh-dep-xuat-sac-nha-dep-so-3.jpg'}}
      />
    </View>
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {this.renderHeader()}
        {this.renderThumbnail()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingStart: 16,
    paddingEnd: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  iconContainer: {
    alignSelf: 'center',
    position: 'absolute',
    right: 16,
    flexDirection: 'row'
  },
  icon: {
    marginStart: 12
  },
  thumbnail: {
    flex: 1,
    height: 160,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    overflow: 'hidden'
  },
  headerContainer: {
    flexDirection: 'row', 
    backgroundColor: 'white', 
    borderTopLeftRadius: 8, 
    borderTopRightRadius: 8,
    paddingStart: 16,
    paddingEnd: 16, 
    paddingTop: 8, 
    paddingBottom: 8
  },
  title: {
    fontSize: 20, 
    fontWeight: '500'
  }
})
