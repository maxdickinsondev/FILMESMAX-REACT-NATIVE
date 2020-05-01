import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../../pages/Home';
import Details from '../../pages/Details';

const NowNavigator = createAppContainer(
    createStackNavigator({
        Home,
        Details
    }, {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#2b2929',         
            },
            headerTitle: 'FilmesMax',
            headerTitleAlign: 'center',
            headerTintColor: '#ffce00',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        },
    })
);

export default NowNavigator; 