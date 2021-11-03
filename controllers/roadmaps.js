const roadmaps = require('../models/roadmaps');
const { fork } = require('child_process');

module.exports = app => {
    app.get('/roadmaps', (req, res) => {
        // let child = fork('A:\\Users\\dioge\\Documents\\1. Projetos\\2. Sistemas\\1. RoadMap\\9. Projeto\\enviarJSONs_API\\models\\roadmaps.js');
        // const career = req.body.Career;

        // child.on('message', mensagem => {
        //     console.log(typeof(mensagem))
        //     if(mensagem === 'NOT FOUND'){
        //         res.status(300).send('O nome informado não corresponde a nenhum arquivo existente');
        //     } else {
        //         res.status(200).send(mensagem);
        //     }
        // })

        // child.send(career);

        const career = req.body.Career;
        const data = roadmaps(career);

        res.status(200).send(data);
    })
}