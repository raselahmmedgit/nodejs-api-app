"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message_helper_1 = require("../helper/message.helper");
var ResultModel = /** @class */ (function () {
    function ResultModel() {
    }
    ResultModel.prototype.Info = function (message) {
        return {
            Success: false,
            Message: message !== null && message !== void 0 ? message : message_helper_1.MessageHelper.Info,
            MessageType: message_helper_1.MessageHelper.MessageTypeInfo
        };
    };
    ResultModel.prototype.Warning = function (message) {
        return {
            Success: false,
            Message: message !== null && message !== void 0 ? message : message_helper_1.MessageHelper.Warning,
            MessageType: message_helper_1.MessageHelper.MessageTypeWarning
        };
    };
    ResultModel.prototype.Fail = function (message) {
        return {
            Success: false,
            Message: message !== null && message !== void 0 ? message : message_helper_1.MessageHelper.Error,
            MessageType: message_helper_1.MessageHelper.MessageTypeDanger
        };
    };
    ResultModel.prototype.Ok = function (message) {
        return {
            Success: true,
            Message: message !== null && message !== void 0 ? message : message_helper_1.MessageHelper.Success,
            MessageType: message_helper_1.MessageHelper.MessageTypeSuccess
        };
    };
    return ResultModel;
}());
exports.default = new ResultModel();
