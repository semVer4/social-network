import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { Alert } from 'react-native';
import { View, StyleSheet, StatusBar, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';

function Signup({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onHandleSignup = () => {
        if (email !== '' && password !== '') {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => console.log('Успешная регистрация!'))
                .catch((err) => Alert.alert('Ошибка входа', err.message));
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#AC2B37' barStyle="light-content" />
            <View style={styles.whiteSheet}>
                <SafeAreaView style={styles.form}>
                    <Text style={styles.title}>Регистрация</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Введите email'
                        autoCapitalize='none'
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        autoFocus={true}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    /> 
                    <TextInput 
                        style={styles.input}
                        placeholder='Введите пароль'
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={true}
                        textContentType='password'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    /> 

                    <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
                        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#AC2B37'
    },
    whiteSheet: {
        width: '100%',
        height: '75%',
        position: 'absolute',
        paddingTop: 50,
        bottom: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60
    },
    form: {
        justifyContent: 'center',
        marginHorizontal: 30
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#AC2B37',
        alignSelf: 'center',
        paddingBottom: 24
    },
    input: {
        backgroundColor: '#F3F5F9',
        height: 58,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12
    },
    button: {
        backgroundColor: '#AC2B37',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    }
});

export default Signup;