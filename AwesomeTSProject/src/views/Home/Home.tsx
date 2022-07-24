import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import bg from '../assets/img/lisboa-entregas-bg-mobile.jpg';
import Logo from '../assets/img/teste.svg';
import {CustomText} from '../../components/CustomText';
import {CustomButton} from '../../components/CustomButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeView({navigation}: Props) {
  // const navigation = useNavigation();
  const handlePressLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <ImageBackground source={bg} style={styles.background}>
      <SafeAreaView style={styles.view}>
        <Logo width={70} height={70} />
        <CustomText style={styles.title}>
          Pequenas e Grandes Mudanças
        </CustomText>
        <CustomButton variant="primary" size="md" onPress={handlePressLogin}>
          Login
        </CustomButton>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  view: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    flex: 1,
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    color: '#060000',
    textShadowColor: 'rgb(246, 241, 241)',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 2,
  },
});

// SafeAreaView para Iphones = para colocar o contéudo e não ficar por cima dos butões do celular

// Copiado do Figma - > sintaxe do CSS precisa ir para sintaxe do React Native:
// text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.25);
// Todo texto tem que estar dentro do componente TEXT
