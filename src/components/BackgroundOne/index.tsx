import { View, ImageBackground } from 'react-native';
import { styles } from './styles'

export interface IBackground{
    children: React.ReactNode
}

export function BackgroundOne({children}:IBackground){
    const background = require('../../assets/Autscreen.png')
    return(
        <ImageBackground style={styles.container} source={background}>
            <View style={styles.background}>
                {children}
            </View>
        </ImageBackground>            
    );
}