
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


// import { Search, Suburb } from './index';
import { Suburb } from './index';


Search.getMunicipalitySuburbs(10237)
    .then((suburbs: Suburb[]) =>
        console.log('All suburbs in Beaufort West:', suburbs)
    );

Search.getMunicipalitySuburbs(10237, 'Aard')
    .then((suburbs: Suburb[]) =>
        console.log('Filterd suburbs in Beaufort West:', suburbs)
    );


// import { Search, SearchSuburb } from './index';
import { SearchSuburb } from './index';

Search.searchSuburbs('Ashton')
    .then((results: SearchSuburb[]) => 
        console.log('Searching for "Ashton":', results)
    );
