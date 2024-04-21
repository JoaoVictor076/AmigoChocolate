import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StackTypes } from '/ProjetoVSCode/AmigoChocolate/AmigoChocolate/src/routes/stack';
import UserService   from '/ProjetoVSCode/AmigoChocolate/AmigoChocolate/src/services/UserService/UserService';
import CustomButton from '/ProjetoVSCode/AmigoChocolate/AmigoChocolate/src/Componentes/Button';
import { InputLogin } from '/ProjetoVSCode/AmigoChocolate/AmigoChocolate/src/Componentes/InputLogin/style';
import PassWordInput from '/ProjetoVSCode/AmigoChocolate/AmigoChocolate/src/Componentes/Password';
import { ContainerLogin } from './style';

const Login = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    //const [usernameError, setUsernameError] = useState(false);
  
    const userService = new UserService();
    
    const navigation = useNavigation<StackTypes>();
    

    const handleLogin = async () => {
      const userId = 1;
      navigation.navigate('Home');
      alert(login);
      if (!login) {
        //setUsernameError(true);
        return;
      } else {
        //setUsernameError(false);
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
        <InputLogin  
          placeholder="Loginx"
          onChangeText={setLogin}
          value={login}
        />
        
        <PassWordInput
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
        />
        <CustomButton title='Entrar' onPress={handleLogin}></CustomButton>
        
      </ContainerLogin>

      
    );
  };
  

export default Login;