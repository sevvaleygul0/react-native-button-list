import {
  ViewStyle,
  ImageStyle,
  TextStyle,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
const {width: ScreenWidth, height: ScreenHeight} = Dimensions.get('window');

interface Style {
  contentContainerStyle: ViewStyle;
  imageComponent: ViewStyle;
}

export const _itemContainer = (
  backgroundColor: string,
  width: number,
  height: number,
): ViewStyle => ({
  backgroundColor,
  marginLeft: 8,
  marginRight: 8,
  borderRadius: 16,
  height,
  width,
  justifyContent: 'center',
  alignItems: 'center',
});

export const _itemTextStyle = (color: string): TextStyle => ({
  marginTop: 8,
  color,
  fontSize: 13,
});

export const _imageStyle = (width: number, height: number): ImageStyle => ({
  height,
  width,
  borderRadius: 16,
});

export const _itemShadowContainer = (isActive: boolean): ViewStyle => ({
  shadowColor: isActive ? '#E4E0FF' : '#AAAAAA',
  shadowOffset: {
    width: 3,
    height: 5,
  },
  shadowOpacity: isActive ? 0.9 : 0.2,
  shadowRadius: 4,
});

export default StyleSheet.create<Style>({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageComponent: {},
});
