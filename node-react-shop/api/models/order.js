const mangoose= require("mongoose");
const { default: mongoose } = require("mongoose");

const orderItemSchema=new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true }, 
    discount_price: { type: Number, required: true }, 
    product: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required:true,
    },

});

const orderSchema= mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    orderItems: [orderItemSchema],
    shippingAddress: {                           // user adress
        address:{ type: String, required: true },
        city:{ type: String, required: true },
        postalCode:{ type: String, required: true },
        country:{ type: String, required: true },
    },
    paymentMethod:{ type: String, required: true,default:"Paypal" }, //payment
    paymentResult:{
        id:{type: String},
        status:{type: String},
        updated_address:{type: String},
        email:{type: String},
    },
    taxPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    shippingPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    totalPrice:{   //
        type:Number,
        required:true,
        default:0.0
    },
    isPaid:{         //is already paied
        type:Boolean,
        required:true,
        default:false,
    },
    paidAt:{   //if not then pay
        type:Date,
    },
    isDelivered:{  //is already deliverd
        type:Boolean,
        required:true,
        default:false,

    },
    deliverAt:{    //if not then deliver
        type:Date,
    }
},
    {timestamps:true}
);



module.exports=mongoose.model("order",orderSchema)