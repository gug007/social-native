import {StyleSheet} from 'react-native';

const font = {
  weights: {
    light: 300,
    regular: 400,
    text: 400,
    medium: 500,
    semibold: 600,
  },
};

const primaryText = '#090d19';

const secondaryText = '#5E667E';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body1: {
    // fontWeight: font.weights.text,
    fontSize: 15,
    // lineHeight: 1.6,
  },
  body2: {
    // fontWeight: font.weights.text,
    fontSize: 14,
    // lineHeight: 1.5,
  },
  h1: {
    // fontWeight: font.weights.light,
    fontSize: 32,
    letterSpacing: -0.8,
  },
  h2: {
    // fontWeight: font.weights.text,
    fontSize: 22,
    letterSpacing: -0.2,
  },
  h3: {
    // fontWeight: font.weights.text,
    fontSize: 18,
    lineHeight: 24,
  },
  h4: {
    // fontWeight: font.weights.semibold,
    fontSize: 12,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: primaryText,
  },
  caption: {
    // fontWeight: font.weights.text,
    fontSize: 12,
    lineHeight: 1,
  },
  primaryText: {
    color: primaryText,
  },
  secondaryText: {
    color: secondaryText,
  },
});
