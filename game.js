// Verb Database
const verbDatabase = {
    1: [ // Level 1: Essential Verbs
        { base: 'be', past: 'was/were', participle: 'been', catalan: 'ser/estar' },
        { base: 'have', past: 'had', participle: 'had', catalan: 'tenir' },
        { base: 'do', past: 'did', participle: 'done', catalan: 'fer' },
        { base: 'go', past: 'went', participle: 'gone', catalan: 'anar' },
        { base: 'get', past: 'got', participle: 'got', catalan: 'obtenir' },
        { base: 'make', past: 'made', participle: 'made', catalan: 'fer/fabricar' },
        { base: 'say', past: 'said', participle: 'said', catalan: 'dir' },
        { base: 'see', past: 'saw', participle: 'seen', catalan: 'veure' },
        { base: 'think', past: 'thought', participle: 'thought', catalan: 'pensar' },
        { base: 'come', past: 'came', participle: 'come', catalan: 'venir' }
    ],
    2: [ // Level 2: Common Verbs
        { base: 'eat', past: 'ate', participle: 'eaten', catalan: 'menjar' },
        { base: 'drink', past: 'drank', participle: 'drunk', catalan: 'beure' },
        { base: 'give', past: 'gave', participle: 'given', catalan: 'donar' },
        { base: 'know', past: 'knew', participle: 'known', catalan: 'saber' },
        { base: 'take', past: 'took', participle: 'taken', catalan: 'agafar' },
        { base: 'buy', past: 'bought', participle: 'bought', catalan: 'comprar' },
        { base: 'bring', past: 'brought', participle: 'brought', catalan: 'portar' },
        { base: 'find', past: 'found', participle: 'found', catalan: 'trobar' },
        { base: 'feel', past: 'felt', participle: 'felt', catalan: 'sentir' },
        { base: 'leave', past: 'left', participle: 'left', catalan: 'sortir' },
        { base: 'let', past: 'let', participle: 'let', catalan: 'deixar' },
        { base: 'lose', past: 'lost', participle: 'lost', catalan: 'perdre' },
        { base: 'meet', past: 'met', participle: 'met', catalan: 'conèixer' },
        { base: 'pay', past: 'paid', participle: 'paid', catalan: 'pagar' },
        { base: 'read', past: 'read', participle: 'read', catalan: 'llegir' },
        { base: 'run', past: 'ran', participle: 'run', catalan: 'córrer' },
        { base: 'sell', past: 'sold', participle: 'sold', catalan: 'vendre' },
        { base: 'send', past: 'sent', participle: 'sent', catalan: 'enviar' },
        { base: 'shut', past: 'shut', participle: 'shut', catalan: 'tancar' },
        { base: 'sing', past: 'sang', participle: 'sung', catalan: 'cantar' }
    ],
    3: [ // Level 3: Extended Verbs
        { base: 'sit', past: 'sat', participle: 'sat', catalan: 'seure' },
        { base: 'speak', past: 'spoke', participle: 'spoken', catalan: 'parlar' },
        { base: 'spend', past: 'spent', participle: 'spent', catalan: 'gastar' },
        { base: 'stand', past: 'stood', participle: 'stood', catalan: 'estar dret' },
        { base: 'swim', past: 'swam', participle: 'swum', catalan: 'nedar' },
        { base: 'teach', past: 'taught', participle: 'taught', catalan: 'ensenyar' },
        { base: 'tell', past: 'told', participle: 'told', catalan: 'contar' },
        { base: 'understand', past: 'understood', participle: 'understood', catalan: 'entendre' },
        { base: 'wear', past: 'wore', participle: 'worn', catalan: 'portar' },
        { base: 'win', past: 'won', participle: 'won', catalan: 'guanyar' },
        { base: 'write', past: 'wrote', participle: 'written', catalan: 'escriure' },
        { base: 'begin', past: 'began', participle: 'begun', catalan: 'començar' },
        { base: 'break', past: 'broke', participle: 'broken', catalan: 'trencar' },
        { base: 'build', past: 'built', participle: 'built', catalan: 'construir' },
        { base: 'catch', past: 'caught', participle: 'caught', catalan: 'atrapar' },
        { base: 'choose', past: 'chose', participle: 'chosen', catalan: 'triar' },
        { base: 'cut', past: 'cut', participle: 'cut', catalan: 'tallar' },
        { base: 'draw', past: 'drew', participle: 'drawn', catalan: 'dibuixar' },
        { base: 'drive', past: 'drove', participle: 'driven', catalan: 'conduir' },
        { base: 'fly', past: 'flew', participle: 'flown', catalan: 'volar' }
    ],
    4: [ // Level 4: All 50 verbs (combination of 1-3)
        // Levels 1-3 combined
    ]
};

