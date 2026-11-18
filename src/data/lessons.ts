import type { Lesson, Unit } from '../types'

// =====================================================================
// UNIDADE 1 — Sobrevivência & Cumprimentos (completa: 3 lições x 5 exercícios)
// =====================================================================

const unit1: Unit = {
  id: 'u1',
  number: 1,
  title: 'Sobrevivência & Cumprimentos',
  description: 'A1 · Cumprimente, apresente-se e sobreviva às primeiras conversas.',
  color: 'green',
  lessons: [
    {
      id: 'u1-l1',
      title: 'Hello & Goodbye',
      description: 'Cumprimentos e apresentações',
      exercises: [
        {
          id: 'u1-l1-e1',
          type: 'listening',
          mode: 'choice',
          audio: 'Hello, how are you?',
          question: 'O que você ouviu?',
          options: ['Olá, como você está?', 'Olá, quem é você?', 'Tchau, até mais tarde!'],
          correctIndex: 0,
        },
        {
          id: 'u1-l1-e2',
          type: 'speaking',
          text: 'Nice to meet you.',
          translation: 'Prazer em conhecer você.',
        },
        {
          id: 'u1-l1-e3',
          type: 'listening',
          mode: 'build',
          audio: 'My name is Anna.',
          translation: 'Meu nome é Anna.',
          wordBank: ['My', 'name', 'is', 'Anna', 'your', 'from'],
        },
        {
          id: 'u1-l1-e4',
          type: 'roleplay',
          scene: 'Primeiro dia em um curso. Uma colega se apresenta.',
          character: { name: 'Emma', emoji: '👩🏼' },
          question: "Hi! I'm Emma. What's your name?",
          questionTranslation: 'Oi! Eu sou a Emma. Qual é o seu nome?',
          suggestedResponses: [
            { text: 'My name is Daniel.', translation: 'Meu nome é Daniel.' },
            { text: "I'm Daniel, nice to meet you.", translation: 'Sou o Daniel, prazer.' },
          ],
          keywords: ['name', "i'm", 'i am', 'nice to meet'],
        },
        {
          id: 'u1-l1-e5',
          type: 'speaking',
          text: 'Good morning! See you later.',
          translation: 'Bom dia! Até mais tarde.',
        },
      ],
    },
    {
      id: 'u1-l2',
      title: 'Polite Phrases',
      description: 'Por favor, obrigado e pedir ajuda',
      exercises: [
        {
          id: 'u1-l2-e1',
          type: 'listening',
          mode: 'build',
          audio: 'Thank you very much.',
          translation: 'Muito obrigado.',
          wordBank: ['Thank', 'you', 'very', 'much', 'please', 'sorry'],
        },
        {
          id: 'u1-l2-e2',
          type: 'speaking',
          text: 'Excuse me, can you help me?',
          translation: 'Com licença, você pode me ajudar?',
        },
        {
          id: 'u1-l2-e3',
          type: 'listening',
          mode: 'choice',
          audio: "I'm sorry, I don't understand.",
          question: 'Qual é o sentido da frase?',
          options: [
            'A pessoa entendeu tudo perfeitamente.',
            'A pessoa pede desculpas porque não entendeu.',
            'A pessoa está pedindo a conta.',
          ],
          correctIndex: 1,
        },
        {
          id: 'u1-l2-e4',
          type: 'roleplay',
          scene: 'Um turista pede informação na rua.',
          character: { name: 'Mike', emoji: '🧔🏻' },
          question: 'Excuse me, do you speak English?',
          questionTranslation: 'Com licença, você fala inglês?',
          suggestedResponses: [
            { text: 'Yes, a little.', translation: 'Sim, um pouco.' },
            { text: 'Yes, I speak English.', translation: 'Sim, eu falo inglês.' },
          ],
          keywords: ['yes', 'little', 'speak', 'sure', 'of course'],
        },
        {
          id: 'u1-l2-e5',
          type: 'speaking',
          text: 'Could you speak more slowly, please?',
          translation: 'Você poderia falar mais devagar, por favor?',
          passThreshold: 0.65,
        },
      ],
    },
    {
      id: 'u1-l3',
      title: 'Small Talk',
      description: 'De onde você é e o que faz',
      exercises: [
        {
          id: 'u1-l3-e1',
          type: 'listening',
          mode: 'choice',
          audio: 'Where are you from?',
          question: 'O que a pessoa perguntou?',
          options: ['Onde você mora?', 'De onde você é?', 'Para onde você vai?'],
          correctIndex: 1,
        },
        {
          id: 'u1-l3-e2',
          type: 'roleplay',
          scene: 'Conversa rápida em um evento internacional.',
          character: { name: 'Lucas', emoji: '👨🏽' },
          question: 'So, where are you from?',
          questionTranslation: 'Então, de onde você é?',
          suggestedResponses: [
            { text: "I'm from Brazil.", translation: 'Eu sou do Brasil.' },
            { text: 'I come from Brazil.', translation: 'Eu venho do Brasil.' },
          ],
          keywords: ['from', 'brazil', 'come'],
        },
        {
          id: 'u1-l3-e3',
          type: 'listening',
          mode: 'build',
          audio: 'I live in a big city.',
          translation: 'Eu moro em uma cidade grande.',
          wordBank: ['I', 'live', 'in', 'a', 'big', 'city', 'small', 'love'],
        },
        {
          id: 'u1-l3-e4',
          type: 'speaking',
          text: 'What do you do for a living?',
          translation: 'Com o que você trabalha?',
        },
        {
          id: 'u1-l3-e5',
          type: 'roleplay',
          scene: 'Segunda-feira no escritório.',
          character: { name: 'Sarah', emoji: '👩🏾' },
          question: 'Hey! How was your weekend?',
          questionTranslation: 'Ei! Como foi seu fim de semana?',
          suggestedResponses: [
            { text: 'It was great, thanks!', translation: 'Foi ótimo, obrigado!' },
            { text: 'It was relaxing. And yours?', translation: 'Foi tranquilo. E o seu?' },
          ],
          keywords: ['great', 'good', 'relax', 'fine', 'nice', 'fun', 'it was', 'awesome', 'thanks'],
        },
      ],
    },
  ],
}


