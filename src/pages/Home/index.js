import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../../services/api';
import bg from '../../assets/images/bg.jpg';

import { Container, Background, Form, Input, Button,
    List, MovieInfo, ImageMovie, TitleArea, TitleMovie,
    Link
} from './styles';

export default function Home({ navigation }) {
    const [movie, setMovie] = useState([]);
    const url = 'https://image.tmdb.org/t/p/w185';

    useEffect(() => {
        async function loadMovies() {
            const response = await api.get('/movie/popular?api_key=14ff7d5e5b5ac073419275359d9759a0&language=pt-BR');

            setMovie(response.data.results);
        }

        loadMovies();
    }, []);

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
                    />
                    <Button>
                        <Icon name="search" size={20} color="#ffffff" />
                    </Button>
                </Form>
            </Container>

            <List 
                data={movie}
                keyExtractor={movie => String(movie.id)}
                renderItem={({ item }) => (
                    <Link onPress={() => handleNavigate(item.id)} underlayColor="transparent" >
                        <MovieInfo>
                            <ImageMovie 
                                resizeMode="contain"
                                source={{ uri: url+item.poster_path }}
                            />

                            <TitleArea>
                                <TitleMovie> {item.title} </TitleMovie>
                            </TitleArea>
                        </MovieInfo>
                    </Link>
                )}
            />
        </Background>
    );
}