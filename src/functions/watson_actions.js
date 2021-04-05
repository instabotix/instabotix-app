const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');
const config = require('../config');



    // Config do Watson Assistant
const assistant = new AssistantV2({
    version: '2020-04-01',
    authenticator: new IamAuthenticator({
        apikey: config.ibm.apikey,
    }),
    serviceUrl: config.ibm.url,
});

module.exports = assistant;