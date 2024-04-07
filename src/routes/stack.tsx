import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Details from '../screens/Details';
import { RouteProp } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

type StackNavigation = {
    Home : undefined;
    Login : undefined;
    Details: { userId : number | undefined};
}

export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Details: { userId: number};
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export type StackNavigationProp<ScreenName extends keyof RootStackParamList> = NativeStackNavigationProp<RootStackParamList, ScreenName>;
export type StackRouteProp<ScreenName extends keyof RootStackParamList> = RouteProp<RootStackParamList, ScreenName>;

export default function StackComponent(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen  name="Home" component={Home} />
                <Stack.Screen  name="Login" component={Login}   options={{headerShown: false }}  />
            </Stack.Navigator>
        </NavigationContainer>

    );
}