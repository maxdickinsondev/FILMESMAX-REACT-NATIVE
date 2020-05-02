import styled from 'styled-components';

export const Container = styled.View`
    background: #2b2b28;
    margin-left: 20px;
    margin-right: 25px;
    margin-top: 10px;
    max-height: 200px;
    min-height: 200px;
`;

export const Name = styled.Text`
    color: #ffc300;
    font-size: 18px;
    font-weight: bold;
    margin-left: 5px;
`;

export const List = styled.FlatList`
    
`;

export const ActorInfo = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin: 8px;
`;

export const ActorImage = styled.Image`
    width: 75px;
    height: 100px;
    
`;

export const ActorName = styled.Text.attrs({
    numberOfLines: 2
})`
    color: #fff;
    max-width: 80px;
`;

export const FalseName = styled.Text.attrs({
    numberOfLines: 1
})`
    color: #ffce00;
    max-width: 90px;
`;
