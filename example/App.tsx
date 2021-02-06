import React from 'react';
import {SafeAreaView, View, Image, Text, StatusBar} from 'react-native';
import ButtonList from './lib/ButtonList';
// ICON SET :https://www.flaticon.com/packs/nature-71?word=flower
const App = () => {
  const buttonListData = [
    {
      id: 0,
      imageSource: require('./assets/butterfly.png'),
      label: 'Butterfly',
    },
    {
      id: 1,
      imageSource: require('./assets/cactus.png'),
      label: 'Cactus',
    },
    {
      id: 2,
      imageSource: require('./assets/mushroom.png'),
      label: 'Mushroom',
    },
    {
      id: 3,
      imageSource: require('./assets/rainbow.png'),
      label: 'Rainbow',
    },
  ];
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <ButtonList buttonListData={buttonListData} />
    </SafeAreaView>
  );
};

export default App;
