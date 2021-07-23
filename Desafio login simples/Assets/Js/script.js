function cadastrar() {
    usu = document.getElementById('usuario')
    sen = document.getElementById('senha')
    res = document.getElementById('res')
    if (usu.value.length == 0 || sen.value.length == 0) {
        alert('Não e possivel finalizar o cadastro com um ou mais campos em branco!')
    } else {
        usu = String(usu.value)
        sen = String(sen.value)
        alert(`Cadastro efetuado com sucesso!`)
        res.innerHTML = '<a href = "#" onclick="document.getElementById(\'cadastro\').hidden = true;document.getElementById(\'entrar\').hidden = false;"><strong id= "login">Login</strong></a>'
    }
}
function entrar() {
    let ide = document.getElementById('user')
    let pas = document.getElementById('password')
    if (ide.value == 0 || pas.value == 0) {
        alert('Digite Usuário ou Senha para continuar!')
    } else {
        ide = String(ide.value)
        pas = String(pas.value)
        if (ide == usu && pas == sen) {
            alert(`Login efetuado com sucesso`)
        } else {
            alert(`[ERROR] Verifique Usuário ou Senha e tente novamente!`)
        }
    }
}

