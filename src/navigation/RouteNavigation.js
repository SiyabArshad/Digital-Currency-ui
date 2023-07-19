import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import BottomTab from "./BottomTab"

export default function RouteNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"home"}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={"home"}
          component={BottomTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