// Combine all verbs for Level 4
verbDatabase[4] = [...verbDatabase[1], ...verbDatabase[2], ...verbDatabase[3]];

// Game State
let gameState = {
    studentName: '',
    studentSurname: '',
    currentLevel: 0,
    currentQuestionIndex: 0,
    verbs: [],
    questions: [],
    answers: {},
    score: 0,
    textInputCorrect: 0,
    textInputTotal: 0,
    mcCorrect: 0,
    mcTotal: 0,
    levelHistory: {}
};

// Screen Management
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// Login
function startGame() {
    const name = document.getElementById('nameInput').value.trim();
    const surname = document.getElementById('surnameInput').value.trim();
    
    if (!name || !surname) {
        alert('Please enter your name and surname');
        return;
    }
    
    gameState.studentName = name;
    gameState.studentSurname = surname;
    
    document.getElementById('studentName').textContent = `${name} ${surname}`;
    showScreen('levelScreen');
}

function backToLogin() {
    document.getElementById('nameInput').value = '';
    document.getElementById('surnameInput').value = '';
    showScreen('loginScreen');
}

// Level Selection
function selectLevel(level) {
    gameState.currentLevel = level;
    gameState.verbs = JSON.parse(JSON.stringify(verbDatabase[level]));
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    gameState.answers = {};
    gameState.textInputCorrect = 0;
    gameState.textInputTotal = 0;
    gameState.mcCorrect = 0;
    gameState.mcTotal = 0;
    
    document.getElementById('levelDisplay').textContent = level;
    document.getElementById('totalQuestions').textContent = gameState.verbs.length;
    
    initializeGameQuestions();
    showCurrentQuestion();
    showScreen('gameScreen');
}

function backToLevels() {
    showScreen('levelScreen');
}

// Question Generation
function initializeGameQuestions() {
    gameState.questions = [];
    gameState.verbs.forEach((verb, index) => {
        // Generate 4 different question patterns for each verb
        const patterns = generatePatternsForVerb(verb, index);
        gameState.questions.push(...patterns);
    });
    
    // Shuffle questions
    shuffleArray(gameState.questions);
}

function generatePatternsForVerb(verb, verbIndex) {
    const patterns = [];
    
    // Pattern 1: All Text Input
    patterns.push({
        type: 'all-text',
        verb: verb,
        verbIndex: verbIndex,
        questionType: 'All Text Input'
    });
    
    // Pattern 2: All Multiple Choice
    patterns.push({
        type: 'all-mc',
        verb: verb,
        verbIndex: verbIndex,
        questionType: 'All Multiple Choice'
    });
    
    // Pattern 3: 2 Text + 1 MC
    patterns.push({
        type: 'mixed-2text-1mc',
        verb: verb,
        verbIndex: verbIndex,
        textFields: ['past', 'participle'],
        mcField: 'catalan',
        questionType: '2 Text + 1 MC'
    });
    
    // Pattern 4: 1 Text + 2 MC
    patterns.push({
        type: 'mixed-1text-2mc',
        verb: verb,
        verbIndex: verbIndex,
        textFields: ['catalan'],
        mcFields: ['past', 'participle'],
        questionType: '1 Text + 2 MC'
    });
    
    return patterns;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Display Current Question
function showCurrentQuestion() {
    if (gameState.currentQuestionIndex >= gameState.questions.length) {
        showResults();
        return;
    }
    
    const question = gameState.questions[gameState.currentQuestionIndex];
    const verb = question.verb;
    
    document.getElementById('baseForm').textContent = verb.base;
    document.getElementById('questionNumber').textContent = gameState.currentQuestionIndex + 1;
    
    // Update progress bar
    const progress = ((gameState.currentQuestionIndex + 1) / gameState.questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    // Generate question container
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';
    
    document.getElementById('feedback').classList.remove('show', 'success', 'error');
    document.getElementById('checkBtn').style.display = 'inline-block';
    document.getElementById('nextBtn').style.display = 'none';
    
    generateQuestionUI(question, container);
}

function generateQuestionUI(question, container) {
    const verb = question.verb;
    
    if (question.type === 'all-text') {
        createTextInputFields(container, verb);
    } else if (question.type === 'all-mc') {
        createMultipleChoiceFields(container, verb);
    } else if (question.type === 'mixed-2text-1mc') {
        createMixedFields(container, verb, question.textFields, [question.mcField]);
    } else if (question.type === 'mixed-1text-2mc') {
        createMixedFields(container, verb, question.textFields, question.mcFields);
    }
}

function createTextInputFields(container, verb) {
    const fields = ['past', 'participle', 'catalan'];
    const labels = {
        past: 'Past Simple',
        participle: 'Past Participle',
        catalan: 'Catalan Translation'
    };
    
    fields.forEach(field => {
        const div = document.createElement('div');
        div.className = 'question-row';
        div.innerHTML = `
            <label class="question-label">${labels[field]}:</label>
            <input type="text" class="input-field" id="field-${field}" placeholder="Type your answer...">
        `;
        container.appendChild(div);
        gameState.answers[field] = '';
        
        document.getElementById(`field-${field}`).addEventListener('input', (e) => {
            gameState.answers[field] = e.target.value;
        });
    });
}

function createMultipleChoiceFields(container, verb) {
    const fields = ['past', 'participle', 'catalan'];
    const labels = {
        past: 'Past Simple',
        participle: 'Past Participle',
        catalan: 'Catalan Translation'
    };
    const values = {
        past: verb.past,
        participle: verb.participle,
        catalan: verb.catalan
    };
    
    fields.forEach(field => {
        const div = document.createElement('div');
        div.className = 'question-row';
        const options = generateMultipleChoiceOptions(field === 'catalan' ? verb.catalan : values[field], field);
        
        div.innerHTML = `<label class="question-label">${labels[field]}:</label>`;
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'select-options';
        
        options.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.onclick = () => {
                document.querySelectorAll(`#field-${field} ~ .select-options .option-btn`).forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                gameState.answers[field] = option;
            };
            optionsDiv.appendChild(btn);
        });
        
        div.appendChild(optionsDiv);
        div.id = `field-${field}`;
        container.appendChild(div);
        gameState.answers[field] = '';
    });
}

