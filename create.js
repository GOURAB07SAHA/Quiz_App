// Quiz creation functionality
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('quiz-form')) {
        const quizForm = document.getElementById('quiz-form');
        const addQuestionBtn = document.getElementById('add-question');
        const questionsContainer = document.getElementById('questions-container');
        let questionCount = 1;
        
        addQuestionBtn.addEventListener('click', (e) => {
            e.preventDefault();
            questionCount++;
            
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question-group';
            questionDiv.innerHTML = `
                <h3>Question ${questionCount}</h3>
                <div class="form-group">
                    <label>Question Text</label>
                    <input type="text" name="question-${questionCount}" required>
                </div>
                <div class="form-group">
                    <label>Option 1 (Correct Answer)</label>
                    <input type="text" name="question-${questionCount}-option-1" required>
                </div>
                <div class="form-group">
                    <label>Option 2</label>
                    <input type="text" name="question-${questionCount}-option-2" required>
                </div>
                <div class="form-group">
                    <label>Option 3</label>
                    <input type="text" name="question-${questionCount}-option-3">
                </div>
                <div class="form-group">
                    <label>Option 4</label>
                    <input type="text" name="question-${questionCount}-option-4">
                </div>
                <button class="btn btn-danger remove-question">Remove Question</button>
            `;
            
            questionsContainer.appendChild(questionDiv);
            
            // Add event listener to the new remove button
            questionDiv.querySelector('.remove-question').addEventListener('click', (e) => {
                e.preventDefault();
                questionsContainer.removeChild(questionDiv);
                // Renumber remaining questions
                const questions = questionsContainer.querySelectorAll('.question-group');
                questions.forEach((q, index) => {
                    q.querySelector('h3').textContent = `Question ${index + 1}`;
                });
                questionCount = questions.length;
            });
        });
        
        quizForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real app, you would collect all the form data and send it to your backend
            alert('Quiz created successfully!');
            window.location.href = 'dashboard.html';
        });
    }
});