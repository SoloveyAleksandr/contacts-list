import { Switch, Route } from "react-router";

function RouterView() {
  return (
    <Switch>
      <Route
        exact
        path='/'>
        <div>
          <h1>HOME</h1>
        </div>
      </Route>
      <Route path="*">
        <div>404 Not Found</div>
      </Route>
    </Switch>
  );
};

export default RouterView;
