import React from 'react';
import { View, Text, StatusBar } from 'react-native';

export default function Home() {
    return (
        <View>
            <StatusBar barStyle={"default"} backgroundColor="#161618" />
            <Text>Estou na screen popular!</Text>
        </View>
    );
}