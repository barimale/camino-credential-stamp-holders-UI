import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { RouteOwner } from "../../../../services/model/RouteOwner";
import NetworkService from "../../../../services/NetworkService";
import { Button, CircularProgress, InputLabel, MenuItem, Select } from '@material-ui/core';
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
const [country, setCountry] = useState<string>('PORTUGAL');
const [open, setOpen] = useState(false);

const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCountry(event.target.value as string);
};

const handleClose = () => {
  setOpen(false);
};

const handleOpen = () => {
  setOpen(true);
};

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
                        countryType: country});
                
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
                        <InputLabel id="demo-controlled-open-select-label">Type:</InputLabel>
                        <Select
                        style={{width: '80%'}}
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={country}
                        onChange={handleChange}
                        >
                            <MenuItem value={'FRANCE'}>FRANCE</MenuItem>
                            <MenuItem value={'PORTUGAL'}>PORTUGAL</MenuItem>
                            <MenuItem value={'SPAIN'}>SPAIN</MenuItem>
                        </Select>
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