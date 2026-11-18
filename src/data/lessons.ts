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

// =====================================================================
// UNIDADE 7 (B2) — Negociações, Conflitos & Resolução de Problemas
// =====================================================================

const unit7: Unit = {
  id: 'u7',
  number: 7,
  title: 'Negociações, Conflitos & Resolução de Problemas',
  description: 'B2 · Negocie prazos, contorne impasses e resolva crises com diplomacia.',
  color: 'green',
  lessons: [
    {
      id: 'u7-l1',
      title: 'Negotiating Terms',
      description: 'Buscando acordos ganha-ganha',
      exercises: [
        {
          id: 'u7-l1-e1',
          type: 'listening',
          mode: 'choice',
          audio: "We might be able to lower the price if you sign a longer contract.",
          question: 'Qual é a condição proposta?',
          options: [
            'Reduzir o preço caso o cliente assine um contrato mais longo.',
            'Aumentar o preço para contratos de curto prazo.',
            'Cancelar o desconto se o pagamento atrasar.',
          ],
          correctIndex: 0,
        },
        {
          id: 'u7-l1-e2',
          type: 'speaking',
          text: 'Let us try to find a middle ground that works for everyone.',
          translation: 'Vamos tentar encontrar um meio-termo que funcione para todos.',
          passThreshold: 0.65,
        },
        {
          id: 'u7-l1-e3',
          type: 'listening',
          mode: 'build',
          audio: 'That is a bit beyond our current budget.',
          translation: 'Isso está um pouco além do nosso orçamento atual.',
          wordBank: ['That', 'is', 'a', 'bit', 'beyond', 'our', 'current', 'budget', 'below', 'cost'],
        },
        {
          id: 'u7-l1-e4',
          type: 'roleplay',
          scene: 'Negociação comercial com uma fornecedora internacional.',
          character: { name: 'Elena', emoji: '👩🏻‍💼' },
          question: 'Is there any flexibility on the delivery timeline?',
          questionTranslation: 'Existe alguma flexibilidade no prazo de entrega?',
          suggestedResponses: [
            { text: 'We can extend the deadline by a week if needed.', translation: 'Podemos estender o prazo em uma semana, se necessário.' },
            { text: 'The deadline is tight, but we can prioritize the main features.', translation: 'O prazo é apertado, mas podemos priorizar os recursos principais.' },
          ],
          keywords: ['extend', 'deadline', 'week', 'tight', 'prioritize', 'flexible', 'can', 'possible'],
        },
        {
          id: 'u7-l1-e5',
          type: 'speaking',
          text: 'We are willing to compromise on that point.',
          translation: 'Estamos dispostos a ceder nesse ponto.',
        },
      ],
    },
    {
      id: 'u7-l2',
      title: 'Handling Conflicts',
      description: 'Desarmando tensões no trabalho',
      exercises: [
        {
          id: 'u7-l2-e1',
          type: 'speaking',
          text: 'I see where you are coming from, however I have a different perspective.',
          translation: 'Eu entendo o seu ponto de vista, porém tenho uma perspectiva diferente.',
          passThreshold: 0.65,
        },
        {
          id: 'u7-l2-e2',
          type: 'listening',
          mode: 'build',
          audio: 'There seems to be a misunderstanding between our teams.',
          translation: 'Parece haver um mal-entendido entre nossas equipes.',
          wordBank: ['There', 'seems', 'to', 'be', 'a', 'misunderstanding', 'between', 'our', 'teams', 'among'],
        },
        {
          id: 'u7-l2-e3',
          type: 'roleplay',
          scene: 'Um colega está frustrado porque uma tarefa atrasou.',
          character: { name: 'Marcus', emoji: '👨🏾‍💻' },
          question: 'Why was I not informed about this change earlier?',
          questionTranslation: 'Por que não fui informado sobre essa mudança antes?',
          suggestedResponses: [
            { text: 'That was my oversight, and I will keep you in the loop from now on.', translation: 'Foi falha minha, e vou manter você informado daqui em diante.' },
            { text: 'Sorry about that, the decision was made at the last minute.', translation: 'Desculpe por isso, a decisão foi tomada no último minuto.' },
          ],
          keywords: ['sorry', 'oversight', 'loop', 'last minute', 'decision', 'apologize', 'keep you', 'my fault'],
        },
        {
          id: 'u7-l2-e4',
          type: 'listening',
          mode: 'choice',
          audio: "Let's not point fingers; let's focus on fixing the issue.",
          question: 'Qual é a postura do falante?',
          options: [
            'Evitar culpar pessoas e focar em resolver o problema.',
            'Descobrir quem cometeu o erro antes de agir.',
            'Adiar a correção para a próxima reunião.',
          ],
          correctIndex: 0,
        },
        {
          id: 'u7-l2-e5',
          type: 'speaking',
          text: 'Let us take a step back and look at the bigger picture.',
          translation: 'Vamos dar um passo atrás e olhar o panorama geral.',
          passThreshold: 0.65,
        },
      ],
    },
    {
      id: 'u7-l3',
      title: 'Troubleshooting Under Pressure',
      description: 'Lidando com imprevistos e falhas técnicas',
      exercises: [
        {
          id: 'u7-l3-e1',
          type: 'listening',
          mode: 'choice',
          audio: 'Our main server went down, so we switched to the backup system.',
          question: 'Como a equipe reagiu ao problema?',
          options: [
            'Desligou todos os sistemas até o dia seguinte.',
            'Ativou o sistema de backup quando o servidor principal caiu.',
            'Pediu aos clientes que reinstalassem o aplicativo.',
          ],
          correctIndex: 1,
        },
        {
          id: 'u7-l3-e2',
          type: 'roleplay',
          scene: 'Um cliente importante liga preocupado com um bug em produção.',
          character: { name: 'Claire', emoji: '👩🏼‍💼' },
          question: 'Do you have an estimate on when the platform will be back online?',
          questionTranslation: 'Vocês têm uma estimativa de quando a plataforma voltará ao ar?',
          suggestedResponses: [
            { text: 'Our engineers are on it and it should be resolved shortly.', translation: 'Nossos engenheiros estão cuidando disso e deve ser resolvido em breve.' },
            { text: 'We have identified the root cause and are deploying a fix right now.', translation: 'Identificamos a causa-raiz e estamos aplicando a correção agora mesmo.' },
          ],
          keywords: ['engineers', 'resolved', 'shortly', 'root cause', 'deploying', 'fix', 'working on', 'soon'],
        },
        {
          id: 'u7-l3-e3',
          type: 'listening',
          mode: 'build',
          audio: 'We need to prevent this from happening again.',
          translation: 'Precisamos evitar que isso aconteça novamente.',
          wordBank: ['We', 'need', 'to', 'prevent', 'this', 'from', 'happening', 'again', 'avoid', 'stop'],
        },
        {
          id: 'u7-l3-e4',
          type: 'speaking',
          text: 'We have found a temporary workaround while we fix the bug.',
          translation: 'Encontramos uma solução paliativa enquanto corrigimos o bug.',
          passThreshold: 0.65,
        },
        {
          id: 'u7-l3-e5',
          type: 'speaking',
          text: 'Everything is back up and running smoothly now.',
          translation: 'Tudo voltou ao ar e está funcionando perfeitamente agora.',
        },
      ],
    },
  ],
}

