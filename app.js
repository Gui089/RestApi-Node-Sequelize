import dotenv from 'dotenv';
dotenv.config();

import './src/database/connection.js';

import express from 'express';
import homeRoutes from './src/routes/home-routes.js';

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
       this.app.use(express.urlencoded({extended:true}));
       this.app.use(express.json());
    }

    routes() {
        this.app.use('/', homeRoutes);
    }
}

export default new App().app;