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

 function showStyledText() {
      let text = document.getElementById('textInput').value;

      let isBold = document.getElementById('bold').checked;
      let isUnderline = document.getElementById('underline').checked;
      let isItalic = document.getElementById('italic').checked;

      let align = document.querySelector('input[name="align"]:checked').value;

      let styledText = document.getElementById('styledText');
      let result = document.getElementById('text_result');

      styledText.innerHTML = '';

      let p = document.createElement('p');
      p.textContent = text;
      p.style.fontWeight = isBold ? 'bold' : 'normal';
      p.style.textDecoration = isUnderline ? 'underline' : 'none';
      p.style.fontStyle = isItalic ? 'italic' : 'normal';
      p.style.textAlign = align;

      styledText.appendChild(p);
      result.style.display = 'block';
    }

let textBtn = document.getElementById('textBtn');
textBtn.addEventListener('click', function(event) {
  event.preventDefault();
  showStyledText();
});