// =====================================================================
// UNIDADE 2 (A1) — Cafeteria & Restaurante
// =====================================================================

const unit2: Unit = {
  id: 'u2',
  number: 2,
  title: 'Cafeteria & Restaurante',
  description: 'A1 · Peça um café, faça pedidos e pague a conta.',
  color: 'blue',
  lessons: [
    {
      id: 'u2-l1',
      title: 'Ordering Coffee',
      description: 'Pedindo no balcão da cafeteria',
      exercises: [
        {
          id: 'u2-l1-e1',
          type: 'listening',
          mode: 'choice',
          audio: 'Can I get a large coffee, please?',
          question: 'O que o cliente pediu?',
          options: ['Um café grande, por favor.', 'Um chá pequeno, por favor.', 'Um copo de água grande.'],
          correctIndex: 0,
        },
        {
          id: 'u2-l1-e2',
          type: 'speaking',
          text: "I'd like a cappuccino to go.",
          translation: 'Eu queria um cappuccino para viagem.',
        },
        {
          id: 'u2-l1-e3',
          type: 'listening',
          mode: 'build',
          audio: 'For here or to go?',
          translation: 'Para comer aqui ou para viagem?',
          wordBank: ['For', 'here', 'or', 'to', 'go', 'stay', 'with'],
        },
        {
          id: 'u2-l1-e4',
          type: 'roleplay',
          scene: 'Você chega ao balcão de uma cafeteria em Nova York.',
          character: { name: 'Jake', emoji: '🧑🏻‍🍳' },
          question: 'Hi there! What can I get for you?',
          questionTranslation: 'Oi! O que vai querer?',
          suggestedResponses: [
            { text: 'Can I get a latte, please?', translation: 'Pode me ver um latte, por favor?' },
            { text: "I'd like a black coffee, please.", translation: 'Eu queria um café preto, por favor.' },
          ],
          keywords: ['coffee', 'latte', 'tea', 'cappuccino', 'espresso', 'please', "i'd like", 'can i get', 'can i have'],
        },
        {
          id: 'u2-l1-e5',
          type: 'speaking',
          text: 'Could I have some milk on the side?',
          translation: 'Pode me dar um pouco de leite à parte?',
          passThreshold: 0.65,
        },
      ],
    },
    {
      id: 'u2-l2',
      title: 'At the Table',
      description: 'Cardápio, pedidos e restrições',
      exercises: [
        {
          id: 'u2-l2-e1',
          type: 'listening',
          mode: 'build',
          audio: 'Can we see the menu, please?',
          translation: 'Podemos ver o cardápio, por favor?',
          wordBank: ['Can', 'we', 'see', 'the', 'menu', 'please', 'drink', 'you'],
        },
        {
          id: 'u2-l2-e2',
          type: 'roleplay',
          scene: 'Restaurante. A garçonete volta à mesa com o bloquinho.',
          character: { name: 'Olivia', emoji: '👩🏼' },
          question: 'Are you ready to order?',
          questionTranslation: 'Vocês já podem fazer o pedido?',
          suggestedResponses: [
            { text: "Yes, I'll have the chicken salad.", translation: 'Sim, vou querer a salada de frango.' },
            { text: 'Could we have a few more minutes?', translation: 'Pode nos dar mais alguns minutos?' },
          ],
          keywords: ['yes', "i'll have", 'minutes', 'order', "i'd like", 'please', 'ready', 'can i get'],
        },
        {
          id: 'u2-l2-e3',
          type: 'listening',
          mode: 'choice',
          audio: 'Would you like anything to drink?',
          question: 'O que o garçom perguntou?',
          options: ['Você gostaria de algo para beber?', 'Você gostaria de uma sobremesa?', 'Você já pagou a conta?'],
          correctIndex: 0,
        },
        {
          id: 'u2-l2-e4',
          type: 'speaking',
          text: "I'm allergic to peanuts.",
          translation: 'Sou alérgico a amendoim.',
        },
        {
          id: 'u2-l2-e5',
          type: 'roleplay',
          scene: 'Você pediu um bife.',
          character: { name: 'Olivia', emoji: '👩🏼' },
          question: 'How would you like your steak?',
          questionTranslation: 'Qual o ponto da carne?',
          suggestedResponses: [
            { text: 'Medium rare, please.', translation: 'Ao ponto para mal passado, por favor.' },
            { text: 'Well done, please.', translation: 'Bem passado, por favor.' },
          ],
          keywords: ['medium', 'rare', 'well done', 'please'],
        },
      ],
    },
    {
      id: 'u2-l3',
      title: 'The Check, Please',
      description: 'Pagando, gorjeta e elogios',
      exercises: [
        {
          id: 'u2-l3-e1',
          type: 'speaking',
          text: 'Could we get the check, please?',
          translation: 'Pode trazer a conta, por favor?',
        },
        {
          id: 'u2-l3-e2',
          type: 'listening',
          mode: 'choice',
          audio: 'Are you paying together or separately?',
          question: 'O que o garçom quer saber?',
          options: ['Se vocês querem sobremesa.', 'Se vão pagar juntos ou separado.', 'Se a comida estava boa.'],
          correctIndex: 1,
        },
        {
          id: 'u2-l3-e3',
          type: 'listening',
          mode: 'build',
          audio: 'Can I pay by card?',
          translation: 'Posso pagar com cartão?',
          wordBank: ['Can', 'I', 'pay', 'by', 'card', 'cash', 'with'],
        },
        {
          id: 'u2-l3-e4',
          type: 'roleplay',
          scene: 'Fim do jantar. A garçonete traz a conta.',
          character: { name: 'Olivia', emoji: '👩🏼' },
          question: 'How was everything tonight?',
          questionTranslation: 'Estava tudo bem esta noite?',
          suggestedResponses: [
            { text: 'Everything was delicious, thank you!', translation: 'Estava tudo delicioso, obrigado!' },
            { text: 'It was great, thanks.', translation: 'Estava ótimo, valeu.' },
          ],
          keywords: ['delicious', 'great', 'good', 'amazing', 'perfect', 'lovely', 'thank', 'thanks', 'was'],
        },
        {
          id: 'u2-l3-e5',
          type: 'speaking',
          text: 'Keep the change.',
          translation: 'Pode ficar com o troco.',
        },
      ],
    },
  ],
}

