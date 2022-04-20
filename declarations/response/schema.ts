export interface FunQLResponseWithDetails {
 schema: { contents: { dynamic: { models: { User: { doits: { loginRequest: { details: { response: FQl_response_loginRequest_LoginRequestReturn } }, login: { details: { response: FQl_response_login_LoginReturn } }, insertProfileInfo: { details: { response: Partial<FQl_response_user_IUser> } }, getUser: { details: { response: Partial<FQl_response_user_IUser> } }, getUsers: { details: { response: Partial<FQl_response_user_IUser>[] } }, updateUser: { details: { response: Partial<FQl_response_user_IUser> } }, updateUserRole: { details: { response: Partial<FQl_response_user_IUser> } }, createGhostUser: { details: { response: any } }, getMe: { details: { response: Partial<FQl_response_user_IUser> } }, addUserAddress: { details: { response: Partial<FQl_response_user_IUser> } }, updateUserAddress: { details: { response: Partial<FQl_response_user_IUser> } } } }, Country: { doits: { createCountry: { details: { response: Partial<FQl_response_country_ICountry> } }, updateCountry: { details: { response: Partial<FQl_response_country_ICountry> } }, deleteCountry: { details: { response: Partial<FQl_response_country_ICountry> } }, getCountry: { details: { response: Partial<FQl_response_country_ICountry> } }, getCountries: { details: { response: Partial<FQl_response_country_ICountry>[] } } } }, City: { doits: { createCity: { details: { response: Partial<FQl_response_city_ICity> } }, updateCity: { details: { response: Partial<FQl_response_city_ICity> } }, deleteCity: { details: { response: Partial<FQl_response_city_ICity> } }, getCity: { details: { response: Partial<FQl_response_city_ICity> } }, getCities: { details: { response: Partial<FQl_response_city_ICity>[] } } } }, State: { doits: { updateState: { details: { response: Partial<FQl_response_state_IState> } }, deleteState: { details: { response: Partial<FQl_response_state_IState> } }, createState: { details: { response: Partial<FQl_response_state_IState> } }, getState: { details: { response: Partial<FQl_response_state_IState> } }, getStates: { details: { response: Partial<FQl_response_state_IState>[] } } } }, BlogTag: { doits: { createBlogTag: { details: { response: Partial<FQl_response_blogTag_IBlogTag> } }, updateBlogTag: { details: { response: Partial<FQl_response_blogTag_IBlogTag> } }, deleteBlogTag: { details: { response: Partial<FQl_response_blogTag_IBlogTag> } }, getBlogTag: { details: { response: Partial<FQl_response_blogTag_IBlogTag> } }, getBlogTags: { details: { response: Partial<FQl_response_blogTag_IBlogTag>[] } } } }, BlogCategory: { doits: { createBlogCategory: { details: { response: Partial<FQl_response_blogCategory_IBlogCategory> } }, updateBlogCategory: { details: { response: Partial<FQl_response_blogCategory_IBlogCategory> } }, deleteBlogCategory: { details: { response: Partial<FQl_response_blogCategory_IBlogCategory> } }, getBlogCategory: { details: { response: Partial<FQl_response_blogCategory_IBlogCategory> } }, getBlogCategories: { details: { response: Partial<FQl_response_blogCategory_IBlogCategory>[] } } } }, Comment: { doits: { createComment: { details: { response: Partial<FQl_response_comment_IComment> } }, updateComment: { details: { response: Partial<FQl_response_comment_IComment> } }, deleteComment: { details: { response: Partial<FQl_response_comment_IComment> } }, getCommentReplies: { details: { response: Partial<FQl_response_comment_IComment[]> } }, getComments: { details: { response: Partial<FQl_response_comment_IComment>[] } }, getComment: { details: { response: Partial<FQl_response_comment_IComment> } } } }, BlogPost: { doits: { createBlogPost: { details: { response: Partial<FQl_response_blogPost_IBlogPost> } }, updateBlogPost: { details: { response: Partial<FQl_response_blogPost_IBlogPost> } }, deleteBlogPost: { details: { response: Partial<FQl_response_blogPost_IBlogPost> } }, getBlogPost: { details: { response: Partial<FQl_response_blogPost_IBlogPost> } }, getBlogPosts: { details: { response: Partial<FQl_response_blogPost_IBlogPost>[] } }, switchBlogPostLike: { details: { response: Partial<FQl_response_blogPost_IBlogPost> } }, addToPromotions: { details: { response: FQl_response_types_PromotionsBlogPosts[] } } } }, WareType: { doits: { getWareType: { details: { response: Partial<FQl_response_wareType_IWareType> } }, createWareType: { details: { response: Partial<FQl_response_wareType_IWareType> } }, deleteWareType: { details: { response: Partial<FQl_response_wareType_IWareType> } }, getWareTypes: { details: { response: Partial<FQl_response_wareType_IWareType>[] } }, updateWareType: { details: { response: Partial<FQl_response_wareType_IWareType> } } } }, WareCategory: { doits: { createWareCategory: { details: { response: Partial<FQl_response_wareCategory_IWareCategory> } }, updateWareCategory: { details: { response: Partial<FQl_response_wareCategory_IWareCategory> } }, deleteWareCategory: { details: { response: Partial<FQl_response_blogTag_IBlogTag> } }, getWareCategory: { details: { response: Partial<FQl_response_wareCategory_IWareCategory> } }, getWareCategories: { details: { response: Partial<FQl_response_wareCategory_IWareCategory>[] } } } }, Ware: { doits: { getWare: { details: { response: Partial<FQl_response_ware_IWare> } }, createWare: { details: { response: Partial<FQl_response_ware_IWare> } }, updateWare: { details: { response: Partial<FQl_response_ware_IWare> } }, deleteWare: { details: { response: Partial<FQl_response_ware_IWare> } }, getWares: { details: { response: Partial<FQl_response_ware_IWare>[] } } } }, ShoppingCart: { doits: { addWareToShoppingCart: { details: { response: Partial<FQl_response_shoppingCart_IShoppingCart> } }, getShoppingCart: { details: { response: Partial<FQl_response_shoppingCart_IShoppingCart> } }, deleteWareOfShoppingCart: { details: { response: Partial<FQl_response_shoppingCart_IShoppingCart> } }, changeQuantityInShoppingCart: { details: { response: Partial<FQl_response_shoppingCart_IShoppingCart> } }, getShoppingCarts: { details: { response: Partial<FQl_response_shoppingCart_IShoppingCart>[] } } } }, Order: { doits: { createOrder: { details: { response: FQl_response_order_IOrder | object } }, updateOrder: { details: { response: Partial<FQl_response_order_IOrder> } }, deleteWareOfOrder: { details: { response: FQl_response_order_IOrder | object } }, deleteOrder: { details: { response: FQl_response_order_IOrder } }, getOrder: { details: { response: Partial<FQl_response_order_IOrder> } }, getOrders: { details: { response: Partial<FQl_response_order_IOrder>[] } }, changeQuantityOfWareInOrder: { details: { response: Partial<FQl_response_order_IOrder> } } } }, Shop: { doits: { createShop: { details: { response: Partial<FQl_response_shop_IShop> } }, updateShop: { details: { response: Partial<FQl_response_shop_IShop> } } } }, ContactUs: { doits: { createContactUs: { details: { response: Partial<FQl_response_contactUs_IContactUs> } }, deleteContactUs: { details: { response: Partial<FQl_response_contactUs_IContactUs> } }, getContactUs: { details: { response: Partial<FQl_response_contactUs_IContactUs> } }, getContactUss: { details: { response: Partial<FQl_response_blogTag_IBlogTag>[] } } } }, Invoice: { doits: { createInvoiceFromOrder: { details: { response: Partial<FQl_response_invoice_IInvoice> | object } }, createOffLineInvoice: { details: { response: Partial<FQl_response_invoice_IInvoice> | object } }, addWareToInvoice: { details: { response: Partial<FQl_response_invoice_IInvoice> } }, changeQuantityInInvoice: { details: { response: FQl_response_invoice_IInvoice } }, deleteWareOfInvoice: { details: { response: FQl_response_invoice_IInvoice | object } }, getInvoice: { details: { response: Partial<FQl_response_invoice_IInvoice> } }, getInvoices: { details: { response: Partial<FQl_response_invoice_IInvoice>[] } } } }, Rate: { doits: { giveScoreToWare: { details: { response: Partial<FQl_response_rate_IRate> } } } } } }, static: { models: { BlogFirstPage: { doits: { getBlogFirstPage: { details: { response: FQl_response_types_BlogFirstPage } } } }, StoreHomePage: { doits: { getStoreHomePage: { details: { response: FQl_response_types_StoreHomePage } }, addToStoreHomePageSlider: { details: { response: any } } } }, ShopPage: { doits: { getShopPage: { details: { response: FQl_response_types_ShopPage } } } } } }, streams: { models: { File: { doits: { uploadFile: { details: { response: Partial<FQl_response_upload_IFile> } }, downloadFile: { details: { response: any } } } } } } } };
}

