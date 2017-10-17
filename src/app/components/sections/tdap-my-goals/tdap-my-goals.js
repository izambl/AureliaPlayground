import { inject } from 'aurelia-framework';
import ApiService from 'app/services/tdap-api-services';

@inject(ApiService)
export class TdapMyGoals
{
    constructor(api) {
        this.api = api;
    }

    activate() {
        this.api.getPriorities().then(p => {
            console.log(p);
        });
    }
}
