import React , { useContext, useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { RouteOwner } from "../../../../services/model/RouteOwner";
import NetworkService from "../../../../services/NetworkService";
import { Button, CircularProgress } from '@material-ui/core';
import { LayerContext } from '../LayerContext';
import { Map } from "../map";
import { PrivateAssetTransaction } from "../../../../services/model/PrivateAssetTransaction";

interface CreatePlaceModalProps {
    confirm: () => void;
    cancel: () => void;
  }

export default function CreatePlaceModal(props: CreatePlaceModalProps) {
const initialValues: PrivateAssetTransaction = new PrivateAssetTransaction({});

const [isLoading, setIsLoading ] = useState<boolean>(false);
const { coordinates } = useContext(LayerContext);
const { cancel, confirm } = props;
const [routeOwners, setRouteOwners ] = useState<Array<RouteOwner>>([]);

useEffect(() => {
    const getRouteOwners = async () => {
        await NetworkService
            .get('RouteOwner')
            .then((data: any) => {
                setRouteOwners(data);
            });
    };

    (async () => {
        await getRouteOwners();
    })();
  }, []);


  return (
    <div style={{height: '500px', width: '800px'}}>
        <Formik
            initialValues={initialValues}
            onSubmit={async (values, actions) => {
                setIsLoading(true);
                try{
                    delete values.id;
                    delete values.timestamp;
                    delete values.transactionId;
                    values.stampTemplate = "stampTemplate";
                    values.longitude = coordinates[1].toString();
                    values.latitude = coordinates[0].toString();
                    values.routeOwner = routeOwners[0];

                    await NetworkService.create("CreateNewAsset", values);
                }
                catch{
                    cancel();
                }
                finally{
                    setIsLoading(false);
                }

                confirm();
            }}>
            <Form style={{height: 'inherit'}}>
                {isLoading === true ? (
                    <div style={{alignContent: 'center'}}>
                        <CircularProgress />
                    </div>
                ) : (
                <>
                    <span style={{
                        display: 'flex',
                        flexDirection: 'row',
                        height: '100%',
                        width: '100%'}}>
                        <div style={{
                            width: '50%',
                            height:'100%',
                            border: '1px solid black'}}>
                            <label htmlFor="name">Name: </label>
                            <br/>
                            <br/>
                            <Field id="name" name="name" placeholder="name" style={{
                                width:'70%',
                                border: '1px solid black'}}/>
                            <br/>
                            <br/>
                            <label htmlFor="lon">Lon: </label>
                            <br/>
                            <br/>
                            <Field
                                disabled
                                id="lon"
                                name="lon"
                                value={coordinates === undefined ? 'unset' : coordinates[1]}
                                style={{
                                    width:'70%',
                                    border: '1px solid black'}}/>
                            <br/>
                            <br/>
                            <label htmlFor="lang">Lang: </label>
                            <br/>
                            <br/>
                            <Field 
                                disabled
                                id="lang"
                                name="lang"
                                value={coordinates === undefined ? 'unset' : coordinates[0]}
                                style={{
                                width:'70%',
                                border: '1px solid black'}}/>
                            <br/>
                            <br/>
                        </div>
                        <div style={{
                            border: '1px solid black',
                            width: '100%', height:'inherit'}}>
                            <Map isAddPlaceButtonActive={true}/>
                        </div>
                    </span>
                    <Button onClick={() => cancel()}>Cancel</Button>
                    <Button type="submit">Submit</Button>
                </>
                )}
            </Form>
        </Formik>
</div>
  );
}