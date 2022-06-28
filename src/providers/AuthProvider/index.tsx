import React, {FC, createContext, useState, useMemo, useEffect} from 'react';
import {Alert} from "react-native";
import {addDoc, collection} from 'firebase/firestore';
import {onAuthStateChanged, User} from "firebase/auth";
import {IContext} from './types';
import {auth, db, login, logout, register} from '../../firebase';

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoadingInitial, setIsLoadingInitial] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const registerHandler = async (email: string, password: string, name: string = 'Нет имени') => {
        setIsLoading(true);
        try {
            const {user} = await register(email, password);

            await addDoc(collection(db, 'users'), {
                _id: user.uid,
                displayName: name
            });
        } catch (error: any) {
            Alert.alert('Ошибка регистрации');
        } finally {
            setIsLoading(false);
        }
    }

    const loginHandler = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            await login(email, password);
        } catch (error: any) {
            Alert.alert('Ошибка авторизации');
        } finally {
            setIsLoading(false);
        }
    }

    const logoutHandler = async () => {
        setIsLoading(true);
        try {
            await logout();
        } catch (error: any) {
            Alert.alert('Ошибка выхода');
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => onAuthStateChanged(auth, user => {
        setUser(user || null);
        setIsLoadingInitial(false);
    }), []);

    const value = useMemo(() => ({
        user,
        isLoading,
        login: loginHandler,
        logout: logoutHandler,
        register: registerHandler
    }), [user, isLoading]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
