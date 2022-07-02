import { signInWithEmailAndPassword } from "firebase/auth"
import { User } from "../Components/entities/user"
import { auth } from "./firebase"
import { getUser } from "./getUser"

type CredentialsInput = {
  email: string
  password: string
}

export const loginUser = async ({ email, password }: CredentialsInput): Promise<User> => {
  const result = await signInWithEmailAndPassword(auth, email, password)
  return getUser(result.user.uid)
}