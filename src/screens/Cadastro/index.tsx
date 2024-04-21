import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StackTypes } from '/ProjetoVSCode/AmigoChocolate/AmigoChocolate/src/routes/stack';
import UserService   from '/ProjetoVSCode/AmigoChocolate/AmigoChocolate/src/services/UserService/UserService';
import CustomButton from '/ProjetoVSCode/AmigoChocolate/AmigoChocolate/src/Componentes/Button';
import { InputLogin } from '/ProjetoVSCode/AmigoChocolate/AmigoChocolate/src/Componentes/InputLogin/style';
import PassWordInput from '/ProjetoVSCode/AmigoChocolate/AmigoChocolate/src/Componentes/Password';
import { ContainerLogin } from '/ProjetoVSCode/AmigoChocolate/AmigoChocolate/src/screens/Login/style';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';

const  Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [login, setLogin] = useState('');

  const userService = new UserService();
    
  const navigation = useNavigation<StackTypes>();
  
  return (
    <View style={styles.container}>
      {/* Espaço para imagem */}
      <Image
        source={require('./caminho/para/sua/imagem.jpg')}
        style={styles.imagem}
        />

      {/* Inputs para nome, email, senha e login */}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
        />
      <TextInput
        style={styles.input}
        placeholder="Login"
        value={login}
        onChangeText={setLogin}
        />

      {/* Botão de envio */}
      <Button title="Enviar" onPress={() => console.log('Enviado!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Cadastro;