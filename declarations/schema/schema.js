"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FQl_dynamic_comment_CommentStatus = exports.FQl_dynamic_order_OrderStatus = exports.FQl_dynamic_order_PaymentStatus = exports.FQl_dynamic_wareType_Features = exports.FQl_dynamic_preDesignFeatures_Size = exports.FQl_dynamic_designFeatures_Flip = exports.FQl_dynamic_designFeatures_txtAlign = exports.FQl_dynamic_designFeatures_txtEffect = exports.FQl_dynamic_designFeatures_FontSizes = exports.FQl_dynamic_designFeatures_repeatType = exports.FQl_dynamic_designFeatures_RotateDegree = exports.FQl_dynamic_user_Level = exports.FQl_dynamic_user_Gender = void 0;
var FQl_dynamic_user_Gender;
(function (FQl_dynamic_user_Gender) {
    FQl_dynamic_user_Gender["Male"] = "Male";
    FQl_dynamic_user_Gender["Female"] = "Female";
})(FQl_dynamic_user_Gender = exports.FQl_dynamic_user_Gender || (exports.FQl_dynamic_user_Gender = {}));
var FQl_dynamic_user_Level;
(function (FQl_dynamic_user_Level) {
    /**
     * The most powerful user role because it gives you access to everything.
     *  As the website owner, this should be your role
     * in addition this role is shop manager
     */
    FQl_dynamic_user_Level["Admin"] = "Admin";
    /**
     * Assigned to new customers when they create an account on your website.
     *  This role is basically is:a normal blog subscriber,
     *  and: a customers that can edit their own account information and view past or current order
     */
    FQl_dynamic_user_Level["Normal"] = "Normal";
    /**
     * This user is typically responsible for managing content.
     *  Editors can add, edit, publish, and delete any posts and media,
     *  including those written by other users. Editors can also moderate, edit, and delete comments,
     *  and add and edit categories and tags
     */
    FQl_dynamic_user_Level["Editor"] = "Editor";
    /**
     * Typically responsible for tasks related to writing content.
     *  They can create, edit, and publish their own posts.
     * They can also delete their own posts (even when they’re already published),
     *  but cannot edit or delete posts written by other user
     */
    FQl_dynamic_user_Level["Author"] = "Author";
    /** a ghost user */
    FQl_dynamic_user_Level["Ghost"] = "Ghost";
})(FQl_dynamic_user_Level = exports.FQl_dynamic_user_Level || (exports.FQl_dynamic_user_Level = {}));
var FQl_dynamic_designFeatures_RotateDegree;
(function (FQl_dynamic_designFeatures_RotateDegree) {
    FQl_dynamic_designFeatures_RotateDegree[FQl_dynamic_designFeatures_RotateDegree["90Degree"] = 90] = "90Degree";
    FQl_dynamic_designFeatures_RotateDegree[FQl_dynamic_designFeatures_RotateDegree["180Degree"] = 180] = "180Degree";
    FQl_dynamic_designFeatures_RotateDegree[FQl_dynamic_designFeatures_RotateDegree["270Degree"] = 270] = "270Degree";
})(FQl_dynamic_designFeatures_RotateDegree = exports.FQl_dynamic_designFeatures_RotateDegree || (exports.FQl_dynamic_designFeatures_RotateDegree = {}));
var FQl_dynamic_designFeatures_repeatType;
(function (FQl_dynamic_designFeatures_repeatType) {
    FQl_dynamic_designFeatures_repeatType[FQl_dynamic_designFeatures_repeatType["type1"] = 1] = "type1";
    FQl_dynamic_designFeatures_repeatType[FQl_dynamic_designFeatures_repeatType["type2"] = 2] = "type2";
    FQl_dynamic_designFeatures_repeatType[FQl_dynamic_designFeatures_repeatType["type3"] = 3] = "type3";
    FQl_dynamic_designFeatures_repeatType[FQl_dynamic_designFeatures_repeatType["type4"] = 4] = "type4";
})(FQl_dynamic_designFeatures_repeatType = exports.FQl_dynamic_designFeatures_repeatType || (exports.FQl_dynamic_designFeatures_repeatType = {}));
var FQl_dynamic_designFeatures_FontSizes;
(function (FQl_dynamic_designFeatures_FontSizes) {
    FQl_dynamic_designFeatures_FontSizes[FQl_dynamic_designFeatures_FontSizes["one"] = 1] = "one";
    FQl_dynamic_designFeatures_FontSizes[FQl_dynamic_designFeatures_FontSizes["two"] = 2] = "two";
    FQl_dynamic_designFeatures_FontSizes[FQl_dynamic_designFeatures_FontSizes["three"] = 3] = "three";
    FQl_dynamic_designFeatures_FontSizes[FQl_dynamic_designFeatures_FontSizes["four"] = 4] = "four";
    FQl_dynamic_designFeatures_FontSizes[FQl_dynamic_designFeatures_FontSizes["five"] = 5] = "five";
    FQl_dynamic_designFeatures_FontSizes[FQl_dynamic_designFeatures_FontSizes["six"] = 6] = "six";
})(FQl_dynamic_designFeatures_FontSizes = exports.FQl_dynamic_designFeatures_FontSizes || (exports.FQl_dynamic_designFeatures_FontSizes = {}));
var FQl_dynamic_designFeatures_txtEffect;
(function (FQl_dynamic_designFeatures_txtEffect) {
    FQl_dynamic_designFeatures_txtEffect[FQl_dynamic_designFeatures_txtEffect["italic"] = 1] = "italic";
    FQl_dynamic_designFeatures_txtEffect[FQl_dynamic_designFeatures_txtEffect["bold"] = 2] = "bold";
    FQl_dynamic_designFeatures_txtEffect[FQl_dynamic_designFeatures_txtEffect["underline"] = 3] = "underline";
})(FQl_dynamic_designFeatures_txtEffect = exports.FQl_dynamic_designFeatures_txtEffect || (exports.FQl_dynamic_designFeatures_txtEffect = {}));
var FQl_dynamic_designFeatures_txtAlign;
(function (FQl_dynamic_designFeatures_txtAlign) {
    FQl_dynamic_designFeatures_txtAlign[FQl_dynamic_designFeatures_txtAlign["left"] = 1] = "left";
    FQl_dynamic_designFeatures_txtAlign[FQl_dynamic_designFeatures_txtAlign["right"] = 2] = "right";
    FQl_dynamic_designFeatures_txtAlign[FQl_dynamic_designFeatures_txtAlign["center"] = 3] = "center";
    FQl_dynamic_designFeatures_txtAlign[FQl_dynamic_designFeatures_txtAlign["justify"] = 4] = "justify";
})(FQl_dynamic_designFeatures_txtAlign = exports.FQl_dynamic_designFeatures_txtAlign || (exports.FQl_dynamic_designFeatures_txtAlign = {}));
var FQl_dynamic_designFeatures_Flip;
(function (FQl_dynamic_designFeatures_Flip) {
})(FQl_dynamic_designFeatures_Flip = exports.FQl_dynamic_designFeatures_Flip || (exports.FQl_dynamic_designFeatures_Flip = {}));
/**
 * @interface
 * an interface for color preDesignFeature
 */
