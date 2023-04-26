import express, { Request, Response } from "express";
import { IUserProfile } from "../interfaces/IUserProfile";
import MockDataService from "../services/MockDataService";
export const userProfileRouter = express.Router({mergeParams: true});

userProfileRouter.get("/userprofiles",async(req:Request,res:Response) => {
    const _mockDataService = new MockDataService();
    const allprofiles = await _mockDataService.getAllProfiles();
    console.log(`Returning ${allprofiles.length} user profiles...`);
    res.status(200).send(allprofiles);
});

userProfileRouter.get("/userprofiles/:id",async(req:Request,res:Response) => {
    const id = req.params.id;
    const _mockDataService = new MockDataService();
    const allprofiles = await _mockDataService.getAllProfiles();
    const requiredProfile = allprofiles.find(profile => profile.profileId == Number(id));
    console.log(`Returning ${allprofiles.length} user profiles...`);
    res.status(200).send(requiredProfile);
});