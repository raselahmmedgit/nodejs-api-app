"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var homeRouter = express_1.default.Router();
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
require("reflect-metadata");
homeRouter.get('/', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var viewPath;
        return __generator(this, function (_a) {
            console.log("Got a GET request for the home");
            viewPath = path_1.default.join(__dirname, 'views');
            console.log(viewPath);
            res.sendFile(viewPath + "/index.html");
            return [2 /*return*/];
        });
    });
});
homeRouter.get('/CustomerTripAPI/operationalPnr', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            console.log("Got a GET request for the cteds json");
            fs_1.default.readFile("./db-json/cteds_response.json", "utf8", function (err, data) {
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
                }
                catch (err) {
                    console.log("Error parsing JSON string: ", err);
                    result = { success: false, message: 'We are facing some problem while processing the current request. Please try again later.', messageType: 'danger' };
                    console.log("cteds json file - error: ", result);
                    res.json(result);
                }
            });
            return [2 /*return*/];
        });
    });
});
exports.default = homeRouter;
