import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;

export {
  horizontalScale,
  guidelineBaseWidth,
  guidelineBaseHeight,
  scale,
  verticalScale,
  moderateScale,
};
