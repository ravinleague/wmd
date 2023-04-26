import { IUser } from "./IUser";
import { IUserProfile } from "./IUserProfile";

export interface IMockDataService{
    getAllProfiles():Promise<IUserProfile[]>;
}