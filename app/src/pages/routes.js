import { Login } from './Login';
import { Inicio } from './Home';
import { Qrcode } from './LeitorQR';
import { Aluno } from './Aluno';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = new createStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="QR"
        component={Qrcode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Aluno"
        component={Aluno}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Inicio"
        component={Inicio}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}
