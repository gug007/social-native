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
    fontSize: 16,
    color: primaryText,
  },
  body2: {
    fontSize: 15,
    color: primaryText,
  },
  h1: {
    fontSize: 32,
    color: primaryText,
  },
  h2: {
    fontSize: 22,
    color: primaryText,
  },
  h3: {
    fontSize: 18,
    lineHeight: 24,
    color: primaryText,
  },
  h4: {
    fontSize: 12,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: primaryText,
  },
  caption: {
    fontSize: 12,
    color: primaryText,
  },
  tiny: {
    fontSize: 10,
    color: primaryText,
  },
  primaryText: {
    color: primaryText,
  },
  secondaryText: {
    color: secondaryText,
  },
});
