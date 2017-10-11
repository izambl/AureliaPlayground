import { WebAPI } from '../web-api';
import { EventAggregator } from 'aurelia-event-aggregator';
import { inject } from 'aurelia-framework';
import { ContactUpdated, ContactViewed } from '../messages';

@inject(WebAPI, EventAggregator)
export class ContactList {
    constructor(api, ea) {
        this.api = api;
        this.ea = ea;
        this.selectedId = null;
        this.contacts = [];

        ea.subscribe(ContactViewed,  msg => this.select(msg.contact));
        ea.subscribe(ContactUpdated, msg => {
            let id = msg.contact.id;
            let found = this.contacts.find(x => x.id === id);
            Object.assign(found, msg.contact);
        });
    }

    // Lifecycle
    created() {
        this.api.getContactList().then(contacts => this.contacts = contacts);
    }

    select(contact) {
        return !!(this.selectedId = contact.id);
    }
}
