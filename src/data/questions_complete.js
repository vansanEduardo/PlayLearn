const data = [
  {
    category: "HTML",
    questions: [
      {
        question: "Qual tag cria um parágrafo?",
        options: ["<p>", "<h1>", "<text>", "<ul>"],
        answer: "<p>",
        tip: "É uma tag de uma letra apenas",
      },
      {
        question: "Qual atributo adiciona um link para a tag a?",
        options: ["alt", "href", "src", "link"],
        answer: "href",
        tip: "Hyperlink Reference",
      },
      {
        question: "As listas não ordenadas tem a tag de:",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
      },
      {
        question: "Qual atributo deixa o input obrigatório?",
        options: ["placeholder", "value", "required", "maxlength"],
        answer: "required",
      },
      {
        question: "A tag semântica indicada para rodapés é a:",
        options: ["div", "main", "section", "footer"],
        answer: "footer",
      },
      {
        question: "Qual tag é usada para incluir uma imagem?",
        options: ["<img>", "<picture>", "<image>", "<src>"],
        answer: "<img>",
        tip: "É uma tag de três letras.",
      },
      {
        question: "Qual tag é usada para criar um link?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        answer: "<a>",
        tip: "Essa tag é usada para 'âncora' em inglês.",
      },
      {
        question: "Qual tag cria uma linha horizontal?",
        options: ["<hr>", "<br>", "<line>", "<border>"],
        answer: "<hr>",
      },
      {
        question: "A tag que representa o cabeçalho de um documento é:",
        options: ["<head>", "<header>", "<top>", "<meta>"],
        answer: "<header>",
      },
      {
        question: "Qual atributo é usado para definir o texto alternativo de uma imagem?",
        options: ["title", "alt", "src", "text"],
        answer: "alt",
      },
    ],
  },
  {
    category: "CSS",
    questions: [
      {
        question: "Qual regra altera a cor de um elemento?",
        options: ["color", "background-color", "font-size", "transition"],
        answer: "color",
        tip: "Cor em inglês",
      },
      {
        question: "Para aumentar a fonte de um elemento utilizamos:",
        options: ["font", "text-transform", "font-size", "hover"],
        answer: "font-size",
      },
      {
        question: "A posição que deixa um elemento fixo é a:",
        options: ["static", "absolute", "fixed", "relative"],
        answer: "fixed",
      },
      {
        question: "Qual propriedade define o espaço interno de um elemento?",
        options: ["padding", "margin", "border", "spacing"],
        answer: "padding",
        tip: "É uma palavra que também significa 'acolchoado'.",
      },
      {
        question: "Qual propriedade define a borda de um elemento?",
        options: ["margin", "padding", "border", "outline"],
        answer: "border",
      },
      {
        question: "Qual propriedade CSS é usada para centralizar um texto?",
        options: ["text-align", "align", "center", "justify"],
        answer: "text-align",
      },
      {
        question: "Para transformar um elemento em flex container utilizamos:",
        options: ["display: flex", "display: block", "position: relative", "align-items: center"],
        answer: "display: flex",
        tip: "É um valor de 'display'.",
      },
      {
        question: "Qual valor da propriedade 'display' remove um elemento visualmente e de seu espaço no layout?",
        options: ["none", "block", "inline", "flex"],
        answer: "none",
      },
      {
        question: "Qual unidade de medida é relativa ao tamanho da fonte pai?",
        options: ["px", "em", "%", "rem"],
        answer: "em",
      },
      {
        question: "Qual propriedade define a opacidade de um elemento?",
        options: ["opacity", "visibility", "display", "transparent"],
        answer: "opacity",
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "O que é Vanilla JavaScript?",
        options: ["JavaScript puro", "Uma biblioteca JavaScript", "Um framework JavaScript", "Um compilador de JavaScript"],
        answer: "JavaScript puro",
      },
      {
        question: "Com qual instrução declaramos uma constante em JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const",
      },
      {
        question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
        options: ["string", "number", "boolean", "float"],
        answer: "float",
        tip: "JavaScript usa 'number' para representar números com e sem decimais.",
      },
      {
        question: "Qual dos métodos a seguir seleciona um elemento?",
        options: ["querySelector", "parseInt", "sort", "reduce"],
        answer: "querySelector",
      },
      {
        question: "Qual destas propriedades da a quantidade de elementos de um array?",
        options: ["qty", "length", "items", "index"],
        answer: "length",
      },
      {
        question: "Qual função exibe uma mensagem no console?",
        options: ["log()", "print()", "console()", "write()"],
        answer: "log()",
        tip: "Esta função é precedida por 'console.'",
      },
      {
        question: "Qual operador é usado para estritamente igual?",
        options: ["==", "===", "=", "!=="],
        answer: "===",
      },
      {
        question: "Qual método adiciona um novo elemento ao final do array?",
        options: ["push", "pop", "shift", "unshift"],
        answer: "push",
      },
      {
        question: "Qual estrutura é usada para repetição em JavaScript?",
        options: ["if", "switch", "loop", "for"],
        answer: "for",
      },
      {
        question: "Qual palavra-chave é usada para definir uma função?",
        options: ["function", "func", "method", "define"],
        answer: "function",
      },
    ],
  },
];

export default data;
