import {MessageHelper} from "../helper/message-helper";

class ResultModel {
    Success?: boolean;
    Message?: string;
    MessageType?: string;
    ParentId?: number;
    ParentName?: string;
    UploadPath?: string;

    constructor() { }
    
    Info(message?: string) {
        return {
            Success: false,
            Message: message ?? MessageHelper.Info,
            MessageType: MessageHelper.MessageTypeInfo
        };
    }

    Warning(message?: string) {
        return {
            Success: false,
            Message: message ?? MessageHelper.Warning,
            MessageType: MessageHelper.MessageTypeWarning
        };
    }

    Fail(message?: string) {
        return {
            Success: false,
            Message: message ?? MessageHelper.Error,
            MessageType: MessageHelper.MessageTypeDanger
        };
    }

    Ok(message?: string) {
        return {
            Success: true,
            Message: message ?? MessageHelper.Success,
            MessageType: MessageHelper.MessageTypeSuccess
        };
    }

}
export default new ResultModel()