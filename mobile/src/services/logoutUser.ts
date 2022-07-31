import auth from '@react-native-firebase/auth';

export const logoutUser = async () => {
  await auth().signOut();
  // Linha acima: usamos no Native
  // await signOut(auth)
  // Linha acima: usamos no Web
};
