import { View, Text, Image, StyleSheet, TextInput, Dimensions } from 'react-native'
import React from 'react'
import Color from '../../Shared/Color'

export default function Header() {
  return (
    <View style={{display:'flex',flexDirection:'row',
    justifyContent:'space-evenly', alignItems:'center'}}>
      <Image source={require('../../../assets/logo.png')} 
        style={styles.logo}
      />
      <View>
        <TextInput placeholder='Search'
            style={styles.searchBar}
        />
      </View>
      <Image source={require('../../../assets/placeholder.jpg')}
        style={styles.userImage}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    logo:{
        width:50,
        height:50,
    },
    searchBar:{
        borderWidth:1,
        borderColor:Color.black,
        borderRadius:50,
        padding:6,
        width:Dimensions.get('screen').width*0.6
    },
    userImage:{
        width:50,
        height:50,
        borderRadius:50,
    }
})