let jogarNovamente = true;
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let palavras = [];
let jogoAutomatico = true;

carregaListaAutomatica();

criarPalavraSecreta();
function criarPalavraSecreta() {
  const indexPalavra = parseInt(Math.random() * palavras.length);

  palavraSecretaSorteada = palavras[indexPalavra].nome;
  palavraSecretaCategoria = palavras[indexPalavra].categoria;

  // console.log(palavraSecretaSorteada);
}

montarPalavraNaTela();
function montarPalavraNaTela() {
  const categoria = document.getElementById("categoria");
  categoria.innerHTML = palavraSecretaCategoria;

  const palavraTela = document.getElementById("palavra-secreta");
  palavraTela.innerHTML = "";

  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (listaDinamica[i] == undefined) {
      if (palavraSecretaSorteada[i] == " ") {
        listaDinamica[i] = " ";
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<div class='letrasEspaco'>" +
          listaDinamica[i] +
          "</div>";
      } else {
        listaDinamica[i] = "&nbsp;";
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<div class='letras'>" +
          listaDinamica[i] +
          "</div>";
      }
    } else {
      if (palavraSecretaSorteada[i] == " ") {
        listaDinamica[i] = " ";
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<div class='letrasEspaco'>" +
          listaDinamica[i] +
          "</div>";
      } else {
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<div class='letras'>" +
          listaDinamica[i] +
          "</div>";
      }
    }
  }
}

function verificaLetraEscolhida(letra) {
  document.getElementById("tecla-" + letra).disabled = true;
  if (tentativas > 0) {
    mudarStyleLetra("tecla-" + letra, false);
    comparalistas(letra);
    montarPalavraNaTela();
  }
}

function mudarStyleLetra(tecla, condicao) {
  if (condicao == false) {
    document.getElementById(tecla).style.background = "#C71585";
    document.getElementById(tecla).style.color = "#ffffff";
  } else {
    document.getElementById(tecla).style.background = "#008000";
    document.getElementById(tecla).style.color = "#ffffff";
  }
}

function comparalistas(letra) {
  const pos = palavraSecretaSorteada.indexOf(letra);
  if (pos < 0) {
    tentativas--;
    carregaImagemForca();

    if (tentativas == 0) {
      abreModal(
        "OPS!",
        "Não foi dessa vez ... A palavra secreta era <br>" +
          palavraSecretaSorteada
      );
      piscarBotaoJogarNovamente(true);
    }
  } else {
    mudarStyleLetra("tecla-" + letra, true);
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
      if (palavraSecretaSorteada[i] == letra) {
        listaDinamica[i] = letra;
      }
    }
  }

  let vitoria = true;
  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (palavraSecretaSorteada[i] != listaDinamica[i]) {
      vitoria = false;
    }
  }

  if (vitoria == true) {
    abreModal("PARABÉNS!", "Você venceu...");
    if (tentativas <= 6) {
      adicionarConquista("Forca", "bronze");
    } else if (tentativas <= 3) {
      adicionarConquista("Forca", "prata");
    } else {
      adicionarConquista("Forca", "ouro");
    }
    tentativas = 0;
    piscarBotaoJogarNovamente(true);
  }
}

function adicionarConquista(jogoId, conquistaId) {
  // 1. Carregar conquistas existentes do localStorage ou iniciar um novo objeto
  const conquistas = JSON.parse(localStorage.getItem("conquistas")) || {};

  // 2. Verificar se o jogo existe no objeto de conquistas; se não, criar um novo array
  if (!conquistas[jogoId]) conquistas[jogoId] = [];

  // 3. Adicionar a conquista ao array do jogo, se ainda não estiver lá
  if (!conquistas[jogoId].includes(conquistaId)) {
    conquistas[jogoId].push(conquistaId);

    // 4. Salvar as conquistas atualizadas de volta no localStorage
    localStorage.setItem("conquistas", JSON.stringify(conquistas));
  }
}

// async function piscarBotaoJogarNovamente(){
//     while (jogarNovamente == true) {
//         document.getElementById("btnReiniciar").style.backgroundColor = 'red';
//         document.getElementById("btnReiniciar").style.scale = 1.3;
//         await atraso(500)
//         document.getElementById("btnReiniciar").style.backgroundColor = 'yellow';
//         document.getElementById("btnReiniciar").style.scale = 1;
//         await atraso(500)
//     }
// }

async function atraso(tempo) {
  return new Promise((x) => setTimeout(x, tempo));
}