export interface FunQLResponseWithoutDetails {
 schema: { contents: { dynamic: { models: { User: { doits: { loginRequest: FQl_response_loginRequest_LoginRequestReturn, login: FQl_response_login_LoginReturn, insertProfileInfo: Partial<FQl_response_user_IUser>, getUser: Partial<FQl_response_user_IUser>, getUsers: Partial<FQl_response_user_IUser>[], updateUser: Partial<FQl_response_user_IUser>, updateUserRole: Partial<FQl_response_user_IUser>, createGhostUser: any, getMe: Partial<FQl_response_user_IUser>, addUserAddress: Partial<FQl_response_user_IUser>, updateUserAddress: Partial<FQl_response_user_IUser> } }, Country: { doits: { createCountry: Partial<FQl_response_country_ICountry>, updateCountry: Partial<FQl_response_country_ICountry>, deleteCountry: Partial<FQl_response_country_ICountry>, getCountry: Partial<FQl_response_country_ICountry>, getCountries: Partial<FQl_response_country_ICountry>[] } }, City: { doits: { createCity: Partial<FQl_response_city_ICity>, updateCity: Partial<FQl_response_city_ICity>, deleteCity: Partial<FQl_response_city_ICity>, getCity: Partial<FQl_response_city_ICity>, getCities: Partial<FQl_response_city_ICity>[] } }, State: { doits: { updateState: Partial<FQl_response_state_IState>, deleteState: Partial<FQl_response_state_IState>, createState: Partial<FQl_response_state_IState>, getState: Partial<FQl_response_state_IState>, getStates: Partial<FQl_response_state_IState>[] } }, BlogTag: { doits: { createBlogTag: Partial<FQl_response_blogTag_IBlogTag>, updateBlogTag: Partial<FQl_response_blogTag_IBlogTag>, deleteBlogTag: Partial<FQl_response_blogTag_IBlogTag>, getBlogTag: Partial<FQl_response_blogTag_IBlogTag>, getBlogTags: Partial<FQl_response_blogTag_IBlogTag>[] } }, BlogCategory: { doits: { createBlogCategory: Partial<FQl_response_blogCategory_IBlogCategory>, updateBlogCategory: Partial<FQl_response_blogCategory_IBlogCategory>, deleteBlogCategory: Partial<FQl_response_blogCategory_IBlogCategory>, getBlogCategory: Partial<FQl_response_blogCategory_IBlogCategory>, getBlogCategories: Partial<FQl_response_blogCategory_IBlogCategory>[] } }, Comment: { doits: { createComment: Partial<FQl_response_comment_IComment>, updateComment: Partial<FQl_response_comment_IComment>, deleteComment: Partial<FQl_response_comment_IComment>, getCommentReplies: Partial<FQl_response_comment_IComment[]>, getComments: Partial<FQl_response_comment_IComment>[], getComment: Partial<FQl_response_comment_IComment> } }, BlogPost: { doits: { createBlogPost: Partial<FQl_response_blogPost_IBlogPost>, updateBlogPost: Partial<FQl_response_blogPost_IBlogPost>, deleteBlogPost: Partial<FQl_response_blogPost_IBlogPost>, getBlogPost: Partial<FQl_response_blogPost_IBlogPost>, getBlogPosts: Partial<FQl_response_blogPost_IBlogPost>[], switchBlogPostLike: Partial<FQl_response_blogPost_IBlogPost>, addToPromotions: FQl_response_types_PromotionsBlogPosts[] } }, WareType: { doits: { getWareType: Partial<FQl_response_wareType_IWareType>, createWareType: Partial<FQl_response_wareType_IWareType>, deleteWareType: Partial<FQl_response_wareType_IWareType>, getWareTypes: Partial<FQl_response_wareType_IWareType>[], updateWareType: Partial<FQl_response_wareType_IWareType> } }, WareCategory: { doits: { createWareCategory: Partial<FQl_response_wareCategory_IWareCategory>, updateWareCategory: Partial<FQl_response_wareCategory_IWareCategory>, deleteWareCategory: Partial<FQl_response_blogTag_IBlogTag>, getWareCategory: Partial<FQl_response_wareCategory_IWareCategory>, getWareCategories: Partial<FQl_response_wareCategory_IWareCategory>[] } }, Ware: { doits: { getWare: Partial<FQl_response_ware_IWare>, createWare: Partial<FQl_response_ware_IWare>, updateWare: Partial<FQl_response_ware_IWare>, deleteWare: Partial<FQl_response_ware_IWare>, getWares: Partial<FQl_response_ware_IWare>[] } }, ShoppingCart: { doits: { addWareToShoppingCart: Partial<FQl_response_shoppingCart_IShoppingCart>, getShoppingCart: Partial<FQl_response_shoppingCart_IShoppingCart>, deleteWareOfShoppingCart: Partial<FQl_response_shoppingCart_IShoppingCart>, changeQuantityInShoppingCart: Partial<FQl_response_shoppingCart_IShoppingCart>, getShoppingCarts: Partial<FQl_response_shoppingCart_IShoppingCart>[] } }, Order: { doits: { createOrder: FQl_response_order_IOrder | object, updateOrder: Partial<FQl_response_order_IOrder>, deleteWareOfOrder: FQl_response_order_IOrder | object, deleteOrder: FQl_response_order_IOrder, getOrder: Partial<FQl_response_order_IOrder>, getOrders: Partial<FQl_response_order_IOrder>[], changeQuantityOfWareInOrder: Partial<FQl_response_order_IOrder> } }, Shop: { doits: { createShop: Partial<FQl_response_shop_IShop>, updateShop: Partial<FQl_response_shop_IShop> } }, ContactUs: { doits: { createContactUs: Partial<FQl_response_contactUs_IContactUs>, deleteContactUs: Partial<FQl_response_contactUs_IContactUs>, getContactUs: Partial<FQl_response_contactUs_IContactUs>, getContactUss: Partial<FQl_response_blogTag_IBlogTag>[] } }, Invoice: { doits: { createInvoiceFromOrder: Partial<FQl_response_invoice_IInvoice> | object, createOffLineInvoice: Partial<FQl_response_invoice_IInvoice> | object, addWareToInvoice: Partial<FQl_response_invoice_IInvoice>, changeQuantityInInvoice: FQl_response_invoice_IInvoice, deleteWareOfInvoice: FQl_response_invoice_IInvoice | object, getInvoice: Partial<FQl_response_invoice_IInvoice>, getInvoices: Partial<FQl_response_invoice_IInvoice>[] } }, Rate: { doits: { giveScoreToWare: Partial<FQl_response_rate_IRate> } } } }, static: { models: { BlogFirstPage: { doits: { getBlogFirstPage: FQl_response_types_BlogFirstPage } }, StoreHomePage: { doits: { getStoreHomePage: FQl_response_types_StoreHomePage, addToStoreHomePageSlider: any } }, ShopPage: { doits: { getShopPage: FQl_response_types_ShopPage } } } }, streams: { models: { File: { doits: { uploadFile: Partial<FQl_response_upload_IFile>, downloadFile: any } } } } } };
}

