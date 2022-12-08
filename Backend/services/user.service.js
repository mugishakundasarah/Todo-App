module.exports.createUser = async(name, email, pass) => {
    let obj = {name: name, email: email, password: pass, todo: []}
    const user = new User(obj);
    await user.save();
}

module.exports.checkEmail = async (email) => {
    let users = await User.findOne({email: email})
    if(users !== null) {
        // console.log(users.email)
        return users.email 
    } else {
        return false
    }
}

module.exports.checkAuth = async (email, pass) => {
    let users = await User.findOne({email: email})
    if (email === users?.email && pass === users?.password) {
        return true
    } else {
        return false
    }
}

module.exports.deleteUser = async (id) => {
    const deletedUser = await User.deleteOne({_id: id}, function(err, obj) {
       
    })
    if(deletedUser){
        return deletedUser
    } else 
         if (err) throw err;
}