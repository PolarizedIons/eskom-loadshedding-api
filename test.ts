
import { LoadsheddingStage, LoadsheddingSchedule, Schedule } from ".";

Schedule.getSchedule(1002702, LoadsheddingStage.STAGE_1)
    .then((schedule: LoadsheddingSchedule) =>
        console.log(JSON.stringify(schedule, null, 4))
);

Schedule.getFullSchedule(1002702)
    .then((schedules: LoadsheddingSchedule[]) =>
        console.log(JSON.stringify(schedules, null, 4))
);