export interface FQl_response_loginRequest_LoginRequestReturn {
 ok?: boolean;
 phone?: number;
 countryCode?: string;
}

export interface FQl_response_login_LoginReturn {
 user?: FQl_response_user_IUser;
 token?: string;
}

export interface FQl_response_user_IUser {
 name: string;
 lastName: string;
 phone: number;
 gender: FQl_response_user_Gender;
 birthDate?: Date;
 postalCode: string;
 level: FQl_response_user_Level[];
 email?: string;
 isActive?: boolean;
 creditCardNumber: number;
 profilePicture: FQl_response_upload_PuFile;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 addresses?: FQl_response_user_UserAddress[];
 shoppingCart?: FQl_response_shoppingCart_PuRelShoppingCart;
 /** the last 50 orders of user are kept inside the collection */
 orders?: FQl_response_order_PuRelOrder[];
}

export enum FQl_response_user_Gender {
 Male = "Male",
 Female = "Female"
}

export enum FQl_response_user_Level {
 /**
  * The most powerful user role because it gives you access to everything.
  *  As the website owner, this should be your role
  * in addition this role is shop manager
  */
 Admin = "Admin",
 /**
  * Assigned to new customers when they create an account on your website.
  *  This role is basically is:a normal blog subscriber,
  *  and: a customers that can edit their own account information and view past or current order
  */
 Normal = "Normal",
 /**
  * This user is typically responsible for managing content.
  *  Editors can add, edit, publish, and delete any posts and media,
  *  including those written by other users. Editors can also moderate, edit, and delete comments,
  *  and add and edit categories and tags
  */
 Editor = "Editor",
 /**
  * Typically responsible for tasks related to writing content.
  *  They can create, edit, and publish their own posts.
  * They can also delete their own posts (even when they’re already published),
  *  but cannot edit or delete posts written by other user
  */
 Author = "Author",
 /** a ghost user */
 Ghost = "Ghost"
}

