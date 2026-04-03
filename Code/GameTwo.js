const allQuestions = [
    { q: "شيء يضيع كثير في البيت", answers: ["الريموت","المفاتيح","الجوال","الشرابات","المحفظة","السماعات","الشاحن","النظارة"] },
    { q: "مكان تسمعين فيه صراخ", answers: ["المدرسة","الملاعب","المستشفى","البيت","السوق","الملاهي","الشارع","الحفلات"] },
    { q: "شيء يسبب زحمة", answers: ["الحوادث","المدارس","المطر","الإشارات","وقت الذروة","الأعراس","الملاعب","التفتيش"] },
    { q: "شيء يذكّرك بالطفولة", answers: ["الكرتون","الألعاب","المدرسة","الحلوى","العيد","الرحلات","الأصدقاء","الصور القديمة"] },
    { q: "شيء يسبب لك صداع", answers: ["الإزعاج","الجوع","السهر","الجوال","الشمس","العطور","التوتر","القهوة"] },
    { q: "شيء ما تقدرين تعيشين بدونه", answers: ["الجوال","الماء","الأكل","النوم","العائلة","القهوة","الإنترنت","السيارة"] },
    { q: "شيء يخترب بسرعة", answers: ["الشاحن","السماعات","الجوال","الريموت","الألعاب","المظلة","النظارة","المروحة"] },
    { q: "شيء يسبب نوم", answers: ["الشبع","الملل","الظلام","الهدوء","البرد","المحاضرات","السيارة","القراءة"] },
    { q: "شيء يسبب ضحك", answers: ["المقاطع","النكت","الأصدقاء","الأطفال","المواقف الغبية","التقليد","الحيوانات","الذكريات"] },
    { q: "شيء تشترينه كل أسبوع", answers: ["الخبز","الحليب","البيض","الخضار","الفواكه","المناديل","القهوة","الماء"] },
    { q: "شيء يسبب توتر", answers: ["الامتحانات","الزحمة","المقابلات","الانتظار","التأخير","المشاكل","العمل","الأخبار"] },
    { q: "شيء يذكّرك بالعيد", answers: ["العيديات","الملابس الجديدة","الزيارات","الحلويات","التكبيرات","العطور","القهوة","الألعاب"] },
    { q: "شيء يذكّرك بالصيف", answers: ["البحر","الشمس","السفر","العصيرات","المكيف","المسبح","الملابس الخفيفة","الغبار"] },
    { q: "شيء تشترينه للمدرسة", answers: ["الدفاتر","الأقلام","الشنطة","المقلمة","الكتب","العلبة","الألوان","المسطرة"] },
    { q: "شيء تستخدمينه يومياً", answers: ["الجوال","الفرشاة","العطر","الشاحن","المناديل","القهوة","اللابتوب","المرطب"] },
];

let questions = [];
let current = 0;

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function loadQuestion() {
    const q = questions[current];
    document.getElementById('q').textContent = q.q;
    for (let i = 0; i < 8; i++) {
        document.getElementById(`a${i}`).textContent = "";
    }
}

function showAnswer() {
    const q = questions[current];
    const input = document.getElementById('Wa').value.trim().toLowerCase();
    
    q.answers.forEach((ans, i) => {
        const cell = document.getElementById(`a${i}`);
        const ansNorm = ans.trim().toLowerCase();
        if (cell.textContent !== '') return;
        if (input === '' || ansNorm.includes(input) || input.includes(ansNorm)) {
            cell.textContent = `${i + 1}. ${ans}`;
        }
    });
}

function nextQuestion() {
    current = (current + 1) % questions.length;
    loadQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
    questions = shuffle([...allQuestions]);
    loadQuestion();
    document.getElementById('showA').onclick = showAnswer;
    document.getElementById('next').onclick = nextQuestion;
});