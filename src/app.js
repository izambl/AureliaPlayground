
import { inject } from 'aurelia-framework';
import { WebAPI } from './web-api';
import Routes   from './app/routes';

@inject(WebAPI)
export class App
{
    constructor(api) {
        this.api = api;
    }

    configureRouter(config, router) {
        config.title = 'Contacts';
        config.map(Routes);

        this.router = router;
    }
}
