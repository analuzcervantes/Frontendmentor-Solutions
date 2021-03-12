/*
var question = document.getElementsByClassName("question");
var i;

for (i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var answer = this.nextElementSibling;

        if (answer.style.display == "block"){
            answer.style.display = "none";
        }
        else {
            answer.style.display = "block";
        }
    });
}
*/

this.addEventListener("DOMContentLoaded", () =>{
    const questions = document.querySelectorAll(".question");

    questions.forEach((question) => question.addEventListener("click", () => {

        if (question.parentNode.classList.contains("active")){
            question.parentNode.classList.toggle("active");
        }
        else {
            questions.forEach(question => question.parentNode.classList.remove("active"))
            question.parentNode.classList.add("active");
        }

    }))
})