

function displayComment (object) {
    let bioCommentsContainer = document.getElementById('bioCommentsContainer')
    let div = document.createElement('div')
    div.classList.add('form-section__comment')
    bioCommentsContainer.appendChild(div)

    let name = document.createElement('h2')
    name.innerText = object.name
    div.appendChild(name)

    let date = document.createElement('p')
    let fullDate1 = new Date(object.timestamp)
    console.log(fullDate1)
    let day1 = fullDate1.getDate()
    let month1 = fullDate1.getMonth()
    let year1 = fullDate1.getFullYear()
    let formattedDate1 = `${month1 + 1}/${day1}/${year1}`

    date.innerText = formattedDate1
    div.appendChild(date)

    let comment = document.createElement('p')
    comment.innerText = object.comment
    div.appendChild(comment)

}

window.addEventListener('load', () => {
    let commentForm = document.getElementById('commentForm')
    commentForm.addEventListener('submit', (event) => {
    addComment(event)
})
})


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

axios.get('https://project-1-api.herokuapp.com/register')
    .then(res => {
        let API_KEY = res.data.api_key
        axios.get('https://project-1-api.herokuapp.com/comments?api_key=' + API_KEY)
        .then(res => {
            let newComments = res.data
            for(let i = 0; i < newComments.length; i++){
                displayComment(newComments[i])
            }
            console.log(res.data)
        })
    })

