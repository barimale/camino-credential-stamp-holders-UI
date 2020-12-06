import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import NetworkService from './services/NetworkService';

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
    <div className="App" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  }}>
      <Router>
        <Header />
        <section>
          <p>{assets !== null || undefined ? assets.length : 'Unknown'}</p>
        </section>
      </Router>
    </div>
  );
}

export default App;
