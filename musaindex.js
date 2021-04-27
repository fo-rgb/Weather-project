window.navigator.geolocation.getCurrentPosition(result =>{
    // obterner ordenas
    const lat = result.coords.latitude
    const lon = result.coords.longitude
  
    // llamar header Api
    const url = new URL('https://api.weatherbit.io/v2.0/current?lat=41.41&lon=2.19&c02n')
    url.searchParams.set(`lat`,lat)
    url.searchParams.set(`long`,lon)
    url.searchParams.set(`key`, `94732983488740c7ac18361880e08e1d`)

    fetch(url)
    // convertirlo a JSON

    .then(response => response.json())
    .then(json =>{
        //Obterner el icon que vamos a necesitar
        const weather = json.data[0]
        const weaterIcon = weather.icon
        let weaterUrlIcon = `https://api.weatherbit.io/v2.0/current?lat=41.41&lon=2.19&key=94732983488740c7ac18361880e08e1d/${weaterIcon}.png`
        const citeName = weather.city_name
        const temperature = weather.temp
        const timezone = weather.timezone
        const codigoPos = weather.country_code
        const cloud = weather.clouds
        
const citeNameDiv = document.getElementById(`citeNameDiv`)
const temperaturaDiv = document.getElementById(`temperaturaDiv`)
const uvDiv = document.getElementById(`uvDiv`)
const timezoneDiv = document.getElementById(`timezoneDiv`)
const weaterIconImgDiv = document.getElementById(`weaterIconImg`)
const codigoPosDiv = document.getElementById(`codigoPos`)
const cloudDiv = document.getElementById(`cloudDiv`)

citeNameDiv.innerText =`Nombre de la Ciudade :${citeName}` 
temperaturaDiv.innerText =`la temperatura : ${temperature}` 
uvDiv.innerText =`el UV :${weather.uv}` 
timezoneDiv.innerText =`la zona :${timezone}` 
weaterIconImgDiv.src = weaterUrlIcon.icon
codigoPosDiv.innerText =`el country code : ${codigoPos}` 
cloudDiv.innerText =`el cloud es cloud: ${cloud}`
    })


})



const theme = document.querySelectorAll('.theme')
theme.forEach((item) => {
    item.addEventListener('click',(e) =>{
        // console.log(e.target.id)
    if (e.target.id === "drak") {
        document.body.classList.add("themeDrak")
     
    }
    else if (e.target.id === "salomon") {
        document.body.classList.add("themeSalomon")    
    }
    else if (e.target.id === "yellow") {
        document.body.classList.add("themeYellow")
    }
}) 
});



