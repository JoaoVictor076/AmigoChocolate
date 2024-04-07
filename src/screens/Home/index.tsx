import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, Image, View, Platform, Text, TextInput } from 'react-native';
import { StackTypes } from '../../routes/stack';
import * as ImagePicker from 'expo-image-picker';
import UserService   from '../../services/UserService/UserService';
import {User} from '../../types/type'
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from '../../Componentes/Button';

const Home = () => {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };

    const userService = new UserService();

    const handleUpload = async () => {
      try {
        const user: User = {
            username: name,
            password: 'password', // Defina a senha como necessário
            photo: image
        };

          const userAdded = await userService.addUser(user);
          if (userAdded) {
              console.log('Usuário adicionado com sucesso!');
          } else {
              console.log('Erro ao adicionar usuário');
          }
      } catch (error) {
          console.error('Error uploading image:', error);
      }
  };

    const navigation = useNavigation<StackTypes>();

return (
  
       
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Text>Nome:</Text>
  <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      onChangeText={text => setName(text)}
      value={name}
  />
  <Button title='Selecionar Imagem' onPress={pickImage}></Button>
  
  {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 , marginBottom: 10}} />}
  
  <Button title='Upload' onPress={handleUpload}></Button>
</View>
        
   

);

};

export default Home;