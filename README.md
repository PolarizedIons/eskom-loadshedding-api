# Eskom Loadshedding API

Basic (in-progress) api to expose the eskom endpoints for loadshedding.

## Get the current status

```js
import api from 'eskom-loadshedding-api';
// or const api = require('eskom-loadshedding-api');

api.status()
    .then(status => {
        console.log('Current status: ', status)
    });
```
