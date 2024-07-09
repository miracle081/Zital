import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Screens/HomeScreen';
import { Profile } from '../Screens/Profile';

const Stack = createStackNavigator();

export function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    )
}