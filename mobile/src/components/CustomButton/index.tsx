import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {CustomText} from '../CustomText';

type Props = TouchableOpacityProps & {
  variant?: 'primary' | 'success';
  size?: 'md' | 'lg';
  block?: boolean;
  loading?: boolean;
};

export function CustomButton({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  loading = false,
  disabled = false,
  ...otherProps
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.base,
        block ? styles.block : {},
        styles[variant],
        styles[size],
        disabled ? styles[`disabled${variant}`] : {},
      ]}
      disabled={disabled}
      {...otherProps}>
      {loading && <ActivityIndicator color="#FFF" />}
      <CustomText style={[styles.textBase, styles[`text${size}`]]}>
        {children}
      </CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 100,
    // flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  textBase: {
    color: '#f8f4f4',
  },
  primary: {
    backgroundColor: '#003399',
  },
  disabledprimary: {
    backgroundColor: '#4478E1',
  },
  success: {
    backgroundColor: '#006600',
  },
  disabledsuccess: {
    backgroundColor: '#098F09',
  },
  md: {
    paddingHorizontal: 50,
    paddingVertical: 9,
  },
  textmd: {
    fontSize: 16,
    lineHeight: 20,
  },
  lg: {
    paddingHorizontal: 90,
    paddingVertical: 13,
  },
  textlg: {
    fontSize: 18,
    lineHeight: 22,
  },
  block: {
    width: '100%',
  },
});
