import React from 'react';
import {SafeAreaView, View, Image, Text, StatusBar} from 'react-native';
import ButtonList from './lib/ButtonList';
// ICON SET :https://www.flaticon.com/packs/nature-71?word=flower
const App = () => {
  const buttonListData = [
    {
      id: 0,
      imageSource: require('./assets/butterfly.png'),
      backgroundColor: '#FDFAED',
      textColor: '#BF8B5A',
      label: 'Butterfly',
    },
    {
      id: 1,
      imageSource: require('./assets/cactus.png'),
      backgroundColor: '#DDF8EA',
      textColor: '#BF8B5A',
      label: 'Cactus',
    },
    {
      id: 2,
      imageSource: require('./assets/mushroom.png'),
      backgroundColor: '#E4EEF4',
      textColor: '#BF8B5A',
      label: 'Mushroom',
    },
    {
      id: 3,
      imageSource: require('./assets/rainbow.png'),
      backgroundColor: '#FFF3EA',
      textColor: '#BF8B5A',
      label: 'Rainbow',
    },
    {
      id: 4,
      imageSource: require('./assets/tree.png'),
      backgroundColor: '#EAFFF2',
      label: 'Tree',
    },
    {
      id: 5,
      imageSource: require('./assets/snowing.png'),
      backgroundColor: '#EDF7FD',
      textColor: '#BF8B5A',
      label: 'Snowing',
    },
  ];

  const buttonListData2 = [
    {
      id: 0,
      imageSource: {
        uri:
          'https://cdn.dribbble.com/users/60166/screenshots/15089854/media/f15eb63f385ab8f703a93d4974d75af4.jpg?compress=1&resize=1600x1200',
      },
      backgroundColor: '#FCFCFC',
      textColor: '#6DB34F',
      label: 'Monkey',
    },
    {
      id: 1,
      imageSource: {
        uri:
          'https://cdn.dribbble.com/users/1787323/screenshots/11926686/media/fac52f8e4dfeedc921cbe09a40ad8650.png?compress=1&resize=1600x1200',
      },
      backgroundColor: '#FCFCFC',
      textColor: '#38304C',
      label: 'Panda',
    },
    {
      id: 2,
      imageSource: {
        uri:
          'https://cdn.dribbble.com/users/677572/screenshots/14480686/media/c228fac715066199742fea214b2fc20f.png?compress=1&resize=1600x1200',
      },
      backgroundColor: '#FCFCFC',
      textColor: '#BF8B5A',
      label: 'Tiger',
    },
    {
      id: 3,
      imageSource: {
        uri:
          'https://cdn.dribbble.com/users/1573719/screenshots/14370437/media/e3108b036daad1e87e83f5e28f736153.png?compress=1&resize=800x600',
      },
      backgroundColor: '#FCFCFC',
      textColor: '#FE521D',
      label: 'Cat',
    },
  ];
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FCFCFC',
      }}>
      <View style={{height: 200, alignItems: 'center', marginTop: 24}}>
        <Text style={{fontSize: 24, color: '#FECFB5', fontWeight: '600'}}>
          Example 1
        </Text>
        <ButtonList buttonListData={buttonListData} />
      </View>

      <View style={{height: 200, alignItems: 'center', marginTop: 24}}>
        <Text style={{fontSize: 24, color: '#FFDDB0', fontWeight: '600'}}>
          Example 2
        </Text>
        <ButtonList
          buttonListData={buttonListData2}
          width={90}
          height={90}
          imageWidth={45}
          imageHeight={45}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
