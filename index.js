const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

window.onload = () => {

    setInterval(() => {
        const date = new Date('Nov 26 2020 20:30').getTime()
        const now = new Date().getTime()
    
        const difference = (date - now)
    
        days.innerText = Math.floor(difference / (1000 * 60 * 60 * 24))
        hours.innerText = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        minutes.innerText = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        seconds.innerText = Math.floor((difference % (1000 * 60)) / 1000)
    }, 1000);

}




