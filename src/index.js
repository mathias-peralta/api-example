const app = require('./app');
require('./database');

async function main() {
    await app.listen(app.get('port'));
    console.log('Server listen on port:', app.get('port'));
}

main();