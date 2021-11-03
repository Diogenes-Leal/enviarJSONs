const fs = require('fs');
const barra = __dirname.indexOf('/') > -1 ? '/' : '\\';

function getDirName(){
    return __dirname.replace('models', `jsons${barra}roadmaps`);
}

function getJSON(fileName){
    let pathFile = `${getDirName()}${barra}${fileName}.json`;
    let data = fs.existsSync(pathFile) ? fs.readFileSync(pathFile) : null;
    return data;
}

process.on('message', mensagem => {console.log(mensagem)
    let file = getJSON(mensagem);

    if(file){
        file = JSON.parse(file)
        process.send(file);
    } else {
        process.send('NOT FOUND');
    }
})

module.exports = getJSON;