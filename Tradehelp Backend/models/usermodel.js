const {Schema,model} = require("mongoose");





const SignupSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = model("User", SignupSchema)

module.exports = UserModel