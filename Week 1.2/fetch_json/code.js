console.log("Yes, I am working")


//fetch API call ( a promise)
fetch("https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400")
    //hanndle the response and convert from json
    .then(response=>response.json())
    //handle the js object that we get back
    .then(handleRabbitData)

function handleRabbitData(rabbitData){
    console.log(rabbitData)
    // let rabbitUL=document.createElement('ul')
    // document.body.appendChild(rabbitUL)
    // rabbitData.rabbits.forEach(rabbit=>{
    //     console.log(rabbit.name+": "+rabbit.age)
    //     let li=document.createElement('li')
    //     li.innerText=rabbit.name+": "+rabbit.age
    //     rabbitUL.appendChild(li)
    // })
}
    