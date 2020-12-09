import 'reflect-metadata';
import { Base, Model, Primed } from './base';

    @Model
    export class RouteOwner extends Base<RouteOwner> {
        @Primed()
        id: string = '';
        @Primed()
        name: string = '';
        @Primed()
        albergues: string = '0';
        @Primed()
        cafeterias: string = '0';
    }