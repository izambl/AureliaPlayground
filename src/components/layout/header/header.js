import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { ToggleSidebar } from '../../../actions/sidebar';

@inject(EventAggregator)
export class Header
{
    constructor(ea) {
        this.title = 'title';
        this.ea    = ea;
    }

    toggleSidebar() {
        this.ea.publish(new ToggleSidebar());
    }
}