// =====================================================================
// UNIDADE 3 (A2) — Aeroporto, Hotel & Imigração
// =====================================================================

const unit3: Unit = {
  id: 'u3',
  number: 3,
  title: 'Aeroporto, Hotel & Imigração',
  description: 'A2 · Check-in, imigração e hospedagem sem sustos.',
  color: 'purple',
  lessons: [
    {
      id: 'u3-l1',
      title: 'Airport Check-in',
      description: 'Balcão da companhia e avisos de embarque',
      exercises: [
        {
          id: 'u3-l1-e1',
          type: 'listening',
          mode: 'choice',
          audio: 'Can I see your passport and boarding pass?',
          question: 'O que o atendente pediu?',
          options: ['Seu passaporte e cartão de embarque.', 'Sua mala e sua passagem.', 'Seu endereço e telefone.'],
          correctIndex: 0,
        },
        {
          id: 'u3-l1-e2',
          type: 'roleplay',
          scene: 'Balcão de check-in no aeroporto.',
          character: { name: 'Priya', emoji: '👩🏽‍✈️' },
          question: 'Do you have any bags to check?',
          questionTranslation: 'Você tem alguma bagagem para despachar?',
          suggestedResponses: [
            { text: 'Yes, just one suitcase.', translation: 'Sim, só uma mala.' },
            { text: 'No, only a carry-on.', translation: 'Não, só uma bagagem de mão.' },
          ],
          keywords: ['yes', 'no', 'suitcase', 'bag', 'bags', 'carryon', 'just', 'only', 'one'],
        },
        {
          id: 'u3-l1-e3',
          type: 'speaking',
          text: 'Could I have a window seat, please?',
          translation: 'Posso ficar na janela, por favor?',
        },
        {
          id: 'u3-l1-e4',
          type: 'listening',
          mode: 'build',
          audio: 'My flight has been delayed.',
          translation: 'Meu voo foi atrasado.',
          wordBank: ['My', 'flight', 'has', 'been', 'delayed', 'canceled', 'is'],
        },
        {
          id: 'u3-l1-e5',
          type: 'listening',
          mode: 'choice',
          audio: 'Boarding will begin at gate twelve in twenty minutes.',
          question: 'O que foi anunciado?',
          options: ['O voo foi cancelado.', 'O embarque começa no portão 12 em 20 minutos.', 'O portão mudou para o 20.'],
          correctIndex: 1,
        },
      ],
    },
    {
      id: 'u3-l2',
      title: 'Immigration',
      description: 'Respondendo ao oficial de imigração',
      exercises: [
        {
          id: 'u3-l2-e1',
          type: 'roleplay',
          scene: 'Controle de imigração ao desembarcar.',
          character: { name: 'Officer Brown', emoji: '👮🏻‍♂️' },
          question: "What's the purpose of your visit?",
          questionTranslation: 'Qual é o motivo da sua visita?',
          suggestedResponses: [
            { text: "I'm here on vacation.", translation: 'Estou aqui de férias.' },
            { text: "I'm here on a business trip.", translation: 'Estou aqui a trabalho.' },
          ],
          keywords: ['vacation', 'business', 'tourism', 'holiday', 'visit', 'trip', 'conference', 'family', 'study'],
        },
        {
          id: 'u3-l2-e2',
          type: 'speaking',
          text: "I'm staying at a hotel downtown.",
          translation: 'Vou ficar em um hotel no centro.',
        },
        {
          id: 'u3-l2-e3',
          type: 'listening',
          mode: 'choice',
          audio: 'How long are you planning to stay?',
          question: 'O que o oficial perguntou?',
          options: ['Onde você vai ficar?', 'Quanto tempo você pretende ficar?', 'Quando você chegou?'],
          correctIndex: 1,
        },
        {
          id: 'u3-l2-e4',
          type: 'roleplay',
          scene: 'O oficial continua as perguntas.',
          character: { name: 'Officer Brown', emoji: '👮🏻‍♂️' },
          question: 'And where will you be staying?',
          questionTranslation: 'E onde você vai se hospedar?',
          suggestedResponses: [
            { text: "I'm staying at the Hilton downtown.", translation: 'Vou ficar no Hilton, no centro.' },
            { text: "I'm staying with a friend.", translation: 'Vou ficar na casa de um amigo.' },
          ],
          keywords: ['hotel', 'staying', 'friend', 'airbnb', 'apartment', 'downtown', 'with', 'at the'],
        },
        {
          id: 'u3-l2-e5',
          type: 'listening',
          mode: 'build',
          audio: 'I have nothing to declare.',
          translation: 'Não tenho nada a declarar.',
          wordBank: ['I', 'have', 'nothing', 'to', 'declare', 'something', 'do'],
        },
      ],
    },
    {
      id: 'u3-l3',
      title: 'Hotel Check-in',
      description: 'Reserva, quarto e problemas',
      exercises: [
        {
          id: 'u3-l3-e1',
          type: 'speaking',
          text: 'Hi, I have a reservation under Silva.',
          translation: 'Olá, tenho uma reserva no nome de Silva.',
          passThreshold: 0.65,
        },
        {
          id: 'u3-l3-e2',
          type: 'listening',
          mode: 'choice',
          audio: 'Breakfast is served from seven to ten in the lobby.',
          question: 'Quando e onde é servido o café da manhã?',
          options: ['Das 7 às 10, no lobby.', 'Das 10 às 12, no quarto.', 'Não há café da manhã.'],
          correctIndex: 0,
        },
        {
          id: 'u3-l3-e3',
          type: 'roleplay',
          scene: 'Recepção do hotel.',
          character: { name: 'Tom', emoji: '🧑🏻‍💼' },
          question: 'Would you like a room with a view?',
          questionTranslation: 'Gostaria de um quarto com vista?',
          suggestedResponses: [
            { text: 'Yes, that would be great!', translation: 'Sim, seria ótimo!' },
            { text: 'No, thanks. A quiet room is fine.', translation: 'Não, obrigado. Um quarto silencioso está ótimo.' },
          ],
          keywords: ['yes', 'no', 'great', 'quiet', 'fine', 'sure', 'please', 'thanks', 'view'],
        },
        {
          id: 'u3-l3-e4',
          type: 'listening',
          mode: 'build',
          audio: 'What time is check-out?',
          translation: 'Que horas é o check-out?',
          wordBank: ['What', 'time', 'is', 'check-out', 'where', 'in'],
        },
        {
          id: 'u3-l3-e5',
          type: 'speaking',
          text: "The air conditioning isn't working.",
          translation: 'O ar-condicionado não está funcionando.',
        },
      ],
    },
  ],
}

