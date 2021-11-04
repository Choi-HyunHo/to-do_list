const clock = document.querySelector('#clock')

function getClock() {
  const date = new Date() // 새로운 object 생성
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

getClock() // 1초 delay가 생기는 것을 방지하기 위해 한 번 호출한다.
setInterval(getClock, 1000)
