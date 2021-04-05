const config = require('../config');
const assistant = require('../functions/watson_actions')

const Interaction = require('../schema/interaction_schema');


// rota para geração de Token de uma sessão com o usuário no IBM Watson Assistant

const firstContact =  (req, res, next) => {

    let receivedUserName  = req.body.userName;
    let receivedComment   = req.body.initialComment;
    let receivedProductID = req.body.productID;
    

    // Criar nova sessão no Watson
    assistant.createSession({
        assistantId: config.ibm.assistant_id
    })
    .then((session) => {
        var watsonToken = session.result.session_id;

        Interaction.create({
            ibmToken: watsonToken,
            userName: receivedUserName, 
            initialComment: receivedComment,
            productID: receivedProductID,
        })
        .then((doc) => {
            // console.log(doc);
            res.status(200);

            assistant.message({
                assistantId: config.ibm.assistant_id,
                sessionId: watsonToken,
                input: {
                    'message_type': 'text',
                    'text': receivedComment
                }
            })
            .then(res => {
                // var respostaWatson = JSON.stringify(res.result, null, 2)
                // var respostaWatson = JSON.stringify(res.result.output.generic[0].text)
                // console.log(respostaWatson);
                console.log(res.result.output.generic[0].text) 
          
            })
            .catch(err => {
                console.log(err);
            });
            })
    })
};




module.exports = {firstContact};
