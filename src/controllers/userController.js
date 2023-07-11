const User = require('../models/userMode');
const bcrypt = require('bcrypt');



async function registerLoad(req, res){

    try {
        res.render('register');


    } catch (error) {
        console.log(error.message);    
    }
}





async function register(req, res){
    
    try {
        
        const passwordHash = await  bcrypt.hash(req.body.password, 10);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            image: 'images/'+req.file.filename,
            password: passwordHash
        })


        await user.save();

        res.render('register', {message: "Register successfully finished"})

    } catch (error) {
        console.log(error.message);    
    }

}




module.exports = {
    registerLoad,
    register
}