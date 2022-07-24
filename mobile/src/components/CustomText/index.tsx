import {Text, StyleSheet, TextProps} from 'react-native';
import React from 'react';

type Props = TextProps & {
  bold?: boolean;
};

export function CustomText({style, bold = false, ...props}: Props) {
  return (
    <Text style={[styles.text, bold ? styles.bold : {}, style]} {...props} />
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'FiraSansExtraCondensed-Black',
  },
  bold: {
    fontFamily: 'FiraSansExtraCondensed-Bold',
  },
});
