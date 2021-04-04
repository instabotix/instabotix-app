const express = require('express');
const app = express();
const cors = require('cors');

require('./src/db/connect')

const Chatbot = require('./src/routes/watson_route');



app.use(cors())
app.use(express.json())


app.use('/chatbot', Chatbot)

app.listen(4000)