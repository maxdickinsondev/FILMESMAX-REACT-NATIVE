import styled from 'styled-components';

export const Background = styled.ImageBackground`
    flex: 1;
`;

export const Container = styled.View`
    padding: 20px;
    margin-right: 20px;
    margin-left: 20px;
`;

export const Form = styled.View`
    display: flex;
    flex-direction: row;
`;

export const Input = styled.TextInput`
    flex: 1;
    border: 1px solid #2b2929;
    background: #2b2929;
    border-radius: 4px;
    padding: 0 30px;
    height: 35px;
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background: #ffce00;
    border-radius: 4px;
    width: 40px;
    margin-left: 10px;
`;

export const List = styled.FlatList`
    margin-top: 20px;
`;

export const MovieInfo = styled.View`
    align-items: center;
`;

export const ImageMovie = styled.Image`
    width: 240px;
    height: 270px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`;

export const TitleMovie = styled.Text`
    align-items: center;
    color: #999;
    font-size: 14px;
    margin-bottom: 40px;
    background: #000;
    height: 40px;
    width: 242px;
`;