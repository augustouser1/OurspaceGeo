import {useState} from "react";
import {MessageTypes} from "../../navigations/message.navigation"
import {Alert, KeyboardAvoidingView, Text, TextInput, View} from "react-native";
import { ButtonInterface } from "../../components/button";
import { IMessage } from "../../services/data/Message";
import { useAuth } from "../../hook/auth";
import { AxiosError } from "axios";
import { apiMessage } from "../../services/data";
import {styles} from "./styles";
import { ComponentButtonInterface } from "../../components";



export function CadMessage({navigation}: MessageTypes){
    const [data, setData] = useState<IMessage>()
    const {setLoading}= useAuth()
    function handleChange(item: IMessage){
        setData({...data, ...item});
    }
    async function handleCadMessage(){
        if(data?.title && data.message){
            setLoading(true)
            try{
                await apiMessage.store(data)
                Alert.alert("Mensagem cadastrada!")
                navigation.navigate("Message")
            }catch(error){
                const err = error as AxiosError
                console.log(err)
                const msg = err.response?.data === 'string' ? err.response.data: 'Erro desconhecido';
                Alert.alert(msg)
            }
            setLoading(false)
        }else{
            Alert.alert("Preencha todos os campos!");
        }
    }
    return(
        <View>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Cadastrar Mensagem</Text>
                <View style={styles.formRow}>
                    <TextInput
                        placeholderTextColor={"white"}
                        style={styles.input}
                        placeholder="Título"
                        onChangeText={(i)=> handleChange({title: i})}
                    />
                </View>
                <View style={styles.formRow}>
                    <TextInput
                        placeholderTextColor={"white"}
                        style={styles.input}
                        placeholder="Mensagem"
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(i) => handleChange({message: i})}
                    />
                </View>
                <ComponentButtonInterface type='primary' title="Enviar" onPressI={handleCadMessage}/>
                <ComponentButtonInterface type='secondary'title="Voltar" onPressI={()=> navigation.navigate("Message")}/>
            </KeyboardAvoidingView>
        </View>
    )
}