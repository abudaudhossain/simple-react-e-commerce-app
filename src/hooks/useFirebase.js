import initializeAuthentication from "../firebase/firebase.initializ";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    initializeAuthentication();

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)        
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
               setUser(user);
            } else {
                setUser({})
            }
        });
    }, []);

    const singOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
          }).catch((error) => {
            setError(error.message)
          });
    }


    return{
        signInWithGoogle,
        user,
        error,
        singOut
    }
}

export default useFirebase;