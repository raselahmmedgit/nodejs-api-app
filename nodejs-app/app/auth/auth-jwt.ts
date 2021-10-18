import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"
import { AuthConfig } from "../config/auth-config";
import { MessageHelper } from "../helper/message-helper";
import ResultModel from "../core/result-model";

class AuthJwt {

    async AuthenticateJwt(req: Request, res: Response, next: NextFunction) {
        const authConfigSecret = AuthConfig.Secret;
        const authHeader = req.headers.authorization;
        console.log("authenticateJwt authHeader " + authHeader);
        console.log("authenticateJwt authConfigSecret " + authConfigSecret);
        if (authHeader && authHeader !== "null") {
            // const token = authHeader.split(" ")[1];
            
            jwt.verify(authHeader, authConfigSecret, (err: any, user: any) => {
                if (err) {
                    return res
                        .status(403)
                        .send(
                            { success: false, message: MessageHelper.TokenExpired, messageType: MessageHelper.MessageTypeDanger }
                        )
                }
                //req.user = user
                next()
            })
        } else {
            res.status(403).json(
                { success: false, message: MessageHelper.UnAuthorized, messageType: MessageHelper.MessageTypeDanger }
            )
        }
    }

}

export default new AuthJwt()
