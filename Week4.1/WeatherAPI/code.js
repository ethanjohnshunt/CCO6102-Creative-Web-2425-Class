//openAQ API key 3d81d31758fca2e60972da825222bc43bb2dec5d0aebe67f7087ba751921d5a7
// const apikey='3d81d31758fca2e60972da825222bc43bb2dec5d0aebe67f7087ba751921d5a7'
const apikey='4463216da4224c8387d144501241610'
// const queryurl='https://api.openaq.org/v3/locations/2178'
const queryurl='http://api.weatherapi.com/v1/current.json?key=4463216da4224c8387d144501241610&q=Bristol&aqi=no'
// const queryurl='http://api.weatherapi.com/v1/current.json?q=Bristol&aqi=no'

const config={
    method: 'GET',
    headers: {
      'x-API-key': apikey
    }
}

fetch(queryurl, 
//     {
//     mode: 'cors',
//     method: 'GET',
//     headers: {
//         'x-api-key': '4463216da4224c8387d144501241610'
//     }
// }
)
    .then(jdata=>jdata.json())
    .then(data=>{
        console.log(data)
    })
    .catch(error => console.log('Error while fetching:', error))

