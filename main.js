// Dados das refeições
const refeicoes = {
  cafe: [
    { titulo: "Aveia com banana e mel", descricao: "Aveia cozida no leite (ou vegetal), banana em rodelas, um fio de mel e canela. Opcional: granola por cima.", tempo: "10 min", tags: ["rapido", "saudavel", "vegetariano"] },
    { titulo: "Ovos mexidos com torrada", descricao: "2 ovos mexidos com um fio de azeite, sal e pimenta. Sirva com torrada integral e tomate cereja.", tempo: "8 min", tags: ["rapido", "saudavel"] },
    { titulo: "Iogurte com frutas e granola", descricao: "Iogurte natural, morango, blueberry ou manga, granola crocante e um toque de mel.", tempo: "5 min", tags: ["rapido", "saudavel", "vegetariano"] },
    { titulo: "Panqueca de banana", descricao: "Amasse 1 banana, misture com 1 ovo e uma colher de aveia. Frite em frigideira antiaderente. Sirva com mel.", tempo: "12 min", tags: ["rapido", "saudavel", "vegetariano"] },
    { titulo: "Tapioca com queijo e tomate", descricao: "Tapioca recheada com queijo mussarela e tomate. Simples, leve e deliciosa.", tempo: "7 min", tags: ["rapido", "vegetariano"] },
    { titulo: "Smoothie verde energético", descricao: "Banana, espinafre, leite de amêndoas, um pouco de gengibre e gelo. Bata tudo no liquidificador.", tempo: "5 min", tags: ["rapido", "saudavel", "vegetariano"] },
    { titulo: "Pão integral com abacate", descricao: "Torrada integral, abacate amassado com limão, sal e pimenta. Finalize com ovos cozidos ou sementes.", tempo: "8 min", tags: ["rapido", "saudavel", "vegetariano"] },
    { titulo: "Mingau de milho cremoso", descricao: "Fubá ou milho cremoso cozido no leite, canela e um toque de açúcar ou mel. Conforto puro.", tempo: "15 min", tags: ["vegetariano"] }
  ],
  almoco: [
    { titulo: "Frango grelhado com arroz e salada", descricao: "Peito de frango temperado e grelhado, arroz branco ou integral e salada de folhas verdes com tomate.", tempo: "30 min", tags: ["saudavel"] },
    { titulo: "Macarrão ao alho e óleo com legumes", descricao: "Macarrão integral refogado no azeite com alho, brócolis, cenoura e abobrinha. Leve e saboroso.", tempo: "20 min", tags: ["rapido", "vegetariano", "saudavel"] },
    { titulo: "Feijão tropeiro light", descricao: "Feijão, farofa, ovo, bacon em pouca quantidade e temperos. Versão mais leve para o dia a dia.", tempo: "35 min", tags: [] },
    { titulo: "Salada completa de grão-de-bico", descricao: "Grão-de-bico, tomate, pepino, cebola roxa, azeite, limão e coentro. Proteína vegetal completa.", tempo: "15 min", tags: ["rapido", "saudavel", "vegetariano"] },
    { titulo: "Strogonoff de frango com arroz", descricao: "Clássico strogonoff de frango com creme de leite e champignon, acompanhado de arroz e batata palha.", tempo: "40 min", tags: [] },
    { titulo: "Peixe assado com batata doce", descricao: "Filé de peixe temperado no forno com batata doce em cubos e brócolis. Super saudável.", tempo: "35 min", tags: ["saudavel"] },
    { titulo: "Wrap de frango com vegetais", descricao: "Tortilha integral, frango desfiado, alface, tomate, cenoura ralada e molho de iogurte.", tempo: "15 min", tags: ["rapido", "saudavel"] },
    { titulo: "Risoto de cogumelos", descricao: "Arroz arbóreo com cogumelos, cebola, alho e um toque de queijo parmesão. Cremoso e reconfortante.", tempo: "35 min", tags: ["vegetariano"] }
  ],
  jantar: [
    { titulo: "Sopa de legumes cremosa", descricao: "Cenoura, abóbora, batata e cebola batidas com um pouco de creme de leite ou leite vegetal. Aquece a alma.", tempo: "25 min", tags: ["saudavel", "vegetariano"] },
    { titulo: "Omelete de forno com vegetais", descricao: "Ovos, espinafre, tomate, queijo e ervas. Assado no forno. Perfeito para jantar leve.", tempo: "25 min", tags: ["saudavel", "vegetariano"] },
    { titulo: "Sanduíche natural de atum", descricao: "Pão integral, atum, iogurte natural, alface, tomate e milho. Leve e rápido.", tempo: "10 min", tags: ["rapido", "saudavel"] },
    { titulo: "Frango desfiado com purê de batata", descricao: "Frango cozido e desfiado temperado, acompanhado de purê caseiro cremoso.", tempo: "40 min", tags: [] },
    { titulo: "Salada de quinoa com vegetais", descricao: "Quinoa cozida, pepino, tomate, abacate, grão-de-bico e molho de limão e azeite.", tempo: "20 min", tags: ["saudavel", "vegetariano"] },
    { titulo: "Pizza caseira de frigideira", descricao: "Massa rápida na frigideira, molho de tomate, queijo e os recheios que tiver na geladeira.", tempo: "20 min", tags: ["rapido", "vegetariano"] },
    { titulo: "Peixe grelhado com legumes no vapor", descricao: "Filé de peixe grelhado com brócolis, cenoura e abobrinha no vapor. Jantar leve e nutritivo.", tempo: "25 min", tags: ["saudavel"] },
    { titulo: "Caldo verde light", descricao: "Batata, couve, linguiça em pouca quantidade e temperos. Versão mais leve do clássico.", tempo: "30 min", tags: [] }
  ],
  lanche: [
    { titulo: "Mix de castanhas e frutas secas", descricao: "Amêndoas, castanha-de-caju, nozes e uvas-passas. Porção controlada de energia.", tempo: "1 min", tags: ["rapido", "saudavel", "vegetariano"] },
    { titulo: "Banana com pasta de amendoim", descricao: "Banana cortada ao meio com pasta de amendoim natural. Clássico e satisfatório.", tempo: "2 min", tags: ["rapido", "saudavel", "vegetariano"] },
    { titulo: "Iogurte com chia e mel", descricao: "Iogurte natural, sementes de chia hidratadas e um fio de mel. Fibras e proteínas.", tempo: "3 min", tags: ["rapido", "saudavel", "vegetariano"] },
    { titulo: "Torrada com cottage e tomate", descricao: "Pão integral torrado, queijo cottage, tomate e orégano. Leve e proteico.", tempo: "5 min", tags: ["rapido", "saudavel", "vegetariano"] },
    { titulo: "Smoothie de frutas vermelhas", descricao: "Morango, framboesa, banana e leite (ou vegetal). Refrescante e nutritivo.", tempo: "5 min", tags: ["rapido", "saudavel", "vegetariano"] },
    { titulo: "Cenoura e pepino com hummus", descricao: "Palitos de cenoura e pepino com pasta de grão-de-bico (hummus). Crocante e saudável.", tempo: "5 min", tags: ["rapido", "saudavel", "vegetariano"] },
    { titulo: "Ovo cozido com tempero", descricao: "Ovo cozido temperado com sal, pimenta e um fio de azeite. Simples e cheio de proteína.", tempo: "10 min", tags: ["rapido", "saudavel"] },
    { titulo: "Barrinha caseira de aveia", descricao: "Aveia, banana, pasta de amendoim e chocolate 70%. Faça várias e guarde na geladeira.", tempo: "15 min", tags: ["saudavel", "vegetariano"] }
  ]
};

