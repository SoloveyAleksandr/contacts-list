import { Switch, Route } from "react-router";

import ContactsList from "./screens/ContactsList/ContactsList";

function RouterView() {
  return (
    <Switch>
      <Route
        exact
        path='/'>
        <div>
          <h1>HOME</h1>
          <ContactsList />
        </div>
      </Route>
      <Route path="*">
        <div>404 Not Found</div>
      </Route>
    </Switch>
  );
};

export default RouterView;