function carregaImagemForca() {
  switch (tentativas) {
    case 5:
      document.getElementById("imagem").style.background =
        "url('./img/forca01.png')";
      break;
    case 4:
      document.getElementById("imagem").style.background =
        "url('./img/forca02.png')";
      break;
    case 3:
      document.getElementById("imagem").style.background =
        "url('./img/forca03.png')";
      break;
    case 2:
      document.getElementById("imagem").style.background =
        "url('./img/forca04.png')";
      break;
    case 1:
      document.getElementById("imagem").style.background =
        "url('./img/forca05.png')";
      break;
    case 0:
      document.getElementById("imagem").style.background =
        "url('./img/forca06.png')";
      break;
    default:
      document.getElementById("imagem").style.background =
        "url('./img/forca.png')";
      break;
  }
}

function abreModal(titulo, mensagem) {
  let modalTitulo = document.getElementById("exampleModalLabel");
  modalTitulo.innerText = titulo;

  let modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = mensagem;

  $("#myModal").modal({
    show: true,
  });
}

let bntReiniciar = document.querySelector("#btnReiniciar");
bntReiniciar.addEventListener("click", function () {
  jogarNovamente = false;
  location.reload();
});

function listaAutomatica() {
  // ativa o modo manual
  if (jogoAutomatico == true) {
    document.getElementById("jogarAutomatico").innerHTML =
      "<i class='bx bx-play-circle'></i>";
    palavras = [];
    jogoAutomatico = false;

    document.getElementById("abreModalAddPalavra").style.display = "block";
    document.getElementById("status").innerHTML = "Modo Manual";
  } else if (jogoAutomatico == false) {
    // ativa o modo automático
    document.getElementById("jogarAutomatico").innerHTML =
      "<i class='bx bx-pause-circle'></i>";
    jogoAutomatico = true;

    document.getElementById("abreModalAddPalavra").style.display = "none";
    document.getElementById("status").innerHTML = "Modo Automático";
  }
}

const modal = document.getElementById("modal-alerta");

const btnAbreModal = document.getElementById("abreModalAddPalavra");
btnAbreModal.onclick = function () {
  modal.style.display = "block";
};

const btnFechaModal = document.getElementById("fechaModal");
btnFechaModal.onclick = function () {
  modal.style.display = "none";
  document.getElementById("addPalavra").value = "";
  document.getElementById("addCategoria").value = "";
};

window.onclick = function () {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("addPalavra").value = "";
    document.getElementById("addCategoria").value = "";
  }
};