// =====================================================================
// UNIDADE 4 (A2) — Cidade, Direções & Compras
// =====================================================================

const unit4: Unit = {
  id: 'u4',
  number: 4,
  title: 'Cidade, Direções & Compras',
  description: 'A2 · Peça direções, use o transporte e faça compras.',
  color: 'green',
  lessons: [
    {
      id: 'u4-l1',
      title: 'Asking for Directions',
      description: 'Encontrando o caminho',
      exercises: [
        {
          id: 'u4-l1-e1',
          type: 'listening',
          mode: 'choice',
          audio: 'Go straight and turn left at the second light.',
          question: 'Qual é a direção?',
          options: [
            'Siga reto e vire à esquerda no segundo semáforo.',
            'Vire à direita no primeiro semáforo.',
            'Volte e vire à esquerda na esquina.',
          ],
          correctIndex: 0,
        },
        {
          id: 'u4-l1-e2',
          type: 'speaking',
          text: 'Excuse me, how do I get to the train station?',
          translation: 'Com licença, como eu chego à estação de trem?',
          passThreshold: 0.65,
        },
        {
          id: 'u4-l1-e3',
          type: 'roleplay',
          scene: 'Você está olhando o mapa, perdido, quando uma senhora se aproxima.',
          character: { name: 'Grace', emoji: '👵🏼' },
          question: 'Are you lost? Can I help you?',
          questionTranslation: 'Você está perdido? Posso ajudar?',
          suggestedResponses: [
            { text: "Yes, I'm looking for the museum.", translation: 'Sim, estou procurando o museu.' },
            { text: "Yes, where's the nearest subway station?", translation: 'Sim, onde fica a estação de metrô mais próxima?' },
          ],
          keywords: ['looking for', 'where', 'station', 'museum', 'find', 'how do i', 'lost', 'please', 'yes'],
        },
        {
          id: 'u4-l1-e4',
          type: 'listening',
          mode: 'build',
          audio: "It's just around the corner.",
          translation: 'Fica logo ali na esquina.',
          wordBank: ["It's", 'just', 'around', 'the', 'corner', 'far', 'behind'],
        },
        {
          id: 'u4-l1-e5',
          type: 'listening',
          mode: 'choice',
          audio: "It's about a ten-minute walk from here.",
          question: 'Qual é a distância?',
          options: ['Uns 10 minutos de carro.', 'Uns 10 minutos a pé.', 'É bem longe, melhor pegar um táxi.'],
          correctIndex: 1,
        },
      ],
    },
    {
      id: 'u4-l2',
      title: 'Public Transport',
      description: 'Ônibus, metrô e passagens',
      exercises: [
        {
          id: 'u4-l2-e1',
          type: 'listening',
          mode: 'build',
          audio: 'Which bus goes downtown?',
          translation: 'Qual ônibus vai para o centro?',
          wordBank: ['Which', 'bus', 'goes', 'downtown', 'train', 'where'],
        },
        {
          id: 'u4-l2-e2',
          type: 'roleplay',
          scene: 'Bilheteria da estação de trem.',
          character: { name: 'Ray', emoji: '🧑🏾' },
          question: 'One-way or round trip?',
          questionTranslation: 'Só ida ou ida e volta?',
          suggestedResponses: [
            { text: 'Round trip, please.', translation: 'Ida e volta, por favor.' },
            { text: 'Just one-way, thanks.', translation: 'Só ida, obrigado.' },
          ],
          keywords: ['round', 'trip', 'oneway', 'one', 'way', 'please', 'return', 'single'],
        },
        {
          id: 'u4-l2-e3',
          type: 'speaking',
          text: 'Does this train stop at Central Park?',
          translation: 'Este trem para no Central Park?',
        },
        {
          id: 'u4-l2-e4',
          type: 'listening',
          mode: 'choice',
          audio: 'The next train to Brooklyn is delayed by fifteen minutes.',
          question: 'O que aconteceu?',
          options: [
            'O trem para o Brooklyn foi cancelado.',
            'O próximo trem para o Brooklyn está 15 minutos atrasado.',
            'O trem para o Brooklyn sai da plataforma 15.',
          ],
          correctIndex: 1,
        },
        {
          id: 'u4-l2-e5',
          type: 'speaking',
          text: 'Can you tell me when to get off?',
          translation: 'Pode me avisar quando eu devo descer?',
        },
      ],
    },
    {
      id: 'u4-l3',
      title: 'Shopping',
      description: 'Tamanhos, provador e caixa',
      exercises: [
        {
          id: 'u4-l3-e1',
          type: 'roleplay',
          scene: 'Você entra em uma loja de roupas.',
          character: { name: 'Mia', emoji: '👩🏻' },
          question: 'Hi! Are you looking for anything in particular?',
          questionTranslation: 'Oi! Procurando algo em especial?',
          suggestedResponses: [
            { text: "I'm just looking, thanks.", translation: 'Só estou olhando, obrigado.' },
            { text: 'Yes, do you have this in a medium?', translation: 'Sim, vocês têm isso no tamanho M?' },
          ],
          keywords: ['just looking', 'looking', 'thanks', 'medium', 'size', 'do you have', 'small', 'large'],
        },
        {
          id: 'u4-l3-e2',
          type: 'listening',
          mode: 'choice',
          audio: "Sorry, we're out of that size.",
          question: 'O que a vendedora disse?',
          options: ['Esse tamanho está em promoção.', 'Esse tamanho acabou.', 'Esse tamanho fica no fundo da loja.'],
          correctIndex: 1,
        },
        {
          id: 'u4-l3-e3',
          type: 'speaking',
          text: 'Can I try this on?',
          translation: 'Posso experimentar?',
        },
        {
          id: 'u4-l3-e4',
          type: 'listening',
          mode: 'build',
          audio: 'How much is this jacket?',
          translation: 'Quanto custa esta jaqueta?',
          wordBank: ['How', 'much', 'is', 'this', 'jacket', 'many', 'are'],
        },
        {
          id: 'u4-l3-e5',
          type: 'roleplay',
          scene: 'No caixa, pagando a compra.',
          character: { name: 'Leo', emoji: '🧑🏽' },
          question: 'Would you like a bag for that?',
          questionTranslation: 'Vai querer uma sacola?',
          suggestedResponses: [
            { text: "No, I'm fine, thanks.", translation: 'Não precisa, obrigado.' },
            { text: 'Yes, please.', translation: 'Sim, por favor.' },
          ],
          keywords: ['yes', 'no', 'please', 'thanks', 'fine', 'okay', 'sure'],
        },
      ],
    },
  ],
}

