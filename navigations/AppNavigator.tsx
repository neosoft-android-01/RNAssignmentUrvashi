import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigation, AppNavigation } from './AppNavigations';
import { useSelector } from 'react-redux';

const AppNavigator= (props: any)=> {
    const isLogedIn:Boolean= useSelector((state:any) => state.auth.isLoggedIn);
    console.log(`LOGGEDIN ${isLogedIn}`);
    
    return(
        <NavigationContainer>
            {
                isLogedIn ? <AppNavigation/> : <AuthNavigation/>
            }
        </NavigationContainer>
    );
}

export default AppNavigator;