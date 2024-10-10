import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoginNavigation} from "./login.navigation";
import {useAuth} from "../hook/auth";
import { DrawerNavigation } from './drawer.navigation';
import { Loading } from '../components/loading';

export function Navigation(){
    const{user, loading} = useAuth()
    if(loading){
        return <Loading></Loading>
    }
    return(
        <NavigationContainer>
            {user?.token ? <DrawerNavigation/>: <LoginNavigation/>}
        </NavigationContainer>
    )
}