function createMixedFields(container, verb, textFields, mcFields) {
    const labels = {
        past: 'Past Simple',
        participle: 'Past Participle',
        catalan: 'Catalan Translation'
    };
    const values = {
        past: verb.past,
        participle: verb.participle,
        catalan: verb.catalan
    };
    
    // Shuffle field order
    const allFields = [...textFields, ...mcFields];
    shuffleArray(allFields);
    
    allFields.forEach(field => {
        const div = document.createElement('div');
        div.className = 'question-row';
        
        if (textFields.includes(field)) {
            div.innerHTML = `
                <label class="question-label">${labels[field]}:</label>
                <input type="text" class="input-field" id="field-${field}" placeholder="Type your answer...">
            `;
            container.appendChild(div);
            gameState.answers[field] = '';
            
            document.getElementById(`field-${field}`).addEventListener('input', (e) => {
                gameState.answers[field] = e.target.value;
            });
        } else if (mcFields.includes(field)) {
            div.innerHTML = `<label class="question-label">${labels[field]}:</label>`;
            const options = generateMultipleChoiceOptions(values[field], field);
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'select-options';
            
            options.forEach(option => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.textContent = option;
                btn.onclick = () => {
                    optionsDiv.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
                    gameState.answers[field] = option;
                };
                optionsDiv.appendChild(btn);
            });
            
            div.appendChild(optionsDiv);
            container.appendChild(div);
            gameState.answers[field] = '';
        }
    });
}

function generateMultipleChoiceOptions(correctAnswer, fieldType) {
    const allAnswers = new Set();
    allAnswers.add(correctAnswer);
    
    // Get distractors from other verbs
    const allVerbs = gameState.verbs;
    const shuffledVerbs = [...allVerbs].sort(() => Math.random() - 0.5);
    
    let count = 0;
    for (let verb of shuffledVerbs) {
        if (count >= 3) break;
        const values = {
            past: verb.past,
            participle: verb.participle,
            catalan: verb.catalan
        };
        allAnswers.add(values[fieldType]);
        count++;
    }
    
    // If we don't have enough distractors, add some generic wrong answers
    if (allAnswers.size < 4) {
        if (fieldType === 'past' || fieldType === 'participle') {
            allAnswers.add('did');
            allAnswers.add('gone');
            allAnswers.add('made');
        } else if (fieldType === 'catalan') {
            allAnswers.add('és');
            allAnswers.add('vull');
        }
    }
    
    const options = Array.from(allAnswers).slice(0, 4);
    shuffleArray(options);
    return options;
}

