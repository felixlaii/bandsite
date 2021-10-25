// function for displaying show ticket information
function displayShow (object) {
    // using parseInt to convert string into number format
    let fullDate = new Date(parseInt(object.date))
    let day = fullDate.getDate()
    let month = fullDate.getMonth()
    let year = fullDate.getFullYear()
    let formattedDate = `${month + 1}/${day}/${year}`

    let showsContainer = document.getElementById ('showsContainer')
    let div = document.createElement ('div')
    div.classList.add ('shows-section__card')
    showsContainer.appendChild (div)

       // active state
       showsContainer.addEventListener('click',  e => {
        showsContainer.classList.toggle("shows-section__card--active")

        showsContainer.addEventListener('click', e => {
            showsContainer.classList.toggle("shows-section__card--hover")
        })
    })

    let subdate = document.createElement ('h2')
    subdate.innerText = object.subdate
    div.appendChild(subdate)

    let date = document.createElement ('h3')
    date.innerText = formattedDate
    div.appendChild(date)

    let subvenue = document.createElement ('h2')
    subvenue.innerText = object.subvenue
    div.appendChild(subvenue)

    let venue = document.createElement('p')
    venue.innerText = object.place
    div.appendChild(venue)

    let sublocation = document.createElement ('h2')
    sublocation.innerText = object.sublocation
    div.appendChild(sublocation)

    let location = document.createElement ('p')
    location.innerText = object.location
    div.appendChild(location)

    let button = document.createElement ('button')
    button.innerText = "Buy Tickets"
    div.appendChild(button)
}

// applied for loop to display above function
window.addEventListener = () => {
    for(let i = 0; i < showConcerts.length; i++){
        displayShow(showConcerts[i])
    }
}

// retrieving show dates from API to the website by doing a for loop
axios.get('https://project-1-api.herokuapp.com/register')
    .then(res => {
let API_KEY = res.data.api_key
axios.get('https://project-1-api.herokuapp.com/showdates?api_key=' + API_KEY)
    .then(res => {
        let showConcerts = res.data
        for(let i = 0; i < showConcerts.length; i++){
            displayShow(showConcerts[i])
        }
    }) })
