const TIME = 15

const rootNode = document.getElementById('root')
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
restartButton.classList.add('restart-btn')
restartButton.innerHTML = 'Restart Quiz'

const infoText = `
	<div>1. You will have only <span>${TIME}</span> seconds per each question.</div>
	<div>2. Once you select your answer, it can't be undone.</div>
	<div>3. You can't select any option once time goes off</div>
	<div>4. You can't exit from the Quiz while you're playing.</div>
	<div>5. You'll get points on the basis of your correct answers.</div>
`

rootNode.append(container)
container.append(startQuizButton)
container.append(infoTitle)
container.append(infoBox)
infoBox.append(infoList)
infoList.insertAdjacentHTML('beforeend', infoText)
infoList.append(buttons)
buttons.append(exitButton)
buttons.append(restartButton)