import {Client, ID, Databases, Storage, Query} from "appwrite"
import config from "../config/config"

//this file is dedicated for database services
export class DatabaseService{

    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
                  .setEndpoint(config.appwriteUrl)
                  .setProject(config.appwriteProjectId)

        this.databases = new Databases(this.client) 
        this.bucket = new Storage(this.client)
    }

    async createPost({title, content, slug, featuredImage, status, userId}){
            try{
                return await this.databases.createDocument(
                    config.appwriteDatabaseId,
                    config.appwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status,
                        userId
                    }
                )
            }
            catch(error){
                    console.log("Oops error occurred in createPost", error)
            }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Oops error occurred in updatePost", error)
        }
    }

    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )

            return true;
        } catch (error) {
            console.log("Oops error occurred in deletePost", error)
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Oops error occurred in getPost", error)
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Oops error occurred in getPosts", error)
            return false;
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Oops error occurred in uploadFile", error)
            return false
        }
    }

    async deleteFile(fileID){
        try {
             await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileID
            )
            return true;
        } catch (error) {
            console.log("Oops error occurred in deleteFile", error)
            return false;
        }
    }

     downloadFile(fileID){
        try {
            return  this.bucket.getFileDownload(
                config.appwriteBucketId,
                fileID
            )
        } catch (error) {
            console.log("Oops error occurred in downloadFile", error)
            return false;
        }
    }

    getFilePreview(fileID){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileID
        )
    }

}



const databaseService = new DatabaseService()

export default databaseService;