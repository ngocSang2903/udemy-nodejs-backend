const user = require('../models/user');

const getUsers = async (req,res) => {
    let result = await user.find({});

    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}

const postUser = async (req,res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let users = await user.create({
        email : email,
        name : name,
        city : city
    })

    return res.status(200).json({
        errorCode: 0,
        data: users
    })
}

const putUser = async (req,res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userID = req.body.userID;
    let users = await user.updateOne({_id : userID
    },{
        email : email,
        name : name,
        city : city
    })

    return res.status(200).json({
        errorCode: 0,
        data: users
    })
}

const deleteUser = async (req,res) => {
    let userID = req.body.userID;

    let result = await user.deleteOne({
        _id : userID
    })

    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}


module.exports = {getUsers,postUser,putUser,deleteUser}