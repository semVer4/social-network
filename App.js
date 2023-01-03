import React, { useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
 
import Chat from './screens/Chat';
import Login from './screens/Login';
import Signup from './screens/Signup';

const Stack = createStackNavigator();
const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return (
        <AuthenticatedUserContext.Provider value={{user, setUser}}>
            {children}
        </AuthenticatedUserContext.Provider>
    );
}

function ChatStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
    )
}

function RootNavigator() {
    return (
        <NavigationContainer>
            <ChatStack />
        </NavigationContainer>
    );
}

export default function App() {
    return <RootNavigator />
}