// =====================================================================
// UNIDADE 8 (B2) — Phrasal Verbs & Expressões do Cotidiano Nativo
// =====================================================================

const unit8: Unit = {
  id: 'u8',
  number: 8,
  title: 'Phrasal Verbs & Expressões do Cotidiano Nativo',
  description: 'B2 · Domine os phrasal verbs e expressões idiomáticas mais usados por nativos.',
  color: 'blue',
  lessons: [
    {
      id: 'u8-l1',
      title: 'Everyday Phrasal Verbs',
      description: 'Verbos compostos essenciais na rotina',
      exercises: [
        {
          id: 'u8-l1-e1',
          type: 'listening',
          mode: 'choice',
          audio: 'I ran into an old friend at the grocery store.',
          question: 'O que aconteceu no supermercado?',
          options: [
            'A pessoa encontrou um velho amigo por acaso.',
            'A pessoa brigou com um velho amigo.',
            'A pessoa marcou um encontro com um amigo.',
          ],
          correctIndex: 0,
        },
        {
          id: 'u8-l1-e2',
          type: 'speaking',
          text: 'It took me a while to figure out how the system works.',
          translation: 'Levei um tempo para entender como o sistema funciona.',
          passThreshold: 0.65,
        },
        {
          id: 'u8-l1-e3',
          type: 'listening',
          mode: 'build',
          audio: 'We had to call off the event due to the storm.',
          translation: 'Tivemos que cancelar o evento devido à tempestade.',
          wordBank: ['We', 'had', 'to', 'call', 'off', 'the', 'event', 'due', 'to', 'the', 'storm', 'out'],
        },
        {
          id: 'u8-l1-e4',
          type: 'roleplay',
          scene: 'Seu amigo te convida para sair logo após uma semana exaustiva.',
          character: { name: 'Tyler', emoji: '🧑🏽' },
          question: 'Hey, are you up for grabbing a bite tonight?',
          questionTranslation: 'E aí, anima comer alguma coisa hoje à noite?',
          suggestedResponses: [
            { text: 'I would love to, count me in!', translation: 'Eu adoraria, pode contar comigo!' },
            { text: 'Can I take a rain check? I am completely exhausted.', translation: 'Podemos deixar para a próxima? Estou completamente exausto.' },
          ],
          keywords: ['count me in', 'love to', 'rain check', 'exhausted', 'sure', 'tired', 'sounds good'],
        },
        {
          id: 'u8-l1-e5',
          type: 'speaking',
          text: 'Do not give up just because things got tough.',
          translation: 'Não desista só porque as coisas ficaram difíceis.',
        },
      ],
    },
    {
      id: 'u8-l2',
      title: 'Work & Productivity Idioms',
      description: 'Expressões naturais do ambiente profissional',
      exercises: [
        {
          id: 'u8-l2-e1',
          type: 'speaking',
          text: 'Let us wrap up for today and pick this up tomorrow.',
          translation: 'Vamos encerrar por hoje e retomar isso amanhã.',
          passThreshold: 0.65,
        },
        {
          id: 'u8-l2-e2',
          type: 'listening',
          mode: 'choice',
          audio: "I have a lot on my plate right now, so I can't take on new tasks.",
          question: 'O que a expressão "a lot on my plate" significa aqui?',
          options: [
            'Que a pessoa está com muitas responsabilidades no momento.',
            'Que a pessoa está em horário de almoço.',
            'Que a pessoa acabou de concluir todas as tarefas.',
          ],
          correctIndex: 0,
        },
        {
          id: 'u8-l2-e3',
          type: 'listening',
          mode: 'build',
          audio: 'She always goes the extra mile for her clients.',
          translation: 'Ela sempre faz além do esperado pelos clientes dela.',
          wordBank: ['She', 'always', 'goes', 'the', 'extra', 'mile', 'for', 'her', 'clients', 'far'],
        },
        {
          id: 'u8-l2-e4',
          type: 'roleplay',
          scene: 'Sua gestora pergunta sobre o andamento de um relatório complexo.',
          character: { name: 'Dana', emoji: '👩🏾‍💼' },
          question: 'Have you managed to go over the quarterly figures yet?',
          questionTranslation: 'Você já conseguiu revisar os números trimestrais?',
          suggestedResponses: [
            { text: 'Yes, I went through them this morning and everything looks solid.', translation: 'Sim, revisei hoje de manhã e tudo parece sólido.' },
            { text: 'I am still looking into a few discrepancies.', translation: 'Ainda estou investigando algumas discrepâncias.' },
          ],
          keywords: ['went through', 'morning', 'solid', 'looking into', 'discrepancies', 'checked', 'yes'],
        },
        {
          id: 'u8-l2-e5',
          type: 'speaking',
          text: 'We need to make sure everyone is on the same page.',
          translation: 'Precisamos garantir que todos estejam alinhados.',
        },
      ],
    },
    {
      id: 'u8-l3',
      title: 'Social & Casual Expressions',
      description: 'Soando natural em conversas informais',
      exercises: [
        {
          id: 'u8-l3-e1',
          type: 'listening',
          mode: 'build',
          audio: 'Let me know when you get back in town.',
          translation: 'Me avise quando você voltar para a cidade.',
          wordBank: ['Let', 'me', 'know', 'when', 'you', 'get', 'back', 'in', 'town', 'out'],
        },
        {
          id: 'u8-l3-e2',
          type: 'roleplay',
          scene: 'Conversando com uma colega sobre uma mudança repentina de planos.',
          character: { name: 'Zoe', emoji: '👩🏼' },
          question: 'Did you hear that the trip might be postponed?',
          questionTranslation: 'Você ouviu falar que a viagem pode ser adiada?',
          suggestedResponses: [
            { text: 'Yeah, right now everything is still up in the air.', translation: 'Pois é, no momento ainda está tudo incerto.' },
            { text: 'No way! I was really looking forward to it.', translation: 'Não brinca! Eu estava muito ansioso por isso.' },
          ],
          keywords: ['up in the air', 'looking forward', 'no way', 'heard', 'hope not', 'yeah'],
        },
        {
          id: 'u8-l3-e3',
          type: 'listening',
          mode: 'choice',
          audio: "Don't sweat it, mistakes happen to everyone.",
          question: 'Qual é a intenção de "Don\'t sweat it"?',
          options: [
            'Tranquilizar a pessoa dizendo para não se preocupar.',
            'Cobrar mais esforço da próxima vez.',
            'Avisar que o ar-condicionado quebrou.',
          ],
          correctIndex: 0,
        },
        {
          id: 'u8-l3-e4',
          type: 'speaking',
          text: 'To be honest, it caught me completely off guard.',
          translation: 'Para ser sincero, isso me pegou completamente de surpresa.',
          passThreshold: 0.65,
        },
        {
          id: 'u8-l3-e5',
          type: 'speaking',
          text: 'It turns out the solution was much simpler than we thought.',
          translation: 'Acabou que a solução era muito mais simples do que pensávamos.',
          passThreshold: 0.65,
        },
      ],
    },
  ],
}

