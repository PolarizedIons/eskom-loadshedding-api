import { Status } from './networking/status';

export default {
    statusRaw: () => Status.getStatusRaw(),
    status: () => Status.getStatus(),
};
