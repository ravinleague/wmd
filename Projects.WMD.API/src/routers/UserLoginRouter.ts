/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import { ILogin } from "../interfaces/ILogin";
import * as UserService from "../services/UserService";
/**
 * Router Definition
 */
export const userLoginRouter = express.Router({mergeParams: true});

/**
 * Controller Definitions
 */

// GET items
// GET items/:id

// POST items
userLoginRouter.post("/authenticate",async (req:Request,res:Response) => {
     console.log(req.params);
    // console.log(req.params);
    // var loginDetails:ILogin = {login:req.params['userid'],password:req.params['password']};
    // const isLoginSuccess = UserService.loginUser(loginDetails.login,loginDetails.password);
    // if(!isLoginSuccess) {
    //     res.status(401).json({message:"Authentication failed. Bad username or password"});
    // }else{
    //     res.status(200).json({message:"success"});
    // }
    res.status(200).json({message:"Authenticate success"});
});

userLoginRouter.post("/forgotpassword",async (req:Request,res:Response) => {
    // var loginDetails:ILogin = {login:req.params['userid'],password:req.params['password']};
    // const isLoginSuccess = UserService.loginUser(loginDetails.login,loginDetails.password);
    // if(!isLoginSuccess) {
    //     res.status(401).json({message:"Authentication failed. Bad username or password"});
    // }else{
    //     res.status(200).json({message:"success"});
    // }
    res.status(200).json({message:"Forgot password success"});
});

// PUT items/:id

// DELETE items/:id