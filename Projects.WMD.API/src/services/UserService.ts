// src/items/items.service.ts

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

import { ILogin } from "../interfaces/ILogin";
import { IUser } from "../interfaces/IUser";

/**
 * Data Model Interfaces
 */


/**
 * In-Memory Store
 */
const login:ILogin[] = [
    {id:0, login:"scott@zero.com", password:"GoodForYou"}
];

/**
 * Service Methods
 */

export const loginUser = (loginName:string,password:string) => {
    const userFound = login.find(params => params.login === loginName && params.password === password,);
    return true ? userFound != undefined : false;
};