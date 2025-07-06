import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
export const register = async (req, res) => {
    try{
        const{ fullName, email, password, phoneNumber, role } = req.body;
        if(!fullName || !email || !password || !phoneNumber || !role){
            return res.status(400).json({
                message: 'All fields are required',
                success: false,
            });
        };
        const user =await User.findOne({ email});
        if(user){
            return res.status(400).json({
                message: 'User already exists',
                success: false,
            });
        };
        const hashedPasword = await bcrypt.hash(password,10);
    }
    catch(error){
        await User.create({
            fullName,
            email,
            password: hashedPasword,
            phoneNumber,
            role,
            
        });

    }
}    