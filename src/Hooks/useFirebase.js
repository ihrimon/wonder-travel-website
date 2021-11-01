import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Login with Google
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Login with github
    const signInUsingGithub = () => {
        setIsLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    // User logout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    };

    // Observation for user state change when login.
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
    }, [auth]);

    return {
        user,
        isLoading,
        logOut,
        signInUsingGoogle,
        signInUsingGithub
    }
};

export default useFirebase;