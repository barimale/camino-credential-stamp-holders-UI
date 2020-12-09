import './App.css';
import 'react-notifications-component/dist/theme.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RouteOwners, { Path as RouteOwnersPath } from './components/pages/RouteOwners/RouteOwners';
import Piligrims, { Path as PiligrimsPath } from './components/pages/Piligrims/Piligrims';
import Places, { Path as PlacesPath } from './components/pages/Places/Places';
import { MainLayout } from './components/layouts/MainLayout';
import { Home, Path as HomePath } from './components/pages/Home';
import ReactNotification from 'react-notifications-component';
import { Redirect } from "react-router-dom";

export const appBaseRouteKey = "/app";

function App() {
  return (
    <div  className="App" style={{
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center'
  }}>
      <ReactNotification />
      <Router>
        <MainLayout>
          <Switch>
            <Route path={HomePath} exact render={() => <Redirect to={appBaseRouteKey + HomePath} />} />
            <Route path={appBaseRouteKey + HomePath} exact component={Home} />
            <Route exact path={appBaseRouteKey + RouteOwnersPath} render={() => <RouteOwners/>} />
            <Route exact path={appBaseRouteKey + PiligrimsPath} render={() => <Piligrims/>} />
            <Route exact path={appBaseRouteKey + PlacesPath} render={() => <Places/>} />
            <Route render={() => <Redirect to={HomePath} />} />
          </Switch>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
