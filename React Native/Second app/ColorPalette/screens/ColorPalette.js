import { View, Text, StyleSheet, FlatList, PlatformColor } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ColorBox from '../components/ColorBox';



const ColorPalette = ({route}) => {
    const {colors, paletteName} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.common}>
        <Text style={[styles.text]}>
          Here are some boxes of different colors
        </Text>
      </View>
      <FlatList
        style={styles.container}
        data={colors}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
        ListHeaderComponent={<Text style={styles.text}>{PlatformColor}</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  common: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ColorPalette;
