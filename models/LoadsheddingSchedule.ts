export interface LoadsheddingSchedule {
    schedule: ScheduleDay[];
}

export interface ScheduleDay {
    day: Date;
    times: ScheduleTime[];
}

export interface ScheduleTime {
    startTime: Date;
    endTime: Date;
}
