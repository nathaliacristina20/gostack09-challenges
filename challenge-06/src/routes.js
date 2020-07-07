import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';
import RepositoryStarred from './pages/RepositoryStarred';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Main,
            User,
            RepositoryStarred,
        },
        {
            headerLayoutPreset: 'center',
            headerBackTitleVisible: false,
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#7159c1',
                },
                headerTintColor: '#FFF',
            },
        }
    )
);

export default Routes;
