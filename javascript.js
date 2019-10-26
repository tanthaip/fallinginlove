var questions1 = [
    '10 seconds have not elapsed',
    '10 seconds have not elapsed!',
    '10 seconds have not elapsed!!',
    '10 seconds have not elapsed!!!'
]

var questions2 =  [
    'over 20 seconds have elapsed',
    'over 20 seconds have elapsed!',
    'over 20 seconds have elapsed!!',
    'over 20 seconds have elapsed!!!'

]
var questions3 =  [
    'over 30 seconds have elapsed',
    'over 30 seconds have elapsed!',
    'over 30 seconds have elapsed!!',
    'over 30 seconds have elapsed!!!'
]

var used1 = [];
var used2 = [];
var used3 = [];

var startTime = Date.now();
console.log(startTime);

    
function nextQuestion() {
    var timeElapsed = Date.now() - startTime;
    console.log(timeElapsed)

    if (timeElapsed < 10000 && used1.length !== questions1.length) {

        randomNumber = Math.floor(Math.random() * (questions1.length))
        while (used1.includes(randomNumber)) {
            randomNumber = Math.floor(Math.random() * (questions1.length))
        }
        document.getElementById('question').innerHTML = questions1[randomNumber];
        used1.push(randomNumber);
        console.log(used1);

    } else if (timeElapsed < 15000 && used2.length !== questions2.length) {

        randomNumber = Math.floor(Math.random() * (questions2.length))
        while (used2.includes(randomNumber)) {
            randomNumber = Math.floor(Math.random() * (questions2.length))
        }
        document.getElementById('question').innerHTML = questions2[randomNumber];
        used2.push(randomNumber);
        console.log(used2);
        
    } else if (timeElapsed < 25000 && used3.length !== questions3.length) {

        randomNumber = Math.floor(Math.random() * (questions3.length))
        while (used3.includes(randomNumber)) {
            randomNumber = Math.floor(Math.random() * (questions3.length))
        }
        document.getElementById('question').innerHTML = questions3[randomNumber];
        used3.push(randomNumber);
        console.log(used3);
    }
    else {
        document.getElementById('question').innerHTML = "lookatmyeyes";
    }
    
}

// function nextQuestion() {
//     var timeElapsed = Date.now() - startTime;
//     console.log(Date.now());
//     console.log(timeElapsed);
//     if (timeElapsed < 10000) {

        
//         document.getElementById('question').innerHTML = questions1[1];

//     } else if (timeElapsed < 20000) {

        
//         document.getElementById('question').innerHTML = questions2[1];

//     }
    
// }






// var timeElapsed = Date.now() - startTime;


// var randomNumber = Math.floor(Math.random() * (questions.length));
// if timeElapsed < 5 min:
//     if sweetUsed.includes(randomNumber):
//         call new randomNumber
//     else:
//         document.getElementById('question').innerHTML = sweetQuestions[randomNumber];
//         sweetUsed.push(randomNumber);



