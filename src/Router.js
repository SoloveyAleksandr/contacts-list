import { Switch, Route } from "react-router";

import { useSelector } from "react-redux";

import ContactsList from "./screens/ContactsList/ContactsList";
import UserScreen from "./screens/UserScreen/UserScreen";

function RouterView() {
  const state = useSelector(state => state.state);

  return (
    <Switch>
      <Route
        exact
        path='/'>
        <ContactsList />
      </Route>
      <Route
        path={`/user:${state.currentContactID}`}>
        <UserScreen />
      </Route>
      <Route path="*">
        <div>404 Not Found</div>
      </Route>
    </Switch>
  );
};

export default RouterView;
