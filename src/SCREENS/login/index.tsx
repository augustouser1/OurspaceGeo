import React, {useState} from 'react';
import {KeyboardAvoidingView, View, Text, TextInput, Alert, Image} from 'react-native';
import {MaterialIcons, Entypo} from "@expo/vector-icons";
import { styles } from './style';
import {ButtonInterface} from "../../components/button"
import {LoginTypes} from "../../navigations/login.navigation"
import {useAuth} from '../../hook/auth';
import {AxiosError} from 'axios';
import { ComponentBackgroundOne } from '../../components';
import { ComponentButtonInterface } from '../../components';

export interface IAuthenticate{
    email?: string;
    password?: string;
}
export function Login({navigation}: LoginTypes){
    const image = require('../../assets/Autscreen.png')
    const logo  = require('../../assets/image2.png')
    const carta = require('../../assets/carta.png')
    const cadeado = require('../../assets/cadeado.jpg')
    const [data, setData] = useState<IAuthenticate>();
    const {signIn, setLoading} = useAuth()
    async function handleSignIn(){
        if (data?.email && data.password){
            setLoading(true)
            try{
                await signIn(data)
            }catch(error){
                const err = error as AxiosError
                const msg = err.response?.data as string
                Alert.alert(msg)
            }
            setLoading(false)
        }else{
            Alert.alert("Preencha todos os campos!!!!");
        }
    }
    function handleRegister(){
        navigation.navigate("Register")
    }
    function handleChange(item: IAuthenticate){
        setData({...data, ...item});
    }
    return(
     <ComponentBackgroundOne>
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <View>
                <Text style={styles.title}>Bem-vindo ao Ourspace</Text>
            <Image source={logo} style={styles.logo}>
               </Image>
                </View>
                <View style={styles.formRow}>
                <Image source={carta} >
                </Image>
                    <TextInput placeholderTextColor={"gray"}
                    style={styles.input}
                    placeholder='Email'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    onChangeText={(i) => handleChange({email:i})}>             
                    </TextInput>
                </View>
                <View style={styles.formRow}>
                <Image source={cadeado} >
                </Image>
                    <TextInput
                        placeholderTextColor={"gray"}
                        style={styles.input}
                        placeholder='Senha'
                        secureTextEntry={true}
                        autoCapitalize='none'
                        onChangeText={(i) => handleChange({password: i})}
                    />
                </View>
                <ComponentButtonInterface type ='primary' title='ENTRAR' onPressI={handleSignIn}/>
                <ComponentButtonInterface type ='secondary' title='CADASTRAR-SE ' onPressI={handleRegister}/>
            </KeyboardAvoidingView>
        </View>
        </ComponentBackgroundOne>
    );
}