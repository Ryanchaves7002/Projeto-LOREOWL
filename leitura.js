const livros = [
    {
        titulo: "As Crônicas de Nárnia",
        texto: "As Crônicas de Nárnia é uma série de fantasia que narra as aventuras em um mundo mágico.",
        pdf: "pdfs/AS_CRÔNICAS_DE_NÁRNIA.pdf",
        img: "https://a-static.mlcdn.com.br/800x560/livro-as-cronicas-de-narnia-volume-unico/olistsp/osplbmtnox80xv3h/5ae043fe928949fb5759725383feba94.jpg",
        alt: "As Crônicas de Nárnia"
    },
    {
        titulo: "A Chama de Ember",
        texto: "Este é um trecho do livro A Chama de Ember...",
        pdf: "pdfs/A_chama_de_ember.pdf",
        img: "https://m.media-amazon.com/images/I/A1P+ndx6rAL._SY425_.jpg",
        alt: "A Chama de Ember"
    },
    {
        titulo: "O Acordo com o Rei Elfo",
        texto: "Este é um trecho do livro O Acordo com o Rei Elfo...",
        pdf: "o-acordo-com-o-rei-elfo-a-married-to-mag.pdf",
        img: "https://m.media-amazon.com/images/I/81P5MhGTrpL._SL1500_.jpg",
        alt: "O Acordo com o Rei Elfo"
    },
    {
        titulo: "Volume 3 de Gash Bell",
        texto: "Venha acompanhar as Aventuras e batalhas travadas por Gash!",
        pdf: "",
        img: "https://m.media-amazon.com/images/I/81kL9MR9lbL._AC_UL320_.jpg",
        alt: "Volume 3 de Gash Bell"
    },
    {
        titulo: "Volume 4 de Demon Slayer",
        texto: "Demon Slayer conta a história de Tanjiro Kamado que junto de sua irmã Nezuko uma sobrevivente de um ataque oni e que se tornou uma oni, seu irmão se torna um caçador para poder curá-la!",
        pdf: "",
        img: "https://m.media-amazon.com/images/I/91ZVONTZJGL._SY425_.jpg",
        alt: "Volume 4 de Demon Slayer"
    },
    {
        titulo: "Volume 1 de Final Fantasy",
        texto: "Este é um trecho do livro Volume 1 de Final Fantasy...",
        pdf: "",
        img: "https://m.media-amazon.com/images/I/51g8Yis6fzL._SY445_SX342_.jpg",
        alt: "Volume 1 de Final Fantasy"
    },
    {
        titulo: "Orgulho e Preconceito",
        texto: "Este é um trecho do livro Orgulho e Preconceito...",
        pdf: "Orgulho_Preconceito.pdf",
        img: "https://images-na.ssl-images-amazon.com/images/I/91wc-3d0mEL.jpg",
        alt: "Orgulho e Preconceito"
    },
    {
        titulo: "O Morro dos Ventos Uivantes",
        texto: "Este é um trecho do livro O Morro dos Ventos Uivantes...",
        pdf: "O-Morro.pdf",
        img: "https://m.media-amazon.com/images/I/81t+0v1x2PL._AC_UL320_.jpg",
        alt: "O Morro dos Ventos Uivantes"
    },
    {
        titulo: "P.S. Eu Te Amo",
        texto: "Este é um trecho do livro P.S. Eu Te Amo...",
        pdf: "",
        img: "https://m.media-amazon.com/images/I/81Z5YgF3RSL._AC_UL320_.jpg",
        alt: "P.S. Eu Te Amo"
    },
    {
        titulo: "Como Eu Era Antes de Você",
        texto: "Este é um trecho do livro Como Eu Era Antes de Você...",
        pdf: "",
        img: "https://m.media-amazon.com/images/I/81Z5YgF3RSL._AC_UL320_.jpg",
        alt: "Como Eu Era Antes de Você"
    },
    {
        titulo: "Um Dia",
        texto: "Este é um trecho do livro Um Dia...",
        pdf: "",
        img: "https://th.bing.com/th/id/OIP.gdLTbPcZMHUXljoOkj0q-QAAAA?w=129&h=195&c=7&r=0&o=5&pid=1.7",
        alt: "Um Dia"
    },
    {
        titulo: "Amor Nos Tempos do Cólera",
        texto: "Este é um trecho do livro Amor Nos Tempos do Cólera...",
        pdf: "",
        img: "/amor-nos-tempos.html",
        alt: "Amor Nos Tempos do Cólera"
    },
    {
        titulo: "O Diário de uma Paixão",
        texto: "Este é um trecho do livro O Diário de uma Paixão...",
        pdf: "",
        img: "./o-diario-de-uma-paixao.html",
        alt: "O Diário de uma Paixão"
    },
    {
        titulo: "Volume 16 Dragon Ball",
        texto: "Este é um trecho do livro Volume 16 Dragon Ball...",
        pdf: "",
        img: "https://http2.mlstatic.com/D_NQ_NP_987320-MLU77344751946_072024-O.webp",
        alt: "Volume 16 Dragon Ball"
    },
    {
        titulo: "Bíblia Sagrada",
        texto: "Este é um trecho do livro Bíblia Sagrada...",
        pdf: "",
        img: "https://www.mercadolivre.com.br/biblia-rcm-trinitariana-acf-letra-gigante-editora-sbtb/p/MLB20808066",
        alt: "Bíblia Sagrada"
    },
    {
        titulo: "A Arte da Guerra",
        texto: "Este é um trecho do livro A Arte da Guerra...",
        pdf: "A_ARTE_DA_GUERRA.pdf",
        img: "https://tse4.mm.bing.net/th/id/OIP.aW2s9HSkN2Y9Akf2rytzTwHaKe?rs=1&pid=ImgDetMain",
        alt: "A Arte da Guerra"
    },
    {
        titulo: "Akira",
        texto: "Este é um trecho do livro Akira...",
        pdf: "",
        img: "https://media.senscritique.com/media/000015332347/source_big/Akira.jpg",
        alt: "Akira"
    },
    {
        titulo: "Volume 1 The Ghost in the Shell",
        texto: "Este é um trecho do livro Volume 1 The Ghost in the Shell...",
        pdf: "",
        img: "https://i.pinimg.com/736x/08/53/02/08530277988c7b5d4363645e4c8765af--ghost-in-the-shell-ghosts.jpg",
        alt: "Volume 1 The Ghost in the Shell"
    },
    {
        titulo: "Platão",
        texto: "Este é um trecho do livro Platão...",
        pdf: "",
        img: "https://www.topleituras.com/livros/platao-teoria-filosofia-vida-obra-maiores-filosofos-tempos-discovery-publicacoes-bd8c-capa.jpg",
        alt: "Platão"
    },
    {
        titulo: "O Príncipe",
        texto: "Este é um trecho do livro O Príncipe...",
        pdf: "",
        img: "https://tse3.mm.bing.net/th/id/OIP.4T3tXPIA1mjIt4-Jt64w0QHaKy?rs=1&pid=ImgDetMain",
        alt: "O Príncipe"
    },
    {
        titulo: "Odisseia",
        texto: "Este é um trecho do livro Odisseia...",
        pdf: "",
        img: "https://m.media-amazon.com/images/I/51KQoA7fmWL.jpg",
        alt: "Odisseia"
    },
    {
        titulo: "Ilíada",
        texto: "Este é um trecho do livro Ilíada...",
        pdf: "",
        img: "https://a-static.mlcdn.com.br/800x560/livro-iliada/magazineluiza/228539700/9e11c08aee2cca10e7a147459b39700f.jpg",
        alt: "Ilíada"
    },
    {
        titulo: "Contos de Terror",
        texto: "Este é um trecho do livro Contos de Terror...",
        pdf: "",
        img: "https://http2.mlstatic.com/D_NQ_NP_651777-MLB46547775208_062021-O.webp",
        alt: "Contos de Terror"
    },
    {
        titulo: "Estou Atrás de Você",
        texto: "Este é um trecho do livro Estou Atrás de Você...",
        pdf: "",
        img: "https://th.bing.com/th/id/OIP.YLjadM_1AYgYOswFbBuw2QAAAA?rs=1&pid=ImgDetMain",
        alt: "Estou Atrás de Você"
    },
    {
        titulo: "O Chamado de Cthulhu",
        texto: "Este é um trecho do livro O Chamado de Cthulhu...",
        pdf: "",
        img: "https://www.sociedadenerd.com.br/wp-content/uploads/2023/04/livro-O-Chamado-de-Cthulhu-683x1024.jpg",
        alt: "O Chamado de Cthulhu"
    },
    {
        titulo: "Imperiais",
        texto: "Este é um trecho do livro Imperiais...",
        pdf: "",
        img: "https://th.bing.com/th/id/OIP.22TbIiA7c9GryhA1g-ODCgHaK9?rs=1&pid=ImgDetMain",
        alt: "Imperiais"
    },
    {
        titulo: "A tragédia de MACBETH",
        texto: "Este é um trecho do livro A tragédia de MACBETH...",
        pdf: "",
        img: "https://dcdn-us.mitiendanube.com/stores/005/277/283/products/1-d8dbecbe05db3ba67717334915875312-1024-1024.webp",
        alt: "A tragédia de MACBETH"
    },
    {
        titulo: "Ninguém vai te ouvir gritar",
        texto: "Este é um trecho do livro Ninguém vai te ouvir gritar...",
        pdf: "",
        img: "https://imgv2-2-f.scribdassets.com/img/document/688064400/original/5aaa276f27/1702397513?v=1",
        alt: "Ninguém vai te ouvir gritar"
    },
    {
        titulo: "A ilha das almas selvagens",
        texto: "Este é um trecho do livro A ilha das almas selvagens...",
        pdf: "",
        img: "https://m.media-amazon.com/images/I/81u7cHnV+KL._SL1500_.jpg",
        alt: "A ilha das almas selvagens"
    },
    {
        titulo: "Volume 57 de One Piece",
        texto: "Este é um trecho do livro Volume 57 de One Piece...",
        pdf: "",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_825570-MLU50450120793_062022-F.webp",
        alt: "Volume 57 de One Piece"
    },
    {
        titulo: "Volume 10 Neon Genesis Evangelion",
        texto: "Este é um trecho do livro Volume 10 Neon Genesis Evangelion...",
        pdf: "",
        img: "https://m.media-amazon.com/images/I/71lT36JaUqL._SY425_.jpg",
        alt: "Volume 10 Neon Genesis Evangelion"
    },
    {
        titulo: "Volume 1 Blame!",
        texto: "Este é um trecho do livro Volume 1 Blame!...",
        pdf: "",
        img: "https://media.senscritique.com/media/000018352089/source_big/BLAME_Edition_Deluxe_tome_1.jpg",
        alt: "Volume 1 Blame!"
    },
    {
        titulo: "Volume 19 Attack on Titan",
        texto: "Este é um trecho do livro Volume 19 Attack on Titan...",
        pdf: "",
        img: "https://th.bing.com/th/id/OIP.ULeQI9-bgpTKs4brlmzw1AHaLE?rs=1&pid=ImgDetMain",
        alt: "Volume 19 Attack on Titan"
    },
    {
        titulo: "Os Miseráveis",
        texto: "Este é um trecho do livro Os Miseráveis...",
        pdf: "",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_927426-MLU50535010087_062022-F.webp",
        alt: "Os Miseráveis"
    },
    {
        titulo: "A Revolução dos Bichos",
        texto: "Este é um trecho do livro A Revolução dos Bichos...",
        pdf: "",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_970788-MLB46598459639_072021-F.webp",
        alt: "A Revolução dos Bichos"
    },
    {
        titulo: "Cem Anos de Solidão",
        texto: "Este é um trecho do livro Cem Anos de Solidão...",
        pdf: "",
        img: "https://th.bing.com/th/id/R.dadc528c8178bddf6d3104415dab47de?rik=9zsbuOytFeKjig&riu=http%3a%2f%2fstatic.fnac-static.com%2fmultimedia%2fPT%2fimages_produits%2fPT%2fZoomPE%2f4%2f1%2f3%2f9789722000314.jpg&ehk=tJQP7bAkoucPC%2b0aNA4RBeil%2f30HnQQyMxtewLxIkYM%3d&risl=&pid=ImgRaw&r=0",
        alt: "Cem Anos de Solidão"
    },
    {
        titulo: "A Metamorfose",
        texto: "Este é um trecho do livro A Metamorfose...",
        pdf: "",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_612685-MLU69871993230_062023-F.webp",
        alt: "A Metamorfose"
    },
    {
        titulo: "O Sol é para Todos",
        texto: "Este é um trecho do livro O Sol é para Todos...",
        pdf: "",
        img: "https://th.bing.com/th/id/OIP.1Vd4RqiniFcROkWIrQbaJwHaJl?rs=1&pid=ImgDetMain",
        alt: "O Sol é para Todos"
    },
    {
        titulo: "Senhor dos anéis",
        texto: "Este é um trecho do livro Senhor dos anéis...",
        pdf: "",
        img: "https://images-na.ssl-images-amazon.com/images/I/51uNJPlhCzL._SX354_BO1,204,203,200_.jpg",
        alt: "Senhor dos anéis"
    },
    {
        titulo: "Fahrenheit",
        texto: "Este é um trecho do livro Fahrenheit...",
        pdf: "",
        img: "https://th.bing.com/th/id/R.0265102b2ba3080203cd721f84f2f4fe?rik=h1C7vQlEAGCjCQ&pid=ImgRaw&r=0",
        alt: "Fahrenheit"
    },
    {
        titulo: "Duna",
        texto: "Este é um trecho do livro Duna...",
        pdf: "",
        img: "https://http2.mlstatic.com/D_NQ_NP_703592-MLU70117859400_062023-O.webp",
        alt: "Duna"
    },
    {
        titulo: "Eragon",
        texto: "Este é um trecho do livro Eragon...",
        pdf: "",
        img: "https://http2.mlstatic.com/D_NQ_NP_703592-MLU70117859400_062023-O.webp",
        alt: "Eragon"
    },
    {
        titulo: "O exorcista",
        texto: "Este é um trecho do livro O exorcista...",
        pdf: "",
        img: "https://th.bing.com/th/id/R.3f8c2bfde5a023ef0f80b30b280a5361?rik=%2frUzKY%2bRvKmQZQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-kOwG7pwKbvU%2fVXebzRG4fsI%2fAAAAAAAAErM%2faSJWuJbRWQc%2fs1600%2f71RpvDjl2jL._SL1047_.jpg&ehk=jjSpi%2bwUZrs4fzL1vlmevv3H0OBqAhnzGB4MuwK2lXA%3d&risl=&pid=ImgRaw&r=0",
        alt: "O exorcista"
    },
    {
        titulo: "Dom Casmurro",
        texto: "Este é um trecho do livro Dom Casmurro...",
        pdf: "",
        img: "https://www.educacaoetransformacao.com.br/wp-content/uploads/2020/03/Dom-Casmurro-Capa-da-obra-1899.jpg",
        alt: "Dom Casmurro"
    },
    {
        titulo: "Memórias póstumas de Brás Cubas",
        texto: "Memórias Póstumas de Brás Cubas é uma obra-prima de Machado de Assis, narrada por um 'defunto autor' que reflete com ironia e humor sobre sua vida, a sociedade e a condição humana.",
        pdf: "",
        img: "https://www.lpm.com.br/livros/imagens/memorias_postumas_de_bras_cubas_nova_9788525422675_hd.jpg",
        alt: "Memórias póstumas de Brás Cubas"
    },
    {
        titulo: "O Hobbit",
        texto: "O Hobbit, de J.R.R. Tolkien, é uma aventura épica que narra a jornada de Bilbo Bolseiro em busca de um tesouro guardado por um dragão.",
        pdf: "",
        img: "https://images.thenile.io/r1000/9780007458424.jpg",
        alt: "O Hobbit"
    },
    {
        titulo: "Frankenstein",
        texto: "Frankenstein, de Mary Shelley, é um clássico da literatura gótica que explora os limites da ciência e as consequências da criação de vida.",
        pdf: "",
        img: "https://th.bing.com/th/id/OIP.Upr8LqaOgM7Qg4J0JttfjAHaLc?rs=1&pid=ImgDetMain",
        alt: "Frankenstein"
    },
    {
        titulo: "A noite dos mortos vivos",
        texto: "A Noite dos Mortos-Vivos é uma obra que popularizou o gênero de zumbis, explorando o terror e a sobrevivência em um mundo apocalíptico.",
        pdf: "",
        img: "https://media.fstatic.com/W55pXqE3a_bLRKTQVw56v27QavQ=/290x478/smart/media/movies/covers/2018/10/3_Imagem.jpg",
        alt: "A noite dos mortos vivos"
    },
    {
        titulo: "Sapiens a breve história da humanidade",
        texto: "Sapiens, de Yuval Noah Harari, é uma análise fascinante sobre a história da humanidade, desde os primórdios até os dias atuais.",
        pdf: "",
        img: "https://th.bing.com/th/id/OIP.KPgo7MPKyYOHTUglXXhw6wHaLO?rs=1&pid=ImgDetMain",
        alt: "Sapiens a breve história da humanidade"
    },
    {
        titulo: "Poder do hábito",
        texto: "O Poder do Hábito, de Charles Duhigg, explora como os hábitos moldam nossas vidas e como podemos transformá-los para alcançar o sucesso.",
        pdf: "",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_683822-MLB44517538285_012021-F.jpg",
        alt: "Poder do hábito"
    },
    {
        titulo: "Volume 1 Tokyo Ghoul",
        texto: "Tokyo Ghoul é um mangá que narra a história de Kaneki, um jovem que se transforma em meio-ghoul após um encontro traumático.",
        pdf: "",
        img: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421580364/tokyo-ghoul-vol-1-9781421580364_hr.jpg",
        alt: "Volume 1 Tokyo Ghoul"
    },
    {
        titulo: "A casa dos Espíritos",
        texto: "A Casa dos Espíritos, de Isabel Allende, é uma saga familiar que mistura realismo mágico e história política na América Latina.",
        pdf: "",
        img: "https://static.fnac-static.com/multimedia/PT/images_produits/PT/ZoomPE/7/5/4/9789720044457/tsp20130314200814/A-Casa-dos-Espiritos.jpg",
        alt: "A casa dos Espíritos"
    },
    {
        titulo: "Os filhos de Hurin",
        texto: "Os Filhos de Húrin, de J.R.R. Tolkien, é uma tragédia épica ambientada no universo da Terra Média.",
        pdf: "",
        img: "https://www.estamosemobras.com.br/wp-content/uploads/2014/11/capa-filhos-de-hurin-656x1024.jpg",
        alt: "Os filhos de Hurin"
    },
    {
        titulo: "A história sem fim",
        texto: "A História Sem Fim, de Michael Ende, é uma fantasia que explora o poder da imaginação e a importância das histórias.",
        pdf: "",
        img: "https://www.antroposofica.com.br/lojas/00000472/prod/historia-sem-fim_600.jpg?cccfc=283e2101",
        alt: "A história sem fim"
    },
    {
        titulo: "A bússola de ouro",
        texto: "A Bússola de Ouro, de Philip Pullman, é uma aventura fantástica que segue Lyra em um mundo paralelo cheio de mistérios.",
        pdf: "",
        img: "https://3.bp.blogspot.com/-9y3YptB3r3c/Wd7lx3wXclI/AAAAAAAAhnY/h1RNKBIZtA0A-Dy0qzTuz6Ox93fIMP_PgCLcBGAs/s1600/A%2BB%25C3%25BAssola%2Bde%2BOuro.jpg",
        alt: "A bússola de ouro"
    },
    {
        titulo: "Um amor para recordar",
        texto: "Um Amor Para Recordar, de Nicholas Sparks, é uma história emocionante sobre amor, fé e transformação.",
        pdf: "",
        img: "https://m.media-amazon.com/images/I/71jeQnaNsJL._SL1358_.jpg",
        alt: "Um amor para recordar"
    },
    {
        titulo: "Fundação",
        texto: "Fundação, de Isaac Asimov, é uma obra de ficção científica que explora a ascensão e queda de civilizações galácticas.",
        pdf: "",
        img: "https://static.wixstatic.com/media/4d0333_a2067316b50f4b6581e0058fbbda13c7~mv2.jpg/v1/fill/w_322,h_500,al_c,q_80,enc_auto/4d0333_a2067316b50f4b6581e0058fbbda13c7~mv2.jpg",
        alt: "Fundação"
    },
    {
        titulo: "Admirável mundo novo",
        texto: "Admirável Mundo Novo, de Aldous Huxley, é uma distopia que reflete sobre os perigos do controle social e da tecnologia.",
        pdf: "",
        img: "https://th.bing.com/th/id/OIP.dhTb8w_S4WbSLBQ0u6afxwAAAA?rs=1&pid=ImgDetMain",
        alt: "Admirável mundo novo"
    },
    {
        titulo: "Snow crash",
        texto: "Snow Crash, de Neal Stephenson, é uma obra de ficção científica cyberpunk que explora um futuro dominado por realidades virtuais.",
        pdf: "",
        img: "https://www.businessinsider.de/wp-content/uploads/2016/11/snow-crash.jpg",
        alt: "Snow crash"
    },
    {
        titulo: "O Pintassilgo",
        texto: "O Pintassilgo, de Donna Tartt, é um romance que narra a vida de Theo após uma tragédia que muda seu destino.",
        pdf: "",
        img: "https://m.media-amazon.com/images/I/81eB+7+CkUL.jpg",
        alt: "O Pintassilgo"
    },
    {
        titulo: "O tempo e o vento",
        texto: "O Tempo e o Vento, de Érico Veríssimo, é uma saga que retrata a formação do Rio Grande do Sul através de gerações de uma família.",
        pdf: "",
        img: "https://images-na.ssl-images-amazon.com/images/I/918uO4EaD%2BL.jpg",
        alt: "O tempo e o vento"
    },
    {
        titulo: "O tempo e o vento 2",
        texto: "Continuação da saga O Tempo e o Vento, explorando os desafios e conquistas de uma família ao longo da história.",
        pdf: "",
        img: "https://image.slidesharecdn.com/otempoeovento-oretrato-ericoverissimo-150703222558-lva1-app6892/95/o-tempo-e-o-vento-o-retrato-erico-verissimo-1-638.jpg?cb=1435962770",
        alt: "O tempo e o vento 2"
    },
    {
        titulo: "A ilha do tesouro",
        texto: "A Ilha do Tesouro, de Robert Louis Stevenson, é uma clássica aventura de piratas e busca por tesouros.",
        pdf: "",
        img: "https://th.bing.com/th/id/OIP.e4640MFHpBVgHOPVqRQGSAAAAA?rs=1&pid=ImgDetMain",
        alt: "A ilha do tesouro"
    },
    {
        titulo: "Confissões de Santo Agostinho",
        texto: "Confissões, de Santo Agostinho, é uma obra autobiográfica que reflete sobre a busca espiritual e a fé cristã.",
        pdf: "",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_963238-MLB45005075468_022021-F.jpg",
        alt: "Confissões de Santo Agostinho"
    },
    {
        titulo: "Cristianismo Puro e Simples",
        texto: "Cristianismo Puro e Simples, de C.S. Lewis, é uma introdução clara e lógica aos fundamentos da fé cristã.",
        pdf: "",
        img: "https://cdn.sistemawbuy.com.br/arquivos/8c26639222dadffbe4f12a314301feba/produtos/6424962db07b3/cristianismo-puro-e-simples-edicao-especial-em-capa-dura-20201111085405-6424962e031c1.jpg",
        alt: "Cristianismo Puro e Simples"
    },
    {
        titulo: "O Problema do Sofrimento",
        texto: "O Problema do Sofrimento, de C.S. Lewis, aborda questões teológicas sobre o sofrimento humano e a fé.",
        pdf: "",
        img: "https://a-static.mlcdn.com.br/800x560/o-problema-do-sofrimento-c-s-lewis-8067702/komunhaolivrariacrista/10012630067/3ee9372d7d47fc1c1f1b3470e8ac2c79.jpg",
        alt: "O Problema do Sofrimento"
    },
    {
        titulo: "Em Seus Passos o Que Faria Jesus?",
        texto: "Em Seus Passos o Que Faria Jesus?, de Charles Sheldon, é um romance que inspira a reflexão sobre viver de acordo com os ensinamentos de Cristo.",
        pdf: "",
        img: "https://www.clcportugal.com/_CLCPortugal/images/products/original/169.jpg",
        alt: "Em Seus Passos o Que Faria Jesus?"
    },
    {
        titulo: "O Conhecimento do Deus Santo",
        texto: "O Conhecimento do Deus Santo, de A.W. Tozer, é uma obra que explora os atributos de Deus e sua relação com a humanidade.",
        pdf: "",
        img: "https://www.saraivaconteudo.com.br/capas/32/download-o-conhecimento-do-santo-a-w-tozer-ler-online-pdf.jpg",
        alt: "O Conhecimento do Deus Santo"
    },
    {
        titulo: "O Evangelho Maltrapilho",
        texto: "O Evangelho Maltrapilho, de Brennan Manning, é uma reflexão sobre a graça de Deus e o amor incondicional.",
        pdf: "",
        img: "https://media.s-bol.com/qD1v6zKVWqRp/L7A68vj/550x830.jpg",
        alt: "O Evangelho Maltrapilho"
    },
    {
        titulo: "Cartas de um Diabo a seu Aprendiz",
        texto: "Cartas de um Diabo a seu Aprendiz, de C.S. Lewis, é uma sátira que explora a tentação e a natureza humana.",
        pdf: "",
        img: "https://images-na.ssl-images-amazon.com/images/I/51Ix%2BvLKY4L.jpg",
        alt: "Cartas de um Diabo a seu Aprendiz"
    },
    {
        titulo: "A Cidade de Deus",
        texto: "A Cidade de Deus, de Santo Agostinho, é uma obra teológica que contrasta a cidade terrena com a cidade celestial.",
        pdf: "",
        img: "https://skoob.s3.amazonaws.com/livros/23283/A_CIDADE_DE_DEUS__VOL_2_1239534738B.jpg",
        alt: "A Cidade de Deus"
    },
    {
        titulo: "Imitação de Cristo",
        texto: "Imitação de Cristo, de Tomás de Kempis, é um clássico da espiritualidade cristã que inspira a busca pela santidade.",
        pdf: "",
        img: "https://img.wook.pt/images/imitacao-de-cristo-tomas-de-kempis/MXwyMTQwNjcwOHwxNzI3NzA3NnwxNTE3ODQ4NjgwMDAw/500x",
        alt: "Imitação de Cristo"
    },
    {
        titulo: "O Peregrino",
        texto: "O Peregrino, de John Bunyan, é uma alegoria cristã que narra a jornada espiritual de um homem em busca da salvação.",
        pdf: "",
        img: "https://editoradosclassicos.com.br/451-medium_default/O_peregrino_-_John_Bunyan_-_Comentado.jpg",
        alt: "O Peregrino"
    },
    {
        titulo: "A ilha do Dr. Moreau",
        texto: "A Ilha do Dr. Moreau, de H.G. Wells, é uma obra de ficção científica que explora os limites da ciência e da ética.",
        pdf: "",
        img: "https://livrariadacartola.com.br/wp-content/uploads/2024/01/capa-a-ilha-do-dr-moreau.jpg",
        alt: "A ilha do Dr. Moreau"
    },
    {
        titulo: "A menina Submersa",
        texto: "A menina Submersa é um livro",
        pdf: "",
        img: "https://m.media-amazon.com/images/I/51EsJgaKhwL.jpg",
        alt: "A menina Submersa"
    }
];

const livroSelecionado = localStorage.getItem('livroSelecionado');
const livroContainer = document.getElementById('livro-container');

if(livroSelecionado) {
    const livro = livros.find(l => l.titulo === livroSelecionado);
    if(livro) {
        livroContainer.innerHTML = `
            <div class="livro">
                <h2>${livro.titulo}</h2>
                <img src="${livro.img}" alt="${livro.alt}">
                <p>${livro.texto}</p>
                ${livro.pdf ? `<a href="${livro.pdf}" target="_blank">Ler PDF</a>` : ''}
            </div>
        `;
    } else {
        livroContainer.innerHTML = `<p>Livro não encontrado.</p>`;
    }
} else {
    livroContainer.innerHTML = `<p>Nenhum livro selecionado.</p>`;
}