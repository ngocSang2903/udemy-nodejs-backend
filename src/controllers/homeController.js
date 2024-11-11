const connection = require("../config/database");
const user = require("../models/user")
const {getAllUsers} = require("../services/CRUDService")


const getHome = async (req,res)=>{
    let results = await getAllUsers();
    return res.render('home.ejs', {listUsers : results});
}

const getView = (req,res)=>{
    res.render('sample.ejs')
}

const getViewCreate = (req,res)=>{
    res.render('create.ejs')
}

const postCreateUser = async (req,res)=>{
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    console.log(email)
    // connection.query(
    //     'INSERT INTO Users(email,name,city) VALUES (?,?,?)',
    //     [email,name,city],
    //     function(err,results){
    //         console.log(results);
    //         console.log(err)
    //         res.send('create a new user')
    //     }
    // )

    // let [results, fields] = await connection.query('INSERT INTO Users(email,name,city) VALUES (?,?,?)',[email,name,city]);

    await user.create({
        name,
        email,
        city
    })

    res.send('create a new user')
}

module.exports = {
    getHome,
    getView,
    postCreateUser,
    getViewCreate
}