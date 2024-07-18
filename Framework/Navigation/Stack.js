import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Screens/HomeScreen';
import { Profile } from '../Screens/Profile';
import { EditProfile } from '../Screens/EditProfile';
import { SignUp } from '../Screens/SignUp';
import { Login } from '../Screens/Login';

const Stack = createStackNavigator();

export function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="SignUp">
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false, }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}