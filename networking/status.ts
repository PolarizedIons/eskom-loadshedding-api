import HTTPClient from './HTTPClient';
import { LoadsheddingStatus, LoadsheddingStatusRaw, unmapRaw } from '../enums/LoadsheddingStatus';

export class Status extends HTTPClient {
    public static async getStatusRaw(): Promise<LoadsheddingStatusRaw> {
        try {
            const resp = await this.get('/GetStatus');
            return resp.data;
        }
        catch (e) {
            return LoadsheddingStatusRaw.UNKNOWN;
        }
    }

    public static async getStatus(): Promise<LoadsheddingStatus> {
        const status = await this.getStatusRaw();
        return unmapRaw(status);
    }
}