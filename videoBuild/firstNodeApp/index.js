const express=require('express')
const app=express()
const PORT=3000
const path=require('path')

app.listen(PORT, ()=>{
    console.log('listening on port:'+PORT)
})

app.use(express.static('public'))

app.use(express.urlencoded({extended: false}))

app.get('/app',(request, response)=>{
    response.sendFile(path.join(__dirname, './views','application.html'))
})

let nextPostID=2
const postData=[
    {
        postid: 0,
        user: 'user1',
        message: "Hi It's Thursday"
    },
    {
        postid: 1,
        user: 'user2',
        message: "I'm hungry"
    }
]

app.get('/data',(request, response)=>{
    response.json({posts:postData.slice(-3).reverse()})
})

app.post('/newpost',(request, response)=>{
    console.log(request.body)
    let newPost={
        postId: nextPostID++,
        user:'new user',
        message: request.body.message
    }
    postData.push(newPost)
    response.sendFile(path.join(__dirname, './views','application.html'))
})