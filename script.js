window.onload = function () {
    hideQuestions();
    showQuestion('question1');
};


function showQuestion(questionId, answer) {
    var currentQuestion = document.querySelector('.question:not(.hidden)');

    // Hide current question
    if (currentQuestion) {
        currentQuestion.classList.add('hidden');
    }

    // Show next question or result
    var nextQuestion = document.getElementById(questionId);
    if (nextQuestion) {
        nextQuestion.classList.remove('hidden');
    } else {
        // If it's not a question, it's a result
        displayResult(answer);
    }

    // If it's the "Oops! Just one more" question, start a timer to move to the next question
    if (questionId === 'question5') {
        setTimeout(function () {
            showQuestion('question6');
        }, 2000); // Change 5000 to the duration in milliseconds (e.g., 5000 for 5 seconds)
    } else if (questionId === 'question6') {
        setTimeout(function () {
            showQuestion('question7');
        }, 2000); // Change 5000 to the duration in milliseconds (e.g., 5000 for 5 seconds)
    }
}

function displayResult(answer) {
    var resultContainer = document.getElementById('result');
    var resultImage;
    var currentQuestion = document.querySelector('.question:not(.hidden)');

    currentQuestion.classList.add('hidden');


    if (answer === 'yes') {
        resultImage = 'img/yay.jpeg'; // URL or path to the image for "Yes" response
    } else {
        resultImage = 'img/oops.jpeg'; // URL or path to the image for "No" response
    }

    resultContainer.innerHTML = `<img src="${resultImage}" alt="Result Image">`;
}

function resetQuestionnaire() {
    // Hide all questions
    var questions = document.querySelectorAll('.question');
    questions.forEach(function (question) {
        question.classList.add('hidden');
    });

    // Show the first question again
    showQuestion('question1');
}

function hideQuestions() {
    var questions = document.querySelectorAll('.question');
    questions.forEach(function (question) {
        question.classList.add('hidden');
    });
}
