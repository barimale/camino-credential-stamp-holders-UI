import React, { useEffect, useState } from 'react'
import NetworkService from '../../../services/NetworkService';
import { RouteComponentProps, withRouter } from 'react-router';
import { ContentLayout } from '../../layouts/MainLayout';
import { Button, CircularProgress } from '@material-ui/core';
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
    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const goHome = () => history.push('/');

    useEffect(() => {
        const getRouteOwners = async () => {
          await NetworkService
            .get('RouteOwner')
            .then((data: any) => {
                setRouteOwners(data);
            });
        };

        (async () => {
            setIsLoading(true);
            await getRouteOwners();
            setIsLoading(false);
        })();
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
                {isLoading === true ? (
                    <CircularProgress />
                ) :(
                    routeOwners.length > 0 ? (
                        <StickyHeadTable routeOwners={routeOwners}/>
                    ) : (
                        <p>There are no route owners existed in the system.</p>
                    )
                )}
            </ContentLayout>
        </>
    )
}

export default withRouter(RouteOwners);