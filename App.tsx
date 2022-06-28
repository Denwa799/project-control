import React from 'react';
import {AppNavigation} from './src/navigation';
import {AuthProvider} from './src/providers/AuthProvider';

export default function App() {
    return (
        <AuthProvider>
            <AppNavigation/>
        </AuthProvider>
    );
}