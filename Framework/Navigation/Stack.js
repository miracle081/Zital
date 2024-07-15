import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Screens/HomeScreen';
import { Profile } from '../Screens/Profile';
import { EditProfile } from '../Screens/EditProfile';

const Stack = createStackNavigator();

export function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false, }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}