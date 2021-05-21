import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../Redux/store";
import PrivateRoute from "../components/PrivateRoute";

const Login = React.lazy(() => import("./Login"));
const Logout = React.lazy(() => import("./Logout"));
const Register = React.lazy(() => import("./Register"));
const Reset = React.lazy(() => import("./Reset"));
const Forget = React.lazy(() => import("./Forget"));
const Home = React.lazy(() => import("./Home"));
const CreateAlert = React.lazy(() => import("./CreateAlert"));
const MyArticles = React.lazy(() => import("./MyArticles"));
const MyMessages = React.lazy(() => import("./MyMessages"));
const MyAccount = React.lazy(() => import("./MyAccount"));
const ManageAlerts = React.lazy(() => import("./ManageAlerts"));
const UpdateAlert = React.lazy(() => import("./UpdateAlert"));
const Metrics = React.lazy(() => import("./Metrics"));

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/forget" component={Forget} />
              <Route exact path="/reset" component={Reset} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/alert" component={CreateAlert} />
              <PrivateRoute exact path="/alert/:id" component={UpdateAlert} />
              <PrivateRoute exact path="/articles" component={MyArticles} />
              <PrivateRoute exact path="/messages" component={MyMessages} />
              <PrivateRoute exact path="/account" component={MyAccount} />
              <PrivateRoute exact path="/metrics" component={Metrics} />
              <PrivateRoute
                exact
                path="/alerts/manage"
                component={ManageAlerts}
              />
            </Switch>
          </Suspense>
        </Router>
      </PersistGate>
    </Provider>
  );
};
export default App;
