console.log("Yes, I am working")


//fetch API call ( a promise)
fetch("https://api.openaq.org/v3/locations/8118")
    //hanndle the response and convert from json
    // .then(data=>console.log(data))
    .then(response=>response.json())
    //handle the js object that we get back
    .then(data=>{
        console.log(data)
    })

function handleRabbitData(rabbitData){
    console.log(rabbitData)
    let rabbitUL=document.createElement('ul')
    document.body.appendChild(rabbitUL)
    rabbitData.rabbits.forEach(rabbit=>{
        console.log(rabbit.name+": "+rabbit.age)
        let li=document.createElement('li')
        li.innerText=rabbit.name+": "+rabbit.age
        rabbitUL.appendChild(li)
    })
}
    