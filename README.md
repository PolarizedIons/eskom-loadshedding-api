# Eskom Loadshedding API

Basic (in-progress) api to expose the eskom endpoints for loadshedding.

## Get the current status

```js
import { Status, LoadsheddingStatus } from 'eskom-loadshedding-api';

Status.getStatus()
    .then((status: LoadsheddingStatus) =>
        console.log('Current status: ', status)
    );

Status.getStatus()
    .then(status =>
        console.log('Is currently loadshedding?', status !== LoadsheddingStatus.NOT_LOADSHEDDING)
    );
```

## Search for municipalities

```js
import { Search, Province, Municipality } from 'eskom-loadshedding-api';

Search.getMunicipalities(Province.WESTERN_CAPE)
    .then((municipalities: Municipality[]) => 
        console.log('Western Cape municipalities:', municipalities.map((el: Municipality) => el.name))
    );

```
