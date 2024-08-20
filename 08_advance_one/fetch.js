const Url = 'https://api.github.com/users/0mkarraykar'

fetch(Url).then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=> console.log(error))