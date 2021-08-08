const TOTAL_QUESTIONS = questions.length
const RANDOM_QUESTION = Math.floor(Math.random() * (TOTAL_QUESTIONS))

let questionCount = 0
let questionNumber = 1
let counter
let timeValue = 15

const app = document.getElementById('app')
const container = document.createElement('div')
container.classList.add('container')

// *Create Start Quiz button

const startQuizButton = document.createElement('button')
startQuizButton.classList.add('start-btn')
startQuizButton.innerHTML = 'Start Quiz'

// *Create Info container 

const infoBox = document.createElement('div')
infoBox.classList.add('info-box')

const infoTitle = document.createElement('h3')
infoTitle.classList.add('info-box__title')
infoTitle.innerHTML = 'Rules of Quiz'

const infoList = document.createElement('div')
infoList.classList.add('info-box__list')

const buttons = document.createElement('div')
buttons.classList.add('buttons')

const exitButton = document.createElement('button')
exitButton.classList.add('quit-btn')
exitButton.innerHTML = 'Exit Quiz'

const restartButton = document.createElement('button')
restartButton.classList.add('continue-btn')
restartButton.innerHTML = 'Continue'

const infoText = `
	<div>1. You will have only <span>${timeValue} seconds</span> per each question.</div>
	<div>2. Once you select your answer, it can't be undone.</div>
	<div>3. You can't select any option once time goes off</div>
	<div>4. You can't exit from the Quiz while you're playing.</div>
	<div>5. You'll get points on the basis of your correct answers.</div>
`

// * Create Quiz container

const quizBox = document.createElement('div')
quizBox.classList.add('quiz-box')

const header = document.createElement('header')
const quizTitle = document.createElement('h1')
quizTitle.classList.add('quiz-box__title')
quizTitle.innerHTML = 'Quiz Application'

const quizTimer = document.createElement('div')
quizTimer.classList.add('quiz-box__timer')

const timerText = document.createElement('div')
timerText.classList.add('timer__text')
timerText.innerHTML = 'Time left'

const time = document.createElement('div')
time.classList.add('timer__time')
time.innerHTML = `${timeValue}`

const question = `
	<section>
		<div class='question__text'></div>
		<div class='answer-list'></div>
	</section>
`

// * Create quiz footer

const footer = document.createElement('footer')
const total = `
	<div class='total-questions'></div>
	<button class='next-btn'>Next</button>
`
// * Create result container
const resultBox = `
	<div class='result-box'>
		<div class='icon'><i class='fas fa-crown'></i></div>
		<h3 class='result-box__text'>You are completed the Quiz</h3>
		<div class='result-box__score'>
			<span><p>You got</p><p>2</p><p>out of</p><p>${TOTAL_QUESTIONS}</p></span>
		</div>
		<div class='buttons'>
			<button class='restart-btn'>Restart Quiz</button>
			<button class='quit-btn'>Quit Quiz</button>
		</div>
	</div>
`

app.append(container)
container.append(startQuizButton)
//info
container.append(infoBox)
infoBox.append(infoTitle)
infoBox.append(infoList)
infoList.insertAdjacentHTML('beforeend', infoText)
infoList.append(buttons)
buttons.append(exitButton)
buttons.append(restartButton)
//quiz
container.append(quizBox)
quizBox.append(header)
header.append(quizTitle)
header.append(quizTimer)
quizTimer.append(timerText)
quizTimer.append(time)
quizBox.insertAdjacentHTML('beforeend', question)
//footer
container.append(footer)
footer.insertAdjacentHTML('beforeend', total)
//result
container.insertAdjacentHTML('beforeend', resultBox)

const info = document.querySelector('.info-box')
info.hidden = true

const quiz = document.querySelector('.quiz-box')
quiz.hidden = true

const quizFooter = document.querySelector('footer')
quizFooter.hidden = true

const result = document.querySelector('.result-box')
result.hidden = true

const nextBtn = document.querySelector('.next-btn')
nextBtn.hidden = true

const answerList = document.querySelector('.answer-list')
const timeCount = document.querySelector('.timer__time')

const startQuiz = document.querySelector('.start-btn').onclick = () => {
	info.hidden = false
	startQuizButton.hidden = true
}

const exitQuiz = document.querySelector('.quit-btn').onclick = () => {
	info.hidden = true
	startQuizButton.hidden = false
}

const continueQuiz = document.querySelector('.continue-btn').onclick = () => {
	info.hidden = true
	quiz.hidden = false
	quizFooter.hidden = false

	showQuestions(questionCount)
	questionCounter(questionNumber)
	startTimer(timeValue)
}

const nextQuestion = document.querySelector('.next-btn').onclick = () => {
	if (questionCount < TOTAL_QUESTIONS - 1) {
		questionCount++
		questionNumber++
		showQuestions(questionCount)
		questionCounter(questionNumber)
		clearInterval(counter)
		startTimer(timeValue)
	} else {
		console.log('no more questions')
	}
}

function showQuestions(id) {
	const questionText = document.querySelector('.question__text')
	let questionTag = `<h3> ${questions[id].question} </h3>`

	questionText.innerHTML = questionTag
	nextBtn.hidden = false
	showAnswers()
	nextBtn.style.display = 'none'

	function showAnswers() {
		let answer = ''
		for (let i = 0; i < questions[id].possibleAnswers.length; i++) {
			answer += `<div class='answer'><span>${questions[id].possibleAnswers[i]}</span></div>`

			console.log(questions[id].possibleAnswers[i])
		}
		answerList.innerHTML = ''
		answerList.insertAdjacentHTML('beforeend', answer)
	}

	const answers = document.querySelectorAll('.answer')
	for (let i = 0; i < answers.length; i++) {
		answers[i].setAttribute('onclick', 'answerSelected(this)')
		console.log(answers[i])
	}
}

function questionCounter(id) {
	const botQuestionCounter = document.querySelector('.total-questions')
	const totalCount = `<span><p>${id}</p><p>of</p><p>${TOTAL_QUESTIONS}</p><p>Questions</p></span>`
	botQuestionCounter.innerHTML = totalCount
}

function answerSelected(answer) {
	clearInterval(counter)
	const userAnswer = answer.textContent
	const correctAnswer = questions[questionCount].correctAnswer
	const numberOfAnswers = answerList.children.length
	const check = `<div class='icon'><i class='fas fa-check'></i></div>`
	const cross = `<div class='icon'><i class='fas fa-times'></i></div>`

	if (userAnswer === correctAnswer) {
		answer.classList.add('correct')
		answer.insertAdjacentHTML('beforeend', check)
	} else {
		answer.classList.add('wrong')
		answer.insertAdjacentHTML('beforeend', cross)

		for (let i = 0; i < numberOfAnswers; i++) {
			if (answerList.children[i].textContent === correctAnswer) {
				answerList.children[i].setAttribute('class', 'answer correct')
				answerList.children[i].insertAdjacentHTML('beforeend', check)
			}
		}
	}

	// * when answer selected, disable all other options
	for (let i = 0; i < numberOfAnswers; i++) {
		answerList.children[i].classList.add('disabled')
	}
	nextBtn.style.display = 'block'
}

function startTimer(time) {
	counter = setInterval(timer, 1000)
	function timer() {
		timeCount.textContent = time
		time--
		if (time < 0) {
			clearInterval(counter)
		}
	}
}