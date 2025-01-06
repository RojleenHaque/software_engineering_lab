//controller/user
const { generateToken } = require('../routes/User');


const loginUser=async(req,res)=>{

}


const registerUser=async(req,res)=>{
 res.json({msg:" reg api working"})
}


//route for admin login
const adminLogin=async(req,res)=>{

}


export {loginUser,registerUser,adminLogin}



// //previous
// // User login endpoint
// userRoute.post('/login', asyncHandler(async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });

//   if (user && (await user.matchPassword(password))) {
//     // If user is found and password matches, generate the token
//     res.json({
//       _id: user.id,
//       name: user.name,
//       token: generateToken(user._id), // Generate JWT token
//       isAdmin: user.isAdmin,
//       createdAt: user.createdAt,
//     });
//   } else {
//     res.status(401);
//     throw new Error("Invalid email or password");
//   }
// }));