// Check Answers
function checkAnswers() {
    const question = gameState.questions[gameState.currentQuestionIndex];
    const verb = question.verb;
    const feedback = document.getElementById('feedback');
    
    let correct = 0;
    let total = 0;
    const fields = ['past', 'participle', 'catalan'];
    
    fields.forEach(field => {
        total++;
        const userAnswer = gameState.answers[field] ? gameState.answers[field].trim().toLowerCase() : '';
        const correctAnswer = verb[field].toLowerCase();
        
        // Handle multiple acceptable answers (e.g., "was/were")
        const correctAnswers = correctAnswer.split('/').map(a => a.trim().toLowerCase());
        const isCorrect = correctAnswers.some(ca => ca === userAnswer || userAnswer.includes(ca.replace(/\s+/g, '')));
        
        if (isCorrect) {
            correct++;
            
            // Mark input as correct
            const inputField = document.getElementById(`field-${field}`);
            if (inputField && inputField.type === 'text') {
                inputField.classList.add('correct');
            }
            
            // Mark option as correct
            const optionBtns = document.querySelectorAll(`#field-${field} ~ .select-options .option-btn, #field-${field} .select-options .option-btn`);
            optionBtns.forEach(btn => {
                if (btn.textContent.toLowerCase() === userAnswer) {
                    btn.classList.add('correct');
                }
            });
        } else {
            // Mark input as incorrect
            const inputField = document.getElementById(`field-${field}`);
            if (inputField && inputField.type === 'text') {
                inputField.classList.add('incorrect');
                inputField.value = `${inputField.value} ✗ Correct: ${verb[field]}`;
            }
            
            // Highlight correct option
            const optionBtns = document.querySelectorAll(`#field-${field} ~ .select-options .option-btn, #field-${field} .select-options .option-btn`);
            optionBtns.forEach(btn => {
                if (btn.textContent.toLowerCase().includes(correctAnswer.toLowerCase()) || 
                    correctAnswers.some(ca => btn.textContent.toLowerCase().includes(ca))) {
                    btn.classList.add('correct');
                }
            });
        }
        
        // Track stats
        if (question.type.includes('text')) {
            gameState.textInputTotal++;
            if (isCorrect) gameState.textInputCorrect++;
        }
        if (question.type.includes('mc')) {
            gameState.mcTotal++;
            if (isCorrect) gameState.mcCorrect++;
        }
    });
    
    gameState.score += correct;
    
    // Show feedback
    const percentage = Math.round((correct / total) * 100);
    if (correct === total) {
        feedback.className = 'feedback show success';
        feedback.innerHTML = `✓ Perfect! +${correct} points<br>go → ${verb.past} → ${verb.participle} (${verb.catalan})`;
    } else {
        feedback.className = 'feedback show error';
        feedback.innerHTML = `${correct}/${total} correct. The complete form is: ${verb.base} → ${verb.past} → ${verb.participle} (${verb.catalan})`;
    }
    
    document.getElementById('currentScore').textContent = gameState.score;
    document.getElementById('checkBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'inline-block';
    
    // Disable all inputs
    document.querySelectorAll('.input-field, .option-btn').forEach(el => {
        el.disabled = true;
    });
}

// Next Question
function nextQuestion() {
    gameState.currentQuestionIndex++;
    showCurrentQuestion();
}

// Results Screen
function showResults() {
    const totalQuestions = gameState.questions.length;
    const maxScore = totalQuestions * 3;
    const percentage = Math.round((gameState.score / maxScore) * 100);
    
    let rating = '';
    if (percentage >= 95) rating = '🥇 PERFECT MASTERY!';
    else if (percentage >= 85) rating = '🥈 EXCELLENT!';
    else if (percentage >= 75) rating = '🥉 VERY GOOD!';
    else if (percentage >= 65) rating = '✅ GOOD!';
    else if (percentage >= 50) rating = '⚠️ NEEDS WORK!';
    else rating = '❌ TRY AGAIN!';
    
    document.getElementById('finalScore').textContent = percentage + '%';
    document.getElementById('ratingMessage').textContent = rating;
    document.getElementById('resultsScore').textContent = gameState.score;
    document.getElementById('resultsMaxScore').textContent = maxScore;
    document.getElementById('textInputCorrect').textContent = gameState.textInputCorrect;
    document.getElementById('textInputTotal').textContent = gameState.textInputTotal;
    document.getElementById('mcCorrect').textContent = gameState.mcCorrect;
    document.getElementById('mcTotal').textContent = gameState.mcTotal;
    
    // Check if can go to next level
    const canNextLevel = gameState.currentLevel < 4 && percentage >= 65;
    document.getElementById('nextLevelBtn').style.display = canNextLevel ? 'inline-block' : 'none';
    
    // Show improvement message
    const prevBest = localStorage.getItem(`level${gameState.currentLevel}Best`) || 0;
    const improvementMsg = document.getElementById('improvementMessage');
    if (percentage > prevBest) {
        improvementMsg.textContent = `🎉 New personal best! (Previous: ${prevBest}%)`;
    } else if (percentage === prevBest) {
        improvementMsg.textContent = `Matched your best score!`;
    }
    
    // Save results
    localStorage.setItem(`level${gameState.currentLevel}Best`, Math.max(percentage, prevBest));
    localStorage.setItem(`${gameState.studentName}-${gameState.studentSurname}-level${gameState.currentLevel}-score`, percentage);
    
    showScreen('resultsScreen');
}

function retryLevel() {
    selectLevel(gameState.currentLevel);
}

function nextLevel() {
    selectLevel(gameState.currentLevel + 1);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    showScreen('loginScreen');
});
