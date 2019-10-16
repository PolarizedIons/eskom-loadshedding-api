import api from './index';

console.log('###############');
console.log('   Eskom API   ');
console.log('###############');

api.statusRaw().then(status => console.log('Current status: (raw)', status));
api.status().then(status => console.log('Current status: ', status));
