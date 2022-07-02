import { doc, getDoc } from "firebase/firestore"
import { db } from "./firebase";
import { User } from "../Components/entities/user";

export const getUser = async (userId: string): Promise<User> => {
    const userSnapshot = await getDoc(doc(db, 'users', userId))
    if (!userSnapshot.exists()) {
        throw new Error('User not found.')
    }
    const {name, email, phone} = userSnapshot.data()
    return {
        id: userId,
        name,
        email,
        phone
    }
}