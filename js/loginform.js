const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting')
const logoutForm = document.querySelector('#logout')
const todo = document.querySelector('#todo-form')
const todoStyle = document.querySelector('#todo-list')
const peopleText = document.querySelector('#quote-box')

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

function onLoginSubmit(event) {
  event.preventDefault() // 브라우저의 기본 동작을 막아준다.
  loginForm.classList.add(HIDDEN_CLASSNAME) // 값을 입력받으면 form을 사라지게 한다.
  const username = loginInput.value // input의 값을 변수(username)로 저장해준다.
  // 그 변수 값을 USERNAME_KEY 와 함께 저장
  localStorage.setItem(USERNAME_KEY, username) // key: 저장될 값의 이름(username), value : 변수(값-input에 입력한 값)
  paintGreetings(username) // 유저가 form 안에 있는 input에 입력한 유저명을 받는다. 정보가 input으로 부터 온다
}

function paintGreetings(username) {
  greeting.innerText = `Have a nice day!! ${username}` // 비어있는 h1 요소 안에 텍스트 추가
  greeting.classList.remove(HIDDEN_CLASSNAME)
  logoutForm.classList.remove(HIDDEN_CLASSNAME)
  todo.classList.remove(HIDDEN_CLASSNAME)
  todoStyle.classList.remove(HIDDEN_CLASSNAME)
  peopleText.classList.remove(HIDDEN_CLASSNAME)
}

// 가장 먼저 실행되는 라인
const savedUsername = localStorage.getItem(USERNAME_KEY) // 입력된 값이 없으면 null 반환

// 로그인을 한 후 새로고침하면 더이상 null이 아니다.
if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener('submit', onLoginSubmit)
} else {
  // show the greetings
  paintGreetings(savedUsername) // input값이 아닌 저장 되어있는 local storage로부터 정보가 온다
}

function removeStorage() {
  localStorage.removeItem(USERNAME_KEY)
  location.reload()
}

logoutForm.addEventListener('click', removeStorage)
