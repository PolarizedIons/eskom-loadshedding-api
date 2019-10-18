import HTTPClient from './HTTPClient';
import { LoadsheddingStage, LoadsheddingStageRaw, unmapRaw } from '../enums/LoadsheddingStage';

export class Status extends HTTPClient {
    public static async getStatusRaw(): Promise<LoadsheddingStageRaw> {
        try {
            const resp = await this.get('/GetStatus');
            return resp.data;
        } catch (e) {
            return LoadsheddingStageRaw.UNKNOWN;
        }
    }

    public static async getStatus(): Promise<LoadsheddingStage> {
        const status = await this.getStatusRaw();
        return unmapRaw(status);
    }
}
