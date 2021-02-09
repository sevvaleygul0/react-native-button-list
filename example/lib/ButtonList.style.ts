import {
  ViewStyle,
  ImageStyle,
  TextStyle,
  StyleSheet,
  Dimensions,
} from 'react-native';
const {width: ScreenWidth, height: ScreenHeight} = Dimensions.get('window');

interface Style {
  contentContainerStyle: ViewStyle;
  imageComponent: ViewStyle;
  itemShadowContainer: ViewStyle;
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

export default StyleSheet.create<Style>({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageComponent: {},
  itemShadowContainer: {
    shadowColor: '#AAAAAA',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
