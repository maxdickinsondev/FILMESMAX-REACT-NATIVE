import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Container, Title, List, MovieInfo, MovieImage } from './styles';

import api from '../../services/api';

export default function Recommendations() {
    const [recommendation, setRecommendation] = useState([]);
    const movieID = useSelector(state => state.actors);
    const url = 'https://image.tmdb.org/t/p/w185';

    useEffect(() => {
        async function loadRecommendations() {
            const response = await api.get(`/movie/${movieID}/recommendations?api_key=14ff7d5e5b5ac073419275359d9759a0&language=pt-BR`);

            setRecommendation(response.data.results);
        }

        loadRecommendations();
    }, []);


    return (
        <Container>
            <Title>Recommendations</Title>

            <List 
                data={recommendation}
                horizontal={true}
                renderItem={({ item }) => (
                    <MovieInfo>
                        <MovieImage 
                            source={{ uri: url+item.poster_path }}
                        />
                    </MovieInfo>
                )}
            />
        </Container>
    );
}