// =====================================================================
// UNIDADE 9 (C1) — Argumentação, Debate & Persuasão
// =====================================================================

const unit9: Unit = {
  id: 'u9',
  number: 9,
  title: 'Argumentação, Debate & Persuasão',
  description: 'C1 · Estruture argumentos sólidos, rebata objeções e persuada com elegância.',
  color: 'purple',
  lessons: [
    {
      id: 'u9-l1',
      title: 'Structuring an Argument',
      description: 'Defendendo teses com clareza e evidências',
      exercises: [
        {
          id: 'u9-l1-e1',
          type: 'listening',
          mode: 'choice',
          audio: 'The evidence overwhelmingly suggests that remote work boosts retention.',
          question: 'O que a frase afirma?',
          options: [
            'As evidências indicam fortemente que o trabalho remoto aumenta a retenção.',
            'Não há dados suficientes sobre o impacto do trabalho remoto.',
            'O trabalho presencial reduz a rotatividade em todas as áreas.',
          ],
          correctIndex: 0,
        },
        {
          id: 'u9-l1-e2',
          type: 'speaking',
          text: 'From a strategic standpoint, this investment will pay off in the long run.',
          translation: 'De um ponto de vista estratégico, este investimento compensará no longo prazo.',
          passThreshold: 0.65,
        },
        {
          id: 'u9-l1-e3',
          type: 'listening',
          mode: 'build',
          audio: 'There is a compelling case for adopting this approach.',
          translation: 'Há um argumento convincente para adotar essa abordagem.',
          wordBank: ['There', 'is', 'a', 'compelling', 'case', 'for', 'adopting', 'this', 'approach', 'against'],
        },
        {
          id: 'u9-l1-e4',
          type: 'roleplay',
          scene: 'Debate sobre prioridades de produto com o diretor de operações.',
          character: { name: 'Victor', emoji: '👨🏻‍💼' },
          question: 'What makes you so confident that this strategy will outperform the current one?',
          questionTranslation: 'O que te deixa tão confiante de que essa estratégia superará a atual?',
          suggestedResponses: [
            { text: 'The pilot data clearly shows higher engagement and lower costs.', translation: 'Os dados do piloto mostram claramente maior engajamento e custos menores.' },
            { text: 'It addresses the main bottleneck our customers have been complaining about.', translation: 'Ela resolve o principal gargalo sobre o qual nossos clientes vêm reclamando.' },
          ],
          keywords: ['data', 'engagement', 'costs', 'bottleneck', 'customers', 'pilot', 'evidence', 'shows'],
        },
        {
          id: 'u9-l1-e5',
          type: 'speaking',
          text: 'Not only does it save time, but it also improves overall quality.',
          translation: 'Isso não apenas economiza tempo, como também melhora a qualidade geral.',
          passThreshold: 0.65,
        },
      ],
    },
    {
      id: 'u9-l2',
      title: 'Counterarguments & Nuance',
      description: 'Refutando com diplomacia e precisão',
      exercises: [
        {
          id: 'u9-l2-e1',
          type: 'speaking',
          text: 'While that may be true in theory, in practice the results vary widely.',
          translation: 'Embora isso possa ser verdade na teoria, na prática os resultados variam muito.',
          passThreshold: 0.65,
        },
        {
          id: 'u9-l2-e2',
          type: 'listening',
          mode: 'build',
          audio: 'That argument overlooks a crucial factor.',
          translation: 'Esse argumento ignora um fator crucial.',
          wordBank: ['That', 'argument', 'overlooks', 'a', 'crucial', 'factor', 'confirms', 'minor'],
        },
        {
          id: 'u9-l2-e3',
          type: 'roleplay',
          scene: 'Painel de discussão sobre automação e inteligência artificial.',
          character: { name: 'Dr. Lin', emoji: '👩🏻‍🏫' },
          question: 'Do you not think full automation risks alienating our core users?',
          questionTranslation: 'Você não acha que a automação total corre o risco de afastar nossos usuários principais?',
          suggestedResponses: [
            { text: 'That is a valid concern, which is why human oversight remains essential.', translation: 'Essa é uma preocupação válida, e é por isso que a supervisão humana continua essencial.' },
            { text: 'I take your point, yet automation actually frees the team for deeper support.', translation: 'Entendo seu ponto, mas a automação na verdade libera a equipe para um suporte mais profundo.' },
          ],
          keywords: ['valid concern', 'human oversight', 'take your point', 'essential', 'frees', 'support', 'balance'],
        },
        {
          id: 'u9-l2-e4',
          type: 'listening',
          mode: 'choice',
          audio: 'Correlation does not necessarily imply causation in this dataset.',
          question: 'Qual é a ressalva metodológica feita?',
          options: [
            'Que correlação não implica necessariamente causalidade nos dados.',
            'Que os dados provam uma relação direta de causa e efeito.',
            'Que o conjunto de dados deve ser descartado imediatamente.',
          ],
          correctIndex: 0,
        },
        {
          id: 'u9-l2-e5',
          type: 'speaking',
          text: 'We must weigh the potential benefits against the unintended consequences.',
          translation: 'Devemos ponderar os benefícios potenciais frente às consequências não intencionais.',
          passThreshold: 0.65,
        },
      ],
    },
    {
      id: 'u9-l3',
      title: 'The Art of Persuasion',
      description: 'Conquistando adesão de decisores',
      exercises: [
        {
          id: 'u9-l3-e1',
          type: 'listening',
          mode: 'choice',
          audio: 'If we fail to act now, we risk falling behind our main competitors.',
          question: 'Qual gatilho persuasivo está sendo usado?',
          options: [
            'Senso de urgência diante do risco de ficar atrás da concorrência.',
            'Promessa de redução imediata de impostos.',
            'Elogio ao desempenho histórico da equipe.',
          ],
          correctIndex: 0,
        },
        {
          id: 'u9-l3-e2',
          type: 'listening',
          mode: 'build',
          audio: 'The upside far outweighs the initial risk.',
          translation: 'O ganho potencial supera em muito o risco inicial.',
          wordBank: ['The', 'upside', 'far', 'outweighs', 'the', 'initial', 'risk', 'downside', 'under'],
        },
        {
          id: 'u9-l3-e3',
          type: 'roleplay',
          scene: 'Apresentando uma proposta de inovação para a diretoria.',
          character: { name: 'Arthur', emoji: '🧔🏼‍♂️' },
          question: 'Why should we allocate resources to this initiative right now?',
          questionTranslation: 'Por que deveríamos alocar recursos para esta iniciativa agora?',
          suggestedResponses: [
            { text: 'Because early adoption gives us a decisive competitive advantage.', translation: 'Porque a adoção antecipada nos dá uma vantagem competitiva decisiva.' },
            { text: 'Because delaying the transition will only increase our technical debt.', translation: 'Porque adiar a transição só aumentará nossa dívida técnica.' },
          ],
          keywords: ['competitive advantage', 'early adoption', 'technical debt', 'delaying', 'return', 'opportunity'],
        },
        {
          id: 'u9-l3-e4',
          type: 'speaking',
          text: 'By aligning our incentives, we create sustainable value for all stakeholders.',
          translation: 'Ao alinhar nossos incentivos, criamos valor sustentável para todos os envolvidos.',
          passThreshold: 0.65,
        },
        {
          id: 'u9-l3-e5',
          type: 'speaking',
          text: 'The question is not whether we should adapt, but how fast we can execute.',
          translation: 'A questão não é se devemos nos adaptar, mas quão rápido conseguimos executar.',
          passThreshold: 0.65,
        },
      ],
    },
  ],
}

