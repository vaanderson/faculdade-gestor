import { Route, BrowserRouter } from "react-router-dom";
import { CadastrarProdutos } from "../pages/CadastrarProdutos";
import { PageHome } from "../pages/Home";
import { ListarProdutos } from "../pages/ListarProdutos";

export function DefaultRoutes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={PageHome} />
      <Route exact path="/CadastrarProdutos" component={CadastrarProdutos} />
      <Route exact path="/ListarProdutos" component={ListarProdutos} />
    </BrowserRouter>
  );
}
