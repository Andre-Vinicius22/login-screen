let btn = document.querySelector('#seePassword')
let notSeePassword = document.querySelector('#notSeePassword')
let inputSenha = document.querySelector('#password')


//logica para ver a senha digitiada
btn.addEventListener('click', () => {

    if (inputSenha.getAttribute("type") == 'password') {
        inputSenha.setAttribute("type", "text")
        notSeePassword.setAttribute('style', 'display: block;')
        btn.setAttribute('style', 'display: none;')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})
notSeePassword.addEventListener('click', () => {
    notSeePassword.setAttribute('style', 'display: none;')
    btn.setAttribute('style', 'display: block;')
    inputSenha.setAttribute('type', 'password')
})

function entrar() {
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')

    let password = document.querySelector('#password')
    let senhaLabel = document.querySelector('#senhaLabel')

    let msgError = document.querySelector('#msgError')
    let listaUser = []
    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if (usuario.value == item.userCad && password.value == item.senhaCad) {
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })

    if (usuario.value == userValid.user && password.value == userValid.senha) {
        window.location.href = ' http://127.0.0.1:5500/Home/index.html '

        let token = Math.random().toString(16).substring(2) //na necessidade de um token maior basta concatenar 
        localStorage.setItem('token', token)
        localStorage.setItem('userLogado', JSON.stringify(userValid))

    } else {
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        password.setAttribute('style', 'border-color: red')

        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '*Usuário ou senha incorretos*'

        usuario.focus()
    }
}