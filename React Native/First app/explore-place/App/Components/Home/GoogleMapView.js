import { View, Text,StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';

export default function GoogleMapView() {
    const [mapRegion, setMapRegion] = useState({
        latitude: 37.78825,
        longitude:-122.4324,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0421,
    })
  return (
    <View style={styles.container}>
      <MapView style={styles.map} provider = {PROVIDER_GOOGLE} 
        showsUserLocation={true}
        region = {mapRegion}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginTop:20,
      borderRadius:20,
      overflow:'hidden'
    },
    map: {
      width: Dimensions.get('screen').width*0.9,
      height: Dimensions.get('screen').height*0.23,
    }
  });
