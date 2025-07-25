import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const { name, email, password,phoneNumber, role, bio } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "something is missing",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "user is already exist with this email",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      role,
      profile: {
        bio,
      },
    });

    return res.status(201).json({
      message: "User created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email or password is missing",
        success: false,
      });
    }

    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, foundUser.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect password",
        success: false,
      });
    }

    const tokenData = {
      userId: foundUser._id,
    };

    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    const user = {
      _id: foundUser._id,
      name: foundUser.name,
      email: foundUser.email,
      phoneNumber: foundUser.phoneNumber,
      role: foundUser.role,
      profile: {
        bio: foundUser.profile?.bio || "",
      },
      profilePhoto: foundUser.profilePhoto,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome back ${user.name}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

export const logout = async (req,res) =>{
    try {
     return res.status(200).cookie("token","",{maxAge : 0}).json({
        message: "Log out successfully",
            success: true
     })

    } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
    }
}

export const update = async (req,res) =>{
    try {
        const { name, email,phoneNumber, bio } = req.body;

        const userId = req.id;
        let user = await User.findById(userId);

        if(!user){
            return res.status(400).json({
                message : "user not found",
                success : false
            })
        }

        if(name) user.name = name;
        if(email) user.email = email;
        if(bio) user.profile.bio = bio;
        if(phoneNumber) user.profile.phoneNumber = phoneNumber;
        
        await user.save();

        user = {
            _id:user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            bio: user.profile.bio
        }
         return res.status(200).json({
            message: "Profile updated successfully",
            user,
            success: true
        })
    } catch (error) {
    console.log(error);
    return res.status(500).json({
        message : "something went wrong",
        success : false
    })    
    }
}

export const getUserByid = async (req,res)=>{
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({
                message: "User not found",
                success: false
            });
        }
        return res.status(200).json({
            message: "User fetched successfully",
            user,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}