// =====================================================================
// UNIDADE 5 (B1) — Trabalho, Reuniões & Networking
// =====================================================================

const unit5: Unit = {
  id: 'u5',
  number: 5,
  title: 'Trabalho, Reuniões & Networking',
  description: 'B1 · Apresente-se no trabalho, opine em reuniões e faça contatos.',
  color: 'blue',
  lessons: [
    {
      id: 'u5-l1',
      title: 'At the Office',
      description: 'Apresentando sua função',
      exercises: [
        {
          id: 'u5-l1-e1',
          type: 'speaking',
          text: 'I work in marketing for a tech company.',
          translation: 'Trabalho com marketing em uma empresa de tecnologia.',
        },
        {
          id: 'u5-l1-e2',
          type: 'roleplay',
          scene: 'Primeiro café com um colega novo.',
          character: { name: 'Raj', emoji: '👨🏾‍💼' },
          question: 'So, what do you do here?',
          questionTranslation: 'E aí, o que você faz aqui?',
          suggestedResponses: [
            { text: "I'm a software developer on the mobile team.", translation: 'Sou desenvolvedor no time de mobile.' },
            { text: 'I work in sales. I just started last week.', translation: 'Trabalho em vendas. Comecei semana passada.' },
          ],
          keywords: ['work', 'developer', 'manager', 'team', 'sales', 'marketing', 'engineer', 'designer', 'analyst', 'started', 'in charge'],
        },
        {
          id: 'u5-l1-e3',
          type: 'listening',
          mode: 'choice',
          audio: "I've been with the company for about three years.",
          question: 'O que a pessoa disse?',
          options: ['Está na empresa há uns três anos.', 'Vai sair da empresa em três anos.', 'Trabalhou três anos em outra empresa.'],
          correctIndex: 0,
        },
        {
          id: 'u5-l1-e4',
          type: 'listening',
          mode: 'build',
          audio: "I'm in charge of the sales team.",
          translation: 'Sou responsável pelo time de vendas.',
          wordBank: ["I'm", 'in', 'charge', 'of', 'the', 'sales', 'team', 'change', 'for'],
        },
        {
          id: 'u5-l1-e5',
          type: 'speaking',
          text: 'Let me know if you need anything.',
          translation: 'Me avise se precisar de algo.',
        },
      ],
    },
    {
      id: 'u5-l2',
      title: 'Meetings',
      description: 'Pauta, opiniões e follow-up',
      exercises: [
        {
          id: 'u5-l2-e1',
          type: 'listening',
          mode: 'choice',
          audio: "Let's get started. The first item on the agenda is the budget.",
          question: 'Qual é o primeiro assunto da reunião?',
          options: ['O cronograma do projeto.', 'O orçamento.', 'As contratações.'],
          correctIndex: 1,
        },
        {
          id: 'u5-l2-e2',
          type: 'speaking',
          text: 'Sorry, could you repeat that last point?',
          translation: 'Desculpe, pode repetir esse último ponto?',
          passThreshold: 0.65,
        },
        {
          id: 'u5-l2-e3',
          type: 'roleplay',
          scene: 'Reunião de equipe sobre uma nova proposta.',
          character: { name: 'Karen', emoji: '👩🏼‍💼' },
          question: 'What do you think about the new proposal?',
          questionTranslation: 'O que você acha da nova proposta?',
          suggestedResponses: [
            { text: "I think it's a good idea, but the timeline is tight.", translation: 'Acho uma boa ideia, mas o prazo está apertado.' },
            { text: 'I agree with most of it.', translation: 'Concordo com a maior parte.' },
          ],
          keywords: ['i think', 'agree', 'disagree', 'idea', 'good', 'timeline', 'makes sense', 'concern', 'not sure'],
        },
        {
          id: 'u5-l2-e4',
          type: 'listening',
          mode: 'build',
          audio: 'Can we push the meeting to Friday?',
          translation: 'Podemos adiar a reunião para sexta?',
          wordBank: ['Can', 'we', 'push', 'the', 'meeting', 'to', 'Friday', 'Monday', 'cancel'],
        },
        {
          id: 'u5-l2-e5',
          type: 'roleplay',
          scene: 'Final da call.',
          character: { name: 'Karen', emoji: '👩🏼‍💼' },
          question: 'Can you send me a summary after the call?',
          questionTranslation: 'Pode me mandar um resumo depois da call?',
          suggestedResponses: [
            { text: "Sure, I'll send it this afternoon.", translation: 'Claro, mando hoje à tarde.' },
            { text: "No problem, I'll email it to you today.", translation: 'Sem problemas, te mando por e-mail hoje.' },
          ],
          keywords: ['sure', 'send', 'email', 'no problem', 'today', 'afternoon', 'of course', 'absolutely', 'will'],
        },
      ],
    },
    {
      id: 'u5-l3',
      title: 'Networking',
      description: 'Conhecendo pessoas em eventos',
      exercises: [
        {
          id: 'u5-l3-e1',
          type: 'roleplay',
          scene: 'Coffee break em uma conferência de tecnologia.',
          character: { name: 'Alex', emoji: '🧑🏻‍💻' },
          question: "Hi, I don't think we've met. I'm Alex.",
          questionTranslation: 'Oi, acho que ainda não nos conhecemos. Sou o Alex.',
          suggestedResponses: [
            { text: "Nice to meet you, Alex. I'm Daniel.", translation: 'Prazer, Alex. Sou o Daniel.' },
            { text: 'Hi Alex! What brings you to the conference?', translation: 'Oi, Alex! O que te traz à conferência?' },
          ],
          keywords: ['nice to meet', 'pleasure', "i'm", 'brings you', 'hi alex', 'my name'],
        },
        {
          id: 'u5-l3-e2',
          type: 'speaking',
          text: 'It was great talking to you.',
          translation: 'Foi ótimo conversar com você.',
        },
        {
          id: 'u5-l3-e3',
          type: 'listening',
          mode: 'choice',
          audio: 'Do you mind if I connect with you on LinkedIn?',
          question: 'O que a pessoa pediu?',
          options: ['Se pode te adicionar no LinkedIn.', 'Se você pode mandar seu currículo.', 'Se você conhece alguém no LinkedIn.'],
          correctIndex: 0,
        },
        {
          id: 'u5-l3-e4',
          type: 'listening',
          mode: 'build',
          audio: "Let's keep in touch.",
          translation: 'Vamos manter contato.',
          wordBank: ["Let's", 'keep', 'in', 'touch', 'take', 'on'],
        },
        {
          id: 'u5-l3-e5',
          type: 'speaking',
          text: "I'd love to hear more about your project.",
          translation: 'Eu adoraria saber mais sobre o seu projeto.',
        },
      ],
    },
  ],
}

