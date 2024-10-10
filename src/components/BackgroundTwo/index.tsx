import { View, ImageBackground } from 'react-native';
import { styles } from './styles'

export interface IBackground{
    children: React.ReactNode
}

export function BackgroundTwo({children}:IBackground){
    const background = require('../../assets/Home.png')
    return(
        <ImageBackground style={styles.container} source={background}>
            <View style={styles.background}>
                {children}
            </View>
        </ImageBackground>            
    );
}