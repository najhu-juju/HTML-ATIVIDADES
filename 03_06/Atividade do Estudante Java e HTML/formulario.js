// Mensagem de erro
const msgErro = document.createElement('span');
msgErro.textContent = 'Senha deve ter pelo menos 8 caracteres';
msgErro.style.color = 'red';
document.body.appendChild(msgErro);

document.body.appendChild(document.createElement('br'));

// Campo senha
const senha = document.createElement('input');
senha.type = 'password';
senha.style.border = '2px solid red';
document.body.appendChild(senha);

// Botão Mostrar/Ocultar
const btnMostrar = document.createElement('button');
btnMostrar.textContent = 'Mostrar/Ocultar';
document.body.appendChild(btnMostrar);

document.body.appendChild(document.createElement('br'));
document.body.appendChild(document.createElement('br'));

// Validação senha
senha.addEventListener('input', function () {
  if (senha.value.length >= 8) {
    msgErro.style.display = 'none';
    senha.style.border = '';
  } else {
    msgErro.style.display = 'inline';
    senha.style.border = '2px solid red';
  }
});

// Mostrar/Ocultar senha
btnMostrar.addEventListener('click', function () {
  senha.type = senha.type === 'password' ? 'text' : 'password';
});

// Checkbox Sou estudante
const chk = document.createElement('input');
chk.type = 'checkbox';
document.body.appendChild(chk);

const lblChk = document.createElement('label');
lblChk.textContent = ' Sou estudante';
document.body.appendChild(lblChk);

document.body.appendChild(document.createElement('br'));
document.body.appendChild(document.createElement('br'));

// Caixa campos estudante (oculta por padrão)
const caixa = document.createElement('div');
caixa.style.display = 'none';
document.body.appendChild(caixa);

// Campo Curso
caixa.appendChild(document.createTextNode('Curso: '));
const inputCurso = document.createElement('input');
inputCurso.type = 'text';
caixa.appendChild(inputCurso);
caixa.appendChild(document.createElement('br'));
caixa.appendChild(document.createElement('br'));

// Campo Instituição
caixa.appendChild(document.createTextNode('Instituição: '));
const inputInst = document.createElement('input');
inputInst.type = 'text';
caixa.appendChild(inputInst);
caixa.appendChild(document.createElement('br'));
caixa.appendChild(document.createElement('br'));

// Campo Período
caixa.appendChild(document.createTextNode('Período: '));
const dataInicio = document.createElement('input');
dataInicio.type = 'date';
caixa.appendChild(dataInicio);
caixa.appendChild(document.createTextNode(' a '));
const dataFim = document.createElement('input');
dataFim.type = 'date';
caixa.appendChild(dataFim);

// Toggle campos estudante
chk.addEventListener('change', function () {
  caixa.style.display = chk.checked ? 'block' : 'none';
});
