const app = require('./app.js');
const { configOptions } = require('./config/config.js');

const port = configOptions.port;

app.listen(port, () => console.log(`http://localhost:${port}`));