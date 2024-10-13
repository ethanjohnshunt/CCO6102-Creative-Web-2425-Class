const users=[
    {username:'user1', password:'123'},
    {username:'user2', password:'456'}
]

function newUser(username, password){
    const user={username:username, password:password}
    users.push(user)
}

function getUsers(){
    return users
}

function findUser(username){
    return users.find(user=>user.username==username)
}

function checkPassword(username, password){
    let user=findUser(username)
    if(user){
        return user.password==password
    }
    return false
}


exports.newUser=newUser;
exports.getUsers=getUsers;
exports.findUser=findUser;
exports.checkPassword=checkPassword;

module.exports={
    newUser,
    getUsers,
    findUser,
    checkPassword,
}
