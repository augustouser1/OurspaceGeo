import {View, Text, FlatList, TouchableOpacity} from "react-native";
import {styles} from "./style";
import {useEffect, useState} from "react";
import {apiMessage} from "../../services/data";
import {IResponseMessage} from "../../services/data/Message";
import {useAuth} from "../../hook/auth";
import { AntDesign } from "@expo/vector-icons";
import { MessageTypes } from "../../navigations/message.navigation";


export function Mensagem({navigation}: MessageTypes){
    const [message, setMessage] = useState<IResponseMessage[]>([])
    const {setLoading} = useAuth()
    useEffect(() =>{
        setLoading(true)
        async function loadMessage(){
            const response = await apiMessage.index()
            setMessage(response.data)
        }
        setLoading(false)
        navigation.addListener("focus", ()=> loadMessage())
    }, [])

    interface itemMessage{
        item: IResponseMessage
    }

    const renderItem = (({item}: itemMessage) => {
        return (
            <View style={styles.item}>
                <Text style={styles.itemText}>Nome: {item.user.name}</Text>
                <Text style={styles.itemText}>Título: {item.title}</Text>
                <Text style={styles.itemText}>Mensagem: {item.message}</Text>
            </View>
        )
    })

    return (
        <View style={styles.container}>
            {
                message.length > 0 && (
                    <FlatList
                        data={message}
                        renderItem={renderItem}
                        keyExtractor={(item)=> String(item.id)}
                    />
                )
            }
            <TouchableOpacity style={styles.botao} 
            onPress={() => navigation.navigate("CadMessage")}>
                <AntDesign name="pluscircle" size={48} color="#AD00FF"/>
            </TouchableOpacity>
        </View>
    )
}