function carregaListaAutomatica() {
  palavras = [
    (palavra001 = {
      nome: "COLOR",
      categoria: "Qual propriedade CSS é usada para mudar a cor do texto",
    }),
    (palavra002 = {
      nome: "FONT SIZE",
      categoria: "Qual propriedade CSS controla o tamanho da fonte",
    }),
    (palavra003 = {
      nome: "MARGIN",
      categoria:
        "Qual propriedade CSS é usada para definir a margem de um elemento",
    }),
    (palavra004 = {
      nome: "PADDING",
      categoria:
        "Qual propriedade CSS controla o espaçamento interno de um elemento",
    }),
    (palavra005 = {
      nome: "BORDER WIDTH",
      categoria:
        "Qual propriedade CSS é usada para alterar a largura de uma borda",
    }),
    (palavra006 = {
      nome: "BORDER STYLE",
      categoria: "Qual propriedade CSS define o estilo da borda de um elemento",
    }),
    (palavra007 = {
      nome: "TEXT SHADOW",
      categoria:
        "Qual propriedade CSS é usada para aplicar uma sombra ao texto",
    }),
    (palavra008 = {
      nome: "TEXT ALIGN",
      categoria:
        "Qual propriedade CSS altera o alinhamento do texto dentro de um elemento",
    }),
    (palavra009 = {
      nome: "VISIBILTY",
      categoria:
        "Qual propriedade CSS é usada para tornar um elemento invisível, mas ainda ocupar espaço",
    }),
    (palavra010 = {
      nome: "POSITION",
      categoria:
        "Qual propriedade CSS define a posição de um elemento na página",
    }),
    (palavra011 = {
      nome: "DEF",
      categoria:
        "Qual palavra-chave é usada para definir uma função em Python, em Python",
    }),
    (palavra012 = {
      nome: "FOR",
      categoria:
        "Qual estrutura de controle é usada para criar um loop, em Python",
    }),
    (palavra013 = {
      nome: "TRY",
      categoria: "Qual palavra-chave é usada para lidar com exceções em Python",
    }),
    (palavra014 = {
      nome: "INPUT",
      categoria:
        "Qual função é usada para obter a entrada do usuário em Python",
    }),
    (palavra015 = {
      nome: "PRINT",
      categoria: "Qual função é usada para exibir uma saída na tela, em Python",
    }),
    (palavra016 = {
      nome: "WHILE",
      categoria:
        "Qual estrutura de controle é usada para executar um bloco de código enquanto uma condição é verdadeira, em Python",
    }),
    (palavra017 = {
      nome: "CLASS",
      categoria: "Qual palavra-chave é usada para criar uma classe em Python",
    }),
    (palavra018 = {
      nome: "APPEND",
      categoria:
        "Qual método é utilizado para adicionar um item ao final de uma lista, em Python",
    }),
    (palavra019 = {
      nome: "INT",
      categoria:
        "Qual função é usada para converter um valor em um inteiro, em Python",
    }),
    (palavra020 = {
      nome: "CONST",
      categoria:
        "Qual palavra-chave é usada para definir uma variável constante em Python",
    }),
    (palavra021 = {
      nome: "P",
      categoria: "Qual elemento HTML é usado para criar um parágrafo",
    }),
    (palavra022 = {
      nome: "BACKGROUND COLOR",
      categoria:
        "Qual atributo HTML é usado para definir a cor de fundo de uma página",
    }),
    (palavra023 = {
      nome: "HREF",
      categoria: "Qual atributo é usado para especificar o endereço de um link",
    }),
    (palavra024 = {
      nome: "IMG",
      categoria: "Qual elemento HTML é usado para incluir uma imagemJETOS",
    }),
    (palavra025 = {
      nome: "OL",
      categoria: "Qual elemento HTML define uma lista ordenada",
    }),
    (palavra026 = {
      nome: "TABLE",
      categoria: "Qual elemento HTML é usado para criar uma tabela",
    }),
    (palavra027 = {
      nome: "TD",
      categoria: "Qual elemento HTML define uma célula de tabela",
    }),
    (palavra028 = {
      nome: "BR",
      categoria: "Qual elemento HTML é usado para criar uma quebra de linha",
    }),
    (palavra029 = {
      nome: "FORM",
      categoria: "Qual elemento HTML define um formulário",
    }),
    (palavra030 = {
      nome: "TEXTAREA",
      categoria: "Qual elemento HTML é usado para criar uma área de texto",
    }),
    (palavra031 = {
      nome: "VAR",
      categoria: "Qual palavra-chave é usada para declarar uma variável em Js",
    }),
    (palavra032 = {
      nome: "ALERT",
      categoria:
        "Qual função é usada para exibir uma mensagem de alerta na tela em Js",
    }),
    (palavra033 = {
      nome: "PLUS",
      categoria: "Qual operador é usado para a operação de adição em Js",
    }),
    (palavra034 = {
      nome: "PUSH",
      categoria:
        "Qual método é usado para adicionar um item ao final de um array em Js",
    }),
    (palavra035 = {
      nome: "FUNCTION",
      categoria: "Qual palavra-chave é usada para criar uma função em Js",
    }),
    (palavra036 = {
      nome: "EQUAL",
      categoria: "Qual operador é usado para comparar dois valores em Js",
    }),
    (palavra037 = {
      nome: "POP",
      categoria:
        "Qual método é utilizado para remover o último item de um array em Js",
    }),
    (palavra038 = {
      nome: "LOOP",
      categoria:
        "Qual estrutura de controle é usada para executar um bloco de código várias vezes em Js",
    }),
    (palavra039 = {
      nome: "CONST",
      categoria: "Qual palavra-chave é usada para criar uma constante em Js",
    }),
    (palavra040 = {
      nome: "STRING",
      categoria:
        "Qual função é usada para converter um valor em uma string em Js",
    }),

    (palavra041 = {
      nome: "FUNÇÃO",
      categoria:
        "Qual é o termo para um bloco de código que executa uma tarefa específica",
    }),
    (palavra042 = {
      nome: "BUG",
      categoria:
        "Qual é o nome dado a um erro no código que impede o programa de rodar",
    }),
    (palavra043 = {
      nome: "ALGORITIMO",
      categoria:
        "Qual é o termo para uma sequência de instruções que define o comportamento de um programa",
    }),
    (palavra044 = {
      nome: "LOOP",
      categoria:
        "Qual estrutura de controle é usada para executar um bloco de código repetidamente",
    }),
    (palavra045 = {
      nome: "GLOBAL",
      categoria:
        "Qual é o termo para uma variável que pode ser acessada por todo o programa",
    }),
    (palavra046 = {
      nome: "CONDIÇÃO",
      categoria:
        "Qual é o nome dado a um bloco de código que é executado quando uma condição específica é verdadeira",
    }),
    (palavra047 = {
      nome: "LEGIBILIDADE",
      categoria:
        "Qual é o termo para a prática de escrever código de forma que seja fácil de entender e manter",
    }),
    (palavra048 = {
      nome: "CALLBACK",
      categoria:
        "ual é o nome dado a um conjunto de instruções que é executado em resposta a um evento",
    }),
    (palavra049 = {
      nome: "DICIONÁRIO",
      categoria:
        "Qual estrutura de dados armazena valores em pares de chave e valor",
    }),
    (palavra050 = {
      nome: "MODULARIZAÇÃO",
      categoria:
        "Qual é o nome dado à prática de dividir um programa em partes menores e gerenciáveis",
    }),
    (palavra051 = {
      nome: "CLASS",
      categoria: "Qual palavra-chave é usada para definir uma classe em C#",
    }),
    (palavra052 = {
      nome: "NEW",
      categoria: "Qual palavra-chave é usada para criar um novo objeto em C#",
    }),
    (palavra053 = {
      nome: "IF",
      categoria: "Qual estrutura de controle é usada para tomar decisões em C#",
    }),
    (palavra054 = {
      nome: "VOID",
      categoria:
        "Qual palavra-chave é usada para definir um método que não retorna nenhum valor, em C#",
    }),
    (palavra055 = {
      nome: "INT",
      categoria:
        "Qual é o tipo de dado utilizado para representar números inteiros em C#",
    }),
    (palavra056 = {
      nome: "TRY",
      categoria:
        "Qual palavra-chave é usada para encapsular um bloco de código que pode lançar uma exceção",
    }),
    (palavra057 = {
      nome: "ESTÁTICO",
      categoria:
        "Qual é o termo para um método que pertence a uma classe, mas não a uma instância da classe",
    }),
    (palavra058 = {
      nome: "FOR",
      categoria:
        "Qual estrutura de controle é usada para criar um loop em C#, com número específico",
    }),
    (palavra059 = {
      nome: "BOOL",
      categoria:
        "Qual é o tipo de dado utilizado para representar valores booleanos em C#",
    }),
    (palavra060 = {
      nome: "CHAR",
      categoria:
        "Qual é o tipo de dado utilizado para representar caracateres em C#",
    }),
  ];
}

