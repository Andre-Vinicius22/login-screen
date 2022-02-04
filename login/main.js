let btn = document.querySelector('#visibility')
let notSeePassword = document.querySelector('#notSeePassword')
let inputSenha = document.querySelector('#password')


//logica para ver a senha digitiada
btn.addEventListener('click', () => {

    if(inputSenha.getAttribute("type") == 'password'){
        inputSenha.setAttribute("type", "text")
        notSeePassword.setAttribute('style', 'display: block;')
    } else {
       inputSenha.setAttribute('type', 'password')
    }
})

notSeePassword.addEventListener('click', ()=>{
        notSeePassword.setAttribute('style', 'display: none;')
        inputSenha.setAttribute('type', 'password')
})