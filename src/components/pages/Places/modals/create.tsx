import React , { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { RouteOwner } from "../../../../services/model/RouteOwner";
import NetworkService from "../../../../services/NetworkService";
import { Button, CircularProgress } from '@material-ui/core';
import { Guid } from "guid-typescript";
import { LayerContextProvider } from '../LayerContext';
import { Map } from "../map";
import { PrivateAssetTransaction } from "../../../../services/model/PrivateAssetTransaction";
import { AssetType } from '../../../../services/model/AssetType';

interface CreatePlaceModalProps {
    confirm: () => void;
    cancel: () => void;
    routeOwner: RouteOwner;
  }

export default function CreatePlaceModal(props: CreatePlaceModalProps) {
const initialValues: PrivateAssetTransaction = new PrivateAssetTransaction({
    id: Guid.create().toString(),
    routeOwner: props.routeOwner});

const [isLoading, setIsLoading ] = useState<boolean>(false);
const { cancel, confirm } = props;

  return (
    <div style={{height: '500px', width: '800px'}}>
        <Formik
            initialValues={initialValues}
            onSubmit={async (values, actions) => {
                setIsLoading(true);
                try{
                    delete values.timestamp;
                    delete values.transactionId;
                    values.picture = "PUTPICTUREHERE";

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
                                border: '1px solid black'}}
                            />
                            <br/>
                            <br/>
                            <label htmlFor="lon">Lon: </label>
                            <br/>
                            <br/>
                            <Field id="lon" name="lon" placeholder="lon" style={{
                                width:'70%',
                                border: '1px solid black'}}
                            />
                            <br/>
                            <br/>
                            <label htmlFor="lang">Lang: </label>
                            <br/>
                            <br/>
                            <Field id="lang" name="lang" placeholder="lang" style={{
                                width:'70%',
                                border: '1px solid black'}}
                            />
                        </div>
                        <div style={{
                            border: '1px solid black',
                            width: '100%', height:'inherit'}}>
                            <LayerContextProvider>
                                <Map isAddPlaceButtonActive={true}/>
                            </LayerContextProvider>
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