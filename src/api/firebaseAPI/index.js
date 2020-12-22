import { FirebaseApp } from '../firebase/FireBaseConfig'

export const SignUpRequest = async (email, password) => {
    try {
        await FirebaseApp.auth()
            .createUserWithEmailAndPassword(email, password)
    } catch (error) {
    }
}