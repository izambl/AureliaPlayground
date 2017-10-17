import { inject }     from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import Environment    from 'environment';

// fetch API polyfill
import 'whatwg-fetch';

@inject(Environment, HttpClient)
export default class ApiServices
{
    constructor(ENV, fetchClient) {
        this.ENV    = ENV;
        this.http   = fetchClient;

        fetchClient.configure(config => {
            config
            .withBaseUrl(this.ENV.apiURL)
            .withDefaults({
                credentials: 'same-origin',
                headers: {
                    'Accept': 'application/json',
                    'X-Requested-With': 'Fetch'
                }
            });
        });
    }

    getPriorities() {
        return this.http.fetch('/Priorities')
        .then(response => {
            return response.json();
        })
        .catch(response => {
            return false;
        });
    }

    addPriority(priority) {

    }

    getTasks(priority) {

    }

    addTask(task) {

    }
}
