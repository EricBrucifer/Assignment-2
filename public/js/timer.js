const express = require('express');
const app = express();

app.get('/timer', (req, res) => {
  let timeLeft = 3600; // seconds left in the timer (1 hour)
  const timerId = setInterval(() => {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft - (hours * 3600)) / 60);
    const seconds = timeLeft % 60;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      res.write('Timer finished!');
      res.end();
    } else {
      res.write(`Time left: ${hours}h ${minutes}m ${seconds}s\n`);
      timeLeft--;
    }
  }, 1000);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

