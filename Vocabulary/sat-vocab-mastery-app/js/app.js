// SAT Vocabulary Mastery App
const vocabularyData = [
    {
        word: "Ubiquitous",
        pos: "adjective",
        definition: "Present, appearing, or found everywhere",
        example: "Smartphones have become ubiquitous in modern society.",
        category: "advanced"
    },
    {
        word: "Pragmatic",
        pos: "adjective",
        definition: "Dealing with things in a practical, realistic way",
        example: "The manager took a pragmatic approach to solving the budget crisis.",
        category: "advanced"
    },
    {
        word: "Ambiguous",
        pos: "adjective",
        definition: "Open to more than one interpretation; unclear",
        example: "The politician's ambiguous statement left many voters confused.",
        category: "advanced"
    },
    {
        word: "Meticulous",
        pos: "adjective",
        definition: "Showing great attention to detail; very careful",
        example: "The scientist's meticulous research led to groundbreaking discoveries.",
        category: "advanced"
    },
    {
        word: "Ephemeral",
        pos: "adjective",
        definition: "Lasting for a very short time",
        example: "Social media trends are often ephemeral, fading within days.",
        category: "advanced"
    },
    {
        word: "Recalcitrant",
        pos: "adjective",
        definition: "Stubborn; refusing to obey or comply",
        example: "The recalcitrant student refused to follow classroom rules.",
        category: "advanced"
    },
    {
        word: "Dearth",
        pos: "noun",
        definition: "A scarcity or lack of something",
        example: "There is a dearth of affordable housing in the city.",
        category: "intermediate"
    },
    {
        word: "Sagacious",
        pos: "adjective",
        definition: "Having good judgment; wise",
        example: "The sagacious leader made decisions that benefited everyone.",
        category: "advanced"
    }
];

const quizQuestions = [
    {
        question: "Which word means 'present everywhere'?",
        options: ["Ephemeral", "Ubiquitous", "Ambiguous", "Meticulous"],
        correct: 1
    },
    {
        question: "What does 'pragmatic' mean?",
        options: ["Aggressive", "Practical and realistic", "Confused", "Ancient"],
        correct: 1
    },
    {
        question: "Which word describes something lasting a short time?",
        options: ["Recalcitrant", "Sagacious", "Ephemeral", "Ubiquitous"],
        correct: 2
    }
];

let currentCardIndex = 0;
let mastered = 0;
let learning = 0;
let quiz = { answered: 0, correct: 0 };

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadFlashcards();
    updateStats();
}

function cardInner(vocab, hint){
  return `<span class="hint">${hint}</span><div class="vocab-word">${vocab.word}</div><div class="vocab-pos">${vocab.pos}</div><div class="vocab-definition">${vocab.definition}</div><div class="vocab-example">"${vocab.example}"</div>`;
}
function collapsedInner(word){
  return `<span class="hint">Tap to reveal</span><div class="vocab-word">${word}</div><div class="vocab-pos" style="opacity:.6">tap to flip</div>`;
}
function loadFlashcards() {
    const container = document.getElementById('cardContainer');
    if(!container) return;
    container.innerHTML = '';
    vocabularyData.forEach((vocab) => {
        const card = document.createElement('div');
        card.className = 'vocab-card';
        card.setAttribute('role','button');
        card.setAttribute('tabindex','0');
        card.setAttribute('aria-label', `Flashcard: ${vocab.word}. Press to flip.`);
        card.onclick = () => flipCard(card);
        card.onkeydown = (e) => { if(e.key==='Enter'||e.key===' ') { e.preventDefault(); flipCard(card); } };
        card.innerHTML = collapsedInner(vocab.word);
        container.appendChild(card);
    });
    syncProgress();
}
function syncProgress(){
  const bar = document.getElementById('progressBar');
  const fill = document.getElementById('progressFill');
  if(!fill) return;
  const pct = vocabularyData.length ? Math.round((mastered / vocabularyData.length)*100) : 0;
  fill.style.width = pct + '%';
  if(bar) bar.setAttribute('aria-valuenow', String(pct));
}
function flipCard(card) {
    const idx = Array.from(card.parentElement.children).indexOf(card);
    const vocab = vocabularyData[idx];
    const isFlipped = card.classList.contains('flipped');
    if (isFlipped) {
        card.classList.remove('flipped');
        card.innerHTML = collapsedInner(vocab.word);
    } else {
        card.classList.add('flipped');
        card.innerHTML = cardInner(vocab, 'Tap to hide');
    }
}

function startQuiz() {
    const quizSection = document.getElementById('quizSection');
    quizSection.classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    if (quiz.answered >= quizQuestions.length) {
        showResults();
        return;
    }

    const q = quizQuestions[quiz.answered];
    document.getElementById('quizQuestion').textContent = q.question;
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';

    q.options.forEach((option, index) => {
        const btn = document.createElement('div');
        btn.className = 'option';
        btn.textContent = option;
        btn.onclick = () => selectAnswer(index, q.correct);
        optionsContainer.appendChild(btn);
    });
}

function selectAnswer(selected, correct) {
    quiz.answered++;
    if (selected === correct) {
        quiz.correct++;
        document.querySelectorAll('.option')[selected].classList.add('correct');
        showFeedback('Correct!', 'success');
    } else {
        document.querySelectorAll('.option')[selected].classList.add('incorrect');
        document.querySelectorAll('.option')[correct].classList.add('correct');
        showFeedback('Incorrect. The correct answer is highlighted.', 'error');
    }

    setTimeout(() => {
        loadQuestion();
    }, 1500);
}

function showFeedback(message, type) {
    const feedback = document.getElementById('quizFeedback');
    feedback.textContent = message;
    feedback.className = `feedback ${type}`;
}

function showResults() {
    const percentage = Math.round((quiz.correct / quizQuestions.length) * 100);
    document.getElementById('quizSection').innerHTML = `
        <h2>Quiz Complete!</h2>
        <p>Score: ${quiz.correct} / ${quizQuestions.length} (${percentage}%)</p>
        <button onclick="resetQuiz()">Take Quiz Again</button>
        <button class="secondary" onclick="location.reload()">Back to Flashcards</button>
    `;
}

function resetQuiz() {
    quiz = { answered: 0, correct: 0 };
    document.getElementById('quizFeedback').innerHTML = '';
    loadQuestion();
}

function updateStats() {
    const t = document.getElementById('totalWords'); if(t) t.textContent = vocabularyData.length;
    const m = document.getElementById('masteredCount'); if(m) m.textContent = mastered;
    const l = document.getElementById('learningCount'); if(l) l.textContent = Math.max(0, vocabularyData.length - mastered);
    const q = document.getElementById('quizScore'); if(q) q.textContent = quiz.correct;
    syncProgress();
}

function markMastered() {
    mastered++;
    updateStats();
    showMessage('Added to mastered words!');
}

function showMessage(msg) {
    // Could show a toast notification here
    console.log(msg);
}
