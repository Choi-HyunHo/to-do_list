const toDoForm = document.getElementById('todo-form')
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.getElementById('todo-list')

const TODOS_KEY = 'todos'

const toDos = []

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)) // toDos 배열의 내용을 localstroage에 넣는다. (string으로 변환)
}

function deleteToDo(event) {
  // click 또한 event에 대한 정보도 가지고 있다.
  // todo 리스트 목록 제거
  const li = event.target.parentElement // 내가 삭제하고 싶은 li
  li.remove()
}

function paintToDo(newTodo) {
  // todo 리스트 목록 생성
  const li = document.createElement('li')
  const span = document.createElement('span')
  span.innerText = newTodo
  const button = document.createElement('button')
  button.innerText = '🗑'
  button.addEventListener('click', deleteToDo)
  li.appendChild(span)
  li.appendChild(button)
  toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
  event.preventDefault()
  const newTodo = toDoInput.value // input의 value를 새로운 변수에 복사
  toDoInput.value = '' // 비운다고 해서 newTodo 가 비워지는 것을 의미하는 것은 아니다. input창을 비워준다.
  toDos.push(newTodo)
  paintToDo(newTodo)
  saveToDos()
}

toDoForm.addEventListener('submit', handleToDoSubmit)

function sayHello(item) {
  // JavaScript 는 지금 처리되고 있는 item을 제공 해준다.
  console.log('this is the turn of', item)
}

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos)
  parsedToDos.forEach(sayHello) // forEach는 array의 각 item에 대해 function을 실행하게 해준다
}
