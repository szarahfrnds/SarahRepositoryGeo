import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import logo from '../../assets/findGo.png'


export default function Login({ navigation, setIsSignedIn }) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(null);

    useEffect(() => {
        if (token) {
            AsyncStorage.setItem('token', token)
                .then(() => {
                    console.log("Token SignIn: ", token);
                    console.log("Token sucesso!");
                    setIsSignedIn(true); 
                })
                .catch((erro) => {
                    console.error("Erro: ", erro);
                });
        }
    }, [token]);

    const fetchToken = async () => {
        try {
            const response = await axios.post(
                'https://saraa123.pythonanywhere.com/api/token/',
                {
                    username: user,
                    password: password
                }
            );
            console.log(response.data.access);
            setToken(response.data.access);
        } catch (erro) {
            console.error("Deu Erro:", erro);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View>
                    <Text style={styles.title}>FindGo</Text>
                </View>
                <Text style={styles.textUser} >User</Text>
                <TextInput
                    placeholder=''
                    onChangeText={setUser}
                    value={user}
                    style={styles.caixa}
                />
                <Text style={styles.textUser} >Password</Text>
                <TextInput
                    placeholder=''
                    onChangeText={setPassword}
                    value={password}
                    style={styles.caixa}
                    secureTextEntry={true}
                />
                <Pressable
                    style={styles.btnOk}
                    onPress={fetchToken}
                >
                    <Text style={{ fontSize: 20, color: 'black' }}>Sign In</Text>
                </Pressable>
                 
            </View>
        </View>
    );
}
