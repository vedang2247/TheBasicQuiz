let score = 0;
const questions = ["What is the full form of HTML ?", "What is the full form of CSS ?", "What is the full form of JS ?", "What is the full form of JSON ?"];
const option1 = ["HyperText Madeup Language", "Cascading Stale Sheets", "Java Sit", "Java Scripting ON"]
const option2 = ["HyperText Markup Language", "Cascading Style Sheets", "Java Script", "JavaScript Object Notation"]
const option3 = ["HypoText Madeup Language", "Cascading Stale Scene", "Jav Sit", "JavaScript Orientation Notation"]
const option4 = ["HypoText Markup Language", "Cascading Style Scene", "Jav Script", "JavaScript Object Node"]
const correct = ["HyperText Markup Language", "Cascading Style Sheets", "Java Script", "JavaScript Object Notation"];
const b = document.querySelector('.opt2');
const c = document.querySelector('.opt3');
const d = document.querySelector('.opt4');
const a = document.querySelector('.opt1');
const q = document.querySelector('.content');
const conclsion = document.querySelector('.con')
const next = document.querySelector('.next');
const sco = document.querySelector('.sc');
const play = document.querySelector('.play');
const res=document.querySelector('.res');
let current = 0;
function showQuestion() {
    q.innerHTML = questions[current];
    a.innerHTML = option1[current];
    b.innerHTML = option2[current];
    c.innerHTML = option3[current];
    d.innerHTML = option4[current];
    document.querySelectorAll('.option').forEach(function (btn) {
        btn.disabled = false;
    })

}
showQuestion();
function check(a) {
    if (a === correct[current]) {
        conclsion.innerHTML = "YAY CORRECT ANSWER"
        score += 1
    }
    else {
        conclsion.innerHTML = "SORRY WRONG ANSWER"
    }
    document.querySelectorAll('.option').forEach(function (btn) {
        btn.disabled = true;
    })
}
a.addEventListener('click', function () {
    check(a.innerHTML);
})
b.addEventListener('click', function () {
     check(b.innerHTML)
})
c.addEventListener('click', function () {
    check(c.innerHTML);
})
d.addEventListener('click', function () {
    check(d.innerHTML);
})
next.addEventListener('click', function () {
    current++;
    if (current == 4) {
        conclsion.innerHTML = "HOPE YOU ENJOYED!!!"
        sco.innerHTML = `SCORE = ${score}`;
        if(score<=1){
            res.innerHTML='Man, you are DUMB!!!'
        }
        else if(score<=3){
            res.innerHTML='OK, I guess you know SOMETHING';
        }
        else{
            res.innerHTML='Man, you are a GENIUS!!!'
        }
        play.innerHTML = 'IF YOU WANT TO TRY AGAIN PRESS NEXT QUESTION!!'
    }
    else if (current == 5) {
        current = 0;
        score = 0;
        conclsion.innerHTML = '';
        sco.innerHTML = '';
        res.innerHTML = '';
        play.innerHTML='';
        showQuestion();
    }
    else showQuestion()


})