function adicionarPalavra() {
  let addPalavra = document.getElementById("addPalavra").value.toUpperCase();
  let addCategoria = document
    .getElementById("addCategoria")
    .value.toUpperCase();

  if (
    isNullOrWhiteSpace(addPalavra) ||
    isNullOrWhiteSpace(addCategoria) ||
    addPalavra.length < 3 ||
    addCategoria.length < 3
  ) {
    abreModal("ATENÇÃO", " RESPOTA e/ou PERGUNTA inválidos");
    return;
  }

  let palavra = {
    nome: addPalavra,
    categoria: addCategoria,
  };

  palavras.push(palavra);
  sortear();

  document.getElementById("addPalavra").value = "";
  document.getElementById("addCategoria").value = "";
}

function isNullOrWhiteSpace(input) {
  return !input || !input.trim();
}

function sortear() {
  if (jogoAutomatico == true) {
    location.reload();
  } else {
    if (palavras.length > 0) {
      listaDinamica = [];
      criarPalavraSecreta();
      montarPalavraNaTela();
      resetaTeclas();
      tentativas = 6;
      piscarBotaoJogarNovamente(false);
    }
  }
}

function resetaTeclas() {
  let teclas = document.querySelectorAll(".teclas > button");
  teclas.forEach((x) => {
    x.style.background = "#FFFFFF";
    x.style.color = "#8B008B";
    x.disabled = false;
  });
}

async function piscarBotaoJogarNovamente(querJogar) {
  if (querJogar) {
    document.getElementById("jogarNovamente").style.display = "block";
  } else {
    document.getElementById("jogarNovamente").style.display = "none";
  }
}
