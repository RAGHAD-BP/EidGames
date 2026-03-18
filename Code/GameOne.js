const questions = [
    { q: "ار + 😺", a: "قطار" },
    { q: "ة + 🐫", a: "جملة" },
    { q: "ري + 🐠", a: "سمكري" },
    { q: "م + 🐘", a: "فيلم" },
    { q: "لة + 🐻", a: "دبلة" },
    { q: "زا + 🏠", a: "بيتزا" },
    { q: "ان + 🥛", a: "لبنان" },
    {q:"وف + 📂",a:"ملفوف "},
    {q:"🪶 + ج ",a:"جريش"},
    {q:"💯 + با",a:"بامية"},
    {q:" 😺 + قا ",a:"قاهرة "},
    {q:"🚪 + ك",a:"كباب "}
];

let current = 0;

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

shuffle(questions);

function loadQuestion() {
    document.getElementById("q").textContent = questions[current].q;
    document.getElementById("a").textContent = "";
}

function showAnswer() {
    document.getElementById("a").textContent = questions[current].a;
    document.getElementById("a").style.display = "block";
}

function nextQuestion() {
    current = (current + 1) % questions.length;
    loadQuestion();
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("showA").onclick = showAnswer;
    document.getElementById("next").onclick = nextQuestion;
    loadQuestion();
});