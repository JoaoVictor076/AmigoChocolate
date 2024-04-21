import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { StackTypes } from '../../routes/stack';
import UserService from '../../services/UserService/UserService';

const Login = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [usernameError, setUsernameError] = useState(false);
  const [userConsole, setUserConsole] = useState(' ');
  const [passConsole, setPassConsole] = useState(' ');

  const userService = new UserService();

  const navigation = useNavigation<StackTypes>();

  const handleNavegarCadastro = () => {
    navigation.navigate('Cadastro');
  };

  const handleNavegarEsqueceuSenha = () => {
    navigation.navigate('EsqueceuSenha');
  }

  const handleNavegarHome = () =>{
    if(validateForm()){
      navigation.navigate('Home');
    }
  }

  const handleLogin = async () => {

    if (!login) {
      setUsernameError(true);
      return;
    } else {
      setUsernameError(false);
    }

    const user = await userService.login(login, password);

    if (user) {
      alert('Usuário autenticado com sucesso ' + user.username);
      setLogin('');
      setPassword('');
    } else {
      alert('Usuário e/ou senha inválidos');
    }
  };

  const validateForm = () => {
    let regular = true

    if (login.length < 3) {
      setUserConsole('Usuário deve ter ao menos 3 caracteres')
      regular = false
    }

    if (password.length < 5) {
      setPassConsole('A senha deve ter pelo menos 5 caracteres')
      regular = false
    }

    return regular
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text><Image
    style={styles.imageStyle}
    source={require('../../../assets/splash.png')}
  />

      <TextInput
        style={[styles.input, usernameError && styles.errorInput]} // Aplicar estilo de erro se usernameError for true
        placeholder="Login"
        onChangeText={setLogin}
        value={login}
      />
      <Text style={styles.console}>{userConsole}</Text>

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <Text style={styles.console}>{passConsole}</Text>
      
      <TouchableOpacity onPress={handleNavegarHome} style={styles.button} activeOpacity={0.1}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNavegarCadastro} style={styles.button} activeOpacity={0.1}>
        <Text style={styles.buttonText}>Ir para cadastro</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNavegarEsqueceuSenha} style={styles.button} activeOpacity={0.1}>
        <Text style={styles.buttonText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8a2be2', // Fundo em um tom de caramelo claro
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', // Um azul escuro acinzentado para o título
    textAlign: 'center',
    marginTop: 20, // Aumente este valor conforme necessário para descer o texto
  },
  input: {
    width: '80%',
    minWidth: 200,
    maxWidth: 500,
    height: 50,
    borderColor: '#D3A46F', // Borda em tom de bronze claro
    backgroundColor: '#FFFAF2', // Fundo do input em um tom de marfim
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#5C3A21', // Texto em tom de marrom escuro
  },
  errorInput: {
    borderColor: '#D96C6C', // Borda em tom de vermelho desbotado para erro
  },
  button: {
    width: '80%',
    minWidth: 200,
    maxWidth: 500,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#6600CC', // Botão em tom de marrom-avermelhado
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#2D2926', // Sombra para dar profundidade
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  buttonText: {
    color: '#FFF7EB', // Texto do botão em marfim claro
    fontSize: 18,
    fontWeight: '600',
  },
  imageStyle: {
    width: 120, // Tamanho aumentado para que a imagem seja mais destacada
    height: 120, // Tamanho aumentado para que a imagem seja mais destacada
    borderRadius: 60, // Metade da largura/altura para manter a forma circular
    alignSelf: 'center',
    marginTop: 5, // Aumente esta margem para diminuir a proximidade com o texto "Login"
    marginBottom: 20, // Adicionado para dar espaço antes dos campos de entrada
  },

  console:{
    color: '#ff0000',
    marginBottom: 20,
    width: '80%',
    fontSize: 15,
  }
  
});


export default Login;