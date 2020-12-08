import React, { useEffect, useState } from 'react'
import NetworkService from '../../../services/NetworkService';
import { RouteComponentProps, withRouter } from 'react-router';
import { ContentLayout } from '../../layouts/MainLayout';
import { Button } from '@material-ui/core';
import StickyHeadTable from "./list";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Piligrim } from "../../../services/model/Piligrim";

type PiligrimsProps = RouteComponentProps;

export const Path = "/piligrims";
export const Description = "Piligrims";

const Piligrims: React.FC<PiligrimsProps> = ({ history }) =>  {
    const [piligrims, setPiligrims ] = useState<Array<Piligrim>>([]);
    const goHome = () => history.push('/');

    useEffect(() => {
        const getPiligrims = async () => {
          await NetworkService
            .get('Piligrim')
            .then((data: any) => {
                setPiligrims(data);
            });
        };
    
        getPiligrims();
      }, []);

    return (
        <>
            <div>
                <Button style={{alignSelf: 'left'}} onClick={goHome}>
                    <ArrowBackIosIcon/>
                </Button>
            </div>
            <ContentLayout>
                <StickyHeadTable piligrims={piligrims}/>
            </ContentLayout>
        </>
    )
}

export default withRouter(Piligrims);