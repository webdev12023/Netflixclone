const questionBars = document.querySelectorAll('.question-bar');

questionBars.forEach((questionBar) => {
    questionBar.addEventListener('click', () => {
        const plusSign = questionBar.querySelector('.plus-sign');
        const questionPara = questionBar.parentElement.querySelector('.question-para');

        if (questionPara.style.display === 'none' || questionPara.style.display === '') {
            questionPara.style.display = 'block';
            plusSign.textContent = '-';
        } else {
            questionPara.style.display = 'none';
            plusSign.textContent = '+';
        }
    });
});
