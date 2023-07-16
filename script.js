const timerSpan = document.querySelector(".time span")

let days = 08,
  hours = 12,
  minutes = 44,
  seconds = 28

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

  timerSpan.textContent = `${day} : ${hour} : ${minute} : ${second}`

  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    timerSpan.textContent = "Finished"
    timerSpan.style.color = "#6c63ff"

    document.querySelector(".time ul").remove()

    clearInterval(countdown)
  }
}, 1000)
