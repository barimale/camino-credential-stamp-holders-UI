import 'reflect-metadata';
import { Base, Model, Primed } from './base';

    @Model
    export class RouteOwner extends Base<RouteOwner> {
        @Primed()
        id: string = '';

        @Primed()
        name: string = '';

        @Primed()
        countryType: 'SPAIN' | 'PORTUGAL' | 'FRANCE' = 'PORTUGAL';

    }