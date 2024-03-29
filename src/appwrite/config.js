import conf from "../config/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createProduct({title, desc, price, mrp, imageUrl, category, seller}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteProductsCollectionId,
                ID.unique(),
                {
                    title,
                    desc,
                    price,
                    mrp,
                    imageUrl,
                    category,
                    seller,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    // create cart product
    async createCartProduct({title, desc, price, mrp, imageUrl, category, specification, seller, userId }){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteUserCartCollectionId,
                ID.unique(),
                {  
                    title:title,
                    desc:desc,
                    price:price,
                    mrp:mrp,
                    imageUrl:imageUrl,
                    category:category,
                    specification:specification,
                    seller:seller,
                    userId:userId,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createCartProduct :: error", error);
        }
    }

    // create cart product
    async createWishListProduct({title, desc, price, mrp, imageUrl, category, specification, seller, userId }){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteWishListCollectionId,
                ID.unique(),
                {  
                    title:title,
                    desc:desc,
                    price:price,
                    mrp:mrp,
                    imageUrl:imageUrl,
                    category:category,
                    specification:specification,
                    seller:seller,
                    userId:userId,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createWishListProduct :: error", error);
        }
    }

    // delete single cart product
    async deleteCartProduct(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteUserCartCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteCartProduct :: error", error);
            return false
        }
    }

    // get all cart products user specific
    async getCartProducts(queries){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteUserCartCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite serive :: getProducts :: error", error);
            return false
        }
    }

    // get all wishlist products user specific
    async getWishListProducts(queries){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteWishListCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite serive :: getWishListProducts :: error", error);
            return false
        }
    }

    // delete single wish List product
    async deleteSingleWishListProduct(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteWishListCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteSingleWishListProduct :: error", error);
            return false
        }
    }

    // To get Single product
    async getProduct(id){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteUserCartCollectionId,
                id
            )
        } catch (error) {
            console.log("Appwrite serive :: getProduct :: error", error);
            return false
        }
    }

    // To get Queried product
    async getProducts(queries){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite serive :: getProducts :: error", error);
            return false
        }
    }


    // To get Queried user details
    async getProducts(queries = [Query.equal("category", "mobiles")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteProductsCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite serive :: getProducts :: error", error);
            return false
        }
    }



    // file upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}


const appwriteService = new Service()
export default appwriteService