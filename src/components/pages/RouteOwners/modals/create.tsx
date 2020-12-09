import React , { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { RouteOwner } from "../../../../services/model/RouteOwner";
import NetworkService from "../../../../services/NetworkService";
import { Button, CircularProgress } from '@material-ui/core';
import { Guid } from "guid-typescript";

interface MyFormValues {
    name: string;
    countryType: 'SPAIN' | 'PORTUGAL' | 'FRANCE';
}

interface CreateRouteOwnerModalProps {
    confirm: () => void;
    cancel: () => void;
  }

export default function CreateRouteOwner(props: CreateRouteOwnerModalProps) {
const initialValues: MyFormValues = { name: '', countryType: 'PORTUGAL'};
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
                        countryType: values.countryType});
                
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
                        <label htmlFor="name">Name: </label>
                        <br/>
                        <br/>
                        <Field id="name" name="name" style={{
                            width:'70%',
                            border: '1px solid black'}}
                        />
                        <br/>
                        <br/>
                        <label htmlFor="name">Country type(SPAIN, PORTUGAL, FRANCE): </label>
                        <br/>
                        <br/>
                        <Field id="countryType" name="countryType" style={{
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