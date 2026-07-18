const User = require('../models/usermodel');
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const generateToken = require("../Utils/generateToken");



// const getUsers = async(req, res) =>{
//     try{
//         console.log("get request received");

//         const AllSignup = await Signup.find();

//         if(!AllSignup || AllSignup.length === 0 ){
//             res.json({
//                 message: "User not Found"
//             })
//         }
//         res.status(200).json({
//             success:true,
//             Signup: AllSignup,
//         })
//     }
//     catch(err){
//         res.status(500).json({
//             success: false,
//             message: "internal server error!"
//         })
//     }
// }

// const createsignup = async (req, res) => {
//             console.log("post request received");
//     try{
//         const {name , email, password} = req.body;
//         const newSignup = new Signup({name,email,password});
//         await newSignup.save();
//         res.status(200).json({
//             Signup: newSignup
//         })
//     }
//     catch(err){
//         res.status(500).json({
//             success: false,
//             message: "internal server error!"
//         })
//     }
// }





const createUsers = async (req, res) => {

  

  try {
    const { name, email, password } = req.body;

    console.log(req.body);
console.log(typeof password);
console.log(password);

    // Check if email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    console.log("✅ User Saved Successfully");
console.log(newUser);

    generateToken(newUser, res);

  res.status(201).json({
    success: true,
    message: "Signup Successful",
    user: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    },
  });
  } catch (err) {
     console.error("Signup Error:", err);
   return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};






const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
  return res.status(400).json({
    success: false,
    message: "Invalid Email or Password",
  });
}

    const isMatch = await bcrypt.compare(password, user.password);

if (!isMatch) {
  return res.status(400).json({
    success: false,
    message: "Invalid Email or Password",
  });
}

generateToken(user, res);

return res.status(200).json({
  success: true,
  message: "Login Successful",
  user: {
    id: user._id,
    name: user.name,
    email: user.email,
  },
});

  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



const logout = (req, res) => {

  res.clearCookie("token", {
  httpOnly: true,
  secure: false,
  sameSite: "lax",
});

  return res.status(200).json({
    success: true,
    message: "Logout Successful",
  });

};


const getMe = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email }).select("-password");

    return res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });

  }
};



// const updateUsers = async(req, res) =>{
//     try{
//         const {id} = req.params;
//         const {name , email, password} = req.body;
//         const updatedSignup = await Signup.findByIdAndUpdate(id, {name, email,password}, {new:true});
//         res.status(200).json({
//             success:true,
//             Signup: updatedSignup,
//         })
//     }
//     catch(err){
//         res.status(500).json({
//             success: false,
//             message: "internal server error!"
//         })
//     }
// }

// const deleteUsers = async(req, res) =>{
//     try{
//         const {id} = req.params;
//         const {name , email, password} = req.body;
//         const deletedSignup = await Signup.findByIdAndDelete(id);

//         if(!deletedSignup){
//             res.json({
//                 message:"User not Found , Cannot Delete"
//             })
//         }
//         res.status(200).json({
//             message:"User delete Successfully",
//             Signup: deletedSignup,
//         })
//     }
//     catch(err){
//         res.status(500).json({
//             success: false,
//             message: "internal server error!"
//         })
//     }
// }


module.exports = {createUsers,login,logout,getMe,}