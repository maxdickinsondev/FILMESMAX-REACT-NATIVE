import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Popular from './stacks/Popular';
import Now from './stacks/Now';
import Rated from './stacks/Rated';
import Coming from './stacks/Coming';

const Routes = createAppContainer(
    createMaterialTopTabNavigator({
        Popular,
        Now,
        Rated,
        Coming
    }, {
        tabBarOptions: {
            upperCaseLabel: false,
            showIcon: false,

            tabStyle: {
                height: 60,
                backgroundColor: '#2b2929',
            },
        },

        tabBarPosition: 'bottom'
    })
);

export default Routes;