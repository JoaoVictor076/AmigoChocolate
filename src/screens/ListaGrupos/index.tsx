
import { useNavigation} from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Alert, Image, FlatList, StatusBar } from 'react-native';
import { StackTypes } from '../../routes/stack';
import UserService from '../../services/UserService/UserService';
import { Title } from '../Login/style';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const data = {
  "Grupos": [
    {
      "id": 1,
      "photo"   : "splash.png",
      "nomeGrupo": "h1",
      "descricao" : "Isso é pra ser uma descrição descritiva dos fatos",
      "dataRevelacao": "03/12",
      "qtdMax": "03/20"
    },
    {
      "id": 2,
      "photo"   : "splash.png",
      "nomeGrupo": "Sif 05 Amigo-Chocolate",
      "descricao" : "Isso é pra ser uma descrição descritiva dos fatos",
      "dataRevelacao": " 07/07",
      "qtdMax": "7/20"
    },
    {
      "id": 3,
      "photo"   : "splash.png",
      "nomeGrupo": "Sif 04",
      "descricao" : "Isso é pra ser uma descrição descritiva dos fatos",
      "dataRevelacao": "05/02",
      "qtdMax": "3/20"
    }
  ]
}

type GroupProps = {nomeGrupo: string, dataRevelacao: string, qtdMax: string, descricao: string, handleNavegarConvite: (nomeDoGrupo: string) => void, nomeDoGrupo:string};

const GroupProps = ({nomeGrupo,dataRevelacao, qtdMax, descricao, handleNavegarConvite, nomeDoGrupo}: GroupProps) => (

  <View style={styles.nomeGrupocontainer}>
    <Image
      style={styles.imageStyle}
      source={require('../../../assets/avatar.png')}
    />
    <View style={styles.grupo}>
      <Text style={styles.nomeGrupo}>{nomeGrupo}</Text>
      <Text><Text style={styles.text}>Descrição:</Text> {descricao}</Text>
      <Text><Text style={styles.text}>Data Revelação:</Text> {dataRevelacao}</Text>
      <Text><Text style={styles.text}>Quantidade Max:</Text> {qtdMax}</Text>
    </View>
    <View>
      <TouchableOpacity style={styles.buttonIcon} activeOpacity={0.1}>
        <AntDesign name="edit" size={25} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handleNavegarConvite(nomeDoGrupo)} style={styles.buttonIcon} activeOpacity={0.1}>
        <SimpleLineIcons name="envelope" size={25} color="black" />
      </TouchableOpacity>
    </View>
    
  </View>
)

const ListaGrupos = () => {
  
  const userService = new UserService();
  
  const navigation = useNavigation<StackTypes>();
  
  const handleNavegarHome = () => {
    navigation.navigate('Home');
  }

  const handleNavegarConvite = (nomeGrupo: string) => {
    navigation.navigate('Convites', {nome: nomeGrupo} as unknown as undefined); 
  }

  return (
    <View style={styles.container}>
      <Text  style = {styles.title}>Lista de Grupos</Text>

      <FlatList
        data={data.Grupos}
        renderItem={({item}) => 
        <GroupProps nomeGrupo={item.nomeGrupo} descricao={item.descricao} dataRevelacao={item.dataRevelacao} qtdMax={item.qtdMax} handleNavegarConvite={handleNavegarConvite} nomeDoGrupo={item.nomeGrupo}/>
      }
        keyExtractor={(item) => item.id.toString()}
      />
      
      <TouchableOpacity onPress={handleNavegarHome} style={styles.button} activeOpacity={0.1}>
        <Text style={styles.buttonText}>Home</Text>
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
    marginTop: 50, // Aumente este valor conforme necessário para descer o texto
    marginBottom: 20,
  },
  nomeGrupocontainer:{
    width: '70%', 
    minWidth: 350,
    height: 120,
    borderColor: '#D3A46F',
    backgroundColor: '#f8dcff',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    textAlign: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grupo:{
    marginLeft: 10,
    marginTop: 10,
    width: '70%',
    textAlign: 'left',
    color: '#5C3A21',
    height: 120,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  nomeGrupo:{
    fontWeight: 'bold',
    fontSize: 17,
  },

  text:{
    fontWeight: '500',
  },

  button: {
    width: '80%',
    height: 50,
    borderRadius: 20,
    backgroundColor: '#6600CC', // Mesma cor do botão da tela de Login
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
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

  buttonIcon:{
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 0,
  },

  imageStyle: {
    borderColor: '#D3A46F',
    borderWidth: 1,
    width: 70, // Tamanho aumentado para que a imagem seja mais destacada
    height: 70, // Tamanho aumentado para que a imagem seja mais destacada
    alignSelf: 'center',
    borderRadius: 50,
    marginLeft: 10,
  },

});

export default ListaGrupos;
