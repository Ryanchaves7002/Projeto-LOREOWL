// Base de conhecimento e lógica de IA da LoreOwl aprimorada
let faqBase = []

function carregarMemoria() {
  const dadosSalvos = localStorage.getItem('faqLoreOwl')
  if (dadosSalvos) {
    faqBase = JSON.parse(dadosSalvos)
  } else {
    faqBase = [
      {
        pergunta: 'Como faço para me cadastrar no site?',
        resposta:
          "Clique no botão 'LoginCadastro' no canto superior esquerdo, preencha seus dados e confirme seu e-mail para ativar sua conta."
      },
      {
        pergunta: 'Como faço para me cadastrar no site?',
        resposta:
          "Clique no botão 'LoginCadastro' no canto superior esquerdo, preencha seus dados e confirme seu e-mail para ativar sua conta."
      },
      {
        pergunta: 'Como me cadastro no site?',
        resposta:
          "Clique no botão 'LoginCadastro' no canto superior esquerdo, preencha seus dados e confirme seu e-mail para ativar sua conta."
      },
      {
        pergunta: 'Como faço cadastro?',
        resposta:
          "Clique no botão 'Login/Cadastro' no canto superior esquerdo, preencha seus dados e confirme seu e-mail para ativar sua conta."
      },
      {
        pergunta: 'como faço cadastro?',
        resposta:
          "Clique no botão 'Login/Cadastro' no canto superior esquerdo, preencha seus dados e confirme seu e-mail para ativar sua conta."
      },

      {
        pergunta: 'Como faço para me cadastrar no site?',
        resposta:
          "Clique no botão 'Login/Cadastro' no canto superior esquerdo, preencha seus dados e confirme seu e-mail para ativar sua conta."
      },
      {
        pergunta: 'Como me cadastro no site?',
        resposta:
          "Clique no botão 'Login/Cadastro' no canto superior esquerdo, preencha seus dados e confirme seu e-mail para ativar sua conta."
      },
      {
        pergunta: 'Como criar conta?',
        resposta:
          "Clique no botão 'Login/Cadastro' no canto superior esquerdo, preencha seus dados e confirme seu e-mail para ativar sua conta."
      },
      {
        pergunta: 'Como faço uma conta?',
        resposta:
          "Clique no botão 'Login/Cadastro' no canto superior esquerdo, preencha seus dados e confirme seu e-mail para ativar sua conta."
      },
      {
        pergunta: 'Quero me cadastrar, como faz?',
        resposta:
          "Clique no botão 'Login/Cadastro' no canto superior esquerdo, preencha seus dados e confirme seu e-mail para ativar sua conta."
      },
      {
        pergunta: 'Onde eu crio minha conta?',
        resposta:
          "Clique no botão 'Login/Cadastro' no canto superior esquerdo, preencha seus dados e confirme seu e-mail para ativar sua conta."
      },
      {
        pergunta: 'Como que entra no site pela primeira vez?',
        resposta:
          "Clique no botão 'Login/Cadastro' no canto superior esquerdo, preencha seus dados e confirme seu e-mail para ativar sua conta."
      },
      {
        pergunta: 'Como registro no site?',
        resposta:
          "Clique no botão 'Login/Cadastro' no canto superior esquerdo, preencha seus dados e confirme seu e-mail para ativar sua conta."
      },
      {
        pergunta: 'Como cria login?',
        resposta:
          "Clique no botão 'Login/Cadastro' no canto superior esquerdo, preencha seus dados e confirme seu e-mail para ativar sua conta."
      },
      {
        pergunta: 'Como faço pra entrar pela primeira vez?',
        resposta:
          "Clique no botão 'Login/Cadastro' no canto superior esquerdo, preencha seus dados e confirme seu e-mail para ativar sua conta."
      },
      {
        pergunta: 'Como faço o cadastro?',
        resposta:
          "Clique no botão 'Login/Cadastro' no canto superior esquerdo, preencha seus dados e confirme seu e-mail para ativar sua conta."
      },
      {
        pergunta: 'Tem que criar conta? Como?',
        resposta:
          "Clique no botão 'Login/Cadastro' no canto superior esquerdo, preencha seus dados e confirme seu e-mail para ativar sua conta."
      },
      {
        pergunta: 'Como que faz pra se inscrever?',
        resposta:
          "Clique no botão 'Login/Cadastro' no canto superior esquerdo, preencha seus dados e confirme seu e-mail para ativar sua conta."
      },
      {
        pergunta: 'Como abre conta aqui?',
        resposta:
          "Clique no botão 'Login/Cadastro' no canto superior esquerdo, preencha seus dados e confirme seu e-mail para ativar sua conta."
      },
      {
        pergunta: 'Cadastro onde?',
        resposta:
          "Clique no botão 'Login/Cadastro' no canto superior esquerdo, preencha seus dados e confirme seu e-mail para ativar sua conta."
      },
      {
        pergunta: 'Como começa a usar o site?',
        resposta:
          "Clique no botão 'Login/Cadastro' no canto superior esquerdo, preencha seus dados e confirme seu e-mail para ativar sua conta."
      },

      {
        pergunta: 'Os livros são gratuitos?',
        resposta:
          'Não. Os livros são pagos. No entanto, você pode visualizar uma prévia de cada livro antes de decidir comprar.'
      },
      {
        pergunta: 'Posso ler os livros online?',
        resposta:
          'Sim, após a compra, você pode ler os livros online diretamente pelo site ou fazer o download do PDF.'
      },
      {
        pergunta: 'Quantos livros tem?',
        resposta:
          'Atualmente temos mais de 80 livros no catálogo, com novos títulos sendo adicionados regularmente.'
      },
      {
        pergunta: 'Como encontrar livros por categoria?',
        resposta:
          'Você pode usar o menu de categorias na página inicial ou digitar o nome da categoria desejada na barra de pesquisa.'
      },
      {
        pergunta: 'Como posso comprar um livro?',
        resposta:
          "Acesse a página do livro, clique em 'Comprar' e siga os passos para finalizar o pagamento. Após isso, o livro será liberado para leitura ou download."
      },
      {
        pergunta: 'Quais formas de pagamento são aceitas?',
        resposta: 'Aceitamos cartões de crédito, Pix e boleto bancário.'
      },
      {
        pergunta: 'É necessário criar conta para comprar um livro?',
        resposta:
          'Sim. Você precisa estar logado em sua conta para efetuar a compra e acessar seus livros adquiridos.'
      },
      {
        pergunta: 'Posso ver uma amostra do livro antes de comprar?',
        resposta:
          'Sim. Todos os livros possuem uma prévia gratuita disponível na página de detalhes.'
      },
      {
        pergunta: 'O que acontece se eu perder o acesso ao meu livro comprado?',
        resposta:
          "Se você estiver logado com sua conta, poderá acessar todos os livros comprados na seção 'Meus Livros'."
      },
      {
        pergunta: 'Como entro em contato com o suporte?',
        resposta:
          "Você pode entrar em contato pelo formulário de 'Fale Conosco' ou pelo e-mail de atendimento disponível no rodapé do site."
      },
      {
        pergunta: 'Posso acessar os livros comprados de outro dispositivo?',
        resposta:
          'Sim, desde que esteja logado com a mesma conta, seus livros estarão disponíveis em qualquer dispositivo com acesso à internet.'
      },
      {
        pergunta: 'Posso presentear um livro para outra pessoa?',
        resposta:
          'Ainda não oferecemos essa funcionalidade, mas ela está em nossos planos futuros.'
      },
      {
        pergunta: 'Há algum desconto para comprar vários livros?',
        resposta:
          'Sim, em determinadas campanhas promocionais oferecemos cupons e pacotes com desconto para múltiplas compras.'
      }
      // Adicione todas as outras perguntas originais aqui...
    ]
    salvarMemoria()
  }
}

