
console.log('###############');
console.log('   Eskom API   ');
console.log('###############');

import { Status, LoadsheddingStatus } from './index';

Status.getStatus()
    .then((status: LoadsheddingStatus) =>
        console.log('Current status: ', status)
    );

Status.getStatus()
    .then(status =>
        console.log('Is currently loadshedding?', status !== LoadsheddingStatus.NOT_LOADSHEDDING)
    );


import { Search, Province, Municipality } from './index';

Search.getMunicipalities(Province.WESTERN_CAPE)
    .then((municipalities: Municipality[]) => 
        console.log('Western Cape municipalities:', municipalities.map((el: Municipality) => el.name))
    );
