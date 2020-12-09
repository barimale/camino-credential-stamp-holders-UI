import React, { useEffect, useState } from 'react'
import NetworkService from '../../../services/NetworkService';
import { RouteComponentProps, withRouter } from 'react-router';
import { ContentLayout } from '../../layouts/MainLayout';
import { Button, CircularProgress } from '@material-ui/core';
import { Modal } from '../../molecules/Modal';
import CreateRouteOwner from './modals/create';
import StickyHeadTable from "./list";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { RouteOwner } from "../../../services/model/RouteOwner";
import { useModal } from '../../hooks/useModal';

type RouteOwnersProps = RouteComponentProps;

export const Path = "/routeOwners";
export const Description = "Route owners";

const RouteOwners: React.FC<RouteOwnersProps> = ({ history }) =>  {
    const [routeOwners, setRouteOwners ] = useState<Array<RouteOwner>>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const { isShown, toggle } = useModal();

    const getRouteOwners = async () => {
        await NetworkService
          .get('RouteOwner')
          .then((data: any) => {
              setRouteOwners(data);
          });
      };

    const onConfirm = async () => {
        await getRouteOwners();
        toggle();
    };
    const onCancel = () => toggle(); 
    
    const goHome = () => history.push('/');

    useEffect(() => {
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
                <Button onClick={toggle}>Register</Button>
                <Modal 
                    headerText={'Create new route owner'}
                    isShown={isShown}
                    hide={toggle}
                    modalContent={
                        <CreateRouteOwner
                            confirm={onConfirm}
                            cancel={onCancel}
                        />
                    }
                />
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