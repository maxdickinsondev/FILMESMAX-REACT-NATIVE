import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../../pages/Home';

const NowNavigator = createAppContainer(
    createStackNavigator({
        Home
    })
);

export default NowNavigator; 