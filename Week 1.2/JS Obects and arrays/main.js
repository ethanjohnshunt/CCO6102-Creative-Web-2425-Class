let a=[1,2,3,4,5]

a.push(6)
a.unshift(0)

let course1={
    name: "Dave",
    course: "Digital Storytelling",
    numberOfStudents: 25
}

let course2={
    name: "Jake",
}

let courses=[course1, course2]

let formResults=[]

function submitted(event){
    event.preventDefault()
    console.log(event.target.fname.value)
    console.log(event.target.elements)
    let newFormData={
        name: event.target.fname.value,
        colour: event.target.fcolour.value,
        hasBike: event.target.has_bike.value,
        codingCOnfidence: event.target.conf.value
    }
    formResults.push(newFormData)
    event.target.fname.value=""
    
}

let myForm=document.getElementById("myform")
myForm.addEventListener("submit", submitted)
//Javascript objects
// Objects and arrays
// Forms, input, more DOM
