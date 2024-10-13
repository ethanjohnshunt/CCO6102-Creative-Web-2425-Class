const express= require('express')
const app=express()
const path=require('path')

const postData=require('./models/posts.js')
const userData=require('./models/users.js')

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})

app.use(express.static('public'))

app.use(express.urlencoded({extended: false}))

// //consts to hold expiry times in ms
// const threeMins = 1000 * 60 * 3;
// const oneHour = 1000 * 60 * 60;

// //use the sessions module and the cookie parser module
// const sessions = require('express-session');
// const cookieParser = require("cookie-parser");

// //make cookie parser middleware available
// app.use(cookieParser());

// //load sessions middleware, with some config
// app.use(sessions({
//     secret: "a secret that only i know",
//     saveUninitialized:true,
//     cookie: { maxAge: oneHour },
//     resave: false 
// }));

// //test that user is logged in with a valid session
// function checkLoggedIn(request, response, nextAction){
//     if(request.session){
//         if(request.session.userid){
//             nextAction()
//         } else {
//             request.session.destroy()
//             return response.sendFile(path.join(__dirname, '/views', 'notloggedin.html'))
//         }
//     }
// }

// //controller for the main app view, depends on user logged in state
// app.get('/app', checkLoggedIn, (request, response)=>{
//     response.sendFile(path.join(__dirname, '/views', 'app.html'))
// })

app.get('/app', (request, response)=>{
    response.sendFile(path.join(__dirname, '/views', 'app.html'))
})



app.get('/register', (request, response)=>{
    response.sendFile(path.join(__dirname, '/views', 'register.html'))
})

app.post('/register', (request, response)=>{
    console.log(request.body)
    let userFormData=request.body
    // console.log(userFormData.username)
    if(userData.findUser(userFormData.username)){
        console.log('user exists')
        response.sendFile(path.join(__dirname, '/views', 'registration_failed.html'))
    } else {
        userData.newUser(userFormData.username, userFormData.password)
        response.sendFile(path.join(__dirname, '/views', 'login.html'))
    }
    // console.log(userData.getUsers())
})

app.get('/login', (request, response)=>{
    response.sendFile(path.join(__dirname, '/views', 'login.html'))
})

//controller for login
app.post('/login', (request, response)=>{
    console.log(request.body)
    let userFormData=request.body
    console.log(userFormData)
    if(userData.findUser(userFormData.username)){
        console.log('user found')
        if(userData.checkPassword(userFormData.username, userFormData.password)){
            console.log('password matches')
            // request.session.userid=userData.username
            response.sendFile(path.join(__dirname, '/views', 'app.html'))

        } else {
            console.log('password wrong')
            // request.session.destroy()
            response.sendFile(path.join(__dirname, '/views', 'login_failed.html'))
        }
    }
    // console.log(userData.getUsers())
})

app.get('/logout', (request, response)=>{
    response.sendFile(path.join(__dirname, '/views', 'logout.html'))
})

app.post('/logout', (request, response)=>{
    // request.session.destroy()
    response.sendFile(path.join(__dirname, '/views', 'loggedout.html'))
})

app.get('/getposts', (request, response)=>{
    // response.json({posts: postData})
    response.json({posts: postData.getLastNPosts(3)})
})

app.post('/newpost', (request, response)=>{
    // console.log(request.body.message)
    // let newPost={
    //     postid: nextPostID++,
    //     user: 'user0',
    //     message: request.body.message
    // }
    // postData.push(newPost)
    postData.addNewPost('user123',request.body.message)
    // console.log(postData.getAllPosts())
    response.sendFile(path.join(__dirname, '/views', 'app.html'))

})

// let nextPostID=2
// let postData=[
//     {
//         postid:0,
//         user: 'user1',
//         message: 'I am Groot'
//     },{
//         postid:1,
//         user: 'user2',
//         message: 'It is Thursday'
//     }

// ]