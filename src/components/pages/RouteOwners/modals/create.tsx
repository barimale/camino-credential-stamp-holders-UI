import React , { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { RouteOwner } from "../../../../services/model/RouteOwner";
import NetworkService from "../../../../services/NetworkService";
import { Button, CircularProgress } from '@material-ui/core';
import { Guid } from "guid-typescript";

interface MyFormValues {
    firstName: string; 
}

export default function CreateRouteOwner(props: any) {
const initialValues: MyFormValues = { firstName: '' };
const [isLoading, setIsLoading ] = useState<boolean>(false);

  return (
    <div>
        <Formik
            initialValues={initialValues}
            onSubmit={async (values, actions) => {
                setIsLoading(true);
                try{
                    var newItem = new RouteOwner({
                        id: Guid.create().toString(),
                        name: values.firstName,
                        albergues: '0',
                        cafeterias: '0'});
                
                    await NetworkService.create("RouteOwner", newItem);
                }
                finally{
                    setIsLoading(false);
                    props.close();
                }
            }}>
            <Form>
                {isLoading === true ? (
                    <div style={{alignContent: 'center'}}>
                        <CircularProgress />
                    </div>
                ) : (
                <>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" placeholder="First Name" />
                    <Button type="submit">Submit</Button>
                    <Button>Cancel</Button>
                </>
                )}
            </Form>
        </Formik>
</div>
  );
}