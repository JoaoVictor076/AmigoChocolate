import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { StackTypes } from '../../routes/stack';
import UserService from '../../services/UserService/UserService';
import Login from '../Login';

const Cadastro = () => {
  const [email, setEmail] = useState<string>('');
  const [nome, setNome] = useState<string>('');
  const [sobrenome, setSobrenome] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [usernameError, setUsernameError] = useState(false);
  const [passConsole, setPassConsole] = useState<string>(' ')
  const [emailConsole, setEmailConsole] = useState<string>(' ')
  const [sobrenomeConsole, setSobrenomeConsole] = useState<string>(' ')
  const [nomeConsole, setNomeConsole] = useState<string>(' ')

  const userService = new UserService();

  const navigation = useNavigation<StackTypes>();

  const handleNavegarLogin = () => {
    navigation.navigate('Login');
  };

  const handleLogin = async () => {
    if(!validateForm()){
      return false
    }
    
    navigation.navigate('Login');
    /*const user = await userService.addUser({
      email,
      firstName: nome,
      lastName: sobrenome,
      password,
      username: '',
      
    });

    if (user) {
      alert('Usuário autenticado com sucesso ' + nome);
      setEmail('');
      setPassword('');
      setNome('');
      setSobrenome('');
    } else {
    };
    */
  }

  
  const validateForm = () => {
    let regular = true

    const regex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //return regex.test(email);
    if(!regex.test(email)){
      setEmailConsole('Email inválido')
      regular = false
    }
    if (password.length < 8) {
      setPassConsole('A senha deve ter pelo menos 8 caracteres')
      regular = false
    }
    if (sobrenome.length == 0){
      setSobrenomeConsole('O sobrenome não pode ser nulo')
      regular = false
    }
    if (nome.length <= 3){
      setNomeConsole('O Nome não pode ser nulo')
      regular = false
    }

    if(regular){
      setNome('')
      setNomeConsole(' ')
      setSobrenome('')
      setSobrenomeConsole(' ')
      setEmail('')
      setEmailConsole(' ')
      setPassword('')
      setPassConsole(' ')
    }
    
    return regular
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <Image
    style={styles.imageStyle}
    source={require('../../../assets/chocopng.png')}/>


      <TextInput
        style={[styles.input, usernameError && styles.errorInput]}
        placeholder="Nome"
        onChangeText={setNome}
        value={nome}
      />
      <Text style={styles.console}>{nomeConsole}</Text>
      <TextInput
        style={[styles.input, usernameError && styles.errorInput]}
        placeholder="Sobrenome"
        onChangeText={setSobrenome}
        value={sobrenome}
      />
      <Text style={styles.console}>{sobrenomeConsole}</Text>
      <TextInput
        style={[styles.input, usernameError && styles.errorInput]}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <Text style={styles.console}>{emailConsole}</Text>

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <Text style={styles.console}>{passConsole}</Text>

      <TouchableOpacity onPress={handleLogin} style={styles.button} activeOpacity={0.1}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNavegarLogin} style={styles.button} activeOpacity={0.1}>
        <Text style={styles.buttonText}>Ir para login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8a2be2', 
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
    height: 50,
    borderColor: '#D3A46F', 
    backgroundColor: '#FFFAF2', 
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#5C3A21', 
  },
  errorInput: {
    borderColor: '#D96C6C', 
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 20,
    backgroundColor: '#6600CC', 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#2D2926', 
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  buttonText: {
    color: '#FFF7EB', 
    fontSize: 18,
    fontWeight: '600',
  },
  console:{
    color: '#ff0000',
    marginTop: -16,
    marginBottom: 10,
    width: '80%',
    fontSize: 14,
  },
  imageStyle: {
    width: 120, // Tamanho aumentado para que a imagem seja mais destacada
    height: 120, // Tamanho aumentado para que a imagem seja mais destacada
    borderRadius: 60, // Metade da largura/altura para manter a forma circular
    alignSelf: 'center',
    marginTop: 5, // Aumente esta margem para diminuir a proximidade com o texto "Login"
    marginBottom: 20, // Adicionado para dar espaço antes dos campos de entrada
  },


});

export default Cadastro;