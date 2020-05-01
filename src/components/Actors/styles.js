import styled from 'styled-components';

export const Container = styled.View`
    background: #2b2b28;
    margin-left: 20px;
    margin-right: 25px;
    max-height: 160px;
    min-height: 160px;
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
    margin-top: 10px;
    align-items: center;
    justify-content: space-between;
`;

export const ActorImage = styled.Image`
    width: 60px;
    height: 60px;
    
`;

export const ActorName = styled.Text.attrs({
    numberOfLines: 2
})`
    color: #fff;
    max-width: 50px;
`;

export const FalseName = styled.Text.attrs({
    numberOfLines: 1
})`
    color: #ffce00;
`;
