// Quiz functionality would go here
// This would handle the quiz taking interface, scoring, and results

document.addEventListener('DOMContentLoaded', () => {
    // Sample quiz data
    const quizData = [
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {
            question: "What is the largest mammal?",
            options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            answer: "Blue Whale"
        }
    ];

    // Initialize quiz
    if (document.getElementById('quiz-container')) {
        let currentQuestion = 0;
        let score = 0;
        const quizContainer = document.getElementById('quiz-container');
        const resultContainer = document.getElementById('result-container');
        
        function loadQuestion() {
            const q = quizData[currentQuestion];
            quizContainer.innerHTML = `
                <div class="quiz-question">
                    <h2>Question ${currentQuestion + 1}/${quizData.length}</h2>
                    <p>${q.question}</p>
                    <div class="quiz-options">
                        ${q.options.map(option => `
                            <button class="quiz-option" onclick="selectOption('${option}')">
                                ${option}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        window.selectOption = (selected) => {
            const correct = quizData[currentQuestion].answer;
            const options = document.querySelectorAll('.quiz-option');
            
            options.forEach(opt => {
                opt.disabled = true;
                if (opt.textContent === correct) {
                    opt.style.backgroundColor = '#4CAF50';
                } else if (opt.textContent === selected && selected !== correct) {
                    opt.style.backgroundColor = '#F44336';
                }
            });
            
            if (selected === correct) {
                score++;
            }
            
            setTimeout(() => {
                currentQuestion++;
                if (currentQuestion < quizData.length) {
                    loadQuestion();
                } else {
                    showResult();
                }
            }, 1000);
        };
        
        function showResult() {
            quizContainer.style.display = 'none';
            resultContainer.style.display = 'block';
            resultContainer.innerHTML = `
                <div class="quiz-result">
                    <h2>Quiz Completed!</h2>
                    <p>Your score: ${score}/${quizData.length}</p>
                    <p>Percentage: ${Math.round((score / quizData.length) * 100)}%</p>
                    <button onclick="window.location.href='dashboard.html'">Back to Dashboard</button>
                </div>
            `;
        }
        
        loadQuestion();
    }
});