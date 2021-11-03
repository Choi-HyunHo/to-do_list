const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')

function onLoginSubmit(event) {
  event.preventDefault() // 브라우저의 기본 동작을 막아준다.
  console.log(loginInput.value)
}

loginForm.addEventListener('submit', onLoginSubmit)
