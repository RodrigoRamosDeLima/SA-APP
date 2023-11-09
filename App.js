import { StatusBar } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { MeuContextoProvider } from './src/contexts/MeuContexto.js';
import { Routes } from './src/routes'

export default function App() {
  return (
    <MeuContextoProvider>
      <NavigationContainer>
        <StatusBar backgroundColor={"transparent"} barStyle={"light-content"} translucent={true} />
        <Routes />
      </NavigationContainer>
    </MeuContextoProvider>
  );
}