import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Principal = require("./screens/Principal");
const Frase = require("./screens/Frase");


const Menu = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator
        screenOptions={{
            headerStyle:
            {
                backgroundColor:"green",    
            },
            headerTintColor: 'white'

        }}
        initialRouteName="Página principal"
      >
        <Menu.Screen name="Página principal" component={Principal}/>
        <Menu.Screen name="Frases random" component={Frase}/>
        
      </Menu.Navigator>
    </NavigationContainer>
  );
}