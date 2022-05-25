const User = require('../models/User');
exports.register = async (reg,res,next) =>{
    try {
        //
        const user = await User.create(reg.body);
        res.status(200).json({
            status:'success',
            data: {user}
        })
    } catch (error) {
        res.json(error);
    }
}

exports.register = (req,res,next) =>{
    res.json('User register');
}

exports.login = (req,res,next) =>{
    res.json('User login');
}
