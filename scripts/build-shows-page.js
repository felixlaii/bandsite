let showConcerts = [
    {
        date: 'Mon Sept 06 2021',
        venue: 'Ronald Lane',
        location: 'San Francisco, CA',
    },
    {
        date: 'Tues Sept 21 2021',
        venue: 'Pier 3 East',
        location: 'San Francisco, CA',
    },
    {
        date: 'Fri Oct 15 2021',
        venue: 'View Lounge',
        location: 'San Francisco, CA',
    },
    {
        date: 'Sat Nov 06 2021',
        venue: 'Hyatt Agency',
        location: 'San Francisco, CA',
    },
    {
        date: 'Fri Nov 26 2021',
        venue: 'Moscow Center',
        location: 'San Francisco, CA',
    },
    {
        date: 'Wed Dec 15 2021',
        venue: 'Press Club',
        location: 'San Francisco, CA',
    }
]

function displayShow (object) {
    let showsContainer = document.getElementById ('showsContainer')
    let div = document.createElement ('div')
    div.classList.add ('shows')
    showsContainer.appendChild (div)

    let date = document.createElement ('h2')
    date.innerText = object.date
    div.appendChild(date)

    let venue = document.createElement('p')
    venue.innerText = object.venue
    div.appendChild(venue)

    let location = document.createElement ('p')
    location.innerText = object.location
    div.appendChild(location)
}

window.onload = () => {
    for(let i = 0; i < showConcerts.length; i++){
        displayShow(showConcerts[i])
    }
}