// =====================================================================
// UNIDADE 10 (C1) — Inglês Executivo, Jurídico & Apresentações Formais
// =====================================================================

const unit10: Unit = {
  id: 'u10',
  number: 10,
  title: 'Inglês Executivo, Jurídico & Apresentações Formais',
  description: 'C1 · Conduza reuniões de conselho, analise cláusulas contratuais e apresente em alto nível.',
  color: 'green',
  lessons: [
    {
      id: 'u10-l1',
      title: 'Executive Presentations',
      description: 'Comunicação clara para liderança e conselho',
      exercises: [
        {
          id: 'u10-l1-e1',
          type: 'speaking',
          text: 'Today I would like to walk you through our strategic roadmap for the upcoming quarter.',
          translation: 'Hoje eu gostaria de apresentar nosso roteiro estratégico para o próximo trimestre.',
          passThreshold: 0.65,
        },
        {
          id: 'u10-l1-e2',
          type: 'listening',
          mode: 'choice',
          audio: 'Despite macroeconomic headwinds, our recurring revenue grew steadily.',
          question: 'Qual foi o resultado apresentado?',
          options: [
            'A receita recorrente cresceu de forma consistente apesar do cenário macroeconômico adverso.',
            'A receita caiu por causa da crise macroeconômica.',
            'A empresa suspendeu as projeções financeiras do ano.',
          ],
          correctIndex: 0,
        },
        {
          id: 'u10-l1-e3',
          type: 'listening',
          mode: 'build',
          audio: 'Let us turn our attention to the key performance indicators.',
          translation: 'Vamos voltar nossa atenção para os principais indicadores de desempenho.',
          wordBank: ['Let', 'us', 'turn', 'our', 'attention', 'to', 'the', 'key', 'performance', 'indicators'],
        },
        {
          id: 'u10-l1-e4',
          type: 'roleplay',
          scene: 'Sessão de perguntas e respostas após sua apresentação para o conselho.',
          character: { name: 'Helena', emoji: '👩🏽‍💼' },
          question: 'How do you plan to mitigate the operational risks in the new market?',
          questionTranslation: 'Como vocês planejam mitigar os riscos operacionais no novo mercado?',
          suggestedResponses: [
            { text: 'We are partnering with an established local distributor to reduce exposure.', translation: 'Estamos fechando parceria com um distribuidor local consolidado para reduzir a exposição.' },
            { text: 'We will roll out the expansion in phases with strict financial milestones.', translation: 'Faremos a expansão em fases com metas financeiras rigorosas.' },
          ],
          keywords: ['partnering', 'distributor', 'exposure', 'phases', 'milestones', 'diversify', 'compliance', 'reduce'],
        },
        {
          id: 'u10-l1-e5',
          type: 'speaking',
          text: 'In conclusion, the fundamentals of our business remain exceptionally strong.',
          translation: 'Em conclusão, os fundamentos do nosso negócio permanecem excepcionalmente sólidos.',
          passThreshold: 0.65,
        },
      ],
    },
    {
      id: 'u10-l2',
      title: 'Legal & Contractual English',
      description: 'Termos contratuais, compliance e responsabilidade',
      exercises: [
        {
          id: 'u10-l2-e1',
          type: 'listening',
          mode: 'choice',
          audio: 'Either party may terminate the agreement upon written notice.',
          question: 'O que a cláusula estabelece?',
          options: [
            'Qualquer uma das partes pode rescindir o contrato mediante aviso prévio por escrito.',
            'O contrato não pode ser rescindido sob nenhuma hipótese.',
            'Apenas o contratante pode cancelar o acordo verbalmente.',
          ],
          correctIndex: 0,
        },
        {
          id: 'u10-l2-e2',
          type: 'speaking',
          text: 'All confidential information disclosed under this agreement shall remain protected.',
          translation: 'Todas as informações confidenciais divulgadas sob este contrato permanecerão protegidas.',
          passThreshold: 0.65,
        },
        {
          id: 'u10-l2-e3',
          type: 'listening',
          mode: 'build',
          audio: 'This clause limits our liability in the event of a breach.',
          translation: 'Esta cláusula limita nossa responsabilidade em caso de violação.',
          wordBank: ['This', 'clause', 'limits', 'our', 'liability', 'in', 'the', 'event', 'of', 'a', 'breach'],
        },
        {
          id: 'u10-l2-e4',
          type: 'roleplay',
          scene: 'Revisão de minuta contratual com o departamento jurídico da contraparte.',
          character: { name: 'Counsel Grant', emoji: '👨🏻‍⚖️' },
          question: 'Have you reviewed the intellectual property provisions in the draft?',
          questionTranslation: 'Você revisou as disposições de propriedade intelectual na minuta?',
          suggestedResponses: [
            { text: 'Yes, but we need to clarify that pre-existing assets remain our sole property.', translation: 'Sim, mas precisamos esclarecer que ativos pré-existentes continuam sendo nossa propriedade exclusiva.' },
            { text: 'We reviewed them and proposed a minor amendment regarding licensing rights.', translation: 'Nós as revisamos e propusemos um pequeno aditivo sobre direitos de licenciamento.' },
          ],
          keywords: ['clarify', 'property', 'assets', 'amendment', 'licensing', 'reviewed', 'clause', 'rights'],
        },
        {
          id: 'u10-l2-e5',
          type: 'speaking',
          text: 'The agreement is subject to approval by our legal and compliance department.',
          translation: 'O contrato está sujeito à aprovação do nosso departamento jurídico e de compliance.',
          passThreshold: 0.65,
        },
      ],
    },
    {
      id: 'u10-l3',
      title: 'Stakeholder & Crisis Communication',
      description: 'Transparência e liderança sob escrutínio',
      exercises: [
        {
          id: 'u10-l3-e1',
          type: 'listening',
          mode: 'build',
          audio: 'Transparency is paramount when addressing public concerns.',
          translation: 'A transparência é fundamental ao responder a preocupações públicas.',
          wordBank: ['Transparency', 'is', 'paramount', 'when', 'addressing', 'public', 'concerns', 'optional'],
        },
        {
          id: 'u10-l3-e2',
          type: 'speaking',
          text: 'We take full accountability and have already implemented corrective measures.',
          translation: 'Assumimos total responsabilidade e já implementamos medidas corretivas.',
          passThreshold: 0.65,
        },
        {
          id: 'u10-l3-e3',
          type: 'listening',
          mode: 'choice',
          audio: 'We are conducting a thorough independent audit to ensure full compliance.',
          question: 'Que medida a organização anunciou?',
          options: [
            'Uma auditoria independente minuciosa para garantir total conformidade.',
            'O encerramento definitivo das operações internacionais.',
            'A demissão de todos os auditores externos.',
          ],
          correctIndex: 0,
        },
        {
          id: 'u10-l3-e4',
          type: 'roleplay',
          scene: 'Coletiva com acionistas após uma mudança regulatória no setor.',
          character: { name: 'Logan', emoji: '🎙️' },
          question: 'How will the new regulations impact our long-term profitability?',
          questionTranslation: 'Como as novas regulamentações impactarão nossa lucratividade no longo prazo?',
          suggestedResponses: [
            { text: 'We anticipated this shift and already adapted our compliance framework.', translation: 'Antecipamos essa mudança e já adaptamos nossa estrutura de conformidade.' },
            { text: 'In the short term there are adjustments, but our long-term outlook remains positive.', translation: 'No curto prazo há ajustes, mas nossa perspectiva de longo prazo continua positiva.' },
          ],
          keywords: ['anticipated', 'compliance', 'adapted', 'long-term', 'outlook', 'positive', 'adjustments', 'prepared'],
        },
        {
          id: 'u10-l3-e5',
          type: 'speaking',
          text: 'Our priority is to safeguard the trust of our clients and partners.',
          translation: 'Nossa prioridade é preservar a confiança de nossos clientes e parceiros.',
          passThreshold: 0.65,
        },
      ],
    },
  ],
}

