const questions = [
    { q: "ما عاصمة المملكة العربية السعودية؟", correct: "الرياض", wrong: "جدة" },
    { q: "كم عدد أيام الأسبوع؟", correct: "٧", wrong: "٨" },
    { q: "ما لون السماء في النهار؟", correct: "أزرق", wrong: "أخضر" },
    { q: "كم عدد أشهر السنة؟", correct: "١٢", wrong: "١٣" },
    { q: "ما أكبر كوكب في المجموعة الشمسية؟", correct: "المشتري", wrong: "الأرض" },
    { q: "كم عدد أضلاع المثلث؟", correct: "٣", wrong: "٤" },
    { q: "ما عاصمة فرنسا؟", correct: "باريس", wrong: "لندن" },
    { q: "ما الحيوان الذي يُعرف بسفينة الصحراء؟", correct: "الجمل", wrong: "الحصان" },
    { q: "كم عدد ساعات اليوم؟", correct: "٢٤", wrong: "٢٢" },
    { q: "ما أطول نهر في العالم؟", correct: "النيل", wrong: "الأمازون" },
    { q: "ما لون الموز الناضج؟", correct: "أصفر", wrong: "أحمر" },
    { q: "كم عدد أصابع اليد الواحدة؟", correct: "٥", wrong: "٦" },
    { q: "ما عاصمة مصر؟", correct: "القاهرة", wrong: "الإسكندرية" },
    { q: "في أي فصل تتساقط الأوراق؟", correct: "الخريف", wrong: "الربيع" },
    { q: "ما أسرع حيوان بري في العالم؟", correct: "الفهد", wrong: "الأسد" },
    { q: "كم عدد لاعبي كرة القدم في الفريق الواحد؟", correct: "١١", wrong: "١٠" },
    { q: "ما أصغر قارة في العالم؟", correct: "أستراليا", wrong: "أوروبا" },
    { q: "ما الغاز الذي نتنفسه؟", correct: "الأكسجين", wrong: "ثاني أكسيد الكربون" },
    { q: "كم عدد ألوان قوس قزح؟", correct: "٧", wrong: "٥" },
    { q: "ما أعمق بحار ومحيطات العالم؟", correct: "المحيط الهادئ", wrong: "المحيط الهندي" },
    { q: "ما الكوكب الأقرب إلى الشمس؟", correct: "عطارد", wrong: "الزهرة" },
    { q: "كم عدد دقائق الساعة؟", correct: "٦٠", wrong: "٥٠" },
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
    document.getElementById("a").textContent = " الجواب الصحيح: " + questions[current].correct;
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