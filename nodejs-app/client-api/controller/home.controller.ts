import express from 'express';
const homeRouter = express.Router();
import path from 'path';
import "reflect-metadata";
import fs from 'fs';
import { MessageHelper } from "../../app/helper/message.helper";
import ResultModel from "../../app/core/result.model";

homeRouter.get('/', async function (req, res) {
    console.log("Got a GET request for the homepage");
    const viewPath = path.join(__dirname, 'view');
    console.log(viewPath);
    res.sendFile( viewPath + "/index.html" );
});

homeRouter.get('/CustomerTripAPI/operationalPnr', async function (req, res) {
    console.log("Got a GET request for the cteds json");
    let result;
    fs.readFile("./db-json/cteds_response.json", "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file from disk:", err);
            result = ResultModel.Fail(MessageHelper.UnhandledError);
            console.log("cteds json file - error: ", result);
            res.json(result);
        }
        try {
            console.log("cteds json file - data: ", data);
            result = JSON.parse(data);
            console.log("result :", result);
            res.json(result);
            //var openApiResult = { response: 'success', body: result.customerTripAPIPassengerVo };
            //res.json(openApiResult);
        } catch (err) {
            console.log("Error parsing JSON string:", err);
            result = ResultModel.Fail(MessageHelper.UnhandledError);
            console.log("cteds json file - error: ", result);
            res.json(result);
        }
    });
});

export default homeRouter;