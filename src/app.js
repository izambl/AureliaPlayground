
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { ToggleSidebar } from 'actions/sidebar';

import { WebAPI } from './web-api';
import Routes   from './app/routes';


@inject(WebAPI, EventAggregator)
export class App
{
    constructor(api, ea) {
        this.api = api;
        this.ea  = ea;

        this.sidebarShown = true;

        ea.subscribe(ToggleSidebar,  msg => {
            this.sidebarShown = !this.sidebarShown;
        });
    }

    configureRouter(config, router) {
        config.title = 'Contacts';
        config.map(Routes);

        this.router = router;
    }
}
