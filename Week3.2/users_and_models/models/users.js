const userData =[

    {username: 'user1', password: 'password1'},
    {username: 'user2', password: 'password2'}
]

function newUser(username, password){
//Username and password for registration
let isUser = findUser(username)
if(!isUser){
    const user = {
        username: username,
        password: password,
    }
    userData.push(user)
    return true
}
return false
}

function getUsers(){
//get all the user
    return userData
}

function findUser(username){
//parse in a username - if a username already exists
    let foundUser = getUsers.find(user=> {
        //check if this user already exists
        user.username == username
        return foundUser
    })

}
function checkPassword(username, password){
//existing user to log in
    let foundUser = findUser(username)
    if(foundUser){
        return foundUser.password == password 
    }
}

module.exports={
    newUser,
    getUsers,
    findUser,
    checkPassword,
}