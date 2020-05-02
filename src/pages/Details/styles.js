import styled from 'styled-components';

export const Container = styled.View`

`;

export const MovieBackground = styled.ImageBackground`
    flex: 1;
    opacity: 0.9;
`;

export const MovieInfo = styled.View`
    flex-direction: row;
    margin-top: 30px;
`;

export const MovieImage = styled.Image`
    width: 135px;
    height: 250px;
    margin-left: 20px;
`;

export const MovieDetails = styled.View`
    background: #2b2b28;
    max-width: 180px;
    min-width: 180px;
    max-height: 250px;
    min-height: 245px;
`;

export const Title = styled.Text.attrs({
    numberOfLines: 1
})`
    color: #ffce00;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 5px;
    margin-left: 5px;
`;

export const Description = styled.Text.attrs({
    numberOfLines: 8
})`
    color: #fff;
    margin-bottom: 5px;
    margin-left: 7px;
    max-height: 135px;
    min-height: 135px;
`;

export const Generes = styled.Text`
    color: #fff;
    margin-top: 5px;
    margin-left: 5px;
`;

export const MovieNumbers = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 25px;
`;

export const DateInfo = styled.View`
    flex-direction: row;
    align-items: center;
    margin-left: 5px;
`;

export const Date = styled.Text`
    margin-left: 5px;
    color: #fff;
`;

export const DurationInfo = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 5px;
`;

export const Duration = styled.Text`
    color: #fff;
`;

export const OthersInfo = styled.View``;

