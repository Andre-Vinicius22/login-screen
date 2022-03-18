let btn = document.querySelector('#seePassword')
let btnConfirm = document.querySelector('#seeConfirmPassword')


// variaveis para os inputs
let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let password = document.querySelector('#password')
let labelSenha = document.querySelector('#labelSenha')
let validPassword = false

let confirmPassword = document.querySelector('#confirmPassword')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmPassword = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')
let notSeePassword = document.querySelector('#notSeePassword')
let notSeeConfirmPassword = document.querySelector('#notSeeConfirmPassword')

//validação de todos os campos
nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 4) {
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Usuario *Insira no minimo 5 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'usuario'
        usuario.setAttribute('style', 'border-color: green')
        validUsuario = true
    }
})

password.addEventListener('keyup', () => {
    if (password.value.length <= 7) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'senha *Insira no minimo 8 caracteres'
        password.setAttribute('style', 'border-color: red')
        validPassword = false
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'senha'
        password.setAttribute('style', 'border-color: green')
        validPassword = true
    }
})

confirmPassword.addEventListener('keyup', () => {
    if (password.value != confirmPassword.value) {
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'Confirmar Senha *As Senhas não conferem'
        confirmPassword.setAttribute('style', 'border-color: red')
        validConfirmPassword = false
    } else {
        labelConfirmSenha.setAttribute('style', 'color: green')
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        confirmPassword.setAttribute('style', 'border-color: green')
        validConfirmPassword = true
    }
})


//function para validar e realizar o cadastro
function cadastrar() {
    if (validNome && validUsuario && validPassword && validConfirmPassword) {

        //Cadastrando usuario se os campos acima estiverem validos
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push({
            nomeCad: nome.value,
            userCad: usuario.value,
            senhaCad: password.value
        })

        // adcionando dados do formulario ao localstorage
        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        // Mensagem de erro
        msgSuccess.setAttribute('style', 'display: block;')
        msgSuccess.innerHTML = '<strong>Cadastrando Usuário...</strong>'

        msgError.setAttribute('style', 'display: none;')
        msgError.innerHTML = ''

        // navegando para tela de login após o cadastro
        setTimeout(() => {
            window.location.href = ' http://127.0.0.1:5500/login/index.html '
        }, 2000)//Delay de 2s para navegar até login


    } else {
        msgError.setAttribute('style', 'display: block;')
        msgError.innerHTML = '<strong>*Preencha todos os campos corretamente*</strong>'
        msgSuccess.setAttribute('style', 'display: none;')
        msgSuccess.innerHTML = ''
    }
}
//variaveis dos inputs para visualição de senha
let inputSenha = document.querySelector('#password')
let inputConfirmSenha = document.querySelector('#confirmPassword')

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

btnConfirm.addEventListener('click', () => {

    if (inputConfirmSenha.getAttribute("type") == 'password') {
        inputConfirmSenha.setAttribute("type", "text")
        btnConfirm.setAttribute('style', 'display: none;')
        notSeeConfirmPassword.setAttribute('style', 'display: block;')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})
notSeeConfirmPassword.addEventListener('click', () => {
    notSeeConfirmPassword.setAttribute('style', 'display: none;')
    btnConfirm.setAttribute('style', 'display: block;')
    inputConfirmSenha.setAttribute('type', 'password')
})