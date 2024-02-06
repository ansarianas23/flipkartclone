import conf from "../config/conf";
import { Client, Account , ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    // Service to create account by email
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                return this.login({email, password})
            }else{
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite service :: login ::", error)
        }
    }

    // Service to login account by email
    async login({email, password}){
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            console.log("Appwrite service :: login ::", error)
        }
    }

    // Service to get login by OTP on phone
    async getLoginOtp(phoneNo){
        try {
            const sessionToken = await this.account.createPhoneSession(ID.unique(), '+91'+ phoneNo)
            return sessionToken;

        } catch (error) {
            console.log("Appwrite service :: getLoginOtp ::", error)
        }
    }

    // Service to login by OTP
    async loginByOtp({uID, combinedOTP}){
        try {
            return await this.account.updatePhoneSession(uID, combinedOTP)  // both param should be string and when passes variable name also should be same
        } catch (error) {
            console.log("Appwrite service :: loginByOtp ::", error)
        }
    }

    // Service to get current user by email or phone
    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: currentUser ::", error)
        }

        return null;
    }

    //  Service to logout session
    async logout(){
        try {
            await this.account.deleteSession('current')
        } catch (error) {
            console.log("Appwrite service :: logout ::", error)
        }
    }

}

const authService = new AuthService()

export default authService;