function salvarMemoria() {
  localStorage.setItem('faqLoreOwl', JSON.stringify(faqBase))
}

function normalizarTexto(texto) {
  const substituicoes = {
    vc: 'você',
    vcs: 'vocês',
    q: 'que',
    kd: 'cadê',
    blz: 'beleza',
    qtos: 'quantos',
    livru: 'livro',
    livrus: 'livros',
    'tem?': 'tem',
    pq: 'por que',
    nd: 'nada',
    td: 'tudo',
    eh: 'é',
    tbm: 'também',
    ta: 'está',
    site: 'site',
    cad: 'cadastro',
    entrar: 'login',
    fzr: 'fazer',
    criar: 'fazer',
    conta: 'cadastro',
    login: 'cadastro',
    usar: 'utilizar',
    inscrever: 'cadastrar',
    abrir: 'acessar',
    acessar: 'entrar'
  }
  let textoLimpo = texto.toLowerCase()
  textoLimpo = textoLimpo.replace(/[.,!?;:]/g, '') // remove pontuação
  for (const [giria, formal] of Object.entries(substituicoes)) {
    const regex = new RegExp(`\\b${giria}\\b`, 'g')
    textoLimpo = textoLimpo.replace(regex, formal)
  }
  textoLimpo = textoLimpo.normalize('NFD').replace(/[̀-ͯ]/g, '') // tira acentos
  return textoLimpo
}

