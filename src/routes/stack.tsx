import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import EsqueceuSenha from '../screens/EsqueciSenha';
import CriarGrupo from '../screens/CriarGrupo';
import ListaGrupos from '../screens/ListaGrupos';
import Convites from '../screens/Convites';
import ListaParticipantes from '../screens/ListarParticipantesGrupo';

const linking = {
    prefixes: ['http://localhost:8081/'], 
    config: {
        screens: {
            Convites: 'Convites/:groupId/:nome',
            ListaParticipantes: 'ListaParticipantes/:groupId',
        },
    },
};

const Stack = createNativeStackNavigator();

type StackNavigation = {
    Home : undefined;
    Login : undefined;
    Cadastro: undefined;
    EsqueceuSenha: undefined;
    TelaGrupos : undefined;
    CriarGrupo : undefined;
    ListaGrupos : undefined;
    Convites: { groupId: string; nome: string };
    ListaParticipantes: { groupId: string };
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>


export default function StackComponent(){
    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator>
                <Stack.Screen  name="Login" component={Login}   options={{headerShown: false }}  />
                <Stack.Screen  name="Cadastro" component={Cadastro}   options={{headerShown: false }}  />
                <Stack.Screen  name="EsqueceuSenha" component={EsqueceuSenha}   options={{headerShown: false }}  />
                <Stack.Screen  name="Home" component={Home} options={{
                    headerTintColor: '#fff',
                    headerStyle:{
                        backgroundColor: '#6600CC'
                    }
                    }}/>
                <Stack.Screen  name="CriarGrupo" component={CriarGrupo} />
                <Stack.Screen  name="ListaGrupos" component={ListaGrupos}options={{headerShown: false }} />
                <Stack.Screen  
                name="Convites" 
                component={Convites} 
                options={{headerShown: false }} 
                initialParams={{ groupId: '', nome: '' }} 
                />
                <Stack.Screen 
                name="ListaParticipantes" 
                component={ListaParticipantes} 
                options={{ headerShown: false }} 
                initialParams={{ groupId: ''}} 
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}