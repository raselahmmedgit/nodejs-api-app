import express from 'express';
const homeRouter = express.Router();
import path from 'path';
import fs from 'fs';
import  "reflect-metadata";

homeRouter.get('/', async function (req, res) {
    console.log("Got a GET request for the home");
    const viewPath = path.join(__dirname, 'views');
    console.log(viewPath);
    res.sendFile( viewPath + "/index.html" );
});

homeRouter.get('/CustomerTripAPI/operationalPnr', async function (req, res) {
    console.log("Got a GET request for the cteds json");
    let result;
    fs.readFile("./db-json/cteds_response.json", "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file from disk: ", err);
            result = { success: false, message: 'We are facing some problem while processing the current request. Please try again later.', messageType: 'danger' };
            console.log("cteds json file - error: ", result);
            res.json(result);
        }
        try {
            console.log("cteds json file - data: ", data);
            result = JSON.parse(data);
            console.log("result :", result);
            res.json(result);
        } catch (err) {
            console.log("Error parsing JSON string: ", err);
            result = { success: false, message: 'We are facing some problem while processing the current request. Please try again later.', messageType: 'danger' };
            console.log("cteds json file - error: ", result);
            res.json(result);
        }
    });
});

export default homeRouter;