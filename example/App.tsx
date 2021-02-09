import React from 'react';
import {SafeAreaView, View, Image, Text, StatusBar} from 'react-native';
import ButtonList from './lib/ButtonList';
// ICON SET :https://www.flaticon.com/packs/nature-71?word=flower
const App = () => {
  const buttonListData = [
    {
      id: 0,
      imageSource: require('./assets/butterfly.png'),
      backgroundColor: '#FCFCFC',
      label: 'Butterfly',
    },
    {
      id: 1,
      imageSource: require('./assets/cactus.png'),
      backgroundColor: '#FCFCFC',
      label: 'Cactus',
    },
    {
      id: 2,
      imageSource: require('./assets/mushroom.png'),
      backgroundColor: '#FCFCFC',
      label: 'Mushroom',
    },
    {
      id: 3,
      imageSource: require('./assets/rainbow.png'),
      backgroundColor: '#FCFCFC',
      label: 'Rainbow',
    },
    {
      id: 4,
      imageSource: require('./assets/tree.png'),
      backgroundColor: '#FCFCFC',
      label: 'Tree',
    },
    {
      id: 5,
      imageSource: require('./assets/snowing.png'),
      backgroundColor: '#FCFCFC',
      label: 'Snowing',
    },
  ];
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FCFCFC',
      }}>
      <ButtonList buttonListData={buttonListData} />
    </SafeAreaView>
  );
};

export default App;
