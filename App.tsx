import { StatusBar } from "expo-status-bar";
import { Navigation } from "./src/navigations";
import { AuthProvider } from "./src/context/auth";
import 'react-native-get-random-values'


export default function App() {
  return (
    <>
      <AuthProvider>
        <Navigation/>
      </AuthProvider>  
      <StatusBar style="auto"/>
    </>
  );
}
