const livrosSemelhantes = {
  "As Crônicas de Nárnia": [
    { titulo: "O Acordo com o Rei Elfo", autor: "R.A. Salvatore" },
    { titulo: "Eragon", autor: "Christopher Paolini" },
    { titulo: "Senhor dos anéis", autor: "J.R.R. Tolkien" }
  ],
  "A Revolução dos Bichos": [
    { titulo: "Os Miseráveis", autor: "Victor Hugo" },
    { titulo: "O Morro dos ventos uivantes", autor: "Emily Brontë" }
  ],
  "Duna": [
    { titulo: "Eragon", autor: "Christopher Paolini" },
    { titulo: "Senhor dos anéis", autor: "J.R.R. Tolkien" }
  ],
  "O Acordo com o Rei Elfo": [
    { titulo: "As Crônicas de Nárnia", autor: "C.S. Lewis" },
    { titulo: "Eragon", autor: "Christopher Paolini" },
    { titulo: "Senhor dos anéis", autor: "J.R.R. Tolkien" }
  ],
  "Eragon": [
    { titulo: "As Crônicas de Nárnia", autor: "C.S. Lewis" },
    { titulo: "O Acordo com o Rei Elfo", autor: "R.A. Salvatore" },
    { titulo: "Senhor dos anéis", autor: "J.R.R. Tolkien" }
  ],
  "Senhor dos anéis": [
    { titulo: "As Crônicas de Nárnia", autor: "C.S. Lewis" },
    { titulo: "O Acordo com o Rei Elfo", autor: "R.A. Salvatore" },
    { titulo: "Eragon", autor: "Christopher Paolini" }
  ],
  "O Hobbit": [
    { titulo: "As Crônicas de Nárnia", autor: "C.S. Lewis" },
    { titulo: "O Acordo com o Rei Elfo", autor: "R.A. Salvatore" },
    { titulo: "Eragon", autor: "Christopher Paolini" }
  ],
  "A bússola de ouro": [
    { titulo: "As Crônicas de Nárnia", autor: "C.S. Lewis" },
    { titulo: "O Acordo com o Rei Elfo", autor: "R.A. Salvatore" },
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien" }
  ],
  "A história sem fim": [
    { titulo: "A bússola de ouro", autor: "Philip Pullman" },
    { titulo: "As Crônicas de Nárnia", autor: "C.S. Lewis" },
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien" }
  ],
  "Os filhos de Hurin": [
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien" },
    { titulo: "As Crônicas de Nárnia", autor: "C.S. Lewis" },
    { titulo: "Senhor dos anéis", autor: "J.R.R. Tolkien" }
  ],
  "A ilha do tesouro": [
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien" },
    { titulo: "A história sem fim", autor: "Michael Ende" },
    { titulo: "As Crônicas de Nárnia", autor: "C.S. Lewis" }
  ],
  "Volume 19 Attack on Titan": [
    { titulo: "Volume 4 de Demon Slayer", autor: "Koyoharu Gotouge" },
    { titulo: "Volume 1 Tokyo Ghoul", autor: "Sui Ishida" },
    { titulo: "Volume 16 Dragon Ball", autor: "Akira Toriyama" }
  ],
  "Volume 3 de Gash Bell": [
    { titulo: "Volume 4 de Demon Slayer", autor: "Koyoharu Gotouge" },
    { titulo: "Volume 1 Tokyo Ghoul", autor: "Sui Ishida" },
    { titulo: "Volume 16 Dragon Ball", autor: "Akira Toriyama" }
  ],
  "Volume 4 de Demon Slayer": [
    { titulo: "Volume 3 de Gash Bell", autor: "Makoto Raiku" },
    { titulo: "Volume 1 Tokyo Ghoul", autor: "Sui Ishida" },
    { titulo: "Volume 16 Dragon Ball", autor: "Akira Toriyama" }
  ],
  "Volume 1 Tokyo Ghoul": [
    { titulo: "Volume 3 de Gash Bell", autor: "Makoto Raiku" },
    { titulo: "Volume 4 de Demon Slayer", autor: "Koyoharu Gotouge" },
    { titulo: "Volume 16 Dragon Ball", autor: "Akira Toriyama" }
  ],
  "Volume 16 Dragon Ball": [
    { titulo: "Volume 3 de Gash Bell", autor: "Makoto Raiku" },
    { titulo: "Volume 4 de Demon Slayer", autor: "Koyoharu Gotouge" },
    { titulo: "Volume 57 de One Piece", autor: "Eiichiro Oda" }
  ],
  "Volume 1 The Ghost in the Shell": [
    { titulo: "Volume 10 Neon Genesis Evangelion", autor: "Yoshiyuki Sadamoto" },
    { titulo: "Volume 1 Blame!", autor: "Tsutomu Nihei" },
    { titulo: "Akira", autor: "Katsuhiro Otomo" }
  ],
  "Volume 10 Neon Genesis Evangelion": [
    { titulo: "Volume 1 The Ghost in the Shell", autor: "Masamune Shirow" },
    { titulo: "Volume 1 Blame!", autor: "Tsutomu Nihei" },
    { titulo: "Akira", autor: "Katsuhiro Otomo" }
  ],
  "Volume 1 Blame!": [
    { titulo: "Volume 1 The Ghost in the Shell", autor: "Masamune Shirow" },
    { titulo: "Volume 10 Neon Genesis Evangelion", autor: "Yoshiyuki Sadamoto" },
    { titulo: "Akira", autor: "Katsuhiro Otomo" }
  ],
  "Volume 6 Horimura": [
    { titulo: "Volume 1 The Ghost in the Shell", autor: "Masamune Shirow" },
    { titulo: "Volume 10 Neon Genesis Evangelion", autor: "Yoshiyuki Sadamoto" },
    { titulo: "Volume 1 Blame!", autor: "Tsutomu Nihei" }
  ],
  "Akira": [
    { titulo: "Volume 1 The Ghost in the Shell", autor: "Masamune Shirow" },
    { titulo: "Volume 10 Neon Genesis Evangelion", autor: "Yoshiyuki Sadamoto" },
    { titulo: "Volume 1 Blame!", autor: "Tsutomu Nihei" }
  ],
  "Volume 57 de One Piece": [
    { titulo: "Volume 16 Dragon Ball", autor: "Akira Toriyama" },
    { titulo: "Volume 3 de Gash Bell", autor: "Makoto Raiku" },
    { titulo: "Volume 4 de Demon Slayer", autor: "Koyoharu Gotouge" }
  ],
  "Volume 1 Final Fantasy": [
    { titulo: "Volume 1 The Ghost in the Shell", autor: "Masamune Shirow" },
    { titulo: "Volume 10 Neon Genesis Evangelion", autor: "Yoshiyuki Sadamoto" },
    { titulo: "Volume 1 Blame!", autor: "Tsutomu Nihei" }
  ],
  "Orgulho e Preconceito": [
    { titulo: "O Morro dos Ventos Uivantes", autor: "Emily Brontë" },
    { titulo: "P.S. Eu Te Amo", autor: "Cecelia Ahern" },
    { titulo: "Como Eu Era Antes de Você", autor: "Jojo Moyes" }
  ],
  "O Morro dos Ventos Uivantes": [
    { titulo: "Orgulho e Preconceito", autor: "Jane Austen" },
    { titulo: "P.S. Eu Te Amo", autor: "Cecelia Ahern" },
    { titulo: "Como Eu Era Antes de Você", autor: "Jojo Moyes" }
  ],
  "P.S. Eu Te Amo": [
    { titulo: "Orgulho e Preconceito", autor: "Jane Austen" },
    { titulo: "Como Eu Era Antes de Você", autor: "Jojo Moyes" },
    { titulo: "Um amor para recordar", autor: "Nicholas Sparks" }
  ],
  "Como Eu Era Antes de Você": [
    { titulo: "P.S. Eu Te Amo", autor: "Cecelia Ahern" },
    { titulo: "Um Dia", autor: "David Nicholls" },
    { titulo: "O Diário de uma Paixão", autor: "Nicholas Sparks" }
  ],
  "Um Dia": [
    { titulo: "Como Eu Era Antes de Você", autor: "Jojo Moyes" },
    { titulo: "P.S. Eu Te Amo", autor: "Cecelia Ahern" },
    { titulo: "O Diário de uma Paixão", autor: "Nicholas Sparks" }
  ],
  "O Amor nos Tempos de Cólera": [
    { titulo: "O Diário de uma Paixão", autor: "Nicholas Sparks" },
    { titulo: "Um Dia", autor: "David Nicholls" },
    { titulo: "Como Eu Era Antes de Você", autor: "Jojo Moyes" }
  ],
  "O Diário de uma Paixão": [
    { titulo: "Um amor para recordar", autor: "Nicholas Sparks" },
    { titulo: "Um Dia", autor: "David Nicholls" },
    { titulo: "P.S. Eu Te Amo", autor: "Cecelia Ahern" }
  ],
  "Um amor para recordar": [
    { titulo: "O Diário de uma Paixão", autor: "Nicholas Sparks" },
    { titulo: "P.S. Eu Te Amo", autor: "Cecelia Ahern" },
    { titulo: "Como Eu Era Antes de Você", autor: "Jojo Moyes" }
  ],
  "O Pintassilgo": [
    { titulo: "Orgulho e Preconceito", autor: "Jane Austen" },
    { titulo: "Como Eu Era Antes de Você", autor: "Jojo Moyes" },
    { titulo: "Amor Nos Tempos do Cólera", autor: "Gabriel García Márquez" }
  ],
  "Contos de Terror": [
    { titulo: "Estou Atrás de Você", autor: "John Ajvide Lindqvist" },
    { titulo: "O Chamado de Cthulhu", autor: "H.P. Lovecraft" },
    { titulo: "Frankenstein", autor: "Mary Shelley" }
  ],
  "Estou Atrás de Você": [
    { titulo: "Contos de Terror", autor: "Vários" },
    { titulo: "Ninguem vai te ouvir gritar", autor: "Wesley Peres" },
    { titulo: "O exorcista", autor: "William Peter Blatty" }
  ],
  "O Chamado de Cthulhu": [
    { titulo: "Contos de Terror", autor: "Vários" },
    { titulo: "Frankenstein", autor: "Mary Shelley" },
    { titulo: "A ilha do Dr. Moreau", autor: "H.G. Wells" }
  ],
  "Frankenstein": [
    { titulo: "O Chamado de Cthulhu", autor: "H.P. Lovecraft" },
    { titulo: "A noite dos mortos vivos", autor: "John Russo" },
    { titulo: "Contos de Terror", autor: "Vários" }
  ],
  "O exorcista": [
    { titulo: "Estou Atrás de Você", autor: "John Ajvide Lindqvist" },
    { titulo: "Frankenstein", autor: "Mary Shelley" },
    { titulo: "A noite dos mortos vivos", autor: "John Russo" }
  ],
  "A noite dos mortos vivos": [
    { titulo: "Frankenstein", autor: "Mary Shelley" },
    { titulo: "O exorcista", autor: "William Peter Blatty" },
    { titulo: "A ilha das almas selvagens", autor: "Maurice Druon" }
  ],
  "A ilha do Dr. Moreau": [
    { titulo: "Frankenstein", autor: "Mary Shelley" },
    { titulo: "O Chamado de Cthulhu", autor: "H.P. Lovecraft" },
    { titulo: "A tragédia de MACBETH", autor: "William Shakespeare" }
  ],
  "A tragédia de MACBETH": [
    { titulo: "Contos de Terror", autor: "Vários" },
    { titulo: "A ilha do Dr. Moreau", autor: "H.G. Wells" },
    { titulo: "Ninguem vai te ouvir gritar", autor: "Wesley Peres" }
  ],
  "Ninguem vai te ouvir gritar": [
    { titulo: "A tragédia de MACBETH", autor: "William Shakespeare" },
    { titulo: "Estou Atrás de Você", autor: "John Ajvide Lindqvist" },
    { titulo: "A ilha das almas selvagens", autor: "Maurice Druon" }
  ],
  "A ilha das almas selvagens": [
    { titulo: "A noite dos mortos vivos", autor: "John Russo" },
    { titulo: "O exorcista", autor: "William Peter Blatty" },
    { titulo: "Ninguem vai te ouvir gritar", autor: "Wesley Peres" }
  ],
  "Os Miseráveis": [
    { titulo: "Dom Casmurro", autor: "Machado de Assis" },
    { titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez" },
    { titulo: "Memórias póstumas de Brás Cubas", autor: "Machado de Assis" }
  ],
  "Dom Casmurro": [
    { titulo: "Memórias póstumas de Brás Cubas", autor: "Machado de Assis" },
    { titulo: "Os Miseráveis", autor: "Victor Hugo" },
    { titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez" }
  ],
  "Memórias póstumas de Brás Cubas": [
    { titulo: "Dom Casmurro", autor: "Machado de Assis" },
    { titulo: "Os Miseráveis", autor: "Victor Hugo" },
    { titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez" }
  ],
  "Cem Anos de Solidão": [
    { titulo: "Os Miseráveis", autor: "Victor Hugo" },
    { titulo: "A Metamorfose", autor: "Franz Kafka" },
    { titulo: "Memórias póstumas de Brás Cubas", autor: "Machado de Assis" }
  ],
  "A Metamorfose": [
    { titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez" },
    { titulo: "O Sol é para Todos", autor: "Harper Lee" },
    { titulo: "Fahrenheit", autor: "Ray Bradbury" }
  ],
  "O Sol é para Todos": [
    { titulo: "A Metamorfose", autor: "Franz Kafka" },
    { titulo: "Fahrenheit", autor: "Ray Bradbury" },
    { titulo: "Os Miseráveis", autor: "Victor Hugo" }
  ],
  "Fahrenheit": [
    { titulo: "A Metamorfose", autor: "Franz Kafka" },
    { titulo: "O Sol é para Todos", autor: "Harper Lee" },
    { titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez" }
  ],
  "Platão:Teoria & Filosofia": [
    { titulo: "O Príncipe", autor: "Nicolau Maquiavel" },
    { titulo: "Confissões de Santo Agostinho", autor: "Santo Agostinho" },
    { titulo: "A Cidade de Deus", autor: "Santo Agostinho" }
  ],
  "O Príncipe": [
    { titulo: "Platão", autor: "Platão" },
    { titulo: "A Arte da Guerra", autor: "Sun Tzu" },
    { titulo: "A Cidade de Deus", autor: "Santo Agostinho" }
  ],
  "Bíblia Sagrada": [
    { titulo: "Cristianismo Puro e Simples", autor: "C.S. Lewis" },
    { titulo: "Confissões de Santo Agostinho", autor: "Santo Agostinho" },
    { titulo: "Em Seus Passos o Que Faria Jesus?", autor: "Charles Sheldon" }
  ],
  "Confissões de Santo Agostinho": [
    { titulo: "Bíblia Sagrada", autor: "Vários autores" },
    { titulo: "Cristianismo Puro e Simples", autor: "C.S. Lewis" },
    { titulo: "O Conhecimento do Deus Santo", autor: "A.W. Tozer" }
  ],
  "Cristianismo Puro e Simples": [
    { titulo: "Bíblia Sagrada", autor: "Vários autores" },
    { titulo: "Confissões de Santo Agostinho", autor: "Santo Agostinho" },
    { titulo: "Cartas de um Diabo a seu Aprendiz", autor: "C.S. Lewis" }
  ],
  "O Problema do Sofrimento": [
    { titulo: "Cristianismo Puro e Simples", autor: "C.S. Lewis" },
    { titulo: "O Conhecimento do Deus Santo", autor: "A.W. Tozer" },
    { titulo: "O Evangelho Maltrapilho", autor: "Brennan Manning" }
  ],
  "Em Seus Passos o Que Faria Jesus?": [
    { titulo: "Cristianismo Puro e Simples", autor: "C.S. Lewis" },
    { titulo: "O Evangelho Maltrapilho", autor: "Brennan Manning" },
    { titulo: "Bíblia Sagrada", autor: "Vários autores" }
  ],
  "O Conhecimento do Deus Santo": [
    { titulo: "Cristianismo Puro e Simples", autor: "C.S. Lewis" },
    { titulo: "O Problema do Sofrimento", autor: "C.S. Lewis" },
    { titulo: "Confissões de Santo Agostinho", autor: "Santo Agostinho" }
  ],
  "O Evangelho Maltrapilho": [
    { titulo: "Cristianismo Puro e Simples", autor: "C.S. Lewis" },
    { titulo: "Cartas de um Diabo a seu Aprendiz", autor: "C.S. Lewis" },
    { titulo: "O Problema do Sofrimento", autor: "C.S. Lewis" }
  ],
  "Cartas de um Diabo a seu Aprendiz": [
    { titulo: "Cristianismo Puro e Simples", autor: "C.S. Lewis" },
    { titulo: "O Evangelho Maltrapilho", autor: "Brennan Manning" },
    { titulo: "Confissões de Santo Agostinho", autor: "Santo Agostinho" }
  ],
  "A Cidade de Deus": [
    { titulo: "Confissões de Santo Agostinho", autor: "Santo Agostinho" },
    { titulo: "Platão", autor: "Platão" },
    { titulo: "O Príncipe", autor: "Nicolau Maquiavel" }
  ],
  "Imitação de Cristo": [
    { titulo: "Confissões de Santo Agostinho", autor: "Santo Agostinho" },
    { titulo: "Cristianismo Puro e Simples", autor: "C.S. Lewis" },
    { titulo: "O Peregrino", autor: "John Bunyan" }
  ],
  "O Peregrino": [
    { titulo: "Imitação de Cristo", autor: "Tomás de Kempis" },
    { titulo: "Cristianismo Puro e Simples", autor: "C.S. Lewis" },
    { titulo: "O Evangelho Maltrapilho", autor: "Brennan Manning" }
  ],
  "Volume 1 de Final Fantasy": [
    { titulo: "Snow crash", autor: "Neal Stephenson" },
    { titulo: "Fundação", autor: "Isaac Asimov" },
    { titulo: "Admirável mundo novo", autor: "Aldous Huxley" }
  ],
  "Snow crash": [
    { titulo: "Volume 1 de Final Fantasy", autor: "Vários" },
    { titulo: "Admirável mundo novo", autor: "Aldous Huxley" },
    { titulo: "Fundação", autor: "Isaac Asimov" }
  ],
  "Fundação": [
    { titulo: "Admirável mundo novo", autor: "Aldous Huxley" },
    { titulo: "Snow crash", autor: "Neal Stephenson" },
    { titulo: "Volume 1 de Final Fantasy", autor: "Vários" }
  ],
  "Admirável mundo novo": [
    { titulo: "Fundação", autor: "Isaac Asimov" },
    { titulo: "Snow crash", autor: "Neal Stephenson" },
    { titulo: "Volume 1 de Final Fantasy", autor: "Vários" }
  ],
  "Sapiens a breve história da humanidade": [
    { titulo: "Poder do hábito", autor: "Charles Duhigg" }
  ],
  "Poder do hábito": [
    { titulo: "Sapiens a breve história da humanidade", autor: "Yuval Noah Harari" }
  ],
  "A Arte da Guerra": [
    { titulo: "Imperiais", autor: "Raphael Draccon" },
    { titulo: "O Príncipe", autor: "Nicolau Maquiavel" },
    { titulo: "O tempo e o vento", autor: "Érico Veríssimo" }
  ],
  "Imperiais": [
    { titulo: "A Arte da Guerra", autor: "Sun Tzu" },
    { titulo: "O tempo e o vento", autor: "Érico Veríssimo" },
    { titulo: "O tempo e o vento2", autor: "Érico Veríssimo" }
  ],
  "O tempo e o vento": [
    { titulo: "Imperiais", autor: "Raphael Draccon" },
    { titulo: "O tempo e o vento2", autor: "Érico Veríssimo" },
    { titulo: "A Arte da Guerra", autor: "Sun Tzu" }
  ],
  "O tempo e o vento2": [
    { titulo: "O tempo e o vento", autor: "Érico Veríssimo" },
    { titulo: "Imperiais", autor: "Raphael Draccon" },
    { titulo: "A Arte da Guerra", autor: "Sun Tzu" }
  ],
  "Ilíada": [
    { titulo: "Odisseia", autor: "Homero" },
    { titulo: "Platão", autor: "Platão" },
    { titulo: "A Metamorfose", autor: "Franz Kafka" }
  ],
  "Odisseia": [
    { titulo: "Ilíada", autor: "Homero" },
    { titulo: "Platão", autor: "Platão" },
    { titulo: "Os Miseráveis", autor: "Victor Hugo" }
  ],
  "A Chama de Ember": [
    { titulo: "O Acordo com o Rei Elfo", autor: "R.A. Salvatore" },
    { titulo: "A história sem fim", autor: "Michael Ende" },
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien" }
  ],
  "A casa dos Espiritos": [
    { titulo: "A Revolução dos Bichos", autor: "George Orwell" },
    { titulo: "O Morro dos ventos uivantes", autor: "Emily Brontë" }
  ],
  "O Pequeno Príncipe": [
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien" }
  ],
  "Harry Potter e a Criança Amaldiçoada": [
    { titulo: "A ilha do Tesouro", autor: "Robert Louis Stevenson" }
  ],
  "Dom Quixote": [
    { titulo: "Harry Potter e a Criança Amaldiçoada", autor: "J.K. Rowling, John Tiffany, Jack Thorne" }
  ],
  "Homem-Aranha: Franked Red": [
    { titulo: "Dom Quixote", autor: "Miguel de Cervantes" }
  ],
  "A menina Submersa": [
    { titulo: "Imperiais", autor: "Raphael Draccon" }
  ],
  "Volume 1 Dragon Ball": [
    { titulo: "Volume 16 Dragon Ball", autor: "Akira Toriyama" },
    { titulo: "Volume 2 Dragon Ball", autor: "Akira Toriyama" },
    { titulo: "Volume 3 Dragon Ball", autor: "Akira Toriyama" },
    { titulo: "Volume 4 Dragon Ball", autor: "Akira Toriyama" },
    { titulo: "Volume 5 Dragon Ball", autor: "Akira Toriyama" },
    { titulo: "Volume 6 Dragon Ball", autor: "Akira Toriyama" }
  ],
  "Volume 2 Dragon ball": [
    { titulo: "Volume 16 Dragon Ball", autor: "Akira Toriyama" },
    { titulo: "Volume 1 Dragon Ball", autor: "Akira Toriyama" },
    { titulo: "Volume 3 Dragon Ball", autor: "Akira Toriyama" },
    { titulo: "Volume 4 Dragon Ball", autor: "Akira Toriyama" },
    { titulo: "Volume 5 Dragon Ball", autor: "Akira Toriyama" },
    { titulo: "Volume 6 Dragon Ball", autor: "Akira Toriyama" }
  ],
  "Volume 3 Dragon ball": [
    { titulo: "Volume 16 Dragon Ball", autor: "Akira Toriyama" },
    { titulo: "Volume 4 Dragon Ball", autor: "Akira Toriyama" },
    { titulo: "Volume 5 Dragon Ball", autor: "Akira Toriyama" },
    { titulo: "Volume 6 Dragon Ball", autor: "Akira Toriyama" }
  ],
  "Volume 4 Dragon ball": [
    { titulo: "Volume 16 Dragon Ball", autor: "Akira Toriyama" },
    { titulo: "Volume 1 Dragon Ball", autor: "Akira Toriyama" },
    { titulo: "Volume 5 Dragon Ball", autor: "Akira Toriyama" },
    { titulo: "Volume 6 Dragon Ball", autor: "Akira Toriyama" }
  ],
  "Volume 5 Dragon ball": [
    { titulo: "Volume 16 Dragon Ball", autor: "Akira Toriyama" },
    { titulo: "Volume 1 Dragon Ball", autor: "Akira Toriyama" },
    { titulo: "Volume 6 Dragon Ball", autor: "Akira Toriyama" }
  ],
  "Volume 6 Dragon ball": [
    { titulo: "Volume 16 Dragon Ball", autor: "Akira Toriyama" },
    { titulo: "Volume 1 Dragon Ball", autor: "Akira Toriyama" }
  ],
  "Volume 7 Dragon ball": [
    { titulo: "Volume 16 Dragon Ball", autor: "Akira Toriyama" },
    { titulo: "Volume 1 Dragon Ball", autor: "Akira Toriyama" }
  ], "Volume 8 Dragon ball": [
    { titulo: "Volume 16 Dragon Ball", autor: "Akira Toriyama" },
    { titulo: "Volume 1 Dragon Ball", autor: "Akira Toriyama" }
  ], "Volume 9 Dragon ball": [
    { titulo: "Volume 16 Dragon Ball", autor: "Akira Toriyama" },
    { titulo: "Volume 1 Dragon Ball", autor: "Akira Toriyama" }
  ],
  "Hamlet": [
    { titulo: "Romeu e Julieta", autor: "William Shakespeare" }
  ],

  "Romeu e Julieta": [
    { titulo: "Hamlet", autor: "William Shakespeare" }
  ],

  "Verity": [
    { titulo: "Crime e Castigo", autor: "Fiódor Dostoiévski" },
    { titulo: "Noites Brancas", autor: "Fiódor Dostoiévski" }
  ],

  "Crime e Castigo": [
    { titulo: "Noites Brancas", autor: "Fiódor Dostoiévski" },
    { titulo: "Verity", autor: "Colleen Hoover" }
  ],

  "Noites Brancas": [
    { titulo: "Crime e Castigo", autor: "Fiódor Dostoiévski" },
    { titulo: "Verity", autor: "Colleen Hoover" }
  ],
  "1984": [
    { titulo: "A Revolução dos Bichos", autor: "George Orwell" },
  ]

};

function verSemelhantes(titulo) {
  // Normalize the title to handle case sensitivity and small variations
  const normalizedTitle = Object.keys(livrosSemelhantes).find(
    key => key.toLowerCase() === titulo.toLowerCase()
  );

  if (!normalizedTitle) {
    alert(`Nenhum livro semelhante encontrado para "${titulo}".\n\nSugestões disponíveis:\n${Object.keys(livrosSemelhantes).slice(0, 5).join('\n')}...`);
    return;
  }

  const semelhantes = livrosSemelhantes[normalizedTitle];

  // Create a more visually appealing alert with emojis and formatting
  let resultado = `📚 Livros semelhantes a "${normalizedTitle}":\n\n`;

  semelhantes.forEach((livro, index) => {
    resultado += `${index + 1}️⃣ ${livro.titulo} — ${livro.autor || 'Autor desconhecido'}\n`;
  });

  // Add footer with additional options
  resultado += `\n🔍 Total: ${semelhantes.length} recomendações`;
  resultado += `\n\n📖 Digite outro título para mais sugestões!`;

  // Use confirm to allow user to see more details
  const userChoice = confirm(`${resultado}\n\nDeseja ver mais detalhes?`);

  if (userChoice) {
    // Could be enhanced to show more details or redirect to a detailed page
    console.log("Detalhes expandidos:", { titulo: normalizedTitle, semelhantes });
    // Alternative: window.open(`/detalhes?livro=${encodeURIComponent(normalizedTitle)}`, '_blank');
  }
}

// Bonus: Add auto-complete feature
function sugerirTitulos(partialTitle) {
  return Object.keys(livrosSemelhantes).filter(title =>
    title.toLowerCase().includes(partialTitle.toLowerCase())
  );
}

// Example usage:
// verSemelhantes("as crônicas de nárnia");
// console.log(sugerirTitulos("senhor"));i