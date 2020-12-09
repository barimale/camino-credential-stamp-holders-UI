import 'reflect-metadata';
import { Base, Model, Primed } from './base';

    @Model
    export class Piligrim extends Base<Piligrim> {
        @Primed()
        id: string = '';
        
        @Primed()
        name: string = '';
    }