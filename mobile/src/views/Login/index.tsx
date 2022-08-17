import {useFormik} from 'formik';
import React from 'react';
import {Container} from '../../components/Container';
import {CustomButton} from '../../components/CustomButton';
import {FormField} from '../../components/FormField';
import * as yup from 'yup';
import {loginUser} from '../../services/loginUser';
import Toast from 'react-native-toast-message';
import {isNativeFirebaseAuthError} from '../../utils/isNativeFirebaseAuthError';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes';
import {updateUser} from '../../store/slices/userSlice';
import {useDispatch} from 'react-redux';

type FormValues = {
  email: string;
  password: string;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginView({navigation}: Props) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required('Informe o seu E-mail.')
        .email('Informe um E-mail válido.'),
      password: yup.string().required('Informe a Senha.'),
    }),
    onSubmit: async values => {
      try {
        const user = await loginUser(values);
        dispatch(updateUser(user));
        navigation.navigate('Orders');
      } catch (error) {
        const errorMsg =
          isNativeFirebaseAuthError(error) &&
          (error.code === 'auth/user-not-found' ||
            error.code === 'auth/wrong-password')
            ? 'Login ou senha inválidos.'
            : 'Falha ao fazer login. Tente novamente.';
        Toast.show({
          type: 'error',
          text1: errorMsg,
        });
      }
    },
  });
  const getFieldProps = (fieldName: keyof FormValues) => ({
    // ou (fieldName: 'email' | 'password')
    value: formik.values[fieldName],
    onChangeText: formik.handleChange(fieldName),
    onBlur: formik.handleBlur(fieldName),
    // onBlur = usuário sai do input
    error: formik.errors[fieldName],
    isInvalid: formik.touched[fieldName] && !!formik.errors[fieldName],
    isValid: formik.touched[fieldName] && !formik.errors[fieldName],
  });
  return (
    <Container padding>
      <FormField
        {...getFieldProps('email')}
        label="E-mail"
        placeholder="Informe seu E-mail"
        keyboardType="email-address"
      />
      <FormField
        {...getFieldProps('password')}
        label="Senha"
        placeholder="Informe sua Senha"
        secureTextEntry
      />
      <CustomButton
        onPress={formik.handleSubmit}
        disabled={formik.isValidating || formik.isSubmitting}
        loading={formik.isValidating || formik.isSubmitting}>
        Entrar
      </CustomButton>
    </Container>
  );
}

// Formik: gerencia estado do formulário
// Yup: responsável pelas validações
