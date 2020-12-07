import React from 'react'
import NetworkService from '../services/NetworkService';
import { RouteComponentProps, withRouter } from 'react-router';

type SomeComponentProps = RouteComponentProps;

const RouteOwners: React.FC<SomeComponentProps> = ({ history }) =>  {
    const goHome = () => history.push('/');

    return (
        <div>
            <button onClick={goHome}>Go Home</button>;
        </div>
    )
}

export default withRouter(RouteOwners);