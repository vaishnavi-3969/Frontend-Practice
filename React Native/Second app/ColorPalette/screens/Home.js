import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PalettePreview from '../components/PalettePreview';
import { RefreshControl } from 'react-native';

const Home = ({ navigation,route }) => {
  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined;
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isrefreshing, setIsRefereshing] = useState(false);
  const fetchColorPalette = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    if (result.ok) {
      const palette = await result.json();
      setColorPalettes(palette);
    }
  }, []);

  useEffect(() => {
    fetchColorPalette();
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefereshing(true);
    await fetchColorPalette();
    setTimeout(() => {
      setIsRefereshing(false);
    }, 1000);
  }, []);

  useEffect(() =>{
    if(newColorPalette){
      setColorPalettes((palettes) => [newColorPalette, ...palettes]);
    }
  },[newColorPalette])
  return (
    <FlatList
      style={styles.list}
      data={colorPalettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate('ColorPalette', item);
          }}
          colorPalette={item}
        />
      )}
      refreshing={isrefreshing}
      onRefresh={() => handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ColorPaletteModal');
          }}>
          <Text style={styles.green}>Add a color Scheme</Text>
        </TouchableOpacity>
      }
    />
  );
};
const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
  green: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'teal',
    marginBottom: 10,
  },
});
export default Home;
