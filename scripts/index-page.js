// function for displaying comments on bio page
function displayComment (object) {
    let bioCommentsContainer = document.getElementById('bioCommentsContainer')
    let div = document.createElement('div')
    div.classList.add('form-section__comment')
    bioCommentsContainer.appendChild(div)

    let bioAvatar = document.createElement ('div')
    bioAvatar.classList.add('form-section-image-container')
    bioAvatar.classList.add('form-section-image--logo')
    div.appendChild(bioAvatar)

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
        // prevents refreshing default behaviour
        event.preventDefault()
    axios.get('https://project-1-api.herokuapp.com/register')
    .then((res) => {
        let API_KEY = res.data.api_key
        console.log(res)
            axios
            .post('https://project-1-api.herokuapp.com/comments?api_key='+ API_KEY, {
                "name": event.target.name.value,
                "comment": event.target.comment.value,
            },
            {
            headers:{
                'Content-Type': 'application/json',
            }
            })
            .then((result) => {
            // new comments are not available yet, the next then method will be invoking it 
            })
            })
            .then(() => {
                axios.get('https://project-1-api.herokuapp.com/register')
                .then(res => {
                let API_KEY = res.data.api_key
                axios.get('https://project-1-api.herokuapp.com/comments?api_key=' + API_KEY)
                .then(res => {
                let newComments = res.data
                for(let i = 0; i < newComments.length; i++){
                    displayComment(newComments[i])
                }
            })
        })
    })
                .catch((error) => {
                    console.log(error);
                });
    })
})

// function for adding a commment in bio page
function addComment(event){
    // getting dates formmatted for the comments
    let fullDate = new Date()
    console.log(fullDate)
    let day = fullDate.getDate()
    let month = fullDate.getMonth()
    let year = fullDate.getFullYear()
    let formattedDate = `${month + 1}/${day}/${year}`

    let inputs = document.getElementsByClassName('inputField')

    // places added comments into the ID
    let bioCommentsContainer = document.getElementById('bioCommentsContainer')
    let div = document.createElement('div')
    div.classList.add('comment')
    bioCommentsContainer.prepend(div)

    // creating an element to house the name section in the comments
    let name = document.createElement('h2')
    name.innerText = inputs[0].value
    div.appendChild(name)

    // creating an element to house the date section in the comments
    let date = document.createElement('p')
    date.innerText = formattedDate
    div.appendChild(date)

    // creating an element to house the comment in the comment section
    let comment = document.createElement('p')
    comment.innerText = inputs[1].value
    div.appendChild(comment)
}

// registering the API and getting the comments to the website by doing a for loop
axios.get('https://project-1-api.herokuapp.com/register')
    .then(res => {
        let API_KEY = res.data.api_key
        axios.get('https://project-1-api.herokuapp.com/comments?api_key=' + API_KEY)
        .then(res => {
            let newComments = res.data
            for(let i = 0; i < newComments.length; i++){
                displayComment(newComments[i])
            }
        })
    })
