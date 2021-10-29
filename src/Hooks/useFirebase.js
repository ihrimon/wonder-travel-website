import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    // sign in process with google
    const signInWithGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    };

    // sign in process with github
    const signInWithGithub = () => {
        setIsLoading(true);
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    };

    // observation to user state change when signIn or signOut
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    return {
        user,
        error,
        isLoading,
        logOut,
        signInWithGoogle,
        signInWithGithub,
    }
};

export default useFirebase;