import { Route } from "react-router";
import { Home } from "./views/Home";

const Routes = () => {
  return (
    <>
    <Route exact path="/" component={Home}/>
    <Route />
    </>
  )
};

export default Routes;
