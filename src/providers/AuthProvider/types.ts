import { User } from "firebase/auth";

export interface IContext {
    user: User | null;
    isLoading: boolean;
    register: (email: string, password: string, name: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}