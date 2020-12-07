import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import NetworkService from './services/NetworkService';
import RouteOwners from './components/RouteOwners';
import { MainLayout } from './components/layouts/MainLayout';

function Index() {
  return <h2>Home</h2>;
}

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
      alignItems: 'center',
      justifyContent: 'center'
  }}>
      <Router>
        <Header />
        <MainLayout>
          <Switch>
            <Route path="/" exact component={Index} />
            <Route exact path="/routeOwners" component={() => <RouteOwners/>} />
          </Switch>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
