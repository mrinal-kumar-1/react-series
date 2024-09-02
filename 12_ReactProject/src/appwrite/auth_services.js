import {Client, Account, ID} from "appwrite"
import config from "../config/config"

//this file is dedicated for authentication related services
export class AuthService{

     client = new Client()
     account;

     constructor(){
        this.client
                  .setEndpoint(config.appwriteUrl)
                  .setProject(config.appwriteProjectId)

        this.account = new Account(this.client)          
     }

     async createAccount({email, password, name}){

           try {

            const userAccount = await this.account.create(ID.unique(), email, password)
            if(userAccount){
                  this.login({email, password})
            }
            else{
                return userAccount;
            }
            
           } catch (error) {
            console.log("Got Appwrite error in createAccount method", error)
           }

     }

     async login({email, password}){

        try {

           return await this.account.createEmailPasswordSession(email, password)
            
        } catch (error) {
            console.log("Got error in Appwrite login method", error)
        }
     }

     async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Got Appwrite error in getCurrentUser method", error)
        }

        //if no account exists
        return null;
     }

     async logout(){

        try {
           return await this.account.deleteSessions()
        } catch (error) {
            console.log("Got Appwrite error in logout method", error)
        }
     }
}

const authService = new AuthService()

export default authService;
