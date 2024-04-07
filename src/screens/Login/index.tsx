import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StackTypes } from '../../routes/stack';
import UserService   from '../../services/UserService/UserService';
import CustomButton from '../../Componentes/Button';
import { InputLogin } from '../../Componentes/InputLogin/style';
import PassWordInput from '../../Componentes/Password';
import { ContainerLogin } from './style';
import { TextInput } from 'react-native-gesture-handler';
import { InputPassword } from '../../Componentes/Password/style';
import { Button } from 'react-native';

const Login = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [usernameError, setUsernameError] = useState(false);
  
    const userService = new UserService();
    
    const navigation = useNavigation<StackTypes>();

    const handleLogin = async () => {
      const userId = 1;
      navigation.navigate('Home');
      alert(login);
      if (!login) {
        setUsernameError(true);
        return;
      } else {
        setUsernameError(false);
      }

      const isValid = await userService.validateUser(login, password);
      alert(isValid);
      if (isValid) {
        alert('Usuário autenticado com sucesso'); 
        //Alert.alert('Sucesso', 'Usuário autenticado com sucesso');
        setLogin('');
        setPassword('');
        navigation.navigate('Details', {  userId });

      } else {
        alert('Usuário e/ou senha inválidos');
        //Alert.alert('Erro', 'Usuário e/ou senha inválidos');
      }
    };
  
    return (
      <ContainerLogin>
        <TextInput  
          placeholder="Loginx"
          onChangeText={setLogin}
          value={login}
        />
        
        <InputPassword
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
        />
        <Button title='Entrar' onPress={handleLogin}></Button>
        
      </ContainerLogin>
    );
  };
  

export default Login;