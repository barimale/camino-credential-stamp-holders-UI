import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NetworkService from './services/NetworkService';
import RouteOwners, { Path as RouteOwnersPath } from './components/pages/RouteOwners/RouteOwners';
import { MainLayout } from './components/layouts/MainLayout';
import { Home, Path as HomePath } from './components/pages/Home';

function App() {
    const [assets, setAssets ] = useState<Array<any>>([]);

  const hardcodedUserId = "joe";

  useEffect(() => {
    const getAssets = async () => {
      await NetworkService
        .search('queries/selectAssetByPolicyholder?policyholder=resource%3Acaminocredential.app.web.Policyholder%23' + hardcodedUserId)
        .then((data: any) => {
          setAssets(data);
        });
    };

    getAssets();
  }, []);

  return (
    <div  className="App" style={{
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center'
  }}>
      <Router>
        <MainLayout>
          <Switch>
            <Route path={HomePath} exact component={Home} />
            <Route exact path={RouteOwnersPath} component={() => <RouteOwners/>} />
          </Switch>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
