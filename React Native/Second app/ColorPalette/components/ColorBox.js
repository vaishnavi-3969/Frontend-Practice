import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };
  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={[styles.boxText, textColor]}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 10,
    borderRadius: 5,
    elevation: 2,
    shadowRadius: 1,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: 'black',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export default ColorBox;
