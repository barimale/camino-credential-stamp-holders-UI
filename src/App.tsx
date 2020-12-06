import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import Connection from './services/ApiService';

function App() {
  const [assets, setAssets ] = useState<Array<any>>([]);

  const hardcodedUserId = "joe";

  useEffect(() => {
    const getAssets = () => {
      // Search for the users assets
      Connection.search('queries/selectAssetByPolicyholder?policyholder=resource%3Acaminocredential.app.web.Policyholder%23' + hardcodedUserId)
        .then((data: any) => {
          setAssets(data);
        })
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
          <p>{assets !== null ? assets.length : 'Unknown'}</p>
        </section>
      </Router>
    </div>
  );
}

export default App;
