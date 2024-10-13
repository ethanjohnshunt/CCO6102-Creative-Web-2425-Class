//a model to store post data
//provides methods to access and modify data
//but does not export the data itself

const posts=[]
let nextPostID=0

//schema
// post={
//     postid: 0, //number
//     userid: 'user1', //String,
//     message: '', //string
//     postedTime: 0, //Date
//     likes: 0, //number
// }

function getAllPosts(){
    return posts
}

function getLastNPosts(n=3){
    return posts.slice(-n).reverse()
}

function addNewPost(user, message){
    let newPost={
        postid: nextPostID++,
        user: user,
        message: message,
        postedTime: Date.now(),
        likes: 0
    }
    posts.push(newPost)
}

function likePost(postid){
    //to be implemented
}

module.exports={
    getAllPosts,
    getLastNPosts,
    addNewPost,
    likePost
}