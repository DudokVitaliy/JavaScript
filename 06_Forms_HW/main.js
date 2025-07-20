let resalt = 0;
let total = document.querySelectorAll('.question').length;
let form = document.getElementById('testForm');
let resultDiv = document.getElementById('result');
let score = document.getElementById('score');
let resetBtn = document.getElementById('resetBtn');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    resalt = 0;

    let answers = {
        q1: 'c',
        q2: 'b',
        q3: 'b',
        q4: 'c',
        q5: 'a'
    };

    for (let i = 1; i <= total; i++) {
        let question = document.querySelector(`input[name="q${i}"]:checked`);
        if (question && question.value === answers[`q${i}`]) {
            resalt++;
        }
    }

    score.textContent = `You scored ${resalt} out of ${total}`;
    resultDiv.style.display = 'block';
});
resetBtn.addEventListener('click', function() {
    form.reset();
    resultDiv.style.display = 'none';
    resalt = 0;
    score.textContent = '';
});