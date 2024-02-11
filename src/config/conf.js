const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteProductsCollectionId: String(import.meta.env.VITE_APPWRITE_PRODUCTS_COLLECTION_ID),
    appwriteUserDetailsCollectionId: String(import.meta.env.VITE_APPWRITE_USER_DETAILS_COLLECTION_ID),
    appwriteUserCartCollectionId: String(import.meta.env.VITE_APPWRITE_USER_CART_COLLECTION_ID),
    appwriteWishListCollectionId: String(import.meta.env.VITE_APPWRITE_WISHLIST_COLLECTION_ID),
    adminLoginEmail: String(import.meta.env.VITE_ADMIN_EMAIL),
    adminLoginPassword: String(import.meta.env.VITE_ADMIN_PASSWORD),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf;

