import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Container, Name, List, ActorInfo,
    ActorImage, ActorName, FalseName,
} from './styles';

import api from '../../services/api';

export default function Actors() {
    const movieID = useSelector(state => state.actors);
    const url = 'https://image.tmdb.org/t/p/w185';

    const [actors, setActors] = useState([]);

    useEffect(() => {
        async function loadActors() {
            const response = await api.get(`/movie/${movieID}/credits?api_key=14ff7d5e5b5ac073419275359d9759a0`);

            setActors(response.data.cast);
        }

        loadActors();
    }, [actors]);

    return (
        <Container>
            <Name> Actors </Name>

            <List 
                data={actors}
                horizontal={true}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <ActorInfo>
                        <ActorImage source={{ uri: url+item.profile_path }} />
                        <ActorName> {item.name} </ActorName>
                        <FalseName> {item.character} </FalseName>
                    </ActorInfo>
                )}
            />
        </Container>
    );
}