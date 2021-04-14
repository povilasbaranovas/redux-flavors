import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { reduxToolkitStore } from "./features/6. ReduxToolkitComponent/app/store";
import { ReduxSagaComponent } from "./features/5. ReduxSagaComponent/ReduxSagaComponent";
import { ReducerComponent } from "./features/2. ReducerComponent/ReducerComponent";
import { UseReducerComponent } from "./features/3. UseReducerComponent/UseReducerComponent";
import { PureReduxComponent } from "./features/4. ReduxComponent/ReduxComponent";
import { Nav, Routes } from "./Nav";
import { ReduxToolkitComponent } from "./features/6. ReduxToolkitComponent/ReduxToolkitComponent";

function App() {
  return (
    <Provider store={reduxToolkitStore}>
      <Router>
        <div className="App">
          <Nav />
          <header className="App-header">
            <Switch>
              <Route path={Routes.manualReducer}>
                <ReducerComponent />
              </Route>
              <Route path={Routes.useReducer}>
                <UseReducerComponent />
              </Route>
              <Route path={Routes.plainRedux}>
                <PureReduxComponent />
              </Route>
              <Route path={Routes.reduxSagas}>
                <ReduxSagaComponent />
              </Route>
              <Route path={Routes.reduxToolkit}>
                <ReduxToolkitComponent />
              </Route>
            </Switch>
          </header>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
