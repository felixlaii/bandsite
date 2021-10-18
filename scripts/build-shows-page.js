let showConcerts = [
    {
        subdate: 'DATE',
        date: 'Mon Sept 06 2021',
        subvenue: 'VENUE',
        venue: 'Ronald Lane',
        sublocation: 'LOCATION',
        location: 'San Francisco, CA',
        button: 'Buy Tickets',
    },
    {
        subdate: 'DATE',
        date: 'Tues Sept 21 2021',
        subvenue: 'VENUE',
        venue: 'Pier 3 East',
        sublocation: 'LOCATION',
        location: 'San Francisco, CA',
        button: 'Buy Tickets',
    },
    {
        subdate: 'DATE',
        date: 'Fri Oct 15 2021',
        subvenue: 'VENUE',
        venue: 'View Lounge',
        sublocation: 'LOCATION',
        location: 'San Francisco, CA',
        button: 'Buy Tickets',
    },
    {
        subdate: 'DATE',
        date: 'Sat Nov 06 2021',
        subvenue: 'VENUE',
        venue: 'Hyatt Agency',
        sublocation: 'LOCATION',
        location: 'San Francisco, CA',
        button: 'Buy Tickets',
    },
    {
        subdate: 'DATE',
        date: 'Fri Nov 26 2021',
        subvenue: 'VENUE',
        venue: 'Moscow Center',
        sublocation: 'LOCATION',
        location: 'San Francisco, CA',
        button: 'Buy Tickets',
    },
    {
        subdate: 'DATE',
        date: 'Wed Dec 15 2021',
        subvenue: 'VENUE',
        venue: 'Press Club',
        sublocation: 'LOCATION',
        location: 'San Francisco, CA',
        button: 'Buy Tickets',
    }
]

function displayShow (object) {
    let showsContainer = document.getElementById ('showsContainer')
    let div = document.createElement ('div')
    div.classList.add ('shows-section__card')
    showsContainer.appendChild (div)

       // active state
       showsContainer.addEventListener('click', e => {
        showsContainer.classList.toggle("shows-section__card--active")
    })


    let subdate = document.createElement ('h2')
    subdate.innerText = object.subdate
    div.appendChild(subdate)

    let date = document.createElement ('h3')
    date.innerText = object.date
    div.appendChild(date)

    let subvenue = document.createElement ('h2')
    subvenue.innerText = object.subvenue
    div.appendChild(subvenue)

    let venue = document.createElement('p')
    venue.innerText = object.venue
    div.appendChild(venue)

    let sublocation = document.createElement ('h2')
    sublocation.innerText = object.sublocation
    div.appendChild(sublocation)

    let location = document.createElement ('p')
    location.innerText = object.location
    div.appendChild(location)

    let button = document.createElement ('button')
    button.innerText = object.button
    div.appendChild(button)
}

window.onload = () => {
    for(let i = 0; i < showConcerts.length; i++){
        displayShow(showConcerts[i])
    }
}
