import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import UserService from '../../services/UserService/UserService';
import { User } from '../../types/type';
import { StackRouteProp } from '../../routes/stack';

type DetailsScreenProps = {
    route: StackRouteProp<'Details'>;
};

const Details = ({ route }: DetailsScreenProps) => {
    const [user, setUser] = useState<User | null>(null); // Estado para armazenar os dados do usuário
    const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
    const [error, setError] = useState<string | null>(null); // Estado para armazenar mensagens de erro
    const userService = new UserService();

    useEffect(() => {
        // Função assíncrona para buscar o usuário pelo ID
        const fetchUser = async () => {
            try {
                // Chamada ao método getUserById passando o ID do usuário desejado
                const fetchedUser = await userService.getUserById(route.params.userId);
                if (fetchedUser) {
                    setUser(fetchedUser); // Atualiza o estado com os dados do usuário obtidos
                } else {
                    setError('Usuário não encontrado.'); // Define mensagem de erro
                }
            } catch (error) {
                console.error('Erro ao buscar usuário:', error);
                setError('Erro ao buscar usuário. Tente novamente mais tarde.'); // Define mensagem de erro
            } finally {
                setLoading(false); // Define que o carregamento terminou
            }
        };

        // Chamada da função para buscar o usuário quando o componente for montado
        fetchUser();
    }, []); // Passamos um array vazio como segundo argumento para useEffect para garantir que esta função seja executada apenas uma vez, quando o componente for montado

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {loading ? (
                <Text>Carregando...</Text>
            ) : error ? (
                <Text>{error}</Text>
            ) : user ? (
                <View>
                    <Text>Nome: {user.username}</Text>
                    <Text>Senha: {user.password}</Text>
                    <Text>Photo: {user.photo}</Text>
                </View>
            ) : (
                <Text>Usuário não encontrado.</Text>
            )}
        </View>
    );
};

export default Details;