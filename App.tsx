import { StatusBar } from "expo-status-bar";
import { Navigation } from "./src/navigations";
import { AuthProvider } from "./src/context/auth";

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
