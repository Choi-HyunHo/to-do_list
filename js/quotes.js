const quotes = [
  {
    quote: '이 순간 살아 있으매 모든 삶의 축복에 대한 경외심을 느끼곤 합니다.',
    author: '오프라 윈프리',
  },
  {
    quote: '늘 행복하고 지혜로운 사람이 되려면 자주 변해야 한다.',
    author: '공자',
  },
  {
    quote: '작은 변화가 일어날 때 진정한 삶을 살게 된다.',
    author: '레프 톨스토이',
  },
  {
    quote: '때로는 살아있는 것조차도 용기가 될 때가 있다. ',
    author: '세네카',
  },
  {
    quote: '누구도 본인의 동의없이 남을 지배할 만큼 훌륭하지는 않다.',
    author: '에이브러햄 링컨',
  },
  {
    quote: '가장 용감한 행동은 자신만을 생각하는 것이다. 큰 소리로',
    author: '가브리엘(코코) 샤넬',
  },
  {
    quote: '자신을 내 보여라. 그러면 재능이 드러날 것이다.',
    author: '발타사르 그라시',
  },
  {
    quote: '희망을 품지 않은 자는 절망도 할 수 없다.',
    author: '조지 버나드 쇼',
  },
  {
    quote: '이루어질 꿈도 이루어지지 않을 꿈만큼 불확실할 수 있다.',
    author: '브렛 버틀러',
  },
  {
    quote: '오늘 할 수 있는 일을 내일로 미루지 마라.',
    author: '벤자민 프랭클린',
  },
]

const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author
