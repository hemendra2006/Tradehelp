const jwt = require("jsonwebtoken");

const generateToken = (user, res) => {

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
  res.cookie("token", token, {
    httpOnly: true,
    secure: false,      // Development
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

};

module.exports = generateToken;