const express= require('express')
const app=express()
const path=require('path')

const posts=require('./models/posts.js')
const users=require('./models/users.js')




app.listen(3000, ()=>{
    console.log('listening on port 3000')
})

app.use(express.static('public'))

app.use(express.urlencoded({extended: false}))


app.get('/app', (request, response)=>{
    response.sendFile(path.join(__dirname, '/views', 'app.html'))
})

app.get('/login', (request, response)=>{

    response.sendFile(path.join(__dirname, '/views', 'login.html'))
})

app.get('/register', (request, response)=>{
    response.sendFile(path.join(__dirname, '/views', 'register.html'))
})

app.get('/logout', (request, response)=>{
    response.sendFile(path.join(__dirname, '/views', 'logout.html'))
})

app.post('/login', (request, response)=>{
    if(users.checkPassword(request.body.username, request.body.password)){
        response.sendFile(path.join(__dirname, '/views', 'app.html'))
        console.log(uses.getUsers)
    }
    response.sendFile(path.join(__dirname, '/views', 'notloggedin.html'))

})

console.log(users.getUsers())


app.get('/getposts', (request, response)=>{
    response.json({posts: posts.getAllPosts()})
})

app.post('/newpost', (request, response)=>{
    // console.log(request.body.message)
    // let newPost={
    //     postid: posts.nextPostID++,
    //     user: 'user0',
    //     message: request.body.message
    // }
    // posts.postData.unshift(newPost)
    console.log(posts.postData)
    response.sendFile(path.join(__dirname, '/views', 'app.html'))

})

