class CountdownTimer {
  constructor() {
    this._daysCard = document.querySelector("#days");
    this._hoursCard = document.querySelector("#hours");
    this._minCard = document.querySelector("#min");
    this._secCard = document.querySelector("#sec");
  }

  _endDate = new Date("2025-11-04T00:00:00");
  _timer;

  _startTimer() {
    this._timer = setInterval(this._runCountdown.bind(this), 1000);
  }

  _runCountdown() {
    const today = new Date();
    const timeLeft = this._endDate - today;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const min = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if (days !== this._daysCard.value)
      this._daysCard.textContent = days < 10 ? "0" + days.toString() : days;
    if (hours !== this._hoursCard.value)
      this._hoursCard.textContent = hours < 10 ? "0" + hours.toString() : hours;
    if (min !== this._minCard.value)
      this._minCard.textContent = min < 10 ? "0" + min.toString() : min;
    if (sec !== this._secCard.value)
      this._secCard.textContent = sec < 10 ? "0" + sec.toString() : sec;

    //   console.log(typeof sec);

    if (timeLeft < 0) clearInterval(this._timer);
  }
}

export default new CountdownTimer();