var FQl_dynamic_preDesignFeatures_Size;
(function (FQl_dynamic_preDesignFeatures_Size) {
    FQl_dynamic_preDesignFeatures_Size["Small"] = "Small";
    FQl_dynamic_preDesignFeatures_Size["Medium"] = "Medium";
    FQl_dynamic_preDesignFeatures_Size["Large"] = "Large";
    FQl_dynamic_preDesignFeatures_Size["XL"] = "XL";
    FQl_dynamic_preDesignFeatures_Size["2XL"] = "2XL";
    FQl_dynamic_preDesignFeatures_Size["3XL"] = "3XL";
    FQl_dynamic_preDesignFeatures_Size["4XL"] = "4XL";
})(FQl_dynamic_preDesignFeatures_Size = exports.FQl_dynamic_preDesignFeatures_Size || (exports.FQl_dynamic_preDesignFeatures_Size = {}));
var FQl_dynamic_wareType_Features;
(function (FQl_dynamic_wareType_Features) {
    FQl_dynamic_wareType_Features["Emoji"] = "Emoji";
    FQl_dynamic_wareType_Features["Text"] = "Text";
    FQl_dynamic_wareType_Features["RepeatPattern"] = "RepeatPattern";
    FQl_dynamic_wareType_Features["Color"] = "Color";
    FQl_dynamic_wareType_Features["Pic"] = "Pic";
    FQl_dynamic_wareType_Features["HandWriting"] = "HandWriting";
    FQl_dynamic_wareType_Features["Layers"] = "Layers";
})(FQl_dynamic_wareType_Features = exports.FQl_dynamic_wareType_Features || (exports.FQl_dynamic_wareType_Features = {}));
var FQl_dynamic_order_PaymentStatus;
(function (FQl_dynamic_order_PaymentStatus) {
    FQl_dynamic_order_PaymentStatus["Paid"] = "PAID";
    FQl_dynamic_order_PaymentStatus["NotPaid"] = "NOTPAID";
})(FQl_dynamic_order_PaymentStatus = exports.FQl_dynamic_order_PaymentStatus || (exports.FQl_dynamic_order_PaymentStatus = {}));
var FQl_dynamic_order_OrderStatus;
(function (FQl_dynamic_order_OrderStatus) {
    /** cancelled by store */
    FQl_dynamic_order_OrderStatus["Rejected"] = "REJECTED";
    FQl_dynamic_order_OrderStatus["Processing"] = "PROCESSING";
    FQl_dynamic_order_OrderStatus["Delivered"] = "DELIVERED";
    /** cancelled by user */
    FQl_dynamic_order_OrderStatus["Canceled"] = "CANCELED";
})(FQl_dynamic_order_OrderStatus = exports.FQl_dynamic_order_OrderStatus || (exports.FQl_dynamic_order_OrderStatus = {}));
var FQl_dynamic_comment_CommentStatus;
(function (FQl_dynamic_comment_CommentStatus) {
    FQl_dynamic_comment_CommentStatus[FQl_dynamic_comment_CommentStatus["ACCEPT"] = 0] = "ACCEPT";
    FQl_dynamic_comment_CommentStatus[FQl_dynamic_comment_CommentStatus["PENDING"] = 1] = "PENDING";
    FQl_dynamic_comment_CommentStatus[FQl_dynamic_comment_CommentStatus["REJECT"] = 2] = "REJECT";
})(FQl_dynamic_comment_CommentStatus = exports.FQl_dynamic_comment_CommentStatus || (exports.FQl_dynamic_comment_CommentStatus = {}));
