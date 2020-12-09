import 'reflect-metadata';
import { Base, Model, Primed } from './base';
import { RouteOwner } from './RouteOwner';

    @Model
    export class PrivateAssetTransaction extends Base<PrivateAssetTransaction> {
        @Primed()
        id: string | undefined = '';

        @Primed()
        assetType: 'ALBERGUE' | 'CAFETERIA' = 'ALBERGUE';

        @Primed()
        longitude: string = '';

        @Primed()
        latitude: string = '';

        @Primed()
        stampTemplate: string = '';

        @Primed()
        name: string = '';

        @Primed(RouteOwner)
        routeOwner: RouteOwner = new RouteOwner({});

        @Primed()
        transactionId: string | undefined = undefined;

        @Primed()
        timestamp: string | undefined = undefined;
    }