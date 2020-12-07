import React, { useEffect, useState } from 'react'
import NetworkService from '../../../services/NetworkService';
import { RouteComponentProps, withRouter } from 'react-router';
import { ContentLayout } from '../../layouts/MainLayout';
import { Button, Grid } from '@material-ui/core';
import WithModal from '../../molecules/withModal';
import CreateRouteOwner from './modals/create';
import StickyHeadTable from "../../molecules/dataGrid";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

type RouteOwnersProps = RouteComponentProps;

export const Path = "/routeOwners";
export const Description = "Route owners";

const RouteOwners: React.FC<RouteOwnersProps> = ({ history }) =>  {
    const [routeOwners, setRouteOwners ] = useState<Array<any>>([]);
    const goHome = () => history.push('/');

    useEffect(() => {
        const getRouteOwners = async () => {
          await NetworkService
            .get('RouteOwner')
            .then((data: any) => {
                setRouteOwners(data);
            });
        };
    
        getRouteOwners();
      }, []);

    return (
        <>
            <div>
                <Button style={{alignSelf: 'left'}} onClick={goHome}>
                    <ArrowBackIosIcon/>
                </Button>
                <WithModal buttonText={"Register"} title={'Create new route owner'}>
                    <CreateRouteOwner/>
                </WithModal>
            </div>
            <ContentLayout>
            <StickyHeadTable/>
                {/* <Grid>

                {routeOwners.map((p: RouteOwner) => {return <Row}}
                </Grid> */}
            </ContentLayout>
        </>
    )
}

export default withRouter(RouteOwners);