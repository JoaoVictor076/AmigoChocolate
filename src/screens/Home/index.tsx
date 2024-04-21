
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { StackTypes } from '../../routes/stack';
import UserService from '../../services/UserService/UserService';
import { Title } from '../Login/style';

const Home = () => {
  
  const userService = new UserService();
  
  const navigation = useNavigation<StackTypes>();
  
  const handleCriarGrupo = () => {
    navigation.navigate('CriarGrupo');
  }
  const handleListaGrupos = () => {
    navigation.navigate('ListaGrupos');
  }

  return (
    <View style={styles.container}>
      
    
      <TouchableOpacity onPress={handleCriarGrupo} style={styles.button} activeOpacity={0.1}>
        <Text style={styles.buttonText}>Criar Grupo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleListaGrupos} style={styles.button} activeOpacity={0.1}>
        <Text style={styles.buttonText}>Listar Grupos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8a2be2', // Mesma cor de fundo da tela de Login
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
    borderColor: '#D3A46F', // Mesma cor da borda dos inputs da tela de Login
    backgroundColor: '#FFFAF2', // Mesmo fundo dos inputs da tela de Login
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#5C3A21', // Mesma cor do texto dos inputs da tela de Login
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 20,
    backgroundColor: '#6600CC', // Mesma cor do botão da tela de Login
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#2D2926', // Mesma sombra do botão da tela de Login
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  buttonText: {
    color: '#FFF7EB', // Mesmo texto do botão da tela de Login
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

});

export default Home;
