import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image,TouchableOpacity } from 
'react-native';

const  CriarGrupo=()=> {
  
  const [nome, setNome] = useState<string>('')
  const [quantidade, setQuantidade] = useState<string>('')
  const [valor, setValor] = useState<string>('')
  const [revelacao, setRevelacao] = useState<string>('')
  const [descricao, setDescricao] = useState<string>('')
  const [nomeConsole, setNomeConsole] = useState<string>(' ')
  const [qtdConsole, setQtdConsole] = useState<string>(' ')
  const [valorConsole, setValorConsole] = useState<string>(' ')
  const [revelacaoConsole, setRevelacaoConsole] = useState<string>(' ')
  const [descricaoConsole, setDescricaoConsole] = useState<string>(' ')
  
  
  const validateForm = () => {
    let regular = true

    if(nome.length == 0 || nome.length >= 20){
      setNomeConsole('nome inválido')
      regular = false
    }
    if (parseInt(quantidade) <= 1  || quantidade.length == 0) {
      setQtdConsole('A quantidade de integrantes deve ser maior que 0')
      regular = false
    }
    if (parseFloat(valor) <= 0 || valor.length == 0){
      setValorConsole('o valor não pode ser nulo ou igual a 0')
      regular = false
    }
    if (revelacao.length == 0 ){
      setRevelacaoConsole('A data de revelação não pode ser nula')
      regular = false
    }
    if (descricao.length == 0 ){
      setDescricaoConsole('A descrição não pode ser nula ')
      regular = false
    }

    if(regular){
      setNome('')
      setNomeConsole(' ')
      setQuantidade('')
      setQtdConsole(' ')
      setValor('')
      setValorConsole(' ')
      setRevelacao('')
      setRevelacaoConsole(' ')
      setDescricao('')
      setDescricaoConsole(' ')
    }
  }

  return (
    <View style={styles.container}>
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
        <Text style={styles.console}>{nomeConsole}</Text>
          <TextInput
          style={styles.input}
          placeholder="qtd Max"
          onChangeText={setQuantidade} 
          value={quantidade}
        />
        <Text style={styles.console}>{qtdConsole}</Text>
        <TextInput style={styles.input} 
        placeholder="valor" 
        onChangeText={setValor} 
        value={valor}
        />
        <Text style={styles.console}>{valorConsole}</Text>
        <TextInput style={styles.input} 
        placeholder="data revelação" 
        onChangeText={setRevelacao} 
        value={revelacao}
        />
        <Text style={styles.console}>{revelacaoConsole}</Text>
        <TextInput style={styles.input} 
        placeholder="descrição" 
        onChangeText={setDescricao} 
        value={descricao}
        />
        <Text style={styles.console}>{descricaoConsole}</Text>
        
      <TouchableOpacity  onPress={validateForm} style={styles.button} activeOpacity={0.1}>
        <Text style={styles.buttonText}> Criar Grupo </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'space-between',
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
  console:{
    color: '#ff0000',
    marginTop: -16,
    marginBottom: 10,
    width: '80%',
    fontSize: 14,
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
  },
});


export default CriarGrupo;