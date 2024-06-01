import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { StackTypes } from '../../routes/stack';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { db } from '../../Config';
import { collection, onSnapshot, query, orderBy, where, updateDoc, doc, arrayUnion } from 'firebase/firestore';
import axios from 'axios';

type UserDetails = {
  uid: string;
};

type GroupProps = {
  nomeGrupo: string, 
  dataRevelacao: string, 
  qtdMax: string, 
  descricao: string, 
  handleNavegarConvite: (nomeDoGrupo: string) => void, 
  nomeDoGrupo: string
};

const GroupComponent = ({ nomeGrupo, dataRevelacao, qtdMax, descricao, handleNavegarConvite, nomeDoGrupo }: GroupProps) => (
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
      <TouchableOpacity onPress={() => handleNavegarConvite(nomeDoGrupo)} style={styles.buttonIcon} activeOpacity={0.1}>
        <SimpleLineIcons name="envelope" size={25} color="black" />
      </TouchableOpacity>
    </View>
  </View>
);

const ListaGrupos = () => {
  const navigation = useNavigation<StackTypes>();
  const [userDatail, setUserDatail] = useState<UserDetails | null>(null);
  const [groups, setGroups] = useState<any[]>([]);

  const URL = 'http://localhost:3000/';

  const handleNavegarHome = () => {
    navigation.navigate('Home');
  };

  const handleNavegarConvite = (nomeGrupo: string) => {
    navigation.navigate('Convites', { nome: nomeGrupo } as unknown as undefined);
  };

  const userLoggedIn = () => {
    AsyncStorage.getItem('@user').then((value) => {
      if (value !== null) {
        const user = JSON.parse(value);
        setUserDatail(user);
      }
    });
  };

  useEffect(() => {
    userLoggedIn();
  }, []);

  useEffect(() => {
    if (userDatail) {
      try {
        const loadGroups = async () => {
          const response = await axios.post(`${URL}groups/getGroupList`, {
            userDatail
          });

          if(response.status === 200) {
            setGroups(response.data);
            console.log('grupos listados com sucesso: ', response.data);
          }else{
            console.log('Erro ao listar grupos: ', response.data);
          }
        };

        loadGroups();
      } catch (error: any) {
        console.log('Erro ao listar grupo:', error.message);
      }

    }
  }, [userDatail]);

  /* const adicionarParticipanteGrupo = async (grupoUid: string, usuarioUid: string) => {
    const groupRef = doc(db, 'groups', grupoUid);
  
    try {
      await updateDoc(groupRef, {
        participantes: arrayUnion(usuarioUid)
      });
      console.log('Usuário adicionado ao grupo com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar usuário ao grupo:', error);
    }
  }; */

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Grupos</Text>

      <FlatList
        data={groups}
        renderItem={({ item }) => 
          <GroupComponent 
            nomeGrupo={item.nome} 
            descricao={item.descricao} 
            dataRevelacao={item.dataRevelacao} 
            qtdMax={item.qtdMax} 
            handleNavegarConvite={handleNavegarConvite} 
            nomeDoGrupo={item.nome}
          />
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
    backgroundColor: '#8a2be2',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  nomeGrupocontainer: {
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
  grupo: {
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
  nomeGrupo: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  text: {
    fontWeight: '500',
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 20,
    backgroundColor: '#6600CC',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
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
  buttonIcon: {
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
    width: 70,
    height: 70,
    alignSelf: 'center',
    borderRadius: 50,
    marginLeft: 10,
  },
});

export default ListaGrupos;
