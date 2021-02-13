import React from 'react';
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
import styles, {
  _itemContainer,
  _itemTextStyle,
  _imageStyle,
  _itemShadowContainer,
} from './ButtonList.style';
import RNBounceable from '@freakycoder/react-native-bounceable';
import Androw from 'react-native-androw';

import {IButtonList} from './models/Model';

type CustomViewStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;
interface IButtonListProps {
  buttonListData: Array<IButtonList>;
  contentContainerStyle?: CustomViewStyleProp;
  imageComponent?: CustomImageStyleProp;
  itemContainer?: CustomViewStyleProp;
  textDisable?: boolean;
  textStyle?: CustomTextStyleProp;
  width?: number;
  height?: number;
  imageWidth?: number;
  imageHeight?: number;
  initialSelectedItem?: number;
  selectedBackgroundColor?: string;
  onPress?: (item) => void;
  onChange?: (item) => void;
}

const ButtonList = (props: IButtonListProps) => {
  const {
    buttonListData,
    contentContainerStyle,
    imageComponent,
    itemContainer,
    textDisable,
    textStyle,
    width,
    height,
    imageWidth,
    imageHeight,
    initialSelectedItem,
    selectedBackgroundColor,
    onPress,
    onChange,
  } = props;

  const [selectedItem, setSelectedItem] = React.useState(initialSelectedItem);

  const renderImageComponent = (imageSource: any) => (
    <View style={imageComponent || styles.imageComponent}>
      <Image
        style={_imageStyle(imageWidth, imageHeight)}
        source={imageSource}
      />
    </View>
  );

  const renderTextComponent = (item: IButtonList) => (
    <Text style={_itemTextStyle(item.textColor || '#BF8B5A') || textStyle}>
      {item.label}
    </Text>
  );

  const renderItem = (item: IButtonList) => {
    let isActive: boolean;
    let backgroundColor: string = item.backgroundColor;
    if (selectedItem === item.id) {
      isActive = true;
      backgroundColor = selectedBackgroundColor || '#C7BEFF';
    }

    return (
      <Androw style={_itemShadowContainer(isActive)}>
        <RNBounceable
          onPress={() => {
            setSelectedItem(item.id);
            onPress && onPress(item);
            onChange && onChange(item);
          }}>
          <View
            style={
              itemContainer || _itemContainer(backgroundColor, width, height)
            }>
            {renderImageComponent(item.imageSource)}
            {!textDisable && renderTextComponent(item)}
          </View>
        </RNBounceable>
      </Androw>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={
          contentContainerStyle || styles.contentContainerStyle
        }
        data={buttonListData}
        renderItem={(item) => renderItem(item.item)}
        keyExtractor={(item: IButtonList, index: number) => item.id.toString()}
      />
    </SafeAreaView>
  );
};
ButtonList.defaultProps = {
  textDisable: false,
  width: 150,
  height: 150,
  imageWidth: 70,
  imageHeight: 70,
};
export default ButtonList;