// =====================================================================
// UNIDADE 11 (C2) — Nuances, Idiomatismos Complexos & Fala Rápida
// =====================================================================

const unit11: Unit = {
  id: 'u11',
  number: 11,
  title: 'Nuances, Idiomatismos Complexos & Fala Rápida',
  description: 'C2 · Capte sutilezas, ironia fina, inversões estilísticas e expressões avançadas.',
  color: 'blue',
  lessons: [
    {
      id: 'u11-l1',
      title: 'Subtlety, Hedging & Diplomacy',
      description: 'Dizendo muito nas entrelinhas',
      exercises: [
        {
          id: 'u11-l1-e1',
          type: 'listening',
          mode: 'choice',
          audio: 'With all due respect, that assumption seems somewhat optimistic.',
          question: 'O que o falante realmente quer dizer?',
          options: [
            'Que considera a premissa irrealista, mas está discordando com extrema polidez.',
            'Que concorda totalmente e está entusiasmado com a premissa.',
            'Que não entendeu os cálculos apresentados.',
          ],
          correctIndex: 0,
        },
        {
          id: 'u11-l1-e2',
          type: 'speaking',
          text: 'I would be inclined to exercise caution before jumping to conclusions.',
          translation: 'Eu tenderia a ter cautela antes de tirar conclusões precipitadas.',
          passThreshold: 0.65,
        },
        {
          id: 'u11-l1-e3',
          type: 'listening',
          mode: 'build',
          audio: 'It is not entirely inconceivable that the market could rebound.',
          translation: 'Não é totalmente inconcebível que o mercado possa se recuperar.',
          wordBank: ['It', 'is', 'not', 'entirely', 'inconceivable', 'that', 'the', 'market', 'could', 'rebound'],
        },
        {
          id: 'u11-l1-e4',
          type: 'roleplay',
          scene: 'Um diretor pede sua opinião sincera sobre uma proposta arriscada de um parceiro.',
          character: { name: 'Evelyn', emoji: '👩🏼‍💼' },
          question: 'Between you and me, do you think their proposal holds water?',
          questionTranslation: 'Aqui entre nós, você acha que a proposta deles se sustenta?',
          suggestedResponses: [
            { text: 'To put it mildly, their projections leave a lot to be desired.', translation: 'Para dizer o mínimo, as projeções deles deixam muito a desejar.' },
            { text: 'On the surface it looks promising, yet the underlying assumptions are shaky.', translation: 'Superficialmente parece promissora, mas as premissas subjacentes são frágeis.' },
          ],
          keywords: ['projections', 'desired', 'surface', 'promising', 'assumptions', 'shaky', 'mildly', 'skeptical'],
        },
        {
          id: 'u11-l1-e5',
          type: 'speaking',
          text: 'There is a fine line between confidence and complacency.',
          translation: 'Há uma linha tênue entre a confiança e a complacência.',
          passThreshold: 0.65,
        },
      ],
    },
    {
      id: 'u11-l2',
      title: 'Advanced Idioms & Inversions',
      description: 'Estruturas enfáticas de nível nativo culto',
      exercises: [
        {
          id: 'u11-l2-e1',
          type: 'speaking',
          text: 'Seldom have I witnessed such a seamless execution of a complex project.',
          translation: 'Raramente testemunhei uma execução tão impecável de um projeto complexo.',
          passThreshold: 0.65,
        },
        {
          id: 'u11-l2-e2',
          type: 'listening',
          mode: 'build',
          audio: 'Little did we know that this decision would transform the industry.',
          translation: 'Mal sabíamos nós que essa decisão transformaria a indústria.',
          wordBank: ['Little', 'did', 'we', 'know', 'that', 'this', 'decision', 'would', 'transform', 'the', 'industry'],
        },
        {
          id: 'u11-l2-e3',
          type: 'listening',
          mode: 'choice',
          audio: 'Not until the final audit came out did the board grasp the gravity of the situation.',
          question: 'Quando o conselho compreendeu a gravidade da situação?',
          options: [
            'Somente quando a auditoria final foi divulgada.',
            'Muito antes do início da auditoria.',
            'O conselho nunca chegou a ler a auditoria.',
          ],
          correctIndex: 0,
        },
        {
          id: 'u11-l2-e4',
          type: 'roleplay',
          scene: 'Conversa pós-evento sobre uma negociação que quase fracassou.',
          character: { name: 'Sterling', emoji: '🧔🏻‍♂️' },
          question: 'How on earth did you manage to salvage that deal at the eleventh hour?',
          questionTranslation: 'Como diabos você conseguiu salvar aquele acordo aos quarenta e cinco do segundo tempo?',
          suggestedResponses: [
            { text: 'Had we not offered a performance guarantee, they would have walked away.', translation: 'Se não tivéssemos oferecido uma garantia de desempenho, eles teriam desistido.' },
            { text: 'It was touch and go, but addressing their core objection turned the tide.', translation: 'Foi por um triz, mas responder à principal objeção deles virou o jogo.' },
          ],
          keywords: ['had we not', 'guarantee', 'walked away', 'touch and go', 'turned the tide', 'objection', 'compromise'],
        },
        {
          id: 'u11-l2-e5',
          type: 'speaking',
          text: 'Under no circumstances should quality be sacrificed for the sake of speed.',
          translation: 'Sob nenhuma circunstância a qualidade deve ser sacrificada em nome da velocidade.',
          passThreshold: 0.65,
        },
      ],
    },
    {
      id: 'u11-l3',
      title: 'Fast Native Speech & Collocations',
      description: 'Colocações avançadas e ritmo natural acelerado',
      exercises: [
        {
          id: 'u11-l3-e1',
          type: 'listening',
          mode: 'choice',
          audio: 'Let us not beat around the bush; we need to address the elephant in the room.',
          question: 'O que o falante está propondo?',
          options: [
            'Parar de rodeios e enfrentar diretamente o problema óbvio que todos estão evitando.',
            'Adiar os assuntos polêmicos para não causar desconforto.',
            'Recomeçar a reunião desde a introdução.',
          ],
          correctIndex: 0,
        },
        {
          id: 'u11-l3-e2',
          type: 'speaking',
          text: 'We cannot afford to rest on our laurels in such a cutthroat market.',
          translation: 'Não podemos nos dar ao luxo de dormir sobre os louros em um mercado tão acirrado.',
          passThreshold: 0.65,
        },
        {
          id: 'u11-l3-e3',
          type: 'listening',
          mode: 'build',
          audio: 'That remark really hit the nail on the head.',
          translation: 'Aquele comentário acertou em cheio na mosca.',
          wordBank: ['That', 'remark', 'really', 'hit', 'the', 'nail', 'on', 'the', 'head', 'hand'],
        },
        {
          id: 'u11-l3-e4',
          type: 'roleplay',
          scene: 'Bate-papo rápido no corredor com uma executiva sênior.',
          character: { name: 'Miranda', emoji: '👩🏻‍🦳' },
          question: 'We are pressed for time—can you give me the gist of the report?',
          questionTranslation: 'Estamos sem tempo — pode me dar a essência do relatório?',
          suggestedResponses: [
            { text: 'In a nutshell, customer retention is up and acquisition costs are down.', translation: 'Em resumo, a retenção de clientes subiu e o custo de aquisição caiu.' },
            { text: 'The bottom line is that the new pricing model exceeded expectations.', translation: 'O resultado final é que o novo modelo de preços superou as expectativas.' },
          ],
          keywords: ['in a nutshell', 'retention', 'bottom line', 'exceeded', 'expectations', 'summary', 'basically'],
        },
        {
          id: 'u11-l3-e5',
          type: 'speaking',
          text: 'When all is said and done, consistency is what sets great leaders apart.',
          translation: 'No fim das contas, a consistência é o que diferencia os grandes líderes.',
          passThreshold: 0.65,
        },
      ],
    },
  ],
}

// =====================================================================
// UNIDADE 12 (C2) — Maestria — Simulações de Alta Complexidade
// =====================================================================

const unit12: Unit = {
  id: 'u12',
  number: 12,
  title: 'Maestria — Simulações de Alta Complexidade',
  description: 'C2 · Domínio pleno em pitches globais, entrevistas executivas e discursos de liderança.',
  color: 'purple',
  lessons: [
    {
      id: 'u12-l1',
      title: 'Global Pitch & Venture Capital',
      description: 'Defendendo visão, tração e valuation',
      exercises: [
        {
          id: 'u12-l1-e1',
          type: 'speaking',
          text: 'Our proprietary technology solves a pervasive problem across emerging markets.',
          translation: 'Nossa tecnologia proprietária resolve um problema generalizado em mercados emergentes.',
          passThreshold: 0.65,
        },
        {
          id: 'u12-l1-e2',
          type: 'listening',
          mode: 'choice',
          audio: 'What differentiates our business model is its high operating leverage and network effects.',
          question: 'Quais são os diferenciais do modelo de negócios citado?',
          options: [
            'Alta alavancagem operacional e efeitos de rede.',
            'Baixo investimento em tecnologia e foco apenas local.',
            'Dependência exclusiva de subsídios governamentais.',
          ],
          correctIndex: 0,
        },
        {
          id: 'u12-l1-e3',
          type: 'roleplay',
          scene: 'Reunião decisiva com sócios de um fundo de Venture Capital em São Francisco.',
          character: { name: 'Alistair', emoji: '👨🏼‍💼' },
          question: 'What prevents an incumbent tech giant from replicating your solution overnight?',
          questionTranslation: 'O que impede uma gigante de tecnologia já estabelecida de replicar sua solução da noite para o dia?',
          suggestedResponses: [
            { text: 'Our defensibility lies in our exclusive dataset and deep workflow integration.', translation: 'Nossa defensabilidade está em nossa base de dados exclusiva e profunda integração ao fluxo de trabalho.' },
            { text: 'High switching costs and regulatory approvals create a formidable moat.', translation: 'Altos custos de mudança e aprovações regulatórias criam um fosso competitivo formidável.' },
          ],
          keywords: ['defensibility', 'dataset', 'integration', 'switching costs', 'moat', 'proprietary', 'barrier'],
        },
        {
          id: 'u12-l1-e4',
          type: 'listening',
          mode: 'build',
          audio: 'We have achieved product-market fit with remarkable capital efficiency.',
          translation: 'Alcançamos o ajuste produto-mercado com notável eficiência de capital.',
          wordBank: ['We', 'have', 'achieved', 'product-market', 'fit', 'with', 'remarkable', 'capital', 'efficiency'],
        },
        {
          id: 'u12-l1-e5',
          type: 'speaking',
          text: 'This funding round will enable us to scale our international operations.',
          translation: 'Esta rodada de investimento nos permitirá escalar nossas operações internacionais.',
          passThreshold: 0.65,
        },
      ],
    },
    {
      id: 'u12-l2',
      title: 'C-Level Executive Interview',
      description: 'Articulando liderança, cultura e tomada de decisão',
      exercises: [
        {
          id: 'u12-l2-e1',
          type: 'roleplay',
          scene: 'Entrevista final para uma posição de liderança global.',
          character: { name: 'Nadia', emoji: '👩🏽‍💼' },
          question: 'How would you describe your leadership philosophy during periods of rapid transformation?',
          questionTranslation: 'Como você descreveria sua filosofia de liderança durante períodos de rápida transformação?',
          suggestedResponses: [
            { text: 'I set a clear strategic direction while empowering teams with autonomy and accountability.', translation: 'Defino uma direção estratégica clara enquanto capacito as equipes com autonomia e responsabilidade.' },
            { text: 'I foster psychological safety so people can innovate without fear of failure.', translation: 'Promovo segurança psicológica para que as pessoas possam inovar sem medo de errar.' },
          ],
          keywords: ['strategic', 'empowering', 'autonomy', 'accountability', 'psychological safety', 'innovate', 'clarity', 'trust'],
        },
        {
          id: 'u12-l2-e2',
          type: 'listening',
          mode: 'build',
          audio: 'Culture eats strategy for breakfast when incentives are misaligned.',
          translation: 'A cultura engole a estratégia no café da manhã quando os incentivos estão desalinhados.',
          wordBank: ['Culture', 'eats', 'strategy', 'for', 'breakfast', 'when', 'incentives', 'are', 'misaligned'],
        },
        {
          id: 'u12-l2-e3',
          type: 'speaking',
          text: 'I thrive in ambiguous environments where strategic clarity has to be built from scratch.',
          translation: 'Eu prospero em ambientes ambíguos onde a clareza estratégica precisa ser construída do zero.',
          passThreshold: 0.65,
        },
        {
          id: 'u12-l2-e4',
          type: 'listening',
          mode: 'choice',
          audio: 'The hardest part of executive leadership is deciding what not to pursue.',
          question: 'Qual é a reflexão sobre liderança executiva?',
          options: [
            'A parte mais difícil é decidir o que não priorizar ou perseguir.',
            'Líderes executivos devem aprovar todas as ideias simultaneamente.',
            'A tomada de decisão fica mais simples conforme a empresa cresce.',
          ],
          correctIndex: 0,
        },
        {
          id: 'u12-l2-e5',
          type: 'speaking',
          text: 'Sustainable growth requires balancing short-term execution with long-term vision.',
          translation: 'O crescimento sustentável exige equilibrar a execução de curto prazo com a visão de longo prazo.',
          passThreshold: 0.65,
        },
      ],
    },
    {
      id: 'u12-l3',
      title: 'Keynote & Thought Leadership',
      description: 'Inspirando audiências globais com eloquência',
      exercises: [
        {
          id: 'u12-l3-e1',
          type: 'speaking',
          text: 'We stand at the crossroads of a profound technological transformation.',
          translation: 'Estamos na encruzilhada de uma profunda transformação tecnológica.',
          passThreshold: 0.65,
        },
        {
          id: 'u12-l3-e2',
          type: 'listening',
          mode: 'choice',
          audio: 'Language is not merely a tool for communication; it is a bridge across cultures.',
          question: 'Qual é a metáfora central do discurso?',
          options: [
            'O idioma não é apenas uma ferramenta de comunicação, mas uma ponte entre culturas.',
            'A tecnologia substituirá completamente o aprendizado de idiomas.',
            'A comunicação formal é irrelevante no mundo moderno.',
          ],
          correctIndex: 0,
        },
        {
          id: 'u12-l3-e3',
          type: 'listening',
          mode: 'build',
          audio: 'Fluency is built through deliberate practice and relentless curiosity.',
          translation: 'A fluência é construída por meio de prática deliberada e curiosidade incansável.',
          wordBank: ['Fluency', 'is', 'built', 'through', 'deliberate', 'practice', 'and', 'relentless', 'curiosity'],
        },
        {
          id: 'u12-l3-e4',
          type: 'roleplay',
          scene: 'Encerramento de uma palestra internacional onde a plateia pede um conselho final.',
          character: { name: 'Host Maya', emoji: '🎤' },
          question: 'If you could leave our audience with one core message today, what would it be?',
          questionTranslation: 'Se você pudesse deixar nossa plateia com uma mensagem central hoje, qual seria?',
          suggestedResponses: [
            { text: 'Embrace discomfort, because every meaningful breakthrough happens outside your comfort zone.', translation: 'Abrace o desconforto, porque todo avanço significativo acontece fora da sua zona de conforto.' },
            { text: 'Never stop learning, and use your voice to make a lasting impact.', translation: 'Nunca pare de aprender e use sua voz para causar um impacto duradouro.' },
          ],
          keywords: ['embrace', 'discomfort', 'breakthrough', 'comfort zone', 'learning', 'voice', 'impact', 'courage'],
        },
        {
          id: 'u12-l3-e5',
          type: 'speaking',
          text: 'Your voice has the power to open doors anywhere in the world.',
          translation: 'Sua voz tem o poder de abrir portas em qualquer lugar do mundo.',
          passThreshold: 0.65,
        },
      ],
    },
  ],
}

export const UNITS: Unit[] = [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9, unit10, unit11, unit12]

/** Lista linear de lições, usada para calcular desbloqueios. */
export const ALL_LESSONS: Lesson[] = UNITS.flatMap((u) => u.lessons)

export function findLesson(lessonId: string): { lesson: Lesson; unit: Unit } | undefined {
  for (const unit of UNITS) {
    const lesson = unit.lessons.find((l) => l.id === lessonId)
    if (lesson) return { lesson, unit }
  }
  return undefined
}
