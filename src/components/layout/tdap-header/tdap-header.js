import { inject, containerless } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { ToggleSidebar } from '../../../actions/sidebar';

@containerless
@inject(EventAggregator)
export class TdapHeader
{
    constructor(ea) {
        this.ea    = ea;
    }

    toggleSidebar() {
        this.ea.publish(new ToggleSidebar());
    }
}
