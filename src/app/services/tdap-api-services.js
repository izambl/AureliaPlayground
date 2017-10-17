import { inject }     from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import Environment    from 'environment';

@inject(Environment, HttpClient)
export class ApiServices
{
    constructor(ENV, client) {
        this.ENV    = ENV;
        this.client = client;
    }
}
