import React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
 
const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#AC2B37" barStyle="light-content" />
            <Text style={styles.text}>Все чаты: </Text>
            <Text style={styles.chats} onPress={() => navigation.navigate('Chat')}>Чат</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 40
    },
    chats: {
        fontSize: 30
    }
});

export default Home;