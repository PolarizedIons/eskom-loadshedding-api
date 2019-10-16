import HTTPClient from './HTTPClient';
import { LoadsheddingStatus, LoadsheddingStatusRaw, unmapRaw } from '../enums/LoadsheddingStatus';

export class Status {
    public static getStatusRaw(): Promise<LoadsheddingStatusRaw> {
        return HTTPClient.get('/GetStatus')
            .then((resp) => resp.data)
            .catch(() => LoadsheddingStatus.UNKNOWN);
    }

    public static getStatus(): Promise<LoadsheddingStatus> {
        return this.getStatusRaw()
            .then(status => unmapRaw(status));
    }
}