let tipoAtual = "cafe";
let filtroAtual = "todos";

function selecionarTipo(btn) {
  document.querySelectorAll(".tipo-btn").forEach(b => b.classList.remove("ativo"));
  btn.classList.add("ativo");
  tipoAtual = btn.dataset.tipo;
}

function toggleFiltro(chip) {
  document.querySelectorAll(".chip").forEach(c => c.classList.remove("ativo"));
  chip.classList.add("ativo");
  filtroAtual = chip.dataset.filtro;
}

function gerarIdeia() {
  let lista = refeicoes[tipoAtual];

  if (filtroAtual !== "todos") {
    lista = lista.filter(item => item.tags.includes(filtroAtual));
  }

  if (lista.length === 0) {
    lista = refeicoes[tipoAtual];
  }

  const ideia = lista[Math.floor(Math.random() * lista.length)];

  const nomesCategoria = {
    cafe: "Café da manhã",
    almoco: "Almoço",
    jantar: "Jantar",
    lanche: "Lanche"
  };

  document.getElementById("categoria").textContent = nomesCategoria[tipoAtual];
  document.getElementById("titulo").textContent = ideia.titulo;
  document.getElementById("descricao").textContent = ideia.descricao;
  document.getElementById("tempo").innerHTML = `⏱️ Preparo aproximado: ${ideia.tempo}`;

  const resultado = document.getElementById("resultado");
  resultado.classList.remove("visivel");
  void resultado.offsetWidth;
  resultado.classList.add("visivel");
}

function copiarIdeia() {
  const titulo = document.getElementById("titulo").textContent;
  const descricao = document.getElementById("descricao").textContent;
  const tempo = document.getElementById("tempo").textContent;

  const texto = 
