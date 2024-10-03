let res=document.getElementById("result");
res.innerText="Click the button"
let counter=0;
let countInterval;


function getLocation() {
  if (navigator.geolocation) {
    countInterval=setInterval(()=>console.log(counter++/10),100);
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    res.innerHTML = "Geolocation is not supported by this browser.";
  }
  // let myH1=document.getElementById("result").innerHTML="<h2>You clicked me</h2><p>hello</p>"
}

function showPosition(position) {
  res.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
  clearInterval(countInterval);
}