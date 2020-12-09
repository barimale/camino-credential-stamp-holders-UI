import React, { useEffect, useState } from 'react'
import NetworkService from '../../../services/NetworkService';
import { RouteComponentProps, withRouter } from 'react-router';
import { ContentLayout } from '../../layouts/MainLayout';
import { Button, CircularProgress } from '@material-ui/core';
import StickyHeadTable from "./list";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { PrivateAssetTransaction } from "../../../services/model/PrivateAssetTransaction";
import { Map } from "./map";

type PlacesProps = RouteComponentProps;

export const Path = "/places";
export const Description = "Albergues and cafeterias";

const Piligrims: React.FC<PlacesProps> = ({ history }) =>  {
    const [ places, setPlaces ] = useState<Array<PrivateAssetTransaction>>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(true);

    const goHome = () => history.push('/');

    useEffect(() => {
        const getPlacesAsTransactions = async () => {
          await NetworkService
            .get('CreateNewAsset')
            .then((data: any) => {
                setPlaces(data);
            });
        };
    
        (async () => {
            setIsLoading(true);
            await getPlacesAsTransactions();
            setIsLoading(false);
        })();
      }, []);

    return (
        <>
            <div>
                <Button style={{alignSelf: 'left'}} onClick={goHome}>
                    <ArrowBackIosIcon/>
                </Button>
            </div>
            <ContentLayout>
            {isLoading === true ? (
                <CircularProgress />
            ) :(
                <span style={{display: 'flex', flexDirection: 'row', height: '100%', width: '100%'}}>
                    <div style={{width: '50%', height:'100%', border: '1px solid black'}}>
                        {places.length > 0 ? (
                            <StickyHeadTable places={places}/>
                        ) : (
                            <div style={{width: '100%', height: '100%', alignItems: 'center',
                            justifyContent: 'center', textAlign: 'center', display: 'flex'}}>
                                <p>There are no places already defined in the system.</p>
                            </div>
                        )}
                    </div>
                    <div style={{width: '100%', height:'inherit', border: '1px solid black'}}>
                        <Map/>
                    </div>
                </span>
            )}
            </ContentLayout>
        </>
    )
}

export default withRouter(Piligrims);