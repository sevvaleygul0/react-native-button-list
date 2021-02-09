import {
  ViewStyle,
  ImageStyle,
  TextStyle,
  StyleSheet,
  Dimensions,
} from 'react-native';
const {width: ScreenWidth, height: ScreenHeight} = Dimensions.get('window');

interface Style {
  imageStyle: ImageStyle;
  contentContainerStyle: ViewStyle;
  imageComponent: ViewStyle;
  itemShadowContainer: ViewStyle;
  itemTextStyle: ViewStyle;
}

export const _itemContainer = (
  backgroundColor: string,
  isActive: string,
): ViewStyle => ({
  backgroundColor,
  marginLeft: 8,
  marginRight: 8,
  borderRadius: 16,
  height: 150,
  width: 150,
  justifyContent: 'center',
  alignItems: 'center',
});

export default StyleSheet.create<Style>({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 70,
    width: 70,
    borderRadius: 16,
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
  itemTextStyle: {
    marginTop: 8,
    color: '#BF8B5A',
    fontSize: 13,
  },
});
