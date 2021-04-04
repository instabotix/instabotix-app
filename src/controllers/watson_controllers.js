const config = require('../config');
const mongoose = require('mongoose');
const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');
const NewInteraction = mongoose.model('user-interaction', require('../schema/userInteraction') );







// rota para geração de Token de uma sessão com o usuário no IBM Watson Assistant

const gerarToken = async (req, res, next) =>{

    let receivedUserName  = req.body.userName
    let receivedComment   = req.body.initialComment
    let receivedProductID = req.body.productID


    let newuserinteraction = new NewInteraction ({
      ibmToken: '',
      userName: receivedUserName,
      initialComment: receivedComment,
      productID: receivedProductID,
    })

// Config do Watson Assistant
    const assistant = new AssistantV2({
        version: '2020-04-01',
        authenticator: new IamAuthenticator({
          apikey: config.ibm.apikey,
        }),
        serviceUrl: config.ibm.url,
    });
  
  // Criar nova sessão no Watson
  assistant.createSession({
    assistantId: config.ibm.assistant_id
  })
    .then((res) => {
        var sessionIDuser = res.result.session_id
  
        newuserinteraction.ibmToken = sessionIDuser;

        console.log(newuserinteraction);

        const salvarDados = () =>{
          newuserinteraction.save()
        .then(response => {
          return {
            message:'Armazenado com sucesso'
          }
        })
        .catch(error =>{
          console.log(error);
        })
    }

    })
    .catch(err => {
      console.log(err);
    });
}
    

















// Rota para envio de mensagem entre API bot e o IBM Watson Assistant

const sendMessage = () => {
    const assistant = new AssistantV2({
        version: '2020-04-01',
        authenticator: new IamAuthenticator({
          apikey: config.ibm.apikey,
        }),
        serviceUrl: config.ibm.url,
    });

    assistant.message({
      assistantId: config.ibm.assistant_id,
      sessionId: sessionIDuser,
      input: {
        'message_type': 'text',
        'text': 'Hello'
        }
      })
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.log(err);
      });
}
    

const incomingWatson = () => {


}

    
module.exports = { gerarToken, sendMessage, incomingWatson}
        
