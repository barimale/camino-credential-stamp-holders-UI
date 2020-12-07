import React from 'react'
import NetworkService from '../../services/NetworkService';
import { RouteComponentProps, withRouter } from 'react-router';
import { ContentLayout } from '../layouts/MainLayout';

type SomeComponentProps = RouteComponentProps;

export const Path = "/routeOwners";

const RouteOwners: React.FC<SomeComponentProps> = ({ history }) =>  {
    const goHome = () => history.push('/');

    return (
        <ContentLayout>
            <button onClick={goHome}>Go Home</button>;
        </ContentLayout>
    )
}

export default withRouter(RouteOwners);