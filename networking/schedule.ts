import cheerio from 'cheerio';
import HTTPClient from './HTTPClient';
import { LoadsheddingStage } from '../enums/LoadsheddingStage';
import { LoadsheddingSchedule } from '../models/LoadsheddingSchedule';
import { scheduleParser } from '../parser/ScheduleParser';

export class Schedule extends HTTPClient {
    private static async getScheduleRaw(suburbId: number, stage: LoadsheddingStage): Promise<string> {
        const resp = await this.get(`/GetScheduleM/${suburbId}/${stage}/_/1`);
        return resp.data;
    }

    public static async getScheduleRawHTML(suburbId: number, stage: LoadsheddingStage): Promise<string> {
        const html = await this.getScheduleRaw(suburbId, stage);
        return cheerio.load(html).html();
    }

    public static async getScheduleRawText(suburbId: number, stage: LoadsheddingStage): Promise<string> {
        const html = await this.getScheduleRaw(suburbId, stage);
        return cheerio
            .load(html)('#schedulem')
            .text();
    }

    public static async getSchedule(suburbId: number, stage: LoadsheddingStage): Promise<LoadsheddingSchedule> {
        return this.getScheduleRawText(suburbId, stage).then(lines => scheduleParser(lines));
    }

    public static async getFullSchedule(suburbId: number): Promise<LoadsheddingSchedule[]> {
        return Promise.all([
            this.getSchedule(suburbId, LoadsheddingStage.STAGE_1),
            this.getSchedule(suburbId, LoadsheddingStage.STAGE_2),
            this.getSchedule(suburbId, LoadsheddingStage.STAGE_3),
            this.getSchedule(suburbId, LoadsheddingStage.STAGE_4),
        ]);
    }
}
