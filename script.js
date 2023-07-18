const timerDays = document.querySelector(
  "div.left-side > div > div.days > span.time"
)
const timerHours = document.querySelector(
  "div.left-side > div > div.hours > span.time"
)
const timerMinutes = document.querySelector(
  "div.left-side > div > div.minutes > span.time"
)
const timerSeconds = document.querySelector(
  "div.left-side > div > div.seconds > span.time"
)

let days = 8
let hours = 12
let minutes = 44
let seconds = 28

const countdown = setInterval(() => {
  seconds--
  if (seconds < 0) {
    minutes--
    seconds = 59
    if (minutes < 0) {
      hours--
      minutes = 59
      if (hours < 0) {
        days--
      }
    }
  }

  let day = days < 10 ? "0" + days : days
  let hour = hours < 10 ? "0" + hours : hours
  let minute = minutes < 10 ? "0" + minutes : minutes
  let second = seconds < 10 ? "0" + seconds : seconds

  timerDays.textContent = day
  timerHours.textContent = hour
  timerMinutes.textContent = minute
  timerSeconds.textContent = second

  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(countdown)
    document.querySelector(".timer").innerHTML = ""

    document.querySelector(".time-is-up").style.display = "block"
  }
}, 1000)
