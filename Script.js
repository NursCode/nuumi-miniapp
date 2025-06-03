function spinWheel() {
  const attempts = Math.floor(Math.random() * 5) + 1;
  document.getElementById('result').innerHTML = `🎉 У тебя ${attempts} попыток!<br>Иди в бот и используй их!`;
}
