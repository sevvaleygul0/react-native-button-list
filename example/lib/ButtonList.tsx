import React, {Component} from 'react';
import {Text, View, FlatList, SafeAreaView, Image} from 'react-native';
import styles, {_itemContainer} from './ButtonList.style';
import RNBounceable from '@freakycoder/react-native-bounceable';
import Androw from 'react-native-androw';

interface IButtonListProps {
  buttonListData: any;
  contentContainerStyle?: any;
  imageComponent?: any;
  itemContainer?: any;
}
interface IState {
  selectedItem: string;
}

export default class ButtonList extends React.PureComponent<
  IButtonListProps,
  IState
> {
  constructor(props: IButtonListProps) {
    super(props);
    this.state = {
      selectedItem: undefined,
    };
  }
  renderImageComponent = (imageSource: any) => (
    <View style={this.props.imageComponent || styles.imageComponent}>
      <Image style={styles.imageStyle} source={imageSource} />
    </View>
  );
  renderItem = (item: any) => (
    <Androw style={styles.itemShadowContainer}>
      <RNBounceable
        onPress={() => {
          this.setState({selectedItem: item.id});
        }}>
        <View
          style={
            this.props.itemContainer ||
            _itemContainer(item.backgroundColor, this.state.selectedItem)
          }>
          {this.renderImageComponent(item.imageSource)}
          <Text style={styles.itemTextStyle}>{item.label}</Text>
        </View>
      </RNBounceable>
    </Androw>
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
