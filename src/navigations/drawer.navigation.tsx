import {createDrawerNavigator, DrawerNavigationProp} from '@react-navigation/drawer'
import {Ionicons} from "@expo/vector-icons";
import { TabNavigation } from './tab.navigation';
import { Mensagem } from '../SCREENS/mensagem';
import {Camera} from '../SCREENS/Camera';
import { Home } from '../SCREENS/Homero';
import { LocationMap } from '../SCREENS/LocationMap';
import { Imagens } from '../SCREENS/Imagens';
import { LocationMapOrDest } from '../SCREENS/LocationMapOrDest';
import { ScreenQrCode } from '../SCREENS/';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';

type DrawerParamList = {
    Home: undefined
    Mensagem: undefined
    Camera: undefined
    Album: undefined
    QrCode: undefined
    Location: undefined
    MapOrDest: undefined
}

type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Home'>
export type DrawerTypes = {
    navigation : DrawerScreenNavigationProp
}
type DrawerScreenNavigationProp2 = DrawerNavigationProp<DrawerParamList, 'Mensagem'>
export type DrawerTypes2 = {
    navigation : DrawerScreenNavigationProp
}
type DrawerScreenNavigationProp3 = DrawerNavigationProp<DrawerParamList, 'Camera'>
export type DrawerTypes3 = {
    navigation : DrawerScreenNavigationProp
}
type DrawerScreenNavigationProp4 = DrawerNavigationProp<DrawerParamList, 'Album'>
export type DrawerTypes4 = {
    navigation : DrawerScreenNavigationProp
}
type DrawerScreenNavigationProp5 = DrawerNavigationProp<DrawerParamList, 'QrCode'>
export type DrawerTypes5 = {
    navigation : DrawerScreenNavigationProp
}
type DrawerScreenNavigationProp6 = DrawerNavigationProp<DrawerParamList, 'Location'>
export type DrawerTypes6 = {
    navigation : DrawerScreenNavigationProp
}
type DrawerScreenNavigationProp7 = DrawerNavigationProp<DrawerParamList, 'MapOrDest'>
export type DrawerTypes7 = {
    navigation : DrawerScreenNavigationProp
}




export function DrawerNavigation(){
    const Drawer = createDrawerNavigator<DrawerParamList>()
    return(
        <Drawer.Navigator screenOptions={{
            headerStyle: {backgroundColor: "#8205CE"},
            headerTintColor: "white",
            drawerStyle:{
                backgroundColor: "#8205CE",
            },
            drawerActiveTintColor: "white",
            drawerInactiveTintColor: "white"
        }}>
            <Drawer.Screen name='Home' component={Home}
                options={{
                    drawerLabel: 'Home',
                    headerTitle: "Home",
                    drawerIcon:()=>(
                        <FontAwesome5 name="house-user" size={24} color="white" />
                    ),  
                }}

            />
             <Drawer.Screen name='Mensagem' component={Mensagem}
                options={{
                    drawerLabel: 'Mensagem',
                    headerTitle: "Mensagem",
                    drawerIcon:()=>(
                        <Entypo name="new-message" size={24} color="white" />
                    ),  
                }}
            />
            <Drawer.Screen name='Camera' component={Camera}
               options={{
                 drawerIcon: () => (
                   <Ionicons name="camera" size={24} color="white" />
                 ),
               }}
              />
               <Drawer.Screen name='Album' component={Imagens}
               options={{
                 drawerIcon: () => (
                   <Ionicons name="albums" size={24} color="white" />
                 ),
               }}
              />
               <Drawer.Screen name='QrCode' component={ScreenQrCode}
               options={{
                 drawerIcon: () => (
                   <Ionicons name="qr-code" size={24} color="white" />
                 ),
               }}
              />
               <Drawer.Screen name='Location' component={LocationMap}
                options={{
            
                    drawerIcon:()=>(
                        <FontAwesome5 name="map-marked-alt" size={24} color="white" />
                    ),  
                }}
            />
                 <Drawer.Screen name='MapOrDest' component={LocationMapOrDest}
                options={{
            
                    drawerIcon:()=>(
                        <FontAwesome5 name="map-marked-alt" size={24} color="white" />
                    ),  
                }}
            />
           
           

        </Drawer.Navigator>
    )
}