function extrairIntent(texto) {
  // Remove expressões tipo "Eae, quero saber sobre ..."
  return texto
    .toLowerCase()
    .replace(/^.*?(quero saber|queria saber|me fala|me diz|gostaria de saber|como que faz|como faço|como faz|pode me dizer|explica ai|fala ai|me explica)\b/g, '')
    .trim()
}

function responderPergunta(perguntaUsuario) {
  const saudacoes = ['oi', 'olá', 'opa', 'eae', 'fala', 'bom dia', 'boa tarde', 'boa noite']
  const perguntaLimpa = normalizarTexto(perguntaUsuario)
  if (saudacoes.some(s => perguntaLimpa.includes(s))) {
    return 'Olá! Como posso ajudar? 😊'
  }

  const textoFiltrado = normalizarTexto(extrairIntent(perguntaUsuario))
  for (let item of faqBase) {
    const perguntaBase = normalizarTexto(item.pergunta)
    if (
      textoFiltrado.includes(perguntaBase) ||
      perguntaBase.includes(textoFiltrado)
    ) {
      return item.resposta
    }
  }
  return 'Desculpe, não encontrei uma resposta para isso. Quer me ensinar a resposta?'
}

function aprenderNovaResposta(pergunta, resposta) {
  faqBase.push({ pergunta, resposta })
  salvarMemoria()
}

function abrirChat() {
  const chat = document.getElementById('chatIA')
  chat.style.display = chat.style.display === 'none' ? 'flex' : 'none'
  const chatBody = document.getElementById('chatBody')
  chatBody.innerHTML += `<p><strong>LoreOwl:</strong> Olá! Como posso ajudar? 😊</p>`
  chatBody.scrollTop = chatBody.scrollHeight
}

function enviarPergunta() {
  const input = document.getElementById('chatInput')
  const pergunta = input.value.trim()
  if (pergunta === '') return

  const resposta = responderPergunta(pergunta)

  const chatBody = document.getElementById('chatBody')
  chatBody.innerHTML += `<p><strong>Você:</strong> ${pergunta}</p>`
  chatBody.innerHTML += `<p><strong>LoreOwl:</strong> ${resposta}</p>`

  if (resposta.includes('Quer me ensinar a resposta?')) {
    setTimeout(() => {
      const novaResposta = prompt('Digite a resposta para: ' + pergunta)
      if (novaResposta) {
        aprenderNovaResposta(pergunta, novaResposta)
        chatBody.innerHTML += `<p><strong>LoreOwl:</strong> Obrigado! Agora eu aprendi a resposta 😊</p>`
      }
    }, 500)
  }

  input.value = ''
  chatBody.scrollTop = chatBody.scrollHeight
}

carregarMemoria()
