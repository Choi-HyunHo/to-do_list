const toDoForm = document.getElementById('todo-form')
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.getElementById('todo-list')

function paintToDo(newTodo) {
  // todo 리스트 목록 생성
  const li = document.createElement('li') // (1) li를 만든다.
  const span = document.createElement('span') // (2) span을 만든다.
  li.appendChild(span) // (3) li는 span이라는 자식을 가지게 된다. 즉, span을 li 내부에 집어넣는다.
  span.innerText = newTodo // (4) toDoInput.value 의 값을 저장시킨 변수 newTodo의 텍스트를 span 내부에 넣는다.
  toDoList.appendChild(li) // (5) toDoList 안에 li를 추가한다.
}

function handleToDoSubmit(event) {
  event.preventDefault()
  const newTodo = toDoInput.value // input의 value를 새로운 변수에 복사
  toDoInput.value = '' // 비운다고 해서 newTodo 가 비워지는 것을 의미하는 것은 아니다. input창을 비워준다.
  paintToDo(newTodo)
}

toDoForm.addEventListener('submit', handleToDoSubmit)
