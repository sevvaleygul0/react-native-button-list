import React from 'react';
import {SafeAreaView, View, Image, Text, StatusBar} from 'react-native';
import ButtonList from './lib/ButtonList';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <ButtonList />
    </SafeAreaView>
  );
};

export default App;
