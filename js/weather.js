const API_KEY = 'e220d5156fa09965dadea943f951617f'

function onGeoOk(position) {
  const lat = position.coords.latitude // 위도
  const log = position.coords.longitude // 경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector('#weather span:first-child')
      const city = document.querySelector('#weather span:last-child')
      city.innerText = data.name
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    })
  ) // url 에 직접 갈 필요 없이, javaScript 가 대신 url을 불러준다.
}

function onGeoError() {
  alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
