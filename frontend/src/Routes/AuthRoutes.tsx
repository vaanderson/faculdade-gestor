import { Route, BrowserRouter } from "react-router-dom";
import { PageLogin } from "../pages/Login";

export function AuthRoutes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={PageLogin} />
    </BrowserRouter>
  );
}
