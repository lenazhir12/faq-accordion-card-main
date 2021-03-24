const arrows = document.querySelectorAll('.arrow-img');
const questions = document.querySelectorAll('.questions');
const answers = document.querySelectorAll('.answers');

for (let i = 0; i <= questions.length; i++) {
    questions[i].addEventListener('click', function () {

        if (answers[i].classList.contains('hid')) {// if this question's answer is hidden at the moment
            for (let answer of answers) {

                answer.classList.add('hid') // hide all other showed answer when clicked

                for (let arrow of arrows) {
                    arrow.classList.remove('arrow-up');//arrow down all
                }
                for (let question of questions) {
                    question.classList.remove('bold');//un-bold all
                }

                answers[i].classList.remove('hid');//show only this answer instead
                arrows[i].classList.add('arrow-up');//arrow up
                questions[i].classList.add('bold');//bold it
            }
        } else {//if this answer is showed at the moment
            answers[i].classList.add('hid')//hide it when clicked
            arrows[i].classList.remove('arrow-up');// arrow down
            questions[i].classList.remove('bold');// dont bold
        }
    });
}
// logic of hiding and showing questions when clicked
// *when this question is clicked and answer is hidden
// -make all other showed answers hidden
// -then show only this answer

// *when this question is clicked but answer is already showed
// -hide it
