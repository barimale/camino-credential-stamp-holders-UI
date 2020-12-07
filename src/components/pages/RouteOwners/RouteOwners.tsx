import React from 'react'
import NetworkService from '../../../services/NetworkService';
import { RouteComponentProps, withRouter } from 'react-router';
import { ContentLayout } from '../../layouts/MainLayout';
import { Button, Grid } from '@material-ui/core';
import WithModal from '../../molecules/withModal';
import CreateRouteOwner from './modals/create';

type SomeComponentProps = RouteComponentProps;

export const Path = "/routeOwners";
export const Description = "Route owners";

const RouteOwners: React.FC<SomeComponentProps> = ({ history }) =>  {
    const goHome = () => history.push('/');

    return (
        <ContentLayout>
            <Grid>
                
            </Grid>
            <Button style={{alignSelf: 'left'}} onClick={goHome}>Go back</Button>
            <WithModal buttonText={"Register"} title={'Create new route owner'}>
                <CreateRouteOwner/>
            </WithModal>
        </ContentLayout>
    )
}

export default withRouter(RouteOwners);