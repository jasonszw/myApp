import {
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation';

import index from "./view/index";

const RootStack = createStackNavigator(
    {

        index:{
            screen: index,
            navigationOptions: () => ({
                title: 'index',
            })
        }
    },
    {
        initialRouteName: 'index',
        headerMode: 'none',
        // transitionConfig: ()=> ({
        //     screenInterpolator: CardStackStyleInterpolator.forHorizontal,
        // })

    });

const AppContainer = createAppContainer(RootStack);

export default AppContainer