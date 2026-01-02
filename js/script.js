const textEl = document.getElementById('text')
const dateEl =  document.getElementById('date')
const bodyEl = document.getElementById('body')

const date = new Date
const fullDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`

dateEl.textContent =  fullDate


// get the next content 
fetch('../data/affirmations_and_love_notes.json')
.then(res => res.json())
.then(data => {
    const {affirmations, loveNotes} = data;

    function gerRandomNote() {
        const randomAffirmation =  affirmations[Math.floor(Math.random() * affirmations.length)]
        const randomLoveNote = loveNotes[Math.floor(Math.random() * loveNotes.length)]

        const isAffirmation = Math.random() > 0.5

        return isAffirmation ? randomAffirmation : randomLoveNote
    }
    textEl.textContent = gerRandomNote()
})
.catch(error => console.error('Error loading JSON: ', error))