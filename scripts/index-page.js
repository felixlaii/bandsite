let bioComments = [
    {
        name: 'Connor Walton',
        date: '02/17/2021',
        comment: `
        This is art. This is inexplicable magic expressed in the purest way, 
        everything that makes up this majestic work deserves reverence. 
        Let us appreciate this for what it is and what it contains.`
    },
    {
        name: 'Emilie Beach',
        date: '01/09/2021',
        comment: `
        I feel blessed to have seen them in person. What a show! They were just perfection.
         If there was one day of my life I could relive, this would be it. What an incredible day.`
    },
    {
        name: 'Miles Acosta',
        date: '12/20/2020',
        comment: `
        I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps.
         Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.`
    }
]

function displayComment (object) {
    let bioCommentsContainer = document.getElementById('bioCommentsContainer')
    let div = document.createElement('div')
    div.classList.add('comment')
    bioCommentsContainer.appendChild(div)

    let name = document.createElement('h2')
    name.innerText = object.name
    div.appendChild(name)

    let date = document.createElement('p')
    date.innerText = object.date
    div.appendChild(date)

    let comment = document.createElement('p')
    comment.innerText = object.comment
    div.appendChild(comment)

}

window.onload = () => {
    for(let i = 0; i < bioComments.length; i++){
        displayComment(bioComments[i])
    }
}


function addComment(event){
    
    event.preventDefault()
    let fullDate = new Date()
    console.log(fullDate)
    let day = fullDate.getDate()
    let month = fullDate.getMonth()
    let year = fullDate.getFullYear()
    let formattedDate = `${month + 1}/${day}/${year}`
    console.log(formattedDate)


    let inputs = document.getElementsByClassName('inputField')
    console.log(inputs[0].value) //yacob

    let bioCommentsContainer = document.getElementById('bioCommentsContainer')
    let div = document.createElement('div')
    div.classList.add('comment')
    bioCommentsContainer.prepend(div)

    let name = document.createElement('h2')
    name.innerText = inputs[0].value
    div.appendChild(name)

    let date = document.createElement('p')
    date.innerText = formattedDate
    div.appendChild(date)

    let comment = document.createElement('p')
    comment.innerText = inputs[1].value
    console.log(inputs[1].value)
    div.appendChild(comment)

}