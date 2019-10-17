import axios, { AxiosResponse } from 'axios';

export default class HTTPClient {
    protected static BASE_URL = 'http://loadshedding.eskom.co.za/LoadShedding';

    protected static get(path: string): Promise<AxiosResponse<any>> {
        return axios.get(this.BASE_URL + path + '?_=' + (new Date()).getTime());
    }
}