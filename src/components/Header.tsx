import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () =>  {
    return (
        <header style={{
            background: '#333',
            color: '#fff',
            textAlign: 'right',
            padding: '10px',
            display: 'inline-flex'
          }}>
            <h1 style={{textAlign: 'left', paddingRight: '64px'}}>
                Camino credential stamp holders - Admin panel
            </h1>
            <Link style={{
                paddingTop: '16px',
                paddingLeft: '64px',
                color: '#fff',
                textDecoration: 'none',
                textAlign: 'right'
            }} to="/">Home</Link>
        </header>
    )
}
