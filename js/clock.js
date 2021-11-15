const clock = document.querySelector('#clock')

function getClock() {
  const date = new Date() // 새로운 object 생성
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const days = ['Sun', 'Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat']
  const hours = String(date.getHours()).padStart(2, '0') // getHours() number 타입 -> string 변환
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  clock.innerText = `${days[date.getDay()]}${String(date.getDate()).padStart(
    2,
    '0'
  )} ${
    month[date.getUTCMonth()]
  } ${date.getFullYear()},${hours}:${minutes}:${seconds}`
}

getClock() // 초기에 1초 delay가 생기는 것을 방지하기 위해 한 번 호출한다.
setInterval(getClock, 1000)
