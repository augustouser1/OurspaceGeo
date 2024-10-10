import { TouchableOpacityProps, TouchableOpacity, Text } from "react-native";
import {styles} from './style'

export interface Binterface extends TouchableOpacityProps{
    onPressI: () => void
    title: string
}

export function ButtonInterface({ onPressI, title, ...rest }: Binterface){
    return(
        <TouchableOpacity style={styles.bPrimary}
        onPress={onPressI}
        {...rest}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

