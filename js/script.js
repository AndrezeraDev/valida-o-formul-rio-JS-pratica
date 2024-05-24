// Seleciona o formulário e os campos de entrada pelo ID
const form = document.querySelector("#form");
const nome = document.querySelector("#nome-form");
const email = document.querySelector("#email-form");
const erroMessage = document.querySelector("#mensagemErro");

// Adiciona um evento de escuta ao formulário quando ele é enviado
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o comportamento padrão de envio do formulário
    validaForm(); // Chama a função de validação do formulário
});

// Função que valida os campos do formulário
function validaForm() {
    // Remove espaços em branco dos valores dos campos
    const nomeValor = nome.value.trim();
    const emailValor = email.value.trim();
    let mensagemErro = '';

    // Verifica se o campo de nome está vazio ou não contém pelo menos duas palavras
    if (nomeValor === '') {
        mensagemErro += 'Por favor, insira o seu nome completo.<br>';
    } else if (nomeValor.split(' ').length < 2) {
        mensagemErro += 'Por favor, insira o seu nome completo (nome e sobrenome).<br>';
    }

    // Verifica se o campo de e-mail está vazio
    if (emailValor === '') {
        mensagemErro += 'Por favor, insira o seu e-mail.<br>';
    // Se o e-mail não está vazio, verifica se está em um formato válido
    } else if (!validaEmail(emailValor)) {
        mensagemErro += 'Por favor, insira um e-mail válido.<br>';
    }

    // Se houver mensagens de erro, exibe-as no elemento de erro
    if (mensagemErro) {
        erroMessage.innerHTML = mensagemErro;
    } else {
        // Se não houver erros, limpa a mensagem de erro e envia o formulário
        erroMessage.innerHTML = '';
        form.submit(); // Envia o formulário
    }
}

// Função que valida o formato do e-mail usando uma expressão regular
function validaEmail(email) {
    // Expressão regular que define o formato de um e-mail válido
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email); // Testa se o e-mail corresponde ao formato válido
}