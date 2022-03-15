const Admin = require('./admi.model')

//Get http:localhost:5000/admin
async function getAdmin(req , res){
    try {
        
        return res.status(200).json({
            "username":"admin",
            "password":'admin',
            "role": "admin"
        })
    } catch (err){
        return res.status(400).send(err)
    }
}



module.exports = {
    getAdmin
}



