const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){ //async 
    let promise = charactersAPI.getFullList()
    promise.then(res=>{
      $('.character-info').html(JSON.stringify(res.data))
    })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.querySelector('body > section:nth-child(1) > section > div:nth-child(2) > input[type="text"]').value    
    charactersAPI.getOneRegister(id).then(res=>{
      $('.character-info').html(JSON.stringify(res.data))
      document.querySelector('body > section:nth-child(1) > section > div:nth-child(2) > input[type="text"]').value = ''
    })
  }
  
  document.getElementById('delete-one').onclick = async function(){
    let id = document.querySelector('body > section:nth-child(1) > section > div.operation.delete > input[type="text"]').value
    let blah = await charactersAPI.deleteOneRegister(id)
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault()
    let [id, name, occupation, weapon, cartoon] =  [ ...$('#edit-character-form .field input') ]
    let promise = charactersAPI.updateOneRegister(id.value, name.value, occupation.value, weapon.value, cartoon.checked)
    promise.then(res=>  $('.character-info').html(JSON.stringify(res.data)))
  }
  
  document.getElementById('new-character-form').onsubmit = async function(event){
    event.preventDefault()
    let [name, occupation, weapon, cartoon] =  [ ...$('#new-character-form .field input') ]
    let res = await charactersAPI.createOneRegister(name.value, occupation.value, weapon.value, cartoon.checked)
    $('.character-info').html(JSON.stringify(res.data))

  }
})
