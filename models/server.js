const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = 4001;
        this.productPath = '/';

        //middleware
        this.middleware();

        //Rutas
        this.routes();
    }

    middleware() {
        //cors
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());

        //Directorio Publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.productPath, require('../routes/product'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server working on http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;