//openAQ API key 3d81d31758fca2e60972da825222bc43bb2dec5d0aebe67f7087ba751921d5a7
const apikey='3d81d31758fca2e60972da825222bc43bb2dec5d0aebe67f7087ba751921d5a7'
const queryurl='https://api.openaq.org/v3/locations/2178'
const config={
    method: 'GET',
    headers: {
      'x-API-key': apikey
    }
}

fetch(queryurl, {
    mode: 'cors',
    method: 'GET',
    headers: {
        'x-API-key': '3d81d31758fca2e60972da825222bc43bb2dec5d0aebe67f7087ba751921d5a7'
    }
})
    .then(jdata=>jdata.json())
    .then(data=>{
        console.log(data)
    })
    .catch(error => console.log('Error while fetching:', error))

