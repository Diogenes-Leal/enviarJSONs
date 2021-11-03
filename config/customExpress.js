const express = require('express');
const consign = require('consign');
// const cors = require('cors');

module.exports = () => {
    const app = express();
    // app.use(cors({
    //     origin: "https://www.youtube.com",
    //     methods: ['GET']
    // }));
    
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    consign().include('controllers').into(app)
    
    return app;
}