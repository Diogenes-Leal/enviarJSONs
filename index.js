const customExpress = require('./config/customExpress');
const app = customExpress();

app.listen(2000, () => console.log('API de JSONs rodando na porta 2000'));