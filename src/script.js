const TIME = 15

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
	<div>1. You will have only <span>${TIME} seconds</span> per each question.</div>
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
time.innerHTML = `${TIME}`

const question = `
	<section>
		<div class='question__text'>
			<h3>Aang becomes an airbending master at the young age of _____</h3>
		</div>
		<div class='answer-list'>
			<div class='answer'>
				<span>12</span>
				<div class='icon'>
					<i class="fas fa-check"></i>
				</div>
			</div>
			<div class='answer'>
				<span>6</span>
				<div class='icon'>
					<i class="fas fa-times"></i>
				</div>
			</div>
			<div class='answer'>
				<span>10</span>
			</div>
			<div class='answer'>
				<span>16</span>
			</div>
		</div>
	</section>
`

// * Create quiz footer

const footer = document.createElement('footer')
const total = `
	<div class='total-questions'>
		<span><p>2</p><p>of</p><p>35</p><p>Questions</p></span>
	</div>
	<button class='next-btn'>Next</button>
`
// * Create result container
const resultBox = `
	<div class='result-box'>
		<div class='icon'><i class='fas fa-crown'></i></div>
		<h3 class='result-box__text'>You are completed the Quiz</h3>
		<div class='result-box__score'>
			<span><p>You got</p><p>2</p><p>out of</p><p>35</p></span>
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