import 'reflect-metadata';
import { Base, Model, Primed } from './base';

    @Model
    export class RouteOwner extends Base<RouteOwner> {
        @Primed
        id: string = '';
        @Primed
        name: string = '';
        @Primed
        balance: string = '0.0';
        @Primed
        insuranceContracts: string = '0';
    }