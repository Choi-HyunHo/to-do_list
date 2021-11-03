const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting')

const HIDDEN_CLASSNAME = 'hidden'

function onLoginSubmit(event) {
  event.preventDefault() // 브라우저의 기본 동작을 막아준다.
  loginForm.classList.add(HIDDEN_CLASSNAME) // 값을 입력받으면 form을 사라지게 한다.
  const username = loginInput.value // user의 이름을 변수(username)로 저장해준다.
  localStorage.setItem('username', username) // key: 저장될 값의 이름, value : 변수(값)
  greeting.innerText = `Hello ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

loginForm.addEventListener('submit', onLoginSubmit)
