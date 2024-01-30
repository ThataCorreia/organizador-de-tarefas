let itemId = 0

function salvar(tipo) {
  let input = document.querySelector('#valor')
  let elemento = document.querySelector(`#${tipo}`)
  if (input.value === '') {
    alert('O campo de texto está vazio! Por favor, inclua uma tarefa.')
    return
  }
  
  elemento.innerHTML += `<div class='card' id='item-${itemId}'>
    <span>${input.value}</span>
    <button onclick='excluir("item-${itemId}")'>Excluir</button>
  </div>`
  input.value = ''
  itemId++
}

function excluir(valor) {
  let elemento = document.querySelector(`#${valor}`)
  elemento.remove()
}