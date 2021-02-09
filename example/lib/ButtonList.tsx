import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import styles, {_itemContainer, _itemTextStyle} from './ButtonList.style';
import RNBounceable from '@freakycoder/react-native-bounceable';
import Androw from 'react-native-androw';

type CustomViewStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;
interface IButtonListProps {
  buttonListData: any;
  contentContainerStyle?: CustomViewStyleProp;
  imageComponent?: CustomImageStyleProp;
  itemContainer?: CustomViewStyleProp;
  textDisable?: boolean;
  textStyle?: CustomTextStyleProp;
}
interface IState {
  selectedItem: string;
}

const ButtonList = (props: IButtonListProps) => {
  const {
    buttonListData,
    contentContainerStyle,
    imageComponent,
    itemContainer,
    textDisable,
    textStyle,
  } = props;

  // const [cardState, setCardState] = React.useState(true);

  const renderImageComponent = (imageSource: any) => (
    <View style={imageComponent || styles.imageComponent}>
      <Image style={styles.imageStyle} source={imageSource} />
    </View>
  );

  const renderTextComponent = (item: any) => (
    <Text style={_itemTextStyle(item.textColor) || textStyle}>
      {item.label}
    </Text>
  );

  const renderItem = (item: any) => (
    <Androw style={styles.itemShadowContainer}>
      <RNBounceable onPress={() => {}}>
        <View
          style={itemContainer || _itemContainer(item.backgroundColor, 'true')}>
          {renderImageComponent(item.imageSource)}
          {!textDisable && renderTextComponent(item)}
        </View>
      </RNBounceable>
    </Androw>
  );

  return (
    <SafeAreaView>
      <FlatList
        horizontal
        contentContainerStyle={
          contentContainerStyle || styles.contentContainerStyle
        }
        data={buttonListData}
        renderItem={(item) => renderItem(item.item)}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
ButtonList.defaultProps = {textDisable: false};
export default ButtonList;
