import React, { useEffect, useState } from 'react'
import NetworkService from '../../../services/NetworkService';
import { RouteComponentProps, withRouter } from 'react-router';
import { ContentLayout } from '../../layouts/MainLayout';
import { Button } from '@material-ui/core';
import WithModal from '../../molecules/withModal';
import CreateRouteOwner from './modals/create';
import StickyHeadTable from "./list";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { RouteOwner } from "../../../services/model/RouteOwner";

type RouteOwnersProps = RouteComponentProps;

export const Path = "/routeOwners";
export const Description = "Route owners";

const RouteOwners: React.FC<RouteOwnersProps> = ({ history }) =>  {
    const [routeOwners, setRouteOwners ] = useState<Array<RouteOwner>>([]);
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
                <StickyHeadTable routeOwners={routeOwners}/>
            </ContentLayout>
        </>
    )
}

export default withRouter(RouteOwners);