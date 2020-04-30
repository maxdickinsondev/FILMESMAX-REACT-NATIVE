import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Popular from './components/Popular';
import Now from './components/Now';
import Rated from './components/Rated';
import Coming from './components/Coming';

const Routes = createAppContainer(
    createMaterialTopTabNavigator({
        Popular,
        Now,
        Rated,
        Coming
    }, {
        tabBarOptions: {
            upperCaseLabel: false,
            showIcon: true,

            tabStyle: {
                backgroundColor: '#ffce00',
            },
        },

        tabBarPosition: 'bottom'
    })
);

export default Routes;