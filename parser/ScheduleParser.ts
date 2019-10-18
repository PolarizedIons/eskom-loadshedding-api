import moment from 'moment';
import { LoadsheddingSchedule } from '../models/LoadsheddingSchedule';

export function scheduleParser(scheduleText: string): LoadsheddingSchedule {
    // Prep lines
    const scheduleLines = scheduleText
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(line => !!line);

    // Split into days/times
    let scheduleDays = [];
    let day = '';
    let times = [];
    for (const line of scheduleLines) {
        if (line.indexOf(' - ') === -1) {
            if (day) {
                scheduleDays.push({
                    day,
                    times,
                });
            }

            day = line.split(', ')[1];
            times = [];
        } else {
            times.push(line.split(' - '));
        }
    }

    // Parse days/times
    let wasDec = false;
    let year = new Date().getFullYear();
    scheduleDays = scheduleDays.map(scheduleDay => {
        if (scheduleDay.day.indexOf('Dec') > -1) {
            wasDec = true;
        }

        if (wasDec && scheduleDay.day.indexOf('Jan') > -1) {
            year += 1;
        }

        const daySplit = scheduleDay.day.split(' ');
        const dayNum = daySplit[0];
        const monthNum = moment()
            .month(daySplit[1])
            .format('M');
        const day = moment(`${year}-${monthNum}-${dayNum}`, 'YYYY-MM-DD').toDate();
        const times = scheduleDay.times.map(timeArr => {
            const startTime = timeArr[0];
            const endTime = timeArr[1];

            let overMidnight = false;
            if (parseInt(startTime.split(':')[0], 10) > parseInt(endTime.split(':')[0], 10)) {
                overMidnight = true;
            }

            return [
                moment(`${year}-${monthNum}-${dayNum} ${startTime}`, 'YYYY-MM-DD HH:mm:ss').toDate(),
                moment(`${year}-${monthNum}-${overMidnight ? parseInt(dayNum, 10) + 1 : dayNum} ${endTime}`, 'YYYY-MM-DD HH:mm:ss').toDate(),
            ];
        });

        return {
            day,
            times,
        };
    });

    const schedule = [];
    for (const scheduleDay of scheduleDays) {
        schedule.push({
            day: scheduleDay.day,
            times: scheduleDay.times.map(times => ({
                startTime: times[0],
                endTime: times[1],
            })),
        });
    }

    return {
        schedule,
    };
}
