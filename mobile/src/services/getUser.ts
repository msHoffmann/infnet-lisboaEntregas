import firestore from '@react-native-firebase/firestore';
import {User} from '../entities/user';

export const getUser = async (userId: string): Promise<User> => {
  const userSnapshot = await firestore().collection('users').doc(userId).get();
  //   Linha acima: usamos no Native
  //   const userSnapshot = await getDoc(doc(db, 'users', userId));
  //   Linha acima: usamos no Web
  const userData = userSnapshot.data();
  if (!userSnapshot.exists || !userData) {
    throw new Error('User not found.');
  }
  const {name, email, phone} = userData;
  return {
    id: userId,
    name,
    email,
    phone,
  };
};
