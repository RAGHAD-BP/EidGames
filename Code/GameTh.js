const questions = [
    { q: "اذكري حيوان يبدأ بحرف س", a: "سِمكة" },
    { q: "اذكري مدينة تبدأ بحرف م", a: "مكة" },
    { q: "اذكري نبات يبدأ بحرف ب", a: "بقدونس" },
    { q: "اذكري أثاث يبدأ بحرف ك", a: "كرسي" },
    { q: "اذكري دولة تبدأ بحرف ف", a: "فرنسا" },
    { q: "اذكري أكلة تبدأ بحرف ش", a: "شوربة" },
    { q: "اذكري مشروب يبدأ بحرف ع", a: "عصير" },
    { q: "اذكري وظيفة تبدأ بحرف د", a: "دكتورة" },
    { q: "اذكري تطبيق يبدأ بحرف ت", a: "تيك توك" },
    { q: "اذكري شيء في المطبخ يبدأ بحرف ق", a: "قدر" },
    { q: "اذكري شيء في السيارة يبدأ بحرف م", a: "محرك" },
    { q: "اذكري شيء نلبسه يبدأ بحرف م", a: "معطف" },
    { q: "اذكري فاكهة تبدأ بحرف ر", a: "رمان" },
    { q: "اذكري خضار تبدأ بحرف ط", a: "طماطم" },
    { q: "اذكري حيوان في البحر يبدأ بحرف د", a: "دلفين" },
    { q: "اذكري حيوان يخوّف يبدأ بحرف ع", a: "عقرب" },
    { q: "اذكري حيوان يبدأ بحرف ن", a: "نمر" },
    { q: "اذكري مدينة تبدأ بحرف ج", a: "جدة" },
    { q: "اذكري نبات يبدأ بحرف ز", a: "زعتر" },
    { q: "اذكري دولة تبدأ بحرف ك", a: "كندا" },
    { q: "اذكري مشروب يبدأ بحرف ل", a: "ليمون" },
    { q: "اذكري وظيفة تبدأ بحرف م", a: "معلمة" },
    { q: "اذكري شيء في السيارة يبدأ بحرف ك", a: "كفر" },
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