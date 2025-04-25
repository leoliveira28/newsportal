export const mockCategories = [
  {
    id: "cat1",
    name: "Notícias",
    slug: "noticias",
  },
  {
    id: "cat2",
    name: "Esportes",
    slug: "esportes",
  },
  {
    id: "cat3",
    name: "Entretenimento",
    slug: "entretenimento",
  },
  {
    id: "cat4",
    name: "Tecnologia",
    slug: "tecnologia",
  },
  {
    id: "cat5",
    name: "Economia",
    slug: "economia",
  },
  {
    id: "cat6",
    name: "Política",
    slug: "politica",
  },
  {
    id: "cat7",
    name: "Saúde",
    slug: "saude",
  },
]

// Imagens de autores do RandomUser.me
const authorImages = [
  "https://randomuser.me/api/portraits/women/44.jpg", // Ana Silva
  "https://randomuser.me/api/portraits/men/32.jpg",   // Carlos Oliveira
  "https://randomuser.me/api/portraits/women/65.jpg", // Mariana Costa
  "https://randomuser.me/api/portraits/men/41.jpg",   // Paulo Mendes
  "https://randomuser.me/api/portraits/women/12.jpg", // Juliana Santos
]

export const mockAuthors = [
  {
    id: "author1",
    name: "Ana Silva",
    bio: "Jornalista especializada em política e economia, com mais de 10 anos de experiência.",
    imageUrl: authorImages[0],
  },
  {
    id: "author2",
    name: "Carlos Oliveira",
    bio: "Editor-chefe e especialista em tecnologia e inovação.",
    imageUrl: authorImages[1],
  },
  {
    id: "author3",
    name: "Mariana Costa",
    bio: "Repórter de campo com foco em esportes e eventos culturais.",
    imageUrl: authorImages[2],
  },
  {
    id: "author4",
    name: "Paulo Mendes",
    bio: "Colunista de entretenimento e crítico cultural.",
    imageUrl: authorImages[3],
  },
  {
    id: "author5",
    name: "Juliana Santos",
    bio: "Especialista em saúde e bem-estar, formada em medicina.",
    imageUrl: authorImages[4],
  },
]

// Função utilitária para gerar imagens do Unsplash baseadas no tema
function unsplashUrl(query: string) {
  // Substituir vírgulas por espaços para compatibilidade com Unsplash Source
  const formattedQuery = query.replace(/,/g, '');
  return `https://source.unsplash.com/800x600/?${encodeURIComponent(formattedQuery)}`;
}

