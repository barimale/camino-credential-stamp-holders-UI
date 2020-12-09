import React from 'react';
import './App.css';
import 'react-notifications-component/dist/theme.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RouteOwners, { Path as RouteOwnersPath } from './components/pages/RouteOwners/RouteOwners';
import Piligrims, { Path as PiligrimsPath } from './components/pages/Piligrims/Piligrims';
import { MainLayout } from './components/layouts/MainLayout';
import { Home, Path as HomePath } from './components/pages/Home';
import ReactNotification from 'react-notifications-component';

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
            <Route path={HomePath} exact component={Home} />
            <Route exact path={RouteOwnersPath} component={() => <RouteOwners/>} />
            <Route exact path={PiligrimsPath} component={() => <Piligrims/>} />
          </Switch>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
