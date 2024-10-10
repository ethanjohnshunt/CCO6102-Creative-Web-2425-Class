const express= require('express')
const app=express()
const path=require('path')

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})

app.use(express.static('public'))

app.use(express.urlencoded({extended: false}))


app.get('/thursday', (request, response)=>{
    response.sendFile(path.join(__dirname, '/views', 'thursday.html'))
})

app.get('/app', (request, response)=>{
    response.sendFile(path.join(__dirname, '/views', 'app.html'))
})

app.get('/getposts', (request, response)=>{
    response.json({posts: postData})
})

app.post('/newpost', (request, response)=>{
    // console.log(request.body.message)
    let newPost={
        postid: nextPostID++,
        user: 'user0',
        message: request.body.message
    }
    postData.push(newPost)
    console.log(postData)
    response.sendFile(path.join(__dirname, '/views', 'app.html'))

})

let nextPostID=2
let postData=[
    {
        postid:0,
        user: 'user1',
        message: 'I am Groot'
    },{
        postid:1,
        user: 'user2',
        message: 'It is Thursday'
    }

]