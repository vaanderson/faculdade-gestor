import { AuthProvider } from "./contexts/auth";
import { Routes } from "./Routes/Routes";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";

export function App() {
  return (
    <AuthProvider>
      <Routes />
      <GlobalStyle />
      <ToastContainer />
    </AuthProvider> 
  );
}
