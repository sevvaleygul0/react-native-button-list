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
  itemContainer: ViewStyle;
}

export default StyleSheet.create<Style>({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 90,
    width: 90,
    borderRadius: 16,
  },
  imageComponent: {},
  itemContainer: {
    marginLeft: 4,
    marginRight: 4,
    borderRadius: 16,
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});
