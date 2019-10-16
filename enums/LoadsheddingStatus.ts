export enum LoadsheddingStatusRaw {
    UNKNOWN = -1,
    NOT_LOADSHEDDING = 1,
    STAGE_1 = 2,
    STAGE_2 = 3,
    STAGE_3 = 4,
    STAGE_4 = 5,
    STAGE_5 = 6,
    STAGE_6 = 7,
    STAGE_7 = 8,
    STAGE_8 = 9,
}

export enum LoadsheddingStatus {
    UNKNOWN = 'UNKNOWN',
    NOT_LOADSHEDDING = 'NOT_LOADSHEDDING',
    STAGE_1 = 'STAGE_1',
    STAGE_2 = 'STAGE_2',
    STAGE_3 = 'STAGE_3',
    STAGE_4 = 'STAGE_4',
    STAGE_5 = 'STAGE_5',
    STAGE_6 = 'STAGE_6',
    STAGE_7 = 'STAGE_7',
    STAGE_8 = 'STAGE_8',
}

export function unmapRaw(status: LoadsheddingStatusRaw): LoadsheddingStatus {
    switch (status) {
        case LoadsheddingStatusRaw.NOT_LOADSHEDDING:
            return LoadsheddingStatus.NOT_LOADSHEDDING;
        case LoadsheddingStatusRaw.STAGE_1:
            return LoadsheddingStatus.STAGE_1;
        case LoadsheddingStatusRaw.STAGE_2:
            return LoadsheddingStatus.STAGE_2;
        case LoadsheddingStatusRaw.STAGE_3:
            return LoadsheddingStatus.STAGE_3;        
        case LoadsheddingStatusRaw.STAGE_4:
            return LoadsheddingStatus.STAGE_4;        
        case LoadsheddingStatusRaw.STAGE_5:
            return LoadsheddingStatus.STAGE_5;        
        case LoadsheddingStatusRaw.STAGE_6:
            return LoadsheddingStatus.STAGE_6;        
        case LoadsheddingStatusRaw.STAGE_7:
            return LoadsheddingStatus.STAGE_7;        
        case LoadsheddingStatusRaw.STAGE_8:
            return LoadsheddingStatus.STAGE_8;
        default:
            return LoadsheddingStatus.UNKNOWN;
    }
}