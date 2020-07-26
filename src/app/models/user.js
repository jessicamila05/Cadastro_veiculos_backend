const mongoose = require("../../database");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    userName:{
        type: String,
        unique: true,
        require: true,
    },
    email:{
        type: String,
        unique: true,
        require: true,
    },
    password:{
        type: String,
        require: true,
        select: false, 
    },
    passwordResetToken:{
        type:String,
        select:false,
    },
    passwordResetExpires:{
        type:Date,
        select:false,
    },

    createdAt:{
        type: Date,
        default: Date.now,
    },

});

UserSchema.pre("save", async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})

const User = mongoose.model("use", UserSchema);

module.exports = User;