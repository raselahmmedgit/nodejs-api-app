import express from 'express';
const homeRouter = express.Router();
import path from 'path';
import  "reflect-metadata";

homeRouter.get('/', async function (req, res) {
    console.log("Got a GET request for the homepage");
    const viewPath = path.join(__dirname, 'view');
    console.log(viewPath);
    res.sendFile( viewPath + "/index.html" );
});

export default homeRouter;