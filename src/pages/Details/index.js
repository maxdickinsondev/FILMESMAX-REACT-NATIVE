import React, { useState ,useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Clock from 'react-native-vector-icons/AntDesign';

import { Container, MovieBackground, MovieInfo, MovieImage, MovieDetails, 
    Title, Description, Generes, MovieNumbers, DateInfo, Date, 
    DurationInfo, Duration, OthersInfo
} from './styles';

import Actors from '../../components/Actors';
import Recommendations from '../../components/Recommendations';

import api from '../../services/api';

export default function Details({ navigation }) {
    const [details, setDetails] = useState([]);
    const url = 'https://image.tmdb.org/t/p/w300';

    const scroll = [
        {},
    ];

    useEffect(() => {
        async function loadDetails() {
            const id = navigation.getParam('id');
            const url = 'https://image.tmdb.org/t/p/w185';

            const response = await api.get(`/movie/${id}?api_key=14ff7d5e5b5ac073419275359d9759a0&language=pt-BR`);

            setDetails(response.data);
        }

        loadDetails();
    }, [details]);

    return (
        <MovieBackground source={{ uri: url+details.poster_path }}>
            <FlatList 
                data={scroll}
                keyExtractor={item => String(item.id)}
                renderItem={() => (
                    <Container>
                        <MovieInfo>
                            <MovieImage 
                                source={{ uri: url+details.poster_path }}
                                resizeMode="stretch"
                            />

                            <MovieDetails>
                                <Title> {details.original_title} </Title>
                                <Description> {details.overview} </Description>
                                <Generes>Action, Science Fiction</Generes>

                                <MovieNumbers>
                                    <DateInfo>
                                        <Icon name="calendar" color="#ffce00" />
                                        <Date>{details.release_date}</Date>
                                    </DateInfo>

                                    <DurationInfo>
                                        <Clock name="clockcircle" color="#ffce00" />
                                        <Duration> {details.runtime} min </Duration>
                                    </DurationInfo>
                                    
                                </MovieNumbers>
                            </MovieDetails>   
                        </MovieInfo>

                        <OthersInfo>
                            <Actors navigation={navigation} />
                            <Recommendations navigation={navigation} />
                        </OthersInfo>
                    </Container>
                )}
            />
        </MovieBackground>
    );
}