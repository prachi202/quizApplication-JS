(function() {
    console.clear();        
    "use strict";    
    function quizApplication() {
        const correctAnswers = ["A", "A"];
        let quizForm = document.querySelector(".cmp-quizApplication__quizForm");
        let result = document.querySelector(".cmp-quizApplication__result");
        let yourScore = document.querySelector(".cmp-quizApplication__result--score");
        let questions = document.querySelectorAll(".cmp-quizApplication__quizForm--question");
        console.log(questions);
        quizForm.addEventListener("submit", (event) => {
            event.preventDefault();
            let score = 0;
            const userAnswers = [quizForm.q1.value, quizForm.q2.value];
            userAnswers.forEach((answer, index) => {
                if(answer === correctAnswers[index]){
                    score = score + 1;
                    questions[index].classList.add("cmp-quizApplication__quizForm--correct");
                }
                else{
                    questions[index].classList.add("cmp-quizApplication__quizForm--wrong");
                }
            });
            scrollTo(0,0);
            result.classList.remove("cmp-quizApplication__hide");
            //to select the first p tag of result using querySelector
            // result.querySelector("p").textContent = `you scored ${score}/2`;
            // yourScore.textContent = `you scored ${score}/2`;
            yourScore.innerHTML = `you scored ${score}/2`;
        });        
    }
    quizApplication();    
}());