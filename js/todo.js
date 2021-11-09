const toDoForm = document.getElementById('todo-form')
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.getElementById('todo-list')

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
  paintToDo(newTodo)
}

toDoForm.addEventListener('submit', handleToDoSubmit)
