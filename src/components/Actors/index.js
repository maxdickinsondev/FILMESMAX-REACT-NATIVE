import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Name, ListInfo, List } from './styles';

export default function Actors() {
    const movieID = useSelector(state => state.actors);

    return (
        <Container>
            <Name></Name>

            <ListInfo>
                <List 
                    
                />
            </ListInfo>
        </Container>
    );
}