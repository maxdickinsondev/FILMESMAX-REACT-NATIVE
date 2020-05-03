import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StatusBar, ActivityIndicator } from 'react-native';

import api from '../../services/api';
import bg from '../../assets/images/bg.jpg';

import { Container, Background, Form, Input,
    List, MovieInfo, ImageMovie, Link, Loading
} from './styles';

export default function Home({ navigation }) {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState('');
    const [page, setPage] = useState(1);

    const url = 'https://image.tmdb.org/t/p/w185';

    async function loadMovies() {
        setLoading(true);

        const response = await api.get(`/movie/upcoming?api_key=14ff7d5e5b5ac073419275359d9759a0&language=pt-BR&page=${page}`);

        setMovie(response.data.results);
        setLoading(false);
    }

    useEffect(() => {
        loadMovies();
    }, [page || input == '']);

    useEffect(() => {
        async function loadMovies() {
            const response = await api.get(`/search/movie?api_key=14ff7d5e5b5ac073419275359d9759a0&query=${input}`);
            
            setMovie(response.data.results);
        }

        loadMovies();
    }, [input]);

    const dispatch = useDispatch();

    function handleRedux(id) {
        dispatch({
            type: '@actor/id',
            id
        });
    }

    function handleNavigate(id){
        navigation.navigate('Details', { id });

        handleRedux(id);
    }

    function handleInput(e) {
        setInput(e); 
    }

    function handlePage() {
        setPage(page + 1);
        console.log(page);
    }

    if (loading) {
        return (
            <Loading>
                <ActivityIndicator size={40} color="#E02041" />
            </Loading>
        );
    } else {
        return (
            <Background source={bg}>
                <Container>
                    <StatusBar 
                        barStyle={"ligth-content"} 
                        backgroundColor="#2b2929" 
                    />
    
                    <Form>
                        <Input 
                            placeholder="Search by movie title..."
                            value={input}
                            onChangeText={(e) => handleInput(e)}
                        />
                    </Form>
                </Container>
    
                <List 
                    data={movie}
                    keyExtractor={item => String(item.id)}
                    onEndReached={handlePage}
                    OnEndReachedThreshold={0.1}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <Link onPress={() => handleNavigate(item.id)} underlayColor="transparent" >
                            <MovieInfo>
                                <ImageMovie 
                                    resizeMode="contain"
                                    source={{ uri: url+item.poster_path }}
                                />
                            </MovieInfo>
                        </Link>
                    )}
                />
            </Background>
        );
    }
}