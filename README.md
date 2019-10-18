# Eskom Loadshedding API

![Dependencies](https://img.shields.io/david/polarizedions/eskom-loadshedding-api?style=for-the-badge)
![Downloads](https://img.shields.io/npm/dm/eskom-loadshedding-api?style=for-the-badge&color=informational)
![Licence](https://img.shields.io/npm/l/eskom-loadshedding-api?style=for-the-badge&color=red)
![Version](https://img.shields.io/npm/v/eskom-loadshedding-api?style=for-the-badge)

A basic (in-progress) api to expose the Eskom loadshedding endpoints. Typescript ready!

## Usage / Examples

### Get the current status

```js
import { Status, LoadsheddingStatus } from 'eskom-loadshedding-api';

Status.getStatus()
    .then((status: LoadsheddingStatus) =>
        console.log('Current status: ', status)
    );
```

### Check if currently loadshedding
```js
import { Status, LoadsheddingStatus } from 'eskom-loadshedding-api';

Status.getStatus()
    .then(status =>
        console.log('Is currently loadshedding?', status !== LoadsheddingStatus.NOT_LOADSHEDDING)
    );
```

### Search for municipalities

```js
import { Search, Province, Municipality } from 'eskom-loadshedding-api';

Search.getMunicipalities(Province.WESTERN_CAPE)
    .then((municipalities: Municipality[]) => 
        console.log('Western Cape municipalities:', municipalities.map((el: Municipality) => el.name))
    );

```

### Search for suburbs in municipalities

```js
import { Search, Suburb } from 'eskom-loadshedding-api';

Search.getMunicipalitySuburbs(10237 /* Beauford West's id */, 'Aard' /* Search term */)
    .then((suburbs: Suburb[]) =>
        console.log('Filterd suburbs in Beaufort West:', suburbs)
    );
```

### Search for suburbs in SA

```js
import { Search, SearchSuburb } from 'eskom-loadshedding-api';

Search.searchSuburbs('Ashton')
    .then((results: SearchSuburb[]) => 
        console.log('Searching for "Ashton":', results)
    );

```