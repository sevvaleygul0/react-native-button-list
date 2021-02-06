import React, {Component} from 'react';
import {Text, View, FlatList, SafeAreaView, Image} from 'react-native';
import styles from './ButtonList.style';
import RNBounceable from '@freakycoder/react-native-bounceable';

interface ButtonListProps {
  buttonListData: any;
  contentContainerStyle?: any;
  imageComponent?: any;
}
interface IState {}

export default class ButtonList extends React.PureComponent<
  ButtonListProps,
  IState
> {
  renderImageComponent = (imageSource) => (
    <View style={this.props.imageComponent || styles.imageComponent}>
      <Image style={styles.imageStyle} source={imageSource} />
    </View>
  );
  renderItem = (item) => (
    <RNBounceable onPress={() => {}}>
      <View style={styles.itemContainer}>
        {this.renderImageComponent(item.imageSource)}
        <Text>{item.label}</Text>
      </View>
    </RNBounceable>
  );

  render() {
    return (
      <SafeAreaView>
        <FlatList
          horizontal
          contentContainerStyle={
            this.props.contentContainerStyle || styles.contentContainerStyle
          }
          data={this.props.buttonListData}
          renderItem={(item) => this.renderItem(item.item)}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}
