import { ref, firebaseAuth } from './Firebase'

const auth = (email, pw) => {
    return firebaseAuth().createUserWithEmailAndPassword(email, pw).then(saveUser)
}

const logout = () => {
    return firebaseAuth().signOut()
}

const login = (email, pw) => {
    return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

const resetPassword = (email) => {
    return firebaseAuth().sendPasswordResetEmail(email)
}

const saveUser = (user) => {
    return ref.child(`users/${user.uid}/info`).set({
        email: user.email,
        uid: user.uid
    }).then(() => user)
}

export const root_auth = {
    auth,
    logout,
    login,
    resetPassword,
    saveUser
};