// =====================================================================
// UNIDADE 6 (B1) — Histórias, Experiências & Planos
// =====================================================================

const unit6: Unit = {
  id: 'u6',
  number: 6,
  title: 'Histórias, Experiências & Planos',
  description: 'B1 · Conte experiências, narre histórias e fale do futuro.',
  color: 'purple',
  lessons: [
    {
      id: 'u6-l1',
      title: 'Past Experiences',
      description: 'Have you ever…? Experiências de vida',
      exercises: [
        {
          id: 'u6-l1-e1',
          type: 'listening',
          mode: 'choice',
          audio: "I've never been to Europe, but I'd love to go.",
          question: 'O que a pessoa disse?',
          options: ['Já foi à Europa várias vezes.', 'Nunca foi à Europa, mas adoraria ir.', 'Vai à Europa no ano que vem.'],
          correctIndex: 1,
        },
        {
          id: 'u6-l1-e2',
          type: 'roleplay',
          scene: 'Papo descontraído com uma amiga.',
          character: { name: 'Chloe', emoji: '👩🏻‍🦰' },
          question: 'Have you ever traveled abroad?',
          questionTranslation: 'Você já viajou para o exterior?',
          suggestedResponses: [
            { text: 'Yes, I went to Portugal last year.', translation: 'Sim, fui a Portugal ano passado.' },
            { text: "Not yet, but I'm planning to.", translation: 'Ainda não, mas estou planejando.' },
          ],
          keywords: ['went', 'been', 'not yet', 'planning', 'traveled', 'last year', 'never', 'yes'],
        },
        {
          id: 'u6-l1-e3',
          type: 'speaking',
          text: 'When I was a kid, I lived near the beach.',
          translation: 'Quando eu era criança, morava perto da praia.',
        },
        {
          id: 'u6-l1-e4',
          type: 'listening',
          mode: 'build',
          audio: 'That was the best trip of my life.',
          translation: 'Aquela foi a melhor viagem da minha vida.',
          wordBank: ['That', 'was', 'the', 'best', 'trip', 'of', 'my', 'life', 'worst', 'travel'],
        },
        {
          id: 'u6-l1-e5',
          type: 'speaking',
          text: "It was one of the most amazing experiences I've ever had.",
          translation: 'Foi uma das experiências mais incríveis que já tive.',
          passThreshold: 0.65,
        },
      ],
    },
    {
      id: 'u6-l2',
      title: 'Telling a Story',
      description: 'Narrando o que aconteceu',
      exercises: [
        {
          id: 'u6-l2-e1',
          type: 'listening',
          mode: 'choice',
          audio: "You'll never guess what happened to me yesterday.",
          question: 'Como a pessoa começa a conversa?',
          options: [
            'Pedindo um conselho.',
            'Anunciando que vai contar algo surpreendente que aconteceu ontem.',
            'Reclamando do que vai fazer amanhã.',
          ],
          correctIndex: 1,
        },
        {
          id: 'u6-l2-e2',
          type: 'speaking',
          text: 'Anyway, long story short, we missed the flight.',
          translation: 'Enfim, resumindo a história, perdemos o voo.',
          passThreshold: 0.65,
        },
        {
          id: 'u6-l2-e3',
          type: 'roleplay',
          scene: 'Você está contando uma história de viagem para um amigo.',
          character: { name: 'Ben', emoji: '🧑🏼' },
          question: 'No way! What happened next?',
          questionTranslation: 'Não acredito! E o que aconteceu depois?',
          suggestedResponses: [
            { text: 'Then we had to wait until the next morning.', translation: 'Aí tivemos que esperar até a manhã seguinte.' },
            { text: 'Well, in the end everything worked out.', translation: 'Bom, no fim deu tudo certo.' },
          ],
          keywords: ['then', 'in the end', 'after', 'had to', 'next', 'finally', 'worked out', 'so we'],
        },
        {
          id: 'u6-l2-e4',
          type: 'listening',
          mode: 'build',
          audio: 'All of a sudden, the lights went out.',
          translation: 'De repente, as luzes se apagaram.',
          wordBank: ['All', 'of', 'a', 'sudden', 'the', 'lights', 'went', 'out', 'off', 'came'],
        },
        {
          id: 'u6-l2-e5',
          type: 'roleplay',
          scene: 'Ben continua curioso.',
          character: { name: 'Ben', emoji: '🧑🏼' },
          question: 'Wow, how did you feel?',
          questionTranslation: 'Nossa, como você se sentiu?',
          suggestedResponses: [
            { text: 'I was really nervous at first.', translation: 'Fiquei bem nervoso no começo.' },
            { text: 'Honestly, I was so relieved.', translation: 'Sinceramente, fiquei muito aliviado.' },
          ],
          keywords: ['felt', 'nervous', 'relieved', 'happy', 'scared', 'excited', 'angry', 'tired', 'surprised', 'i was'],
        },
      ],
    },
    {
      id: 'u6-l3',
      title: 'Future Plans',
      description: 'Planos, metas e intenções',
      exercises: [
        {
          id: 'u6-l3-e1',
          type: 'roleplay',
          scene: 'Sexta-feira à tarde, conversando com a Chloe.',
          character: { name: 'Chloe', emoji: '👩🏻‍🦰' },
          question: 'What are you doing this weekend?',
          questionTranslation: 'O que você vai fazer neste fim de semana?',
          suggestedResponses: [
            { text: "I'm going to visit my parents.", translation: 'Vou visitar meus pais.' },
            { text: "Nothing much, I'm just going to relax.", translation: 'Nada demais, só vou descansar.' },
          ],
          keywords: ['going to', 'visit', 'relax', 'nothing much', 'planning', 'probably', 'might', 'will', 'weekend'],
        },
        {
          id: 'u6-l3-e2',
          type: 'listening',
          mode: 'choice',
          audio: "I'm thinking about changing careers next year.",
          question: 'Qual é o plano da pessoa?',
          options: ['Mudar de cidade este ano.', 'Está pensando em mudar de carreira no ano que vem.', 'Ser promovida no próximo mês.'],
          correctIndex: 1,
        },
        {
          id: 'u6-l3-e3',
          type: 'speaking',
          text: "If everything goes well, I'll move abroad next year.",
          translation: 'Se tudo der certo, vou me mudar para o exterior no ano que vem.',
          passThreshold: 0.65,
        },
        {
          id: 'u6-l3-e4',
          type: 'listening',
          mode: 'build',
          audio: "I'm looking forward to the holidays.",
          translation: 'Estou ansioso pelas férias.',
          wordBank: ["I'm", 'looking', 'forward', 'to', 'the', 'holidays', 'for', 'at'],
        },
        {
          id: 'u6-l3-e5',
          type: 'speaking',
          text: 'My goal is to speak English fluently by the end of the year.',
          translation: 'Minha meta é falar inglês fluentemente até o fim do ano.',
          passThreshold: 0.65,
        },
      ],
    },
  ],
}

export const UNITS: Unit[] = [unit1, unit2, unit3, unit4, unit5, unit6]

/** Lista linear de lições, usada para calcular desbloqueios. */
export const ALL_LESSONS: Lesson[] = UNITS.flatMap((u) => u.lessons)

export function findLesson(lessonId: string): { lesson: Lesson; unit: Unit } | undefined {
  for (const unit of UNITS) {
    const lesson = unit.lessons.find((l) => l.id === lessonId)
    if (lesson) return { lesson, unit }
  }
  return undefined
}
