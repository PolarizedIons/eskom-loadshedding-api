import { Status, LoadsheddingStatus } from './index';

console.log('###############');
console.log('   Eskom API   ');
console.log('###############');

Status.getStatusRaw()
    .then(status =>
        console.log('Current status: (raw)', status)
    );

Status.getStatus()
    .then(status =>
        console.log('Current status: ', status)
    );

Status.getStatus()
    .then(status =>
        console.log('Is currently loadshedding?', status !== LoadsheddingStatus.NOT_LOADSHEDDING)
    );

