import 'reflect-metadata';
import { Base, Model, Primed } from './base';

    @Model
    export class PrivateAssetTransaction extends Base<PrivateAssetTransaction> {
        @Primed()
        id: string | undefined = '';

        @Primed()
        assetType: string = '';

        @Primed()
        longitude: string = '';

        @Primed()
        latitude: string = '';

        @Primed()
        stampTemplate: string = '';

        @Primed()
        name: string = '';

        @Primed()
        routeOwner: string = '';

        @Primed()
        transactionId: string | undefined = undefined;

        @Primed()
        timestamp: string | undefined = undefined;
    }