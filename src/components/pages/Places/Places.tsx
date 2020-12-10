import { useEffect, useState } from 'react';
import * as React from 'react';
import NetworkService from '../../../services/NetworkService';
import { RouteComponentProps, withRouter } from 'react-router';
import { ContentLayout } from '../../layouts/MainLayout';
import { Button, CircularProgress } from '@material-ui/core';
import StickyHeadTable from "./list";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { PrivateAssetTransaction } from "../../../services/model/PrivateAssetTransaction";
import { Map } from "./map";
import { LayerContextProvider } from './LayerContext';
import { useModal } from '../../hooks/useModal';
import { Modal } from '../../molecules/Modal';
import CreatePlaceModal from './modals/create';

type PlacesProps = RouteComponentProps;

export const Path = "/places";
export const Description = "Albergues and cafeterias";

const Piligrims: React.FC<PlacesProps> = ({ history }) =>  {
    const [ places, setPlaces ] = useState<Array<PrivateAssetTransaction>>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ isPressed ] = useState<boolean>(false);
    const { isShown, toggle } = useModal();

    const goHome = () => history.push('/');

    const getPlacesAsTransactions = async () => {
        await NetworkService
          .get('CreateNewAsset')
          .then((data: any) => {
              setPlaces(data);
          });
      };

    const onConfirm = async () => {
        await getPlacesAsTransactions();
        toggle();
    };

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            await getPlacesAsTransactions();
            setIsLoading(false);
        })();
      }, []);

    return (
        <LayerContextProvider>
            <div>
                <Button 
                    style={{alignSelf: 'left'}}
                    onClick={goHome}>
                    <ArrowBackIosIcon/>
                </Button>
                {isLoading === false && (
                    <>
                        <Button onClick={toggle}>Add place</Button>
                        <Modal 
                            headerText={'Add new place'}
                            isShown={isShown}
                            hide={toggle}
                            width={800}
                            modalContent={
                                <CreatePlaceModal
                                    confirm={onConfirm}
                                    cancel={toggle}
                                />
                            }
                        />
                    </>
                )}
            </div>
            <ContentLayout>
            {isLoading === true ? (
                <CircularProgress />
            ) : (
                <span style={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100%',
                    width: '100%'}}>
                    <div style={{
                        width: isPressed ? '50%': '100%',
                        height:'100%',
                        border: '1px solid black'}}>
                        {places.length > 0 ? (
                            <StickyHeadTable places={places}/>
                        ) : (
                            <div style={{
                                width: '100%',
                                height: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                display: 'flex'}}>
                                <p>There are no places defined in the system yet.</p>
                            </div>
                        )}
                    </div>
                    {isPressed && (
                        <div style={{
                            border: isPressed ? '3px solid #C1272D' : '1px solid black',
                            width: '100%', height:'inherit'}}>
                            <Map isAddPlaceButtonActive={isPressed}/>
                        </div>
                    )}
                </span>
            )}
            </ContentLayout>
        </LayerContextProvider>
    )
}

export default withRouter(Piligrims);