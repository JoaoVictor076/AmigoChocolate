import axios, { AxiosResponse } from 'axios';
import { User } from '/ProjetoVSCode/AmigoChocolate/AmigoChocolate/src/types/type';

const BASE_URL = 'http://localhost:3000/User/';//'https://localhost:7217/api/User/'

class UserService {

    constructor() {
        // Se necessário, adicione inicializações aqui
      }

  async addUser(user: User): Promise<boolean> {
    try {
    //  const response = await axios.post(`${BASE_URL}`, user);
    
    const formData = new FormData();
    formData.append('username', user.username);
    formData.append('password', user.password);

    const responsePhoto = await fetch(user.photo);

    const blob = await responsePhoto.blob();

    formData.append('photo', blob, 'photo.jpg');

    const uploadResponse = await axios.post(BASE_URL+'addUser', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    
      return uploadResponse.status === 201; // Retorna true se o usuário foi adicionado com sucesso
    
    } catch (error) {
      console.error('Erro ao adicionar usuário:', error);
      return false; // Retorna false em caso de erro
    }
  }

  async validateUser(username: string, password: string): Promise<boolean> {
    try {
        const response: AxiosResponse<User[]> = await axios.get(`${BASE_URL}?username=${username}&password=${password}`);
        //na aplicação de vocês não retorna array não e o metodo sera um post que retorna um unico usuario.
        if (response.data.length === 0) {
          return false;
        }
  
        return response.status === 200; 
    } catch (error) {
      console.error('Erro ao validar usuário:', error);
      return false; // Retorna false em caso de erro
    }
  }

  async getUserById(userId: number): Promise<User | null> {
    try {
        const response: AxiosResponse<User> = await axios.get(`${BASE_URL}${userId}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar usuário pelo ID:', error);
        return null;
    }
}


}

export default  UserService;