import React, {useState} from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Alert, Image} from 'react-native';
import {MaterialIcons, Entypo, Ionicons} from "@expo/vector-icons";
import {styles} from "./style"
import { LoginTypes } from '../../navigations/login.navigation';
import { ButtonInterface } from '../../components/button';
import { ComponentButtonInterface } from '../../components';
import {apiUser} from '../../services/data'
import { AxiosError } from 'axios';
import {useAuth} from '../../hook/auth';
import { ComponentBackgroundOne } from '../../components';



export interface IRegister{
    name?: string
    email?: string
    password?: string
}

interface IError {
    errors: {
        field: string, 
        message: string, 
        rule: string
    }[]
}

export function Register({navigation}: LoginTypes){
    const image = require('../../assets/Autscreen.png')
    const pessoa = require('../../assets/personicon.png')
    const carta = require('../../assets/carta.png')
    const cadeado = require('../../assets/cadeado.jpg')
    const [data, setData] = useState<IRegister>();
    const {setLoading} = useAuth();
    async function handleRegister(){
        if (data?.email && data.name && data.password){
            setLoading(true)
            try{
                console.log(data)
                const response = await apiUser.register(data)
                Alert.alert(`${response.data.name} cadastrado!!!`)
                navigation.navigate("Login")
            }catch(error){
                const err = error as AxiosError
                console.log(err)
                const msg = (err.response?.data as IError);
                Alert.alert(msg.errors.reduce((total, atual) => total + atual.message, ''))
            }
            setLoading(false)
        }else{
            Alert.alert("Preencha todos os campos!");
        }
    }
    function handleGoBack(){
        navigation.navigate('Login')
    }
    function handleChange(item: IRegister){
        setData({...data, ...item});
    }
    return(
        <ComponentBackgroundOne>
        <View style={styles.container}>
            <KeyboardAvoidingView>
            <Text style={styles.Text}> CADASTRE-SE! </Text>
            
                <View style={styles.formRow}>
                <Image source={pessoa}/>
                    <TextInput
                        placeholderTextColor={"gray"}
                        style={styles.input}
                        placeholder='Nome'
                        onChangeText={(i) => handleChange({name: i})}
                    />
                </View>
                <View style={styles.formRow}>
                <Image source={carta}/>
                    <TextInput
                    placeholderTextColor={"gray"}
                    style={styles.input}
                    placeholder='Email'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    onChangeText={(i) => handleChange({email: i})}
                    />
                </View>
                <View style={styles.formRow}>
                <Image source={cadeado} />
                    <TextInput
                    placeholderTextColor={"gray"}
                    style={styles.input}
                    placeholder='Senha'
                    autoCapitalize='none'
                    secureTextEntry= {true}
                    onChangeText={(i) => handleChange({password: i})}
                    />
                </View>
                <ComponentButtonInterface type='primary' title="SALVAR" onPressI={handleRegister}/>
                <ComponentButtonInterface type='secondary' title="VOLTAR" onPressI={handleGoBack}/>
            </KeyboardAvoidingView>

        </View>
        </ComponentBackgroundOne>
    )
}