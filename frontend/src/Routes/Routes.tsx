import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/auth";
import { AuthRoutes } from "./AuthRoutes";
import { DefaultRoutes } from "./DefaultRoutes";

export function Routes() {
  const { status } = useContext(AuthContext);

  return status ? <DefaultRoutes /> : <AuthRoutes />;
}