/** an interface for uploaded files in db */
export interface FQl_response_upload_PuFile {
 filename: string;
 type: string;
 size: number;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
}

export interface FQl_response_user_UserAddress {
 /** the id is a uuid special for each address */
 addressId: string;
 country: FQl_response_country_PuRelCountry;
 state: FQl_response_state_PuRelState;
 city: FQl_response_city_PuRelCity;
 addressTxt: string;
 location: {
  type: "Point";
  coordinates: [number, number];
 };
}

export interface FQl_response_country_PuRelCountry {
 name: string;
 enName: string;
 countryCode: string[];
 /**
  * save set of polygon of point of this city
  */
 geometries: {
  type: "Polygon";
  coordinates: [number, number][];
 };
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 states?: string[] | FQl_response_state_IState[];
 cities?: string[] | FQl_response_city_ICity[];
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_response_state_IState {
 name: string;
 enName: string;
 /**
  * save set of polygon of point of this city
  */
 geometries: {
  type: "Polygon";
  coordinates: [number, number][];
 };
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 country?: FQl_response_country_PuRelCountry;
 cities?: FQl_response_city_PuRelCity[];
}

export interface FQl_response_city_PuRelCity {
 name: string;
 enName: string;
 /**
  * save set of polygon of point of this city
  */
 geometries: {
  type: "Polygon";
  coordinates: [number, number][];
 };
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 state?: string | FQl_response_state_IState;
 country?: string | FQl_response_country_ICountry;
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_response_country_ICountry {
 states?: FQl_response_state_PuRelState[];
 cities?: FQl_response_city_PuRelCity[];
 name: string;
 enName: string;
 countryCode: string[];
 /**
  * save set of polygon of point of this city
  */
 geometries: {
  type: "Polygon";
  coordinates: [number, number][];
 };
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
}

export interface FQl_response_state_PuRelState {
 name: string;
 enName: string;
 /**
  * save set of polygon of point of this city
  */
 geometries: {
  type: "Polygon";
  coordinates: [number, number][];
 };
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 cities?: string[] | FQl_response_city_ICity[];
 country?: string | FQl_response_country_ICountry;
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_response_city_ICity {
 state: FQl_response_state_PuRelState;
 country: FQl_response_country_PuRelCountry;
 name: string;
 enName: string;
 /**
  * save set of polygon of point of this city
  */
 geometries: {
  type: "Polygon";
  coordinates: [number, number][];
 };
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
}

export interface FQl_response_shoppingCart_PuRelShoppingCart {
 totalPrice: number;
 totalQuantity: number;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 user: string | FQl_response_user_IUser;
 wares: string | FQl_response_ware_IWare[];
}

export interface FQl_response_ware_IWare {
 name: string;
 brand: string;
 photos: FQl_response_upload_PuFile[];
 description: string;
 price: number;
 isDesigned: boolean;
 layers: (FQl_response_designFeatures_Pic | FQl_response_designFeatures_HandWriting | FQl_response_designFeatures_Color | FQl_response_designFeatures_Text | FQl_response_designFeatures_Emoji)[];
 preDesignFeatures: (FQl_response_preDesignFeatures_PreDesignColor | FQl_response_preDesignFeatures_ClothSize)[];
 preDesignRelations: FQl_response_preDesignFeatures_PreDesignRelations[];
 isPromotion: boolean;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 wareType: FQl_response_wareType_PuRelWareType;
 wareCategories?: FQl_response_wareCategory_PuRelWareCategory[];
 orders?: FQl_response_order_PuRelOrder[];
 /** this is the score of the ware */
 averageScore?: FQl_response_rate_PuRelRate;
 comments?: FQl_response_comment_PuComment[];
}

/**
 * @interface
 * an interface for picture feature
 */
export interface FQl_response_designFeatures_Pic {
 featureType: string;
 width: number;
 height: number;
 path: string;
 position: { x: number; y: number };
 rotate: FQl_response_designFeatures_RotateDegree;
 picRepeat: FQl_response_designFeatures_RepeatPattern;
}

export enum FQl_response_designFeatures_RotateDegree {
 "90Degree" = 90,
 "180Degree" = 180,
 "270Degree" = 270
}

export interface FQl_response_designFeatures_RepeatPattern {
 path: string;
 width: number;
 height: number;
 repeatType: FQl_response_designFeatures_repeatType;
}

export enum FQl_response_designFeatures_repeatType {
 "type1" = 1,
 "type2",
 "type3",
 "type4"
}

/**
 * @interface
 * an interface for handWriting
 */
export interface FQl_response_designFeatures_HandWriting {
 featureType: string;
 width: number;
 height: number;
 path: string;
 position: [x: number, y: number];
 color: FQl_response_designFeatures_Color;
 size: FQl_response_designFeatures_FontSizes;
}

/**
 * @interface
 * an interface for color feature
 */
export interface FQl_response_designFeatures_Color {
 featureType: string;
 color: string;
}

export enum FQl_response_designFeatures_FontSizes {
 "one" = 1,
 "two",
 "three",
 "four",
 "five",
 "six"
}

/**
 * @interface
 * an interface for repeatPattern feature
 */
export interface FQl_response_designFeatures_Text {
 featureType: string;
 position: [x: number, y: number];
 font: string;
 size: number;
 color: FQl_response_designFeatures_Color;
 effect: FQl_response_designFeatures_txtEffect;
 align: FQl_response_designFeatures_txtAlign;
 rotate: FQl_response_designFeatures_RotateDegree;
}

export enum FQl_response_designFeatures_txtEffect {
 italic = 1,
 bold = 2,
 underline = 3
}

export enum FQl_response_designFeatures_txtAlign {
 left = 1,
 right = 2,
 center = 3,
 justify = 4
}

export interface FQl_response_designFeatures_Emoji {
 featureType: string;
 position: [x: number, y: number];
 width: number;
 height: number;
 emojis: string;
 color: FQl_response_designFeatures_Color;
 rotate: FQl_response_designFeatures_RotateDegree;
 flip: FQl_response_designFeatures_Flip;
}

export enum FQl_response_designFeatures_Flip {
}

/** a type for defining color in preDesignedFeatures */
export interface FQl_response_preDesignFeatures_PreDesignColor {
 /** the featureType should be PreDesignedColor */
 _id: string;
 featureType: string;
 colorCode: string;
 pic: FQl_response_upload_PuFile[];
}

/** a type for defining size in preDesignedFeatures */
export interface FQl_response_preDesignFeatures_ClothSize {
 /** the featureType should be "clothSize" */
 _id: string;
 featureType: string;
 size: FQl_response_preDesignFeatures_Size;
 pic: FQl_response_upload_PuFile[];
 featureRelations: string[];
}

/**
 * @interface
 * an interface for color preDesignFeature
 */
export enum FQl_response_preDesignFeatures_Size {
 "Small" = "Small",
 "Medium" = "Medium",
 "Large" = "Large",
 "XL" = "XL",
 "2XL" = "2XL",
 "3XL" = "3XL",
 "4XL" = "4XL"
}

export interface FQl_response_preDesignFeatures_PreDesignRelations {
 _id: string;
 preDesignColorId: string;
 clothSizeId: string;
 price: number;
 inventory: number;
}

export interface FQl_response_wareType_PuRelWareType {
 name: string;
 icon: FQl_response_upload_PuFile;
 description: string;
 /** it specifies if the wareType has studio */
 isDesignable: boolean;
 /**
  * if the WareType has studio,the studio features are specified here
  * it is optional because the wareType can
  */
 features?: FQl_response_wareType_Features[];
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 /** the last 50 wares */
 wares?: string[] | FQl_response_ware_IWare[];
 wareCategories?: string[] | FQl_response_wareCategory_IWareCategory[];
}

export enum FQl_response_wareType_Features {
 Emoji = "Emoji",
 Text = "Text",
 RepeatPattern = "RepeatPattern",
 Color = "Color",
 Pic = "Pic",
 HandWriting = "HandWriting",
 Layers = "Layers"
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_response_wareCategory_IWareCategory {
 name: string;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 wareType: FQl_response_wareType_PuWareType;
 wares?: FQl_response_ware_PuWare[];
}

export interface FQl_response_wareType_PuWareType {
 name: string;
 icon: FQl_response_upload_PuFile;
 description: string;
 /** it specifies if the wareType has studio */
 isDesignable: boolean;
 /**
  * if the WareType has studio,the studio features are specified here
  * it is optional because the wareType can
  */
 features?: FQl_response_wareType_Features[];
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
}

export interface FQl_response_ware_PuWare {
 name: string;
 brand: string;
 photos: FQl_response_upload_PuFile[];
 description: string;
 price: number;
 isDesigned: boolean;
 layers: (FQl_response_designFeatures_Pic | FQl_response_designFeatures_HandWriting | FQl_response_designFeatures_Color | FQl_response_designFeatures_Text | FQl_response_designFeatures_Emoji)[];
 preDesignFeatures: (FQl_response_preDesignFeatures_PreDesignColor | FQl_response_preDesignFeatures_ClothSize)[];
 preDesignRelations: FQl_response_preDesignFeatures_PreDesignRelations[];
 isPromotion: boolean;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
}

export interface FQl_response_wareCategory_PuRelWareCategory {
 name: string;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 wareType: string | FQl_response_wareType_IWareType;
 wares?: string[] | FQl_response_ware_IWare[];
}

export interface FQl_response_wareType_IWareType {
 name: string;
 icon: FQl_response_upload_PuFile;
 description: string;
 /** it specifies if the wareType has studio */
 isDesignable: boolean;
 /**
  * if the WareType has studio,the studio features are specified here
  * it is optional because the wareType can
  */
 features?: FQl_response_wareType_Features[];
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 /** the last 50 wares */
 wares?: FQl_response_ware_PuRelWare;
 wareCategories?: FQl_response_wareCategory_PuRelWareCategory[];
}

export interface FQl_response_ware_PuRelWare {
 name: string;
 brand: string;
 photos: FQl_response_upload_PuFile[];
 description: string;
 price: number;
 isDesigned: boolean;
 layers: (FQl_response_designFeatures_Pic | FQl_response_designFeatures_HandWriting | FQl_response_designFeatures_Color | FQl_response_designFeatures_Text | FQl_response_designFeatures_Emoji)[];
 preDesignFeatures: (FQl_response_preDesignFeatures_PreDesignColor | FQl_response_preDesignFeatures_ClothSize)[];
 preDesignRelations: FQl_response_preDesignFeatures_PreDesignRelations[];
 isPromotion: boolean;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 wareType?: string | FQl_response_wareType_IWareType;
 wareCategories?: string[] | FQl_response_wareCategory_IWareCategory[];
 /** the last 50 orders of this ware are kept inside the collection */
 orders?: string[] | FQl_response_order_IOrder[];
 averageScore?: string | FQl_response_rate_IRate;
 /**
  * @field
  * the relation for comments in the ware,
  * (just the 50 last comments of the ware is supposed to keep in here)
  * the array of objectIds should be kept in here,
  * the return type should be from IUser schema
  */
 comments?: string[] | FQl_response_comment_IComment[];
}

export interface FQl_response_order_IOrder {
 /** total price of all the ordered materials */
 totalPrice: number;
 /** totalQuantity of items ordered */
 totalQuantity: number;
 /** a confirmation code that send as a unique code to customer */
 confirmationNumber: number;
 /** Any discount applied (to an Order). */
 discount: number;
 /** the description on the order */
 description: string;
 /** Code used to redeem a discount. */
 discountCode: string;
 paymentStatus: FQl_response_order_PaymentStatus;
 orderStatus: FQl_response_order_OrderStatus;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 wares: [
  {
   ware: FQl_response_ware_PuRelWare;
   quantity: number;
   warePrice: number;
   description?: string;
  },
 ];
 user: FQl_response_user_PuUser;
}

export enum FQl_response_order_PaymentStatus {
 Paid = "PAID",
 NotPaid = "NOTPAID"
}

export enum FQl_response_order_OrderStatus {
 /** cancelled by store */
 Rejected = "REJECTED",
 Processing = "PROCESSING",
 Delivered = "DELIVERED",
 /** cancelled by user */
 Canceled = "CANCELED"
}

/**
 * @interface
 * PURE blogPost: This is an interface for primitives types of blogPost
 */
export interface FQl_response_user_PuUser {
 name: string;
 lastName: string;
 phone: number;
 gender: FQl_response_user_Gender;
 birthDate?: Date;
 postalCode: string;
 level: FQl_response_user_Level[];
 email?: string;
 isActive?: boolean;
 creditCardNumber: number;
 profilePicture: FQl_response_upload_PuFile;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_response_rate_IRate {
 totalRate: number;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 raters: { user: FQl_response_user_PuRelUser; rate: 1 | 2 | 3 | 4 | 5 }[];
 ware?: FQl_response_ware_PuRelWare;
}

export interface FQl_response_user_PuRelUser {
 name: string;
 lastName: string;
 phone: number;
 gender: FQl_response_user_Gender;
 birthDate?: Date;
 postalCode: string;
 level: FQl_response_user_Level[];
 email?: string;
 isActive?: boolean;
 creditCardNumber: number;
 profilePicture: FQl_response_upload_PuFile;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 country?: string | FQl_response_country_ICountry;
 state?: string | FQl_response_state_IState;
 city?: string | FQl_response_city_ICity;
 shoppingCart?: string | FQl_response_shoppingCart_IShoppingCart;
 /** the last 50 orders of user are kept inside the collection */
 orders?: string[] | FQl_response_order_IOrder[];
}

export interface FQl_response_shoppingCart_IShoppingCart {
 totalPrice: number;
 totalQuantity: number;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 user: FQl_response_user_PuRelUser;
 wares: [
  {
   ware: FQl_response_ware_PuRelWare;
   quantity: number;
   warePrice: number;
   description?: string;
   selectedPreDesignFeatures?: (FQl_response_preDesignFeatures_PreDesignColor | FQl_response_preDesignFeatures_ClothSize)[];
  },
 ];
}

/**
 * @interface
 * Interface BlogPost: This is the main interface for blogPost that is extended form PureBlogComment and EmbeddedBlogComment.
 * it is consist of :primitive fields + Embedded Fields
 */
export interface FQl_response_comment_IComment {
 repliedCommentIds?: string[];
 parentId?: string;
 blogPostId?: string;
 wareId?: string;
 _id: string;
 content: string;
 commentStatus: FQl_response_comment_CommentStatus;
 createdAt?: Date;
 updateAt?: Date;
 user: FQl_response_user_PuRelUser;
 /** the blogPost of the comment */
 blogPost?: FQl_response_blogPost_PuRelBlogPost;
 /** the ware of the comment */
 ware?: FQl_response_ware_PuRelWare;
 repliedComments?: FQl_response_comment_PuRelComment[];
}

export enum FQl_response_comment_CommentStatus {
 ACCEPT,
 PENDING,
 REJECT
}

export interface FQl_response_blogPost_PuRelBlogPost {
 title: string;
 summary: string;
 content: string;
 photo: FQl_response_upload_PuFile;
 totalViews?: number;
 totalComments?: number;
 totalLikes?: number;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 /**
  * * @field
  * the relation for user in the blogPost,
  * the objectId should be kept in here,
  * the return type should be from IUser schema
  */
 author: string | FQl_response_user_IUser;
 /**
  * @field
  * the relation for blogCategory in the blogPost,
  * the objectId should be kept in here,
  * the return type should be from IBlogCategory schema
  */
 blogCategory: string | FQl_response_blogCategory_IBlogCategory;
 /**
  * @field
  * the relation for blogTag in the blogPost,
  * the array of objectIds should be kept in here,
  * the return type should be from IBlogTag schema
  */
 blogTags?: string[] | FQl_response_blogTag_IBlogTag[];
 /**
  * @field
  * the relation for likedUsers in the blogPost,
  * (just the 50 last users who liked the post is supposed to keep in here)
  * the array of objectIds should be kept in here,
  * the return type should be from IUser schema
  */
 likedUsers?: string[] | FQl_response_user_IUser[];
 /**
  * @field
  * the relation for comments in the blogPost,
  * (just the 50 last comments of the post is supposed to keep in here)
  * the array of objectIds should be kept in here,
  * the return type should be from IUser schema
  */
 comments?: string[] | FQl_response_comment_IComment[];
}

/**
 * @interface
 * Interface BlogCategory: This is the main interface for blogPost that is extended form PureBlogPosts and EmbeddedBlogPost.
 * it is consist of :primitive fields + Embedded Fields
 */
export interface FQl_response_blogCategory_IBlogCategory {
 name: string;
 enName: string;
 icon?: FQl_response_upload_PuFile;
 description?: string;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 /** the last 50 post of each category, is kept here */
 blogPosts?: FQl_response_blogPost_PuRelBlogPost[];
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_response_blogTag_IBlogTag {
 name: string;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 blogPosts?: FQl_response_blogPost_PuRelBlogPost[];
}

export interface FQl_response_comment_PuRelComment {
 _id: string;
 content: string;
 commentStatus: FQl_response_comment_CommentStatus;
 createdAt?: Date;
 updateAt?: Date;
 user: string | FQl_response_user_IUser;
 /** the comment may be belong to blogPost */
 blogPost?: string | FQl_response_blogPost_IBlogPost;
 /** the comment may be belong to ware */
 ware?: string | FQl_response_ware_IWare;
 repliedComments?: string | FQl_response_comment_IComment[];
}

/**
 * @interface
 * Interface BlogPost: This is the main interface for blogPost that is extended form PureBlogPosts and EmbeddedBlogPost.
 * it is consist of :primitive fields + Embedded Fields
 */
export interface FQl_response_blogPost_IBlogPost {
 title: string;
 summary: string;
 content: string;
 photo: FQl_response_upload_PuFile;
 totalViews?: number;
 totalComments?: number;
 totalLikes?: number;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 /** user is partial because we don't need every user fields */
 author: FQl_response_user_PuRelUser;
 /**
  * @property
  *  the blogCategory of the post
  */
 blogCategory: FQl_response_blogCategory_PuRelBlogCategory;
 /**
  * @field
  *  the blogTags of the post
  */
 blogTags?: FQl_response_blogTag_PuBlogTag[];
 /**
  * @property
  *  just last 50 items of users who liked the post,these 50 items are from outRelation interface
  */
 likedUsers?: FQl_response_user_PuUser[];
 /**
  * @field
  *  just last 50 comments of the post,these 50 items are from outRelation interface
  */
 comments?: FQl_response_comment_PuComment[];
}

export interface FQl_response_blogCategory_PuRelBlogCategory {
 name: string;
 enName: string;
 icon?: FQl_response_upload_PuFile;
 description?: string;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 blogPosts?: string[] | FQl_response_blogPost_IBlogPost[];
}

/**
 * @interface
 * PURE blogTag: This is an interface for primitives types of blogTag
 */
export interface FQl_response_blogTag_PuBlogTag {
 name: string;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
}

/**
 * @interface
 * PURE blogComment: This is an interface for primitives types of blogComment
 */
export interface FQl_response_comment_PuComment {
 _id: string;
 content: string;
 commentStatus: FQl_response_comment_CommentStatus;
 createdAt?: Date;
 updateAt?: Date;
}

export interface FQl_response_order_PuRelOrder {
 /** total price of all the ordered materials */
 totalPrice: number;
 /** totalQuantity of items ordered */
 totalQuantity: number;
 /** a confirmation code that send as a unique code to customer */
 confirmationNumber: number;
 /** Any discount applied (to an Order). */
 discount: number;
 /** the description on the order */
 description: string;
 /** Code used to redeem a discount. */
 discountCode: string;
 paymentStatus: FQl_response_order_PaymentStatus;
 orderStatus: FQl_response_order_OrderStatus;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 wares?: string | FQl_response_ware_IWare;
 user?: string | FQl_response_user_IUser;
}

export interface FQl_response_rate_PuRelRate {
 totalRate: number;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 ware?: string[] | FQl_response_ware_IWare;
 user?: string[] | FQl_response_user_IUser;
}

/**
 * @interface
 * an interface for blogPosts that are showed in first page
 * these posts are promotion Posts
 * there are only 4 of them
 */
export interface FQl_response_types_PromotionsBlogPosts {
 _id: string;
 title: string;
 photo: FQl_response_upload_PuFile;
 summary: string;
}

export interface FQl_response_shop_IShop {
 name: string;
 logo: string;
 address?: string;
 phone: number[];
 location?: { type: "Point"; coordinates: [number, number] };
 certificate: string;
 /** an array of social medias links and icons tuple */
 socialMedias: {
  instagram?: string;
  twitter?: string;
  telegram?: string;
  faceBook?: string;
  pinterest?: string;
 };
 aboutUs: string;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 owner: FQl_response_user_PuRelUser;
 city: FQl_response_city_PuRelCity;
 state: FQl_response_state_PuRelState;
 country: FQl_response_country_PuRelCountry;
 wareTypes: FQl_response_wareType_PuRelWareType[];
}

export interface FQl_response_contactUs_IContactUs {
 name: string;
 email: string;
 uploadedFiles: string[];
 message: string;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_response_invoice_IInvoice {
 totalPrice: number;
 totalQuantity: number;
 discount: number;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 /** any factor may include one/more that one orders */
 user: FQl_response_user_PuRelUser;
 wares: [
  {
   ware: FQl_response_ware_PuRelWare;
   quantity: number;
   warePrice: number;
   description?: string;
  },
 ];
}

/**
 * @interface
 * an interface for the first page
 */
export interface FQl_response_types_BlogFirstPage {
 promotionBlogPosts: FQl_response_types_PromotionsBlogPosts[];
 latestBlogPosts: FQl_response_types_LatestBlogPosts[];
 popularBlogPosts: FQl_response_types_PopularBlogPosts[];
}

/**
 * @interface
 * an interface for latest blogPosts that are showed in first page
 * there are only 20 of them for the getting rest of them query to database is needed
 */
export interface FQl_response_types_LatestBlogPosts {
 blogCategory: {
  _id: string;
  name: string;
 };
 author: {
  _id: string;
  name: string;
  profilePicture: FQl_response_upload_PuFile;
 };
 _id: string;
 title: string;
 photo: FQl_response_upload_PuFile;
 summary: string;
 totalComments?: number;
 createdAt?: Date;
}

/**
 * @interface
 * an interface for favorite/most Visited blogPosts that are showed in first page
 * these posts are favorite/most Visited  Posts
 * there are only 15 of them
 */
export interface FQl_response_types_PopularBlogPosts {
 _id: string;
 title: string;
 photo: FQl_response_upload_PuFile;
 totalLikes?: number;
}

/**
 * @interface
 * an interface for the first page
 */
export interface FQl_response_types_StoreHomePage {
 wareTypes: FQl_response_types_WareTypes[];
 promotionWares: FQl_response_types_PromotionWares[];
 storeLatestBlogPosts: FQl_response_types_StoreLatestBlogPosts[];
 storeSlider: FQl_response_types_StoreSlider[];
}

/**
 * @interface
 * an interface for wareTypes that are showed in first page
 * there the number of them should be dynamics
 */
export interface FQl_response_types_WareTypes {
 _id: string;
 name: string;
 icon: FQl_response_upload_PuFile;
}

/**
 * @interface
 * an interface for wares that are showed in first page
 * these posts are promotion Posts
 * there are only 4 of them
 */
export interface FQl_response_types_PromotionWares {
 _id: string;
 name: string;
 price: number;
 photos: FQl_response_upload_PuFile[];
}

/**
 * @interface
 * an interface for latest blogPosts that are showed in store first page
 * there are only 3 of them for the getting rest of them query to database is needed
 */
export interface FQl_response_types_StoreLatestBlogPosts {
 _id: string;
 title: string;
 summary: string;
 photo: FQl_response_upload_PuFile;
 createdAt?: Date;
}

/**
 * @interface
 *  the pictures and the titles of them that are shown in slider
 */
export interface FQl_response_types_StoreSlider {
 photo: string;
 title: string;
 subTitle: string;
 url: string;
 type: string;
}

/**
 * @interface
 * an interface for the first page
 */
export interface FQl_response_types_ShopPage {
 shopWares: FQl_response_types_ShopWares[];
}

/**
 * @interface
 * an interface for wareTypes that are showed in first page
 * there the number of them should be dynamics
 */
export interface FQl_response_types_ShopWares {
 _id: string;
 name: string;
 price: number;
 photos: FQl_response_upload_PuFile[];
}

export interface FQl_response_upload_IFile {
 filename: string;
 type: string;
 size: number;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 user?: FQl_response_user_PuRelUser;
 ware?: FQl_response_ware_PuRelWare;
 blogPost?: FQl_response_blogPost_PuRelBlogPost;
}
