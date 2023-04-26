/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express, { request, response } from "express";
import cors from "cors";
import helmet from "helmet";
import { userLoginRouter } from "./routers/UserLoginRouter";
import { userProfileRouter } from "./routers/UserProfileRouter";

dotenv.config();

/**
 * App Variables
 */

if(!process.env.NODE_PORT){
    process.exit(1);
}

const PORT: number = parseInt(process.env.NODE_PORT as string, 10);
const app = express();
const bodyParser = require('body-parser') ;

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/login/:userid/",userLoginRouter);
app.use("/",userProfileRouter);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});