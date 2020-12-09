import 'reflect-metadata';
import { AssetType } from './AssetType';
import { Base, Model, Primed } from './base';
import { RouteOwner } from './RouteOwner';

    @Model
    export class PrivateAssetTransaction extends Base<PrivateAssetTransaction> {
        @Primed()
        id: string = '';

        @Primed()
        assetType: AssetType = AssetType.ALBERGUE;

        @Primed()
        lon: string = '';

        @Primed()
        lang: string = '';

        @Primed()
        picture: string = '';

        @Primed(RouteOwner)
        routeOwner: RouteOwner = new RouteOwner({});

        @Primed()
        transactionId: string | undefined = undefined;

        @Primed()
        timestamp: string | undefined = undefined;
    }