export const mockArticles = [
  {
    id: "art1",
    title: "Governo anuncia novo pacote de medidas econômicas",
    slug: "governo-anuncia-novo-pacote-de-medidas-economicas",
    summary:
      "Ministro da Fazenda apresentou hoje um conjunto de ações para estimular o crescimento econômico e controlar a inflação nos próximos meses.",
    content: `
      <p>O Ministro da Fazenda anunciou nesta quinta-feira um amplo pacote de medidas econômicas que visa impulsionar o crescimento do país e controlar a inflação que tem preocupado especialistas nos últimos meses.</p>
      
      <p>Durante coletiva de imprensa realizada no Palácio do Planalto, o ministro detalhou as principais ações que serão implementadas já a partir do próximo mês:</p>
      
      <ul>
        <li>Redução temporária de impostos para setores estratégicos da economia</li>
        <li>Linha de crédito especial para pequenas e médias empresas</li>
        <li>Programa de incentivo à contratação de jovens profissionais</li>
        <li>Investimentos em infraestrutura com foco em logística e energia renovável</li>
      </ul>
      
      <p>"Estas medidas foram cuidadosamente elaboradas para enfrentar os desafios atuais da nossa economia, sem comprometer a responsabilidade fiscal que é marca deste governo", afirmou o ministro.</p>
      
      <p>Economistas ouvidos pela reportagem avaliam positivamente o pacote, mas alertam que os resultados podem demorar a aparecer. "São medidas necessárias, mas precisamos ter paciência para ver os efeitos concretos na economia real", comentou a economista-chefe de um dos principais bancos do país.</p>
      
      <p>O presidente da Federação das Indústrias também se manifestou favorável às medidas: "O setor produtivo estava aguardando por estes incentivos. Acreditamos que poderemos retomar os investimentos e ampliar a geração de empregos nos próximos meses".</p>
      
      <p>A expectativa do governo é que o pacote de medidas possa elevar a projeção de crescimento do PIB para este ano, atualmente estimada em 2,5% pelo mercado.</p>
    `,
    imageUrl: unsplashUrl("economia, business, dinheiro, economia brasileira"),
    createdAt: new Date("2024-04-15T10:30:00"),
    updatedAt: new Date("2024-04-15T14:45:00"),
    publishedAt: new Date("2024-04-15T15:00:00"),
    authorId: "author1",
    categoryId: "cat5",
  },
  {
    id: "art2",
    title: "Seleção brasileira se prepara para Copa América",
    slug: "selecao-brasileira-se-prepara-para-copa-america",
    summary:
      "Técnico convoca 26 jogadores para os treinos preparatórios que acontecerão no próximo mês visando o principal torneio continental.",
    content: `
      <p>A Confederação Brasileira de Futebol (CBF) divulgou nesta terça-feira a lista oficial com os 26 jogadores convocados para defender a Seleção Brasileira na próxima Copa América.</p>
      
      <p>A convocação, realizada pelo técnico da seleção, surpreendeu com a inclusão de três jovens talentos que atuam no futebol europeu e que nunca haviam vestido a camisa da seleção principal.</p>
      
      <p>"Estamos formando um grupo que mistura experiência e juventude. Acredito que esta é a combinação ideal para enfrentar um torneio tão competitivo como a Copa América", explicou o treinador durante a coletiva de imprensa.</p>
      
      <p>Os jogadores se apresentarão no Centro de Treinamento da CBF no dia 3 do próximo mês, onde iniciarão a preparação com uma série de amistosos contra seleções sul-americanas e europeias.</p>
      
      <p>A preparação física será um dos focos principais da comissão técnica. "Muitos jogadores estão chegando após uma temporada desgastante na Europa. Precisamos recuperá-los fisicamente e implementar nossa filosofia de jogo", comentou o preparador físico da seleção.</p>
      
      <p>A Copa América será realizada entre junho e julho, com o Brasil estreando contra a Venezuela. A seleção brasileira busca seu décimo título na competição, após ter conquistado a última edição realizada em solo brasileiro.</p>
      
      <p>Confira a lista completa dos convocados:</p>
      
      <p><strong>Goleiros:</strong> Alisson (Liverpool), Ederson (Manchester City) e Weverton (Palmeiras).</p>
      
      <p><strong>Defensores:</strong> Danilo (Juventus), Yan Couto (Girona), Éder Militão (Real Madrid), Marquinhos (PSG), Gabriel Magalhães (Arsenal), Beraldo (PSG), Guilherme Arana (Atlético-MG) e Wendell (Porto).</p>
      
      <p><strong>Meio-campistas:</strong> André (Fluminense), Bruno Guimarães (Newcastle), Casemiro (Manchester United), Douglas Luiz (Aston Villa), João Gomes (Wolverhampton), Lucas Paquetá (West Ham) e Raphinha (Barcelona).</p>
      
      <p><strong>Atacantes:</strong> Endrick (Palmeiras), Evanilson (Porto), Gabriel Martinelli (Arsenal), Rodrygo (Real Madrid), Savinho (Girona), Vinicius Junior (Real Madrid) e Pedro (Flamengo).</p>
    `,
    imageUrl: unsplashUrl("futebol, soccer, esportes, copa américa, seleção brasileira"),
    createdAt: new Date("2024-04-14T09:15:00"),
    updatedAt: new Date("2024-04-14T11:20:00"),
    publishedAt: new Date("2024-04-14T12:00:00"),
    authorId: "author3",
    categoryId: "cat2",
  },
  {
    id: "art3",
    title: "Nova série bate recorde de audiência em plataforma de streaming",
    slug: "nova-serie-bate-recorde-de-audiencia-em-plataforma-de-streaming",
    summary:
      "Produção nacional alcançou mais de 10 milhões de visualizações em apenas uma semana após o lançamento, superando títulos internacionais.",
    content: `
      <p>A mais recente produção nacional lançada por uma das principais plataformas de streaming do mundo alcançou a impressionante marca de 10 milhões de visualizações em apenas sete dias, estabelecendo um novo recorde para conteúdos brasileiros.</p>
      
      <p>A série, que aborda temas contemporâneos da sociedade brasileira através de uma narrativa de suspense, conquistou não apenas o público nacional, mas também espectadores de diversos países, figurando no top 10 global da plataforma.</p>
      
      <p>"Estamos extremamente satisfeitos com a recepção do público. Isso demonstra que histórias genuinamente brasileiras podem ter apelo universal quando são bem contadas", declarou o diretor da produção em entrevista exclusiva.</p>
      
      <p>O elenco, composto majoritariamente por atores consagrados da televisão brasileira, também celebrou o sucesso nas redes sociais. "É gratificante ver nosso trabalho alcançando tantas pessoas ao redor do mundo. Isso abre portas para mais produções nacionais", comentou a protagonista da série.</p>
      
      <p>Críticos especializados têm destacado a qualidade técnica e narrativa da produção:</p>
      
      <blockquote>
        <p>"A série consegue equilibrar perfeitamente elementos de drama social com uma trama envolvente de suspense, tudo isso com uma fotografia impecável que valoriza cenários tipicamente brasileiros." - Revista Cinema</p>
      </blockquote>
      
      <p>A plataforma de streaming já confirmou a renovação para uma segunda temporada, que começará a ser produzida nos próximos meses. Além disso, anunciou investimentos em novos projetos brasileiros para os próximos anos.</p>
      
      <p>Este sucesso reforça a tendência de crescimento do mercado audiovisual brasileiro no cenário internacional, com produções nacionais cada vez mais conquistando espaço nas principais plataformas globais de entretenimento.</p>
    `,
    imageUrl: unsplashUrl("cinema, streaming, série, tv, entretenimento"),
    createdAt: new Date("2024-04-13T16:45:00"),
    updatedAt: new Date("2024-04-13T18:30:00"),
    publishedAt: new Date("2024-04-13T19:00:00"),
    authorId: "author4",
    categoryId: "cat3",
  },
  {
    id: "art4",
    title: "Empresa brasileira de tecnologia recebe investimento bilionário",
    slug: "empresa-brasileira-de-tecnologia-recebe-investimento-bilionario",
    summary:
      "Startup de inteligência artificial fundada em São Paulo atraiu a atenção de investidores internacionais e se torna o mais novo unicórnio do país.",
    content: `
      <p>Uma startup brasileira especializada em soluções de inteligência artificial para o setor financeiro acaba de receber um aporte de US$ 1,2 bilhão, tornando-se o mais novo "unicórnio" do país - termo usado para designar empresas de tecnologia avaliadas em mais de US$ 1 bilhão.</p>
      
      <p>Fundada há apenas cinco anos por três jovens engenheiros formados pelo ITA (Instituto Tecnológico de Aeronáutica), a empresa desenvolveu um sistema inovador que utiliza algoritmos avançados de IA para análise de risco e prevenção de fraudes em transações financeiras.</p>
      
      <p>O investimento foi liderado por um dos maiores fundos de venture capital do Vale do Silício, com participação de investidores da Ásia e Europa. "Identificamos na tecnologia desenvolvida pela empresa um potencial disruptivo para o mercado financeiro global", afirmou o diretor do fundo americano.</p>
      
      <p>Com o novo aporte, a empresa planeja:</p>
      
      <ul>
        <li>Expandir suas operações para América do Norte, Europa e Ásia</li>
        <li>Dobrar seu quadro de funcionários, atualmente com 300 colaboradores</li>
        <li>Investir em pesquisa e desenvolvimento de novas soluções</li>
        <li>Adquirir startups menores com tecnologias complementares</li>
      </ul>
      
      <p>"Este investimento representa não apenas o reconhecimento do nosso trabalho, mas também o potencial da tecnologia brasileira no cenário global", declarou o CEO e cofundador da empresa durante evento realizado para anunciar a captação.</p>
      
      <p>O ministro da Ciência e Tecnologia parabenizou a conquista: "É um orgulho ver uma empresa nacional alcançando este patamar. Isso demonstra a capacidade de inovação dos nossos talentos e reforça a importância de políticas públicas de incentivo ao empreendedorismo tecnológico".</p>
      
      <p>A startup, que já possui clientes em 15 países, projeta faturamento de R$ 500 milhões para este ano, um crescimento de 200% em relação ao ano anterior.</p>
    `,
    imageUrl: unsplashUrl("tecnologia, startup, inovação, inteligência artificial"),
    createdAt: new Date("2024-04-12T08:20:00"),
    updatedAt: new Date("2024-04-12T10:15:00"),
    publishedAt: new Date("2024-04-12T11:00:00"),
    authorId: "author2",
    categoryId: "cat4",
  },
  {
    id: "art5",
    title: "Ministério da Saúde lança campanha de vacinação contra gripe",
    slug: "ministerio-da-saude-lanca-campanha-de-vacinacao-contra-gripe",
    summary:
      "Iniciativa visa imunizar mais de 80 milhões de brasileiros antes do inverno, com foco em grupos de risco como idosos e crianças.",
    content: `
      <p>O Ministério da Saúde lançou hoje a Campanha Nacional de Vacinação contra a Gripe, com o objetivo de imunizar mais de 80 milhões de brasileiros antes do início do inverno, período em que as doenças respiratórias tendem a se agravar no país.</p>
      
      <p>A campanha deste ano traz algumas novidades importantes em relação às edições anteriores. A principal delas é a ampliação dos grupos prioritários, que agora incluem:</p>
      
      <ul>
        <li>Crianças de 6 meses a 6 anos</li>
        <li>Gestantes e puérperas</li>
        <li>Idosos acima de 60 anos</li>
        <li>Profissionais de saúde e de educação</li>
        <li>Pessoas com doenças crônicas ou imunossuprimidas</li>
        <li>População indígena e quilombola</li>
        <li>Pessoas em situação de rua</li>
      </ul>
      
      <p>A vacina disponibilizada este ano protege contra três cepas do vírus influenza que, segundo estudos epidemiológicos, serão as mais circulantes na temporada 2024/2024.</p>
      
      <p>"A vacinação é a forma mais eficaz de prevenção contra a gripe e suas complicações. Queremos evitar um aumento de internações por síndromes respiratórias graves, especialmente entre os grupos mais vulneráveis", destacou o Ministro da Saúde durante o evento de lançamento da campanha.</p>
      
      <p>Para facilitar o acesso da população, as unidades básicas de saúde de todo o país terão horário estendido durante o período da campanha, que vai até o final de maio. Além disso, serão montados postos de vacinação em locais de grande circulação, como shoppings, terminais de transporte público e parques.</p>
      
      <p>A pasta também anunciou uma ampla campanha de comunicação nas mídias tradicionais e redes sociais para conscientizar a população sobre a importância da imunização.</p>
      
      <p>No ano passado, a cobertura vacinal contra a gripe ficou abaixo da meta de 90% estabelecida pelo Ministério da Saúde, alcançando apenas 73% do público-alvo. A expectativa para este ano é superar a meta, especialmente entre crianças e gestantes, grupos que tiveram as menores taxas de adesão na campanha anterior.</p>
    `,
    imageUrl: unsplashUrl("vacina, saúde, vacinação, medicina, hospital"),
    createdAt: new Date("2024-04-11T14:10:00"),
    updatedAt: new Date("2024-04-11T16:30:00"),
    publishedAt: new Date("2024-04-11T17:00:00"),
    authorId: "author5",
    categoryId: "cat7",
  },
  {
    id: "art6",
    title: "Eleições municipais: prazo para registro de candidaturas termina hoje",
    slug: "eleicoes-municipais-prazo-para-registro-de-candidaturas-termina-hoje",
    summary:
      "Partidos políticos têm até o final do dia para apresentar à Justiça Eleitoral os nomes que concorrerão às prefeituras e câmaras municipais.",
    content: `
      <p>Termina hoje, às 23h59, o prazo para que partidos políticos e federações partidárias registrem suas candidaturas para as eleições municipais deste ano. Até o momento, o Tribunal Superior Eleitoral (TSE) já recebeu mais de 350 mil pedidos de registro em todo o país.</p>
      
      <p>De acordo com o calendário eleitoral, após esta data, somente serão aceitas substituições de candidatos em casos específicos previstos na legislação, como falecimento, indeferimento de candidatura ou renúncia.</p>
      
      <p>O presidente do TSE fez um balanço preliminar durante coletiva realizada nesta manhã: "O sistema eletrônico de registro de candidaturas está funcionando normalmente, com capacidade para processar todos os pedidos que devem ser enviados até o final do dia. As equipes técnicas estão de plantão para garantir que não haja problemas".</p>
      
      <p>Nas capitais, a disputa pelas prefeituras promete ser acirrada. Em São Paulo, maior colégio eleitoral do país, já foram registradas 11 candidaturas. No Rio de Janeiro, são 9 candidatos confirmados até o momento.</p>
      
      <p>Para estas eleições, algumas novidades foram implementadas pela Justiça Eleitoral:</p>
      
      <ul>
        <li>Aumento da cota de recursos para candidaturas de pessoas negras</li>
        <li>Novas regras para distribuição do fundo eleitoral</li>
        <li>Maior rigor na análise da prestação de contas</li>
        <li>Combate à desinformação e uso de inteligência artificial nas campanhas</li>
      </ul>
      
      <p>Os partidos também devem cumprir as cotas de gênero, destinando no mínimo 30% das candidaturas para cada sexo. "O não cumprimento das cotas pode levar à impugnação de toda a chapa", alertou o ministro do TSE.</p>
      
      <p>Após o encerramento do prazo, a Justiça Eleitoral terá até o dia 15 de agosto para julgar todos os pedidos de registro, verificando se os candidatos atendem aos requisitos legais e não estão enquadrados em nenhuma causa de inelegibilidade.</p>
      
      <p>A campanha eleitoral oficial começa no dia 16 de agosto, com o primeiro turno das eleições marcado para 6 de outubro. Em municípios com mais de 200 mil eleitores, poderá haver segundo turno no dia 27 de outubro, caso nenhum candidato a prefeito alcance a maioria absoluta dos votos válidos.</p>
    `,
    imageUrl: "/placeholder.svg?height=600&width=800",
    createdAt: new Date("2024-04-10T11:25:00"),
    updatedAt: new Date("2024-04-10T13:40:00"),
    publishedAt: new Date("2024-04-10T14:00:00"),
    authorId: "author1",
    categoryId: "cat6",
  },
  {
    id: "art7",
    title: "Bolsa de valores atinge novo recorde histórico",
    slug: "bolsa-de-valores-atinge-novo-recorde-historico",
    summary:
      "Índice Bovespa ultrapassou os 130 mil pontos pela primeira vez, impulsionado por resultados positivos de empresas do setor financeiro e de commodities.",
    content: `
      <p>O Ibovespa, principal índice da bolsa de valores brasileira, fechou o pregão de hoje com alta de 1,8%, atingindo 131.546 pontos, novo recorde histórico de pontuação. Este é o quinto dia consecutivo de alta, em uma sequência que já acumula valorização de 4,7%.</p>
      
      <p>O desempenho positivo foi impulsionado principalmente por ações de bancos e empresas do setor de commodities, que divulgaram resultados trimestrais acima das expectativas do mercado nos últimos dias.</p>
      
      <p>"Estamos vendo uma combinação de fatores positivos: bons resultados corporativos, inflação controlada e perspectiva de queda na taxa de juros. Isso tem atraído tanto investidores locais quanto estrangeiros para a bolsa brasileira", explicou o economista-chefe de uma das principais corretoras do país.</p>
      
      <p>Entre as ações que mais contribuíram para a alta do índice hoje estão:</p>
      
      <ul>
        <li>Petrobras (PETR4): alta de 2,7%</li>
        <li>Vale (VALE3): alta de 2,3%</li>
        <li>Itaú Unibanco (ITUB4): alta de 3,1%</li>
        <li>Bradesco (BBDC4): alta de 2,9%</li>
      </ul>
      
      <p>O volume financeiro negociado na sessão foi de R$ 28,7 bilhões, acima da média diária do ano, que está em R$ 24,5 bilhões, indicando forte interesse dos investidores.</p>
      
      <p>O fluxo de capital estrangeiro também tem sido positivo. Somente neste mês, o saldo de investimentos externos na B3 já soma R$ 7,2 bilhões.</p>
      
      <p>No cenário macroeconômico, a expectativa de início do ciclo de corte na taxa Selic nas próximas reuniões do Comitê de Política Monetária (Copom) tem animado os investidores. Analistas projetam que a taxa básica de juros, atualmente em 10,75% ao ano, pode chegar a 9% até o final de 2024.</p>
      
      <p>"Com a inflação convergindo para a meta e sinais mais claros de desaceleração da economia, o Banco Central tem espaço para iniciar um ciclo de afrouxamento monetário, o que tende a beneficiar o mercado de ações", comentou um gestor de fundos de investimento.</p>
      
      <p>Para os próximos dias, analistas mantêm perspectiva positiva, mas alertam para possível realização de lucros após a sequência de altas. "É natural que ocorra alguma correção após um rali tão forte, mas a tendência de médio prazo permanece positiva", concluiu o especialista.</p>
    `,
    imageUrl: "/placeholder.svg?height=600&width=800",
    createdAt: new Date("2024-04-09T15:50:00"),
    updatedAt: new Date("2024-04-09T17:20:00"),
    publishedAt: new Date("2024-04-09T18:00:00"),
    authorId: "author1",
    categoryId: "cat5",
  },
  {
    id: "art8",
    title: "Cientistas brasileiros desenvolvem novo tratamento para doença rara",
    slug: "cientistas-brasileiros-desenvolvem-novo-tratamento-para-doenca-rara",
    summary:
      "Pesquisadores da USP criaram terapia inovadora que promete melhorar qualidade de vida de pacientes com condição genética que afeta o sistema nervoso.",
    content: `
      <p>Uma equipe de pesquisadores da Universidade de São Paulo (USP) anunciou hoje o desenvolvimento de um tratamento inovador para uma doença genética rara que afeta o sistema nervoso central e que, até o momento, não possuía terapia específica.</p>
      
      <p>A pesquisa, que durou mais de oito anos e envolveu colaboração com centros de pesquisa internacionais, resultou em uma terapia gênica que demonstrou resultados promissores nos testes pré-clínicos.</p>
      
      <p>"Conseguimos desenvolver um vetor viral que entrega uma versão funcional do gene defeituoso diretamente nas células nervosas afetadas, corrigindo a disfunção metabólica que causa a doença", explicou a coordenadora do estudo, professora do Instituto de Ciências Biomédicas da USP.</p>
      
      <p>A doença em questão afeta aproximadamente uma em cada 50 mil pessoas no Brasil e se manifesta geralmente na primeira infância, causando progressiva degeneração neurológica, com sintomas como:</p>
      
      <ul>
        <li>Atraso no desenvolvimento motor e cognitivo</li>
        <li>Perda gradual de habilidades já adquiridas</li>
        <li>Problemas de coordenação e equilíbrio</li>
        <li>Convulsões</li>
        <li>Comprometimento visual e auditivo</li>
      </ul>
      
      <p>Atualmente, os tratamentos disponíveis são apenas paliativos e visam controlar os sintomas, sem atuar na causa da doença.</p>
      
      <p>Os testes em modelos animais mostraram que a terapia foi capaz de reverter parcialmente os danos neurológicos e estabilizar a progressão da doença. "Os animais tratados apresentaram melhora significativa na função motora e cognitiva, além de aumento na expectativa de vida", destacou um dos pesquisadores.</p>
      
      <p>A Agência Nacional de Vigilância Sanitária (Anvisa) já concedeu status de "terapia inovadora" ao tratamento, o que deve acelerar o processo de aprovação para testes clínicos em humanos.</p>
      
      <p>"Esperamos iniciar os testes clínicos de fase 1 no próximo ano, com um pequeno grupo de pacientes. Se tudo correr bem, a terapia poderá estar disponível para uso amplo em cerca de cinco anos", projetou a pesquisadora.</p>
      
      <p>O desenvolvimento da terapia contou com financiamento da FAPESP (Fundação de Amparo à Pesquisa do Estado de São Paulo) e de uma farmacêutica nacional, que já manifestou interesse em produzir o tratamento em escala comercial caso os resultados dos testes clínicos confirmem a eficácia e segurança observadas na fase pré-clínica.
      
      <p>Além do impacto direto na vida dos pacientes, a pesquisa representa um marco importante para a ciência brasileira. "Este desenvolvimento demonstra a capacidade de inovação dos nossos cientistas e a importância de investimentos contínuos em pesquisa básica e aplicada no país", afirmou o reitor da USP.</p>
      
      <p>Associações de pacientes comemoraram o anúncio e destacaram a esperança que a nova terapia traz para famílias que convivem com a doença. "Estamos acompanhando de perto o desenvolvimento desta pesquisa e torcendo para que em breve tenhamos uma opção de tratamento efetivo", declarou a presidente de uma das associações.</p>
    `,
    imageUrl: "/placeholder.svg?height=600&width=800",
    createdAt: new Date("2024-04-08T09:30:00"),
    updatedAt: new Date("2024-04-08T11:45:00"),
    publishedAt: new Date("2024-04-08T12:00:00"),
    authorId: "author5",
    categoryId: "cat7",
  },
  {
    id: "art9",
    title: "Festival de Cinema de São Paulo anuncia filmes selecionados",
    slug: "festival-de-cinema-de-sao-paulo-anuncia-filmes-selecionados",
    summary:
      "Evento que acontecerá no próximo mês contará com mais de 300 produções nacionais e internacionais, incluindo estreias mundiais.",
    content: `
      <p>A organização do Festival Internacional de Cinema de São Paulo anunciou hoje a seleção oficial de filmes para sua 47ª edição, que acontecerá entre os dias 18 e 30 do próximo mês. Ao todo, serão exibidas 320 produções de 65 países, incluindo longas, curtas-metragens e documentários.</p>
      
      <p>Entre os destaques da programação estão 15 estreias mundiais, sendo 8 produções brasileiras, além de filmes premiados em festivais como Cannes, Veneza e Berlim.</p>
      
      <p>"Conseguimos montar uma programação diversa e representativa do melhor do cinema contemporâneo mundial, com especial atenção à produção latino-americana", afirmou o diretor artístico do festival durante a coletiva de imprensa realizada no Museu da Imagem e do Som.</p>
      
      <p>A abertura do evento contará com a exibição de um longa-metragem brasileiro que recentemente conquistou o prêmio de melhor direção no Festival de Cannes. O filme, que aborda tensões sociais em uma comunidade do Rio de Janeiro, terá sua primeira exibição em solo nacional durante o festival.</p>
      
      <p>Além das exibições regulares, o evento contará com:</p>
      
      <ul>
        <li>Mostras retrospectivas dedicadas a dois importantes cineastas: um brasileiro e um italiano</li>
        <li>Debates e masterclasses com diretores e atores convidados</li>
        <li>Rodadas de negócios para produtores e distribuidores</li>
        <li>Laboratório de desenvolvimento de projetos para novos cineastas</li>
        <li>Mostra competitiva com premiação em dinheiro para as melhores produções</li>
      </ul>
      
      <p>As sessões acontecerão em 15 salas espalhadas pela cidade, incluindo espaços tradicionais como a Cinemateca Brasileira e o Cine Belas Artes, além de exibições gratuitas em centros culturais de regiões periféricas.</p>
      
      <p>"Queremos democratizar o acesso ao cinema de qualidade e levar o festival para além do circuito tradicional", destacou a secretária municipal de cultura, que participou do anúncio.</p>
      
      <p>Os ingressos começarão a ser vendidos na próxima semana através do site oficial do evento e nas bilheterias dos cinemas participantes. Haverá também uma cota de ingressos gratuitos para estudantes e professores da rede pública.</p>
      
      <p>O festival, que é um dos mais tradicionais da América Latina, espera receber um público de aproximadamente 200 mil pessoas durante os 13 dias de programação.</p>
    `,
    imageUrl: "/placeholder.svg?height=600&width=800",
    createdAt: new Date("2024-04-07T13:15:00"),
    updatedAt: new Date("2024-04-07T15:30:00"),
    publishedAt: new Date("2024-04-07T16:00:00"),
    authorId: "author4",
    categoryId: "cat3",
  },
  {
    id: "art10",
    title: "Time brasileiro conquista título internacional de e-sports",
    slug: "time-brasileiro-conquista-titulo-internacional-de-e-sports",
    summary:
      "Equipe formada por jovens jogadores venceu competição mundial de League of Legends, levando para casa prêmio de US$ 1 milhão.",
    content: `
      <p>A equipe brasileira de e-sports "Brazilian Titans" conquistou ontem o título mundial de League of Legends, um dos jogos eletrônicos mais populares do planeta, ao derrotar na final uma equipe sul-coreana por 3 a 1.</p>
      
      <p>A competição, realizada em Seul, na Coreia do Sul, reuniu as 16 melhores equipes do mundo e distribuiu uma premiação total de US$ 3 milhões. Como campeã, a equipe brasileira levou para casa US$ 1 milhão, além do troféu e do reconhecimento internacional.</p>
      
      <p>"É um sonho realizado não só para nós, mas para todo o cenário brasileiro de e-sports. Mostramos que temos talento e capacidade para competir no mais alto nível", declarou o capitão da equipe, um jovem de 22 anos de São Paulo, logo após a vitória.</p>
      
      <p>A final foi acompanhada por mais de 5 milhões de espectadores online através das plataformas de streaming, além de 15 mil pessoas que lotaram a arena em Seul. No Brasil, diversos eventos de "watch party" foram organizados em bares, cinemas e casas de eventos para que os fãs pudessem assistir juntos à decisão.</p>
      
      <p>O caminho até o título não foi fácil. A equipe brasileira precisou superar:</p>
      
      <ul>
        <li>Fase de grupos com adversários da China, Europa e América do Norte</li>
        <li>Quartas de final contra os atuais campeões chineses</li>
        <li>Semifinal contra uma tradicional equipe europeia</li>
        <li>Final contra os favoritos sul-coreanos, que jogavam em casa</li>
      </ul>
      
      <p>O desempenho do jogador brasileiro que atua na posição de "mid laner" foi especialmente destacado pelos comentaristas internacionais. Ele foi eleito o MVP (jogador mais valioso) da competição, com estatísticas impressionantes ao longo de todo o torneio.</p>
      
      <p>"O que vimos foi uma demonstração de talento individual aliado a um trabalho coletivo excepcional. A equipe brasileira trouxe estratégias inovadoras que surpreenderam até mesmo os analistas mais experientes", comentou um especialista em e-sports de um canal internacional.</p>
      
      <p>O sucesso da equipe brasileira deve impulsionar ainda mais o mercado de e-sports no país, que já movimenta cerca de R$ 500 milhões anualmente e conta com mais de 90 milhões de entusiastas, segundo dados da Associação Brasileira de Games.</p>
      
      <p>A equipe será recebida com festa no aeroporto de Guarulhos na próxima quinta-feira, e já tem agendada uma série de eventos com fãs e patrocinadores para celebrar a conquista histórica.</p>
    `,
    imageUrl: "/placeholder.svg?height=600&width=800",
    createdAt: new Date("2024-04-06T10:45:00"),
    updatedAt: new Date("2024-04-06T12:50:00"),
    publishedAt: new Date("2024-04-06T13:00:00"),
    authorId: "author3",
    categoryId: "cat2",
  },
  {
    id: "art11",
    title: "Nova tecnologia promete revolucionar carregamento de veículos elétricos",
    slug: "nova-tecnologia-promete-revolucionar-carregamento-de-veiculos-eletricos",
    summary:
      "Startup desenvolveu sistema que reduz tempo de recarga de baterias para menos de 10 minutos, solucionando um dos principais obstáculos para adoção em massa.",
    content: `
      <p>Uma startup de tecnologia sediada em Campinas (SP) apresentou hoje um sistema inovador de carregamento ultrarrápido para veículos elétricos, capaz de recarregar completamente as baterias em menos de 10 minutos, sem comprometer sua vida útil.</p>
      
      <p>A tecnologia, desenvolvida por pesquisadores brasileiros em parceria com uma universidade americana, utiliza um novo tipo de interface entre o carregador e a bateria, combinada com um algoritmo avançado que otimiza o fluxo de energia de acordo com as condições da bateria.</p>
      
      <p>"O tempo de recarga é um dos principais obstáculos para a adoção em massa de veículos elétricos. Nossa tecnologia resolve esse problema sem comprometer a durabilidade das baterias, que é outra preocupação importante dos consumidores", explicou o CEO da startup durante a demonstração realizada para investidores e jornalistas.</p>
      
      <p>Nos testes realizados, um veículo elétrico com autonomia de 400 km teve sua bateria recarregada de 10% para 80% em apenas 8 minutos, utilizando o novo sistema. Com os carregadores convencionais, o mesmo processo levaria entre 30 minutos (em carregadores rápidos) e várias horas (em carregadores residenciais).</p>
      
      <p>A inovação consiste em três elementos principais:</p>
      
      <ul>
        <li>Um novo tipo de conector que permite maior fluxo de energia com segurança</li>
        <li>Um sistema de refrigeração avançado que evita o superaquecimento da bateria</li>
        <li>Um software que monitora em tempo real cada célula da bateria, ajustando a potência de carregamento</li>
      </ul>
      
      <p>"O diferencial da nossa tecnologia é que ela não apenas carrega mais rápido, mas também preserva a vida útil da bateria. Nos testes de longo prazo, as baterias mantiveram mais de 90% de sua capacidade mesmo após 1.000 ciclos de recarga", destacou a diretora de tecnologia da empresa.</p>
      
      <p>A startup já firmou parcerias com duas montadoras que atuam no Brasil para implementar a tecnologia em novos modelos que serão lançados nos próximos dois anos. Além disso, está desenvolvendo uma rede de estações de recarga ultrarrápida, com as primeiras unidades previstas para serem instaladas no eixo Rio-São Paulo ainda este ano.</p>
      
      <p>Especialistas do setor automotivo consideram a inovação um potencial divisor de águas para o mercado de veículos elétricos. "Se esta tecnologia se provar viável em escala comercial, ela pode acelerar significativamente a transição da frota global para a eletromobilidade", avaliou um consultor especializado em mobilidade sustentável.</p>
      
      <p>A empresa já captou R$ 75 milhões em rodadas de investimento e planeja abrir seu capital na bolsa de valores nos próximos anos para financiar a expansão internacional.</p>
    `,
    imageUrl: "/placeholder.svg?height=600&width=800",
    createdAt: new Date("2024-04-05T14:20:00"),
    updatedAt: new Date("2024-04-05T16:35:00"),
    publishedAt: new Date("2024-04-05T17:00:00"),
    authorId: "author2",
    categoryId: "cat4",
  },
  {
    id: "art12",
    title: "Congresso aprova reforma tributária após intenso debate",
    slug: "congresso-aprova-reforma-tributaria-apos-intenso-debate",
    summary:
      "Proposta que simplifica sistema de impostos no país passou com margem apertada e segue agora para sanção presidencial.",
    content: `
      <p>Após mais de 30 anos de discussões e diversas tentativas frustradas, o Congresso Nacional aprovou ontem, em votação histórica, a reforma tributária que promete simplificar o complexo sistema de impostos brasileiro.</p>
      
      <p>A proposta, que altera diversos artigos da Constituição Federal, foi aprovada com margem apertada: 308 votos favoráveis e 192 contrários na Câmara dos Deputados, seguida de aprovação por 49 a 27 no Senado Federal.</p>
      
      <p>Os principais pontos da reforma incluem:</p>
      
      <ul>
        <li>Criação do Imposto sobre Bens e Serviços (IBS), que substituirá cinco tributos atuais: IPI, PIS, Cofins, ICMS e ISS</li>
        <li>Implementação do Imposto Seletivo para produtos considerados prejudiciais à saúde ou ao meio ambiente</li>
        <li>Manutenção da desoneração da cesta básica e medicamentos essenciais</li>
        <li>Criação de um sistema de cashback para famílias de baixa renda</li>
        <li>Período de transição de sete anos para implementação completa do novo sistema</li>
      </ul>
      
      <p>"Esta é uma reforma histórica que vai destravar o crescimento econômico do Brasil, simplificando a vida das empresas e reduzindo o custo Brasil", declarou o presidente da Câmara dos Deputados após a votação.</p>
      
      <p>Já o ministro da Fazenda destacou que a reforma deve aumentar o PIB potencial do país em até 12% nos próximos 15 anos, segundo estudos realizados por economistas do governo e de instituições independentes.</p>
      
      <p>A aprovação, no entanto, não ocorreu sem resistências. Representantes de alguns setores da economia, como serviços e agronegócio, manifestaram preocupação com possível aumento da carga tributária. "Precisamos estar atentos à regulamentação da reforma para garantir que não haja aumento de impostos", alertou o presidente de uma confederação empresarial.</p>
      
      <p>O texto aprovado segue agora para sanção presidencial, e depois disso, terá início a fase de regulamentação, com a elaboração das leis complementares que definirão detalhes importantes como alíquotas e regimes especiais.</p>
      
      <p>Economistas ouvidos pela reportagem avaliam que, apesar de não ser perfeita, a reforma representa um avanço significativo. "O sistema atual é um dos mais complexos e ineficientes do mundo. Qualquer simplificação já traz ganhos importantes para a economia", comentou um professor de economia de uma universidade federal.</p>
      
      <p>A expectativa é que a implementação completa do novo sistema tributário ocorra até 2030, após o período de transição estabelecido na proposta.</p>
    `,
    imageUrl: "/placeholder.svg?height=600&width=800",
    createdAt: new Date("2024-04-04T12:10:00"),
    updatedAt: new Date("2024-04-04T14:25:00"),
    publishedAt: new Date("2024-04-04T15:00:00"),
    authorId: "author1",
    categoryId: "cat6",
  },
]

export const mockComments = [
  {
    id: "comment1",
    articleId: "art1",
    authorName: "Roberto Almeida",
    content: "Excelente matéria! Espero que essas medidas realmente ajudem a economia do país.",
    createdAt: new Date("2024-04-15T16:30:00"),
  },
  {
    id: "comment2",
    articleId: "art1",
    authorName: "Fernanda Souza",
    content:
      "Tenho dúvidas se essas medidas serão suficientes para conter a inflação. Precisamos de ações mais estruturais.",
    createdAt: new Date("2024-04-15T17:15:00"),
  },
  {
    id: "comment3",
    articleId: "art1",
    authorName: "Carlos Eduardo",
    content:
      "Como pequeno empresário, estou ansioso para ver como a linha de crédito especial vai funcionar na prática.",
    createdAt: new Date("2024-04-15T18:45:00"),
  },
  {
    id: "comment4",
    articleId: "art2",
    authorName: "Marcelo Santos",
    content: "Ótima convocação! Acho que temos chances reais de conquistar o título este ano.",
    createdAt: new Date("2024-04-14T13:10:00"),
  },
  {
    id: "comment5",
    articleId: "art2",
    authorName: "Juliana Ribeiro",
    content: "Senti falta do atacante do Flamengo na lista. Ele vem fazendo uma temporada espetacular.",
    createdAt: new Date("2024-04-14T14:25:00"),
  },
  {
    id: "comment6",
    articleId: "art3",
    authorName: "Pedro Henrique",
    content: "Assisti no fim de semana e realmente é incrível! Merece todo o sucesso.",
    createdAt: new Date("2024-04-13T20:15:00"),
  },
  {
    id: "comment7",
    articleId: "art3",
    authorName: "Camila Ferreira",
    content: "Finalmente uma produção nacional com qualidade internacional. Estou orgulhosa!",
    createdAt: new Date("2024-04-13T21:30:00"),
  },
  {
    id: "comment8",
    articleId: "art4",
    authorName: "Ricardo Mendes",
    content:
      "Impressionante ver uma empresa brasileira alcançando esse patamar. Mostra o potencial do nosso país na área de tecnologia.",
    createdAt: new Date("2024-04-12T12:40:00"),
  },
  {
    id: "comment9",
    articleId: "art5",
    authorName: "Luciana Martins",
    content:
      "Já agendei minha vacinação. É importante que todos se vacinem para proteger não só a si mesmos, mas toda a comunidade.",
    createdAt: new Date("2024-04-11T18:20:00"),
  },
  {
    id: "comment10",
    articleId: "art5",
    authorName: "Gabriel Oliveira",
    content: "Gostaria de saber se gestantes no primeiro trimestre podem tomar a vacina. Alguém tem essa informação?",
    createdAt: new Date("2024-04-11T19:05:00"),
  },
]

export const mockReactions = [
  {
    id: "reaction1",
    articleId: "art1",
    type: "like",
    count: 145,
  },
  {
    id: "reaction2",
    articleId: "art1",
    type: "love",
    count: 57,
  },
  {
    id: "reaction3",
    articleId: "art1",
    type: "sad",
    count: 12,
  },
  {
    id: "reaction4",
    articleId: "art2",
    type: "like",
    count: 230,
  },
  {
    id: "reaction5",
    articleId: "art2",
    type: "love",
    count: 124,
  },
  {
    id: "reaction6",
    articleId: "art2",
    type: "celebrate",
    count: 89,
  },
  {
    id: "reaction7",
    articleId: "art3",
    type: "like",
    count: 312,
  },
  {
    id: "reaction8",
    articleId: "art3",
    type: "love",
    count: 178,
  },
  {
    id: "reaction9",
    articleId: "art4",
    type: "like",
    count: 267,
  },
  {
    id: "reaction10",
    articleId: "art4",
    type: "celebrate",
    count: 134,
  },
  {
    id: "reaction11",
    articleId: "art5",
    type: "like",
    count: 198,
  },
  {
    id: "reaction12",
    articleId: "art5",
    type: "informative",
    count: 156,
  },
]
