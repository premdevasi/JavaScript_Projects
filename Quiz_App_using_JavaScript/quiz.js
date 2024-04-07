// const quiz = [
//     {
//         question: "What is the most used programming language in 2021?",
//         ans1text: "Java",
//         ans2text: "C",
//         ans3text: "Python",
//         ans4text: "JavaScript",
//         answer: "JavaScript",
//     },
//     {
//         question: "Who is the President of US?",
//         ans1text: "Joe Biden",
//         ans2text: "Donald Trump",
//         ans3text: "Barack Obama",
//         ans4text: "George Bush",
//         answer: "Joe Biden",
//     }, {
//         question: "What does HTML stand for?",
//         ans1text: "Hypertext Markup Language",
//         ans2text: "Cascading Style Sheet",
//         ans3text: "Jason Object Notation",
//         ans4text: "Helicopters Terminals Motorboats Lamborginis",
//         answer: "Hypertext Markup Language",
//     },
//     {
//         question: "What year was JavaScript launched?",
//         ans1text: "1996",
//         ans2text: "1995",
//         ans3text: "1994",
//         ans4text: "none of the above",
//         answer: "1995",

//     }
// ]

// const question = document.querySelector('#quiz-question');
// const option_a = document.getElementById("text_option_a");
// const option_b = document.getElementById("text_option_b");
// const option_c = document.getElementById("text_option_c");
// const option_d = document.getElementById("text_option_d");
// const button = document.querySelector('#sumbit');
// const answerElement = document.querySelectorAll('.answer');

// let currentQuestion = 0;
// let score = 0;



// question.textContent = quiz[currentQuestion].question;
// option_a.textContent = quiz[currentQuestion].ans1text;
// option_b.textContent = quiz[currentQuestion].ans2text;
// option_c.textContent = quiz[currentQuestion].ans3text;
// option_d.textContent = quiz[currentQuestion].ans4text;



// button.addEventListener("click", () => {
//     const checkdAns = document.querySelector('input[type = "radio"]:checked')
//     // console.log(checkdAns.nextElementSibling.textContent);
//     if (checkdAns === null) {
//         alert("Please select an answer")
//     } else {
//         if (checkdAns.nextElementSibling.textContent === quiz[currentQuestion].answer) {
//             score++;
//         }

        
//         currentQuestion++
//         if (currentQuestion < quiz.length) {
//             question.textContent = quiz[currentQuestion].question;
//             option_a.textContent = quiz[currentQuestion].ans1text;
//             option_b.textContent = quiz[currentQuestion].ans2text;
//             option_c.textContent = quiz[currentQuestion].ans3text;
//             option_d.textContent = quiz[currentQuestion].ans4text;
            
//             checkdAns.checked = false;
//         }else{
//             alert("your score is " + score + " out of  " + quiz.length);
//             location.reload();
//         }
//     }
// });


const quiz = [
        {
            question: "What is the capital of France?",
            ans1text: "Paris",
            ans2text: "London",
            ans3text: "Berlin",
            ans4text: "Rome",
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            ans1text: "Mars",
            ans2text: "Venus",
            ans3text: "Jupiter",
            ans4text: "Saturn",
            answer: "Mars"
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            ans1text: "William Shakespeare",
            ans2text: "Charles Dickens",
            ans3text: "Jane Austen",
            ans4text: "Leo Tolstoy",
            answer: "William Shakespeare"
        },
        {
            question: "What is the chemical symbol for water?",
            ans1text: "H2O",
            ans2text: "CO2",
            ans3text: "O2",
            ans4text: "CH4",
            answer: "H2O"
        },
        {
            question: "Who painted the Mona Lisa?",
            ans1text: "Leonardo da Vinci",
            ans2text: "Vincent van Gogh",
            ans3text: "Pablo Picasso",
            ans4text: "Michelangelo",
            answer: "Leonardo da Vinci"
        },
        {
            question: "Which country is known as the 'Land of the Rising Sun'?",
            ans1text: "Japan",
            ans2text: "China",
            ans3text: "India",
            ans4text: "South Korea",
            answer: "Japan"
        },
        {
            question: "What is the largest mammal in the world?",
            ans1text: "Blue Whale",
            ans2text: "Elephant",
            ans3text: "Giraffe",
            ans4text: "Hippopotamus",
            answer: "Blue Whale"
        },
        {
            question: "Who was the first person to step on the moon?",
            ans1text: "Neil Armstrong",
            ans2text: "Buzz Aldrin",
            ans3text: "Yuri Gagarin",
            ans4text: "John Glenn",
            answer: "Neil Armstrong"
        },
        {
            question: "What is the national animal of India?",
            ans1text: "Tiger",
            ans2text: "Elephant",
            ans3text: "Lion",
            ans4text: "Leopard",
            answer: "Tiger"
        },
        {
            question: "What is the capital of Spain?",
            ans1text: "Madrid",
            ans2text: "Barcelona",
            ans3text: "Valencia",
            ans4text: "Seville",
            answer: "Madrid"
        }
    ];
    

const quiz_question = document.querySelector('#quiz-h2');
const options_a = document.getElementById('text_option_a');
const options_b = document.getElementById('text_option_b');
const options_c = document.getElementById('text_option_c');
const options_d = document.getElementById('text_option_d');
const answerElement = document.querySelectorAll('.answer');
const sumbit = document.getElementById('sumbit')

let currentQuestion = 0;
let score = 0;

quiz_question.textContent = quiz[currentQuestion].question;
options_a.textContent = quiz[currentQuestion].ans1text;
options_b.textContent = quiz[currentQuestion].ans2text;
options_c.textContent = quiz[currentQuestion].ans3text;
options_d.textContent = quiz[currentQuestion].ans4text;

sumbit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked');
    if (checkedAns === null) {
        alert('Please select an answer');
    } else {
        if (checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quiz.length) {
            quiz_question.textContent = quiz[currentQuestion].question;
            options_a.textContent = quiz[currentQuestion].ans1text;
            options_b.textContent = quiz[currentQuestion].ans2text;
            options_c.textContent = quiz[currentQuestion].ans3text;
            options_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        } else {
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }
    }
});