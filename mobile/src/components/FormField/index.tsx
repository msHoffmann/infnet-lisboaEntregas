import {TextInput, View, TextInputProps, StyleSheet} from 'react-native';
import {CustomText} from '../CustomText';
import React from 'react';

type Props = {
  label: string;
  error?: string;
  isInvalid?: boolean;
  isValid?: boolean;
} & TextInputProps;

export function FormField({
  label,
  error,
  isValid = false,
  isInvalid = false,
  ...otherProps
}: Props) {
  return (
    <View style={styles.wrap}>
      <CustomText style={styles.label}>{label}</CustomText>
      <TextInput
        style={[
          styles.input,
          isInvalid ? styles.invalidField : {},
          isValid ? styles.validField : {},
        ]}
        {...otherProps}
      />
      {isInvalid && error && (
        <CustomText style={styles.errorText}>{error}</CustomText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: 16,
  },
  label: {
    color: '#333',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderColor: '#dcdbdb',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 2,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  invalidField: {
    borderColor: '#FF0000',
  },
  validField: {
    borderColor: '#006600',
  },
  errorText: {
    color: '#FF0000',
    marginTop: 5,
  },
});
