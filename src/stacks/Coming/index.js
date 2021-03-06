import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../../screens/Coming';

const NowNavigator = createAppContainer(
    createStackNavigator({
        Home
    }, {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#2b2929'
            },
            headerTitle: 'FilmesMax',
            headerTitleAlign: 'center',
            headerTintColor: '#ffce00',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    })
);

export default NowNavigator; 