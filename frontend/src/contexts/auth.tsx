import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

interface AuthContextData {
  status: boolean;
  user: object | null;
  Login({}): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const history = useHistory();
  useEffect(() => {
    console.log(user);
  });

  async function Login(data: any) {
    const response = await api.post("api/Login.php", data, {
      headers: { "Content-Type": "application/json" },
    });

    if (response.data.status === false || null) {
      toast.warning(response.data.Error);
    }
    if (response.data.status === true) {
      setUser(response.data);
      toast.success("Login efetuado com sucesso!");
      history.push("/");
    }
  }

  return (
    <AuthContext.Provider value={{ status: Boolean(user), user, Login }}>
      {children}
    </AuthContext.Provider>
  );
};
