import React , { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { RouteOwner } from "../../../../services/model/RouteOwner";
import NetworkService from "../../../../services/NetworkService";
import { Button, CircularProgress } from '@material-ui/core';
import { Guid } from "guid-typescript";

interface MyFormValues {
    name: string; 
}

interface CreateRouteOwnerModalProps {
    confirm: () => void;
    cancel: () => void;
  }

export default function CreateRouteOwner(props: CreateRouteOwnerModalProps) {
const initialValues: MyFormValues = { name: '' };
const [isLoading, setIsLoading ] = useState<boolean>(false);
const { cancel, confirm } = props;

  return (
    <div>
        <Formik
            initialValues={initialValues}
            onSubmit={async (values, actions) => {
                setIsLoading(true);
                try{
                    var newItem = new RouteOwner({
                        id: Guid.create().toString(),
                        name: values.name,
                        albergues: '0',
                        cafeterias: '0'});
                
                    await NetworkService.create("RouteOwner", newItem);
                }
                catch{
                    cancel();
                }
                finally{
                    setIsLoading(false);
                }

                confirm();
            }}>
            <Form>
                {isLoading === true ? (
                    <div style={{alignContent: 'center'}}>
                        <CircularProgress />
                    </div>
                ) : (
                    <>
                        <label htmlFor="name">Put here a name of the new route owner: </label>
                        <br/>
                        <br/>
                        <Field id="name" name="name" placeholder="name" style={{
                            width:'70%',
                            border: '1px solid black'}}
                        />
                        <br/>
                        <br/>
                        <Button onClick={() => cancel()}>Cancel</Button>
                        <Button type="submit">Submit</Button>
                    </>
                )}
            </Form>
        </Formik>
</div>
  );
}