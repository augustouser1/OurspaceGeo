import {View, Text, Image} from "react-native";
import {styles} from "./style";
import {useAuth} from "../../hook/auth";
import { ButtonInterface } from "../../components/button";
import { ComponentBackgroundTwo } from "../../components";
import { ComponentButtonInterface } from "../../components";
export function Home(){
    const {user, signOut} = useAuth()

    return(
        <ComponentBackgroundTwo>
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>{user?.user.name}</Text>
            </View>
           
            <View>
                <ComponentButtonInterface type='primary' title="Sair" 
                onPressI={async()=>await signOut()}>
                </ComponentButtonInterface>
            </View>
        </View>
        </ComponentBackgroundTwo>
    )
}