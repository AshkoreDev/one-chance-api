const express = require('express');
const { configOptions } = require('./config/config.js');
const routerApi = require('./routes/index.js');
const { legErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler.js');

const app = express();
const port = configOptions.port;

app.use(express.json());

app.get('/api', (req, res) => res.send('HOME'));
routerApi(app);
app.use((req, res) => res.status(404).json({ message: 'ERROR EN LA SOLICITUD.' }));

app.use(legErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => console.log(`http://localhost:${port}`));