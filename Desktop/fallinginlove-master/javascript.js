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

var savory [
    "What Has Been Your Biggest Challenge In Life, And How Did You Overcome It?",
    "What is your most terrible memory?",
    "Would You Rather Be Crazy Rich, Or Deeply In Love?",
    "How do you feel about your relationship with your mother?",
    "What's one thing that you would change on yourself if you could?",
    "What roles do love and affection play in your life?"
]

var smoky [
    "What, if anything, is too serious to be joked about?",
    "Of all the people in your family, whose death would you find most disturbing? Why?",
    "Is love a choice? Why?",
    "Would you choose a wild, hot relationship or a calm and stable one?",
    "If you were to die this evening with no opportunity to communicate with anyone, what would you most regret not having told someone? Why haven't you told them yet?",
    "If heaven is real and you died tomorrow, would you get in?"
]

var spicy [
    "If a crystal ball could tell you the truth about yourself, your life, the future or anything else, what would you want to know?",
    "If you knew that in one year you would die suddenly, would you change anything about the way you are now living? Why?",
    "What did your past relationship teach you?",
    "Why do you think you’re still single?",
    "If you were going to become a close friend with your partner, please share what would be important for him or her to know."
]

var umami [
    "Share a personal problem and ask your partner's advice on how he or she might handle it. Also, ask your partner to reflect back to you how you seem to be feeling about the problem you have chosen."
]


var used1 = [];
var used2 = [];
var used3 = [];
var savory_used = [];
var smoky_used = [];
var spicy_used = [];
var umami_used = [];

var startTime = Date.now();
console.log(startTime);

function inner_helper(questions_list, used_list) {
    randomNumber = Math.floor(Math.random() * (questions_list.length))
        while (used_list.includes(randomNumber)) {
            randomNumber = Math.floor(Math.random() * (questions_list.length))
        }
        document.getElementById('question').innerHTML = questions_list[randomNumber];
        used_list.push(randomNumber);

}

function nextQuestion() {
    var timeElapsed = Date.now() - startTime;
    console.log(timeElapsed)

    if (timeElapsed < 10000 && used1.length !== questions1.length) {
        return inner_helper(questions1, used1)
        // randomNumber = Math.floor(Math.random() * (questions1.length))
        // while (used1.includes(randomNumber)) {
        //     randomNumber = Math.floor(Math.random() * (questions1.length))
        // }
        // document.getElementById('question').innerHTML = questions1[randomNumber];
        // used1.push(randomNumber);
        console.log(used1);

    } else if (timeElapsed < 15000 && used2.length !== questions2.length) {
        return inner_helper(questions2, used2)
        // randomNumber = Math.floor(Math.random() * (questions2.length))
        // while (used2.includes(randomNumber)) {
        //     randomNumber = Math.floor(Math.random() * (questions2.length))
        // }
        // document.getElementById('question').innerHTML = questions2[randomNumber];
        // used2.push(randomNumber);
        // console.log(used2);
        
    } else if (timeElapsed < 25000 && used3.length !== questions3.length) {
        return inner_helper(questions3, used3)
        // randomNumber = Math.floor(Math.random() * (questions3.length))
        // while (used3.includes(randomNumber)) {
        //     randomNumber = Math.floor(Math.random() * (questions3.length))
        // }
        // document.getElementById('question').innerHTML = questions3[randomNumber];
        // used3.push(randomNumber);
        // console.log(used3);
    } if (timeElapsed < 30000 && used1.length !== savory.length) {
        return inner_helper(savory, savory_used)

    } if (timeElapsed < 35000 && used1.length !== smoky.length) {
        return inner_helper(smoky, smoky_used)

    } if (timeElapsed < 40000 && used1.length !== spicy.length) {
        return inner_helper(spicy, spicy_used)

    } if (timeElapsed < 45000 && used1.length !== umami.length) {
        return inner_helper(umami, umami_used)
    
    } else {
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



