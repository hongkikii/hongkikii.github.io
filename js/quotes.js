const quotes = [
    {
        quote: "나를 알고 나를 사랑하라.",
        author: "다산 정약용",
    },
    {
        quote: "진정한 행복은 절제에서 나온다.",
        author: "괴테",
    },
    {
        quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.",
        author: "파울로 코엘료",
    },
    {
        quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
        author: "엘버트 허버드",
    },
    {
        quote: "신은 용기 있는 자를 결코 버리지 않는다.",
        author: "켄러",
    },
    {
        quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다. ",
        author: "앙드레 말로",
    },
    {
        quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.",
        author: "단테",
    },
    {
        quote: "나는 똑똑한 것이 아니라 단지 문제를 더 오래 연구할 뿐이다.",
        author: "알버트 아인슈타인",
    },
    {
        quote: "우선 무엇이 되고자 하는가를 자신에게 말하라. 그리고 해야 할 일을 하라.",
        author: "에픽토테스",
    },
    {
        quote: "상황을 가장 잘 활용하는 사람이 가장 좋은 상황을 맞는다.",
        author: "존 우든",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * (quotes.length))];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
