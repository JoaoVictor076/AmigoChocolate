import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image,TouchableOpacity } from 
'react-native';

const  CriarGrupo=()=> {
  
  const [nome, setNome] = useState<string>('')
  const [quantidade, setQuantidade] = useState<string>('')
  const [valor, setValor] = useState<string>('')
  const [revelacao, setRevelacao] = useState<string>('')
  const [descricao, setDescricao] = useState<string>('')
  
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}></Text>
      </View>
      <Image
      style={styles.imageStyleGroup}
      source={require('/ProjetoVSCode/AmigoChocolate/AmigoChocolate/assets/avatar.png')}
      />
      <View style={styles.content}>
        <TextInput style={styles.input} 
        placeholder="Nome" 
        onChangeText={setNome} 
        value={nome}
        />
        <TextInput
        style={styles.input}
        placeholder="qtd Max"
        onChangeText={setQuantidade} 
        value={quantidade}
        />
        <TextInput style={styles.input} 
        placeholder="valor" 
        onChangeText={setValor} 
        value={valor}
        />
        <TextInput style={styles.input} 
        placeholder="data revelação" 
        onChangeText={setRevelacao} 
        value={revelacao}
        />
        <TextInput style={styles.input} 
        placeholder="descrição" 
        onChangeText={setDescricao} 
        value={descricao}
        />
        
      <TouchableOpacity  style={styles.button} activeOpacity={0.1}>
        <Text style={styles.buttonText}> Criar Grupo </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8a2be2',
    width: '100%'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 10,
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
  menu: {
    fontSize: 24,
    color: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color:'#fff',
    textAlign: 'center',
    marginTop: 60,
  },
  content:{
    flex :1,
    justifyContent:'center',
    alignItems:'center'
  },
  input:{
    width: '80%',
    minWidth: 200,
    maxWidth: 350,
    height: 50,
    borderColor: '#D3A46F', 
    backgroundColor: '#FFFAF2', 
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#5C3A21', 
  },
  imageStyleGroup:{
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 20,
  },
});

export default CriarGrupo;