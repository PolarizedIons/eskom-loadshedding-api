# Eskom Loadshedding API

![Dependencies](https://img.shields.io/david/polarizedions/eskom-loadshedding-api?style=for-the-badge)
![Downloads](https://img.shields.io/npm/dm/eskom-loadshedding-api?style=for-the-badge&color=informational)
![Licence](https://img.shields.io/npm/l/eskom-loadshedding-api?style=for-the-badge&color=red)
![Version](https://img.shields.io/npm/v/eskom-loadshedding-api?style=for-the-badge)

A basic (in-progress) api to expose the Eskom loadshedding endpoints. Typescript ready!

## Usage / Examples

### Get the current status

```ts
import { Status, LoadsheddingStatus } from 'eskom-loadshedding-api';

Status.getStatus()
    .then((status: LoadsheddingStatus) =>
        console.log('Current status: ', status)
    );
```

### Check if currently loadshedding
```ts
import { Status, LoadsheddingStatus } from 'eskom-loadshedding-api';

Status.getStatus()
    .then(status =>
        console.log('Is currently loadshedding?', status !== LoadsheddingStatus.NOT_LOADSHEDDING)
    );
```

### Search for municipalities

```ts
import { Search, Province, Municipality } from 'eskom-loadshedding-api';

Search.getMunicipalities(Province.WESTERN_CAPE)
    .then((municipalities: Municipality[]) => 
        console.log('Western Cape municipalities:', municipalities.map((el: Municipality) => el.name))
    );

```

### Search for suburbs in municipalities

```ts
import { Search, Suburb } from 'eskom-loadshedding-api';

Search.getMunicipalitySuburbs(10237 /* Beauford West's id */, 'Aard' /* Search term */)
    .then((suburbs: Suburb[]) =>
        console.log('Filterd suburbs in Beaufort West:', suburbs)
    );
```

### Search for suburbs in SA

```ts
import { Search, SearchSuburb } from 'eskom-loadshedding-api';

Search.searchSuburbs('Ashton')
    .then((results: SearchSuburb[]) => 
        console.log('Searching for "Ashton":', results)
    );

```

## Methods

### Status
+ Status.getStatus(): Promise<LoadsheddingStatus>;
+ Status.getStatusRaw(): Promise<LoadsheddingStatusRaw>;

## Search
+ Search.getMunicipalities(province: Province): Promise<Municipality[]>;
+ Search.getMunicipalitySuburbs(municipalityId: number, searchTerm: string = '', pageNum: number = 1): Promise<Suburb[]>;
+ Search.searchSuburbs(searchTerm: string, maxResults: number = 300): Promise<SearchSuburb[]>;

## Models

### Municipality

```ts
class Municipality {
    public id: number;
    public name: string;
}
}
```

### Suburb

```ts
class Suburb {
    public id: number;
    public name: string;
    public total: number;
}
```

### Search Suburb

```ts
class SearchSuburb {
    municipality: string;
    province: string;
    suburb: string;
    id: number;
    total: number;
}
```


## Enums

### Loadshedding Status
```ts
enum LoadsheddingStatus {
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
```

### Province

```ts
export enum Province {
    EASTERN_CAPE = 1,
    FREE_STATE = 2,
    GAUTENG = 3,
    KWAZULU_NATAL = 4,
    LIMPOPO = 5,
    MPUMALANGA = 6,
    NORTH_WEST = 7,
    NORTHERN_CAPE = 8,
    WESTERN_CAPE = 9,
};
```