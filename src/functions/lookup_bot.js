const Instagram = require('instagram-web-api');
const Comentarios = require('../schema/comment_schema')

const commentMonitor = () =>{
    
    const [ username, password ] = [ 'instabotix_testes', 'Brasavtex24' ];

    // Biblioteca da API não-oficial do Instagram
    const client = new Instagram({username, password});

  
    
    (async () => {

        //Fazendo login no Instagram
        await client.login().then(res => console.log(res))
        // const pega = await client.getActivity()
        const atividade = await client.getActivity();
        const notificacoes = atividade.activity_feed.edge_web_activity_feed.edges;
        // const atividade = JSON.stringify(pega)

        notificacoes.forEach((notificacao) => {
            // Seleciona apenas as notificação referentes a comentários
            if (notificacao.node.__typename === 'GraphCommentMediaStory') {
                const comentario_id = notificacao.node.id.split('_').slice(1).join('_');
                // Procura no banco de dados se o comentário já foi endereçado
                Comentarios.find({comentario: comentario_id}, (err, doc) => {
                    if (doc.length === 0) {
                        //Seleciona os detelhes do comentário para enviar para o chatbot
                        Comentarios.create({comentario: comentario_id}, (err, doc) => {
                            let comentario = {
                                comentario_id: comentario_id,
                                timestamp: notificacao.node.timestamp,
                                usuario: {
                                    id: notificacao.node.user.id,
                                    usuario: notificacao.node.user.username,
                                    nome_completo: notificacao.node.user.full_name
                                },
                                media_id:  notificacao.node.media.shortcode,
                                comentario: notificacao.node.text
                            }
                            console.log(comentario);
                        });
                    }
                }
                );
            }
        })

        // const notificacoes = atividade.activity_feed.edge_web_activity_feed.edges;
        console.log(atividade);
    })
    ()
    .catch((erro) => console.log(erro));

}

module.exports = commentMonitor; 