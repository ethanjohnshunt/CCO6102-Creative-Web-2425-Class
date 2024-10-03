console.log("Yes, I am working")


//fetch API call ( a promise)
fetch('rabbits.json')
    //hanndle the response and convert from json
    .then(response=>response.json())
    //handle the js object that we get back
    .then(handleRabbitData)

function handleRabbitData(rabbitData){
    console.log(rabbitData)
}
    