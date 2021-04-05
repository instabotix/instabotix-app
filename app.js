const express = require('express');
const app = express();
const cors = require('cors');

require('./src/db/connect');

const Vtex = require('./src/routes/vtex_routes')
const Chatbot = require('./src/routes/watson_route');
const LookupBot = require('./src/routes/lookup_route')


app.use(cors());
app.use(express.json());

app.use('/getvtex', Vtex)
app.use('/chatbot', Chatbot);
app.use('/lookup', LookupBot);

app